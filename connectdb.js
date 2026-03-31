// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect("monogbdljdskfj");
//     console.log("connected successfully");
//   } catch (error) {
//     console.log("connection failed", error.message)
//     process.exit(1)
//   }
// };

// module.exports = connectDB


// const mongoose = require('mongoose')

// const connectDB = async () =>{
//     try{
//         await mongoose.connect("ldskfjkl")
//     }catch(error){
//         console.log("connection failed", error.message)
//         process.exit(1)
//     }
// }


const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        await mongoose.connect("dlsjfkj")
        console.log('connected successfully')
    }catch(err){
        console.log("failed", err.message)
        process.exit(1)
    }
}

module.exports = connectDB;