import express from "express";
import mongoose from "mongoose";
import { PORT } from "./config.js";
import { Lead } from "./models/leadModel.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const mongoDBURL = process.env.mongoDBURL;

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("welcome");
});

// -------------------------------
// CREATE a Lead
// -------------------------------
app.post("/leads", async (req, res) => {
  try {
    if (!req.body.name || !req.body.email) {
      res.status(400).send({ message: "send required fields" });
    }

    const newLead = {
      name: req.body.name,
      email: req.body.email,
      company: req.body.company,
      budget: req.body.budget,
      status: req.body.status,
    };

    const lead = await Lead.create(newLead);
    res.status(201).send(lead);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// -------------------------------
// GET all leads
// -------------------------------
app.get("/leads", async (req, res) => {
  try {
    const leads = await Lead.find({});
    res.status(200).json({ count: leads.length, data: leads });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// -------------------------------
// GET lead by ID
// -------------------------------
app.get("/leads/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const lead = await Lead.findById(id);
    res.status(200).json(lead);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// -------------------------------
// UPDATE lead
// -------------------------------
app.put("/leads/:id", async (req, res) => {
  try {
    if (!req.body.name || !req.body.email) {
      res.status(400).send({ message: "send required fields" });
    }

    const { id } = req.params;
    const result = await Lead.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "lead not found" });
    }

    return res.status(200).send({ message: "lead updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// -------------------------------
// DELETE lead
// -------------------------------
app.delete("/leads/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Lead.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "lead not found" });
    }

    return res.status(200).send({ message: "lead deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to DB ");
    app.listen(8000, () => console.log(`server listening on port ${PORT}`));
  })
  .catch((error) => console.log(error));
