require("dotenv").config();
const express            = require("express"),
      app                = express(),
      bodyParser         = require("body-parser"),
      expressSanitizer   = require('express-sanitizer'),
      cors               = require("cors"),
      PORT               = process.env,
      authRoutes         = require("./routes/auth"),
      categoryRoutes     = require("./routes/category"),
      productRoutes      = require("./routes/product"),
      restaurantRoutes   = require("./routes/restaurant"),
      dishRoutes         = require("./routes/dish"),
      {errorHandler}     = require("./helpers/error"),
      {sanitizeBody}     = require("./middleware");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());

app.use("/api/auth", sanitizeBody, authRoutes);
app.use("/api/category", sanitizeBody, categoryRoutes);
app.use("/api/category/:id/product", sanitizeBody, productRoutes);
app.use("/api/restaurant", sanitizeBody, restaurantRoutes);
app.use("/api/restaurant/:id/dish", sanitizeBody, dishRoutes);

app.use(function(req, res, next){
   const err = new Error("Not Found");
   err.status = 404;
   next(err);
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Hotel's Up, Port:${PORT}`));