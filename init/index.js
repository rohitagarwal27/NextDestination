// if(process.env.NODE_ENV  != "production"){
//   require('dotenv').config();
//   }
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
require('dotenv').config();

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
// const dburl = process.env.ATLASDB_URL;
// console.log('Environment:', process.env.NODE_ENV);
// console.log('ATLASDB_URL:', process.env.ATLASDB_URL);


// console.log('Database URL:', process.env.ATLASDB_URL); // Add this line

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb+srv://rohitagarwalbdk:8Ypvw7hO386un2Nw@cluster0.odxihw9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}
// async function main() {
//   let connected = false;
//   while (!connected) {
//     try {
//       await mongoose.connect("mongodb+srv://rohitagarwalbdk:8Ypvw7hO386un2Nw@cluster0.odxihw9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         serverSelectionTimeoutMS: 30000,
//       });
//       connected = true;
//       console.log("Connected to DB");
//     } catch (err) {
//       console.error("Failed to connect to DB, retrying in 5 seconds...", err);
//       await new Promise(resolve => setTimeout(resolve, 5000));
//     }
//   }
// }

const initDB = async () => {
   await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "653c82eead170c5f7fab0177",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();

 