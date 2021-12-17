import mongoose from "mongoose";

const wishSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    descriptions: {
      type: String,
    },

    externalLink: {
      type: String,
    },
    commentCount: {
      type: Number,
    },
    comment: [
      {
        username: { type: String, required: true },
        content: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Wish = mongoose.model("Wish", wishSchema);

export default Wish;
