import Category from "../../repositories/category";
import GetCategoryRequest from "../../types/requests/category/getCategoryRequest";

export default async (request: GetCategoryRequest) => {
  return await Category.findById(request.id);
};
