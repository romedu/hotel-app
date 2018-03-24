const express        = require("express"),
      app            = express(),
      bodyParser     = require("body-parser"),
      cors           = require("cors"),
      PORT           = 8081,
      authRoutes     = require("./routes/auth");
      
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Hotel's Up, Port:${PORT}`));