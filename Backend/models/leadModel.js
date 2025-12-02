// import mongoose from "mongoose";

// const bookSchema = mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     author: { type: String, required: true },
//     publishedYear: { type: String, required: true },
//   },
//   { timestamps: true }
// );
// export const Book = mongoose.model("Book", bookSchema);
import mongoose from "mongoose";

const leadSchema = mongoose.Schema(
  {
    name: { type: String, required: true }, // Client name
    email: { type: String, required: true }, // Contact email
    company: { type: String }, // Company name
    budget: { type: Number }, // Lead budget
    status: {
      // Lead progress
      type: String,
      enum: ["New", "Contacted", "Qualified", "Closed"],
      default: "New",
    },
  },
  { timestamps: true }
);

export const Lead = mongoose.model("Lead", leadSchema);
