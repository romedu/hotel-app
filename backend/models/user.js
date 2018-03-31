const mongoose   = require("mongoose"),
      bcrypt     = require("bcryptjs"),
      userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        staff: {
            type: Boolean,
            default: false
        },
        profileImage: {
          type: String,
          default: "https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png"
        }
      });
      
userSchema.pre("save", async function(next){
   try{
      if(!this.isModified("password")){
        return next();
     }
     let hashedPassword = await bcrypt.hash(this.password, 10);
     this.password = hashedPassword;
     return next();
   }
   catch(error) {
     return next(error);
   }
});

userSchema.methods.comparePassword = async function(candidatePassword, next){
   try {
     let isMatch = await bcrypt.compare(candidatePassword, this.password);
     return isMatch;
   }
  catch(error){
     return next(error);
   }
};

module.exports = mongoose.model("User", userSchema);