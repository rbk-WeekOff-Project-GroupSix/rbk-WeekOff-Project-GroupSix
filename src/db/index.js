// calling mongoose
const mongoose = require("mongoose");

// connecting mongoose
mongoose.connect('mongodb://localhost/expdb3', {useNewUrlParser: true,useUnifiedTopology:true})
.then(() => {
  console.log("connected");
})
.catch((err) => {
  console.log("Error while connecting to DB", err);
});



// our Schema
let expensesSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add some text']
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// our model
let expensesModel = mongoose.model("expenses" ,expensesSchema );

//Document and save function
// let expDocu = new expensesModel({text: "Khaled",amount: 100 ,createdAt:12/07/2020});
// expDocu.save((err) => {
//   if(err){
//     console.log("err while save db" , err);
//   }else{
//     console.log("expensesDB saved");
//   }
//   });

module.exports.expensesModel = expensesModel;



