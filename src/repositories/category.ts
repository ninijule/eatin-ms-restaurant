import mongoose from "../db/mongodb/index";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    restaurantId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        maxlength: 25,
    }

});

const Category = mongoose.model("Category", CategorySchema);

export default Category;
