import { validationResult } from "express-validator";

import createMenu from "../use_cases/menu/createMenu";
import getAllMenu from "../use_cases/menu/getAllMenu";
import getMenu from "../use_cases/menu/getMenu";
import updateMenu from "../use_cases/menu/updateMenu";
import deleteMenu from "../use_cases/menu/deleteMenu";

import CreateMenuRequest from "../types/requests/menu/createMenuRequest";
import GetAllMenuRequest from "../types/requests/menu/getAllMenuRequest";
import GetMenuRequest from "../types/requests/menu/getMenuRequest";
import UpdateMenuRequest from "../types/requests/menu/updateMenuRequest";
import DeleteMenuRequest from "../types/requests/menu/deleteMenuRequest";

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
    getMenu: async (req: any, res: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const request: GetMenuRequest = {
            id: req.params.menuId,
        }

        return res.status(200).json(await getMenu(request));
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
    },
    updateMenu: async (req: any, res: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const request: UpdateMenuRequest = {
            id: req.params.menuId,
            restaurantId: req.body.restaurantId,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            profilePicture: req.body.profilePicture,
            category: req.body.category
        };

        await updateMenu(request);
        return res.sendStatus(200);
    },
    deleteMenu: async (req: any, res: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const request: DeleteMenuRequest = {
            id: req.params.menuId,
        };

        await deleteMenu(request);
        return res.sendStatus(204);

    }
};