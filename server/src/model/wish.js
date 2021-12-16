import mongoose from "mongoose";

const wishSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    comment : [{
        username: {type: String, required: true},
        content: {type: String, required: true}
    }]
});

const Wish = mongoose.model("Wish", wishSchema);

export default Wish;