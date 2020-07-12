const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/expdb', {useNewUrlParser: true})
.then(() => {
  console.log("connected");
})
.catch((err) => {
  console.log("Error while connecting to DB", err);
});

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

let expensesModel = mongoose.model("expenses" ,expensesSchema );

let docDocu = new expensesModel({text: "Khaled",amount: 100 ,createdAt:12/07/2020});


docDocu.save((err) => {
  if(err){
    console.log("err while save db" , err);
  }else{
    console.log("expensesDB saved");
  }
  });

 module.exports.expensesModel = expensesModel;



