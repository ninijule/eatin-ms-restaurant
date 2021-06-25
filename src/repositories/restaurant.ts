import mongoose from "../db/mongodb/index";

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 25,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        default: null,
        maxlength: 255
    },
    profilePicture: {
        type: String,
        required: true,
        default: null,
        maxlength: 25
    },

});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

export default Restaurant;
