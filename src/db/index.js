// calling mongoose
const mongoose = require("mongoose");

// connecting mongoose
mongoose
  .connect("mongodb://localhost/expdb3", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Error while connecting to DB", err);
  });

// our Schema
let expensesSchema = mongoose.Schema({
  expensesTypes: {
    type: String,
    required: [true, "Please add some expensesTypes"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a positive or negative number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: [true, "Please add some description"],
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

// our model
let expensesModel = mongoose.model("expenses", expensesSchema);

//Document and save function
// let expDocu = new expensesModel({expensesTypes: "Khaled",amount: 100 ,createdAt:12/07/2020});
// expDocu.save((err) => {
//   if(err){
//     console.log("err while save db" , err);
//   }else{
//     console.log("expensesDB saved");
//   }
//   });

module.exports.expensesModel = expensesModel;
