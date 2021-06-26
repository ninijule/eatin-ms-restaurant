import mongoose from "../db/mongodb/index";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 25,
    },
    restaurantId: {
        type: String,
        required: true,
    },

});

const Category = mongoose.model("Category", CategorySchema);

export default Category;
