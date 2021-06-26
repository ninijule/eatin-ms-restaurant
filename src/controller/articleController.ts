import { validationResult } from "express-validator";
import createArticle from "../use_cases/article/createArticle";
import deleteArticle from "../use_cases/article/deleteArticle";
import getArticle from "../use_cases/article/getArticle";

import CreateArticleRequest from "../types/requests/article/createArticleRequest";
import DeleteArticleRequest from "../types/requests/article/deleteArticleRequest";
import GetArticleRequest from "../types/requests/article/getArticleRequest";

export default {
    createArticle: async (req: any, res: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const request: CreateArticleRequest = {
            restaurantId: req.body.restaurantId,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            profilePicture: req.body.profilePicture,
            category: req.body.category
        };

        return res.status(200).json((await createArticle(request))._id);
    },

    getArticle: async (req: any, res: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const request: GetArticleRequest = {
            id: req.params.articleId,
        }

        return res.status(200).json(await getArticle(request));
    },

    deleteArticle: async (req: any, res: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const request: DeleteArticleRequest = {
            id: req.params.articleId,
        };

        await deleteArticle(request);
        return res.sendStatus(204);
    },



};