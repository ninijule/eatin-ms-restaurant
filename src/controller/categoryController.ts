import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

import createCategory from "../use_cases/category/createCategory";
import updateCategory from "../use_cases/category/updateCategory";
import deleteCategory from "../use_cases/category/deleteCategory";
import getCategory from "../use_cases/category/getCategory";

import CreateCategoryRequest from "../types/requests/category/createCategoryRequest";
import UpdateCategoryRequest from "../types/requests/category/updateCategoryRequest";
import DeleteCategoryRequest from "../types/requests/category/deleteCategoryRequest";
import GetCategoryRequest from "../types/requests/category/getCategoryRequest";

export default {
  createCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const request: CreateCategoryRequest = {
        name: req.body.name,
        restaurantId: <string>req.params.restaurantId,
        profileId: JSON.parse(<string>req.headers.user).id,
      };

      return res.status(200).json((await createCategory(request))._id);
    } catch (error) {
      next(error);
    }
  },
  updateCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const request: UpdateCategoryRequest = {
        id: req.params.categoryId,
        name: req.body.name,
        profileId: JSON.parse(<string>req.headers.user).id,
      };

      await updateCategory(request);
      return res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  },
  deleteCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const request: DeleteCategoryRequest = {
        id: req.params.categoryId,
        profileId: JSON.parse(<string>req.headers.user).id,
      };

      await deleteCategory(request);
      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },
  getCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const request: GetCategoryRequest = {
        id: req.params.categoryId,
        restaurantId: req.params.restaurantId,
        profileId: JSON.parse(<string>req.headers.user).id,
      };

      return res.status(200).json(await getCategory(request));
    } catch (error) {
      next(error);
    }
  },
};
