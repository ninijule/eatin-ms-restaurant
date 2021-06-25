import mongoose from "../db/mongodb/index";

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
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
        type: mongoose.Types.Decimal128,
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
        type: Number,
        required: true,
        default: null,
    },
});

const Article = mongoose.model("Article", ArticleSchema);

export default Article;