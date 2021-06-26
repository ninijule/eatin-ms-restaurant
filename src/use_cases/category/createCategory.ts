import Category from "../../repositories/category";
import CreateCategoryRequest from "../../types/requests/category/createCategoryRequest";

export default async (request: CreateCategoryRequest) => {
    return await Category.create(request);
};