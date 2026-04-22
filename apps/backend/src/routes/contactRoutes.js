const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const sendEmail=require('../utils/sendEmail')


// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 🔹 Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 🔹 Save to database
    const newContact = new Contact({
      name,
      email,
      message,
    });
    //save to database
    await newContact.save();

    //send email
    await sendEmail({name,email,message});
    res.status(201).json({
      message: "Message sent successfully",
      
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
});
// GET /api/contact
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;