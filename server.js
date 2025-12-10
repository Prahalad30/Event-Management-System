const express = require("express");
const app = express();
const {ServerConfig} = require('./config');
const cors =require("cors");
const mongoose = require('mongoose');
const apirouter = require('./routes')




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb+srv://subbuyadhati:Subbu14321@cluster0.efbuatz.mongodb.net/event_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use('/api',apirouter);
app.get('/', (req, res) =>{
  res.send("Welcome")
})





app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`);
});
