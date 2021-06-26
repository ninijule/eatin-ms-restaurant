import { validationResult } from "express-validator";
import { Request, Response } from "express";

import createCategory from "../use_cases/category/createCategory";

import CreateCategoryRequest from "../types/requests/category/createCategoryRequest";

export default {
    createCategory: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const request: CreateCategoryRequest = {
            name: req.body.name,
            restaurantId: req.body.restaurantId,
            profileId: JSON.parse(<string>req.headers.user).id
        };

        return res.status(200).json((await createCategory(request))._id);
    }

};