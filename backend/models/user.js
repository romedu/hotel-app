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
        }
      });
      
userSchema.pre('save', function(next){
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, 10).then(function(hashedPassword) {
      user.password = hashedPassword;
      next();
  }, function(err){
    return next(err);
  });
});

userSchema.methods.comparePassword = function(candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) return next(err);
    next(null, isMatch);
  });
};

module.exports = mongoose.model("User", userSchema);