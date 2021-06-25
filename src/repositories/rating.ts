import mongoose from "../db/mongodb/index";

const Schema = mongoose.Schema;

const RatingSchema = new Schema({

});

const Rating = mongoose.model("Rating", RatingSchema);

export default Rating;