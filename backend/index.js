require("dotenv").config();
const express          = require("express"),
      app              = express(),
      bodyParser       = require("body-parser"),
      cors             = require("cors"),
      PORT             = 8081,
      authRoutes       = require("./routes/auth"),
      productRoutes    = require("./routes/product"),
      restaurantRoutes = require("./routes/restaurant"),
      dishRoutes       = require("./routes/dish"),
      errorHandler     = require("./helpers/error");
      
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/restaurant", restaurantRoutes);
app.use("/api/restaurant/:id/dish", dishRoutes);

app.use(function(req, res, next){
   let err = new Error("Not Found");
   err.status = 404;
   next(err);
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Hotel's Up, Port:${PORT}`));