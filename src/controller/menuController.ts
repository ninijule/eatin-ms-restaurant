import { validationResult } from "express-validator";

import createMenu from "../use_cases/menu/createMenu";
import getAllMenu from "../use_cases/menu/getAllMenu";

import CreateMenuRequest from "../types/requests/menu/createMenuRequest";
import GetAllMenuRequest from "../types/requests/menu/getAllMenuRequest";

export default {
    createMenu: async (req: any, res: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const request: CreateMenuRequest = {
            restaurantId: req.body.restaurantId,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            profilePicture: req.body.profilePicture,
            category: req.body.category
        };

        return res.status(200).json((await createMenu(request))._id);
    },
    getAllMenu: async (req: any, res: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const request: GetAllMenuRequest = {
            id: req.params.id,
        }

        return res.status(200).json(await getAllMenu(request));
    }
};