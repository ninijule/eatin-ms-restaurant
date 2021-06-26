import mongoose from "../db/mongodb/index";

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    restaurantId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        maxlength: 25,
    },
    description: {
        type: String,
        required: true,
        default: null,
        maxlength: 255
    },
    price: {
        type: Number,
        required: true,
        default: null,
        maxlength: 25
    },
    profilePicture: {
        type: String,
        required: true,
        default: null
    },
    category: {
        type: Array,
        required: true,
        default: null,
    },

});

const Menu = mongoose.model("Menu", MenuSchema);

export default Menu;
