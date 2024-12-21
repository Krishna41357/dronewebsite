const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const index = express();

index.use(cors());
index.use(bodyParser.json());


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));


const contactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});


const Contact = mongoose.model("Contact", contactSchema);


index.post("/api/contact", async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    console.log(req.body);

    const newContact = new Contact({ email, subject, message });
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
});


const PORT = process.env.PORT || 5000;
index.listen(PORT, () => console.log(`Server running on port ${PORT}`));
