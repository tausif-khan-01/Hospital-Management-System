const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/OPD", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => console.log("db Connected"))
  .catch((err) => console.log(err));
