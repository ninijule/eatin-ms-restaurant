import { validationResult } from "express-validator";
import { Request, Response } from "express";
import createArticle from "../use_cases/article/createArticle";
import deleteArticle from "../use_cases/article/deleteArticle";
import getArticle from "../use_cases/article/getArticle";
import updateArticle from "../use_cases/article/updateArticle";
import getAllArticle from "../use_cases/article/getAllArticle";

import CreateArticleRequest from "../types/requests/article/createArticleRequest";
import DeleteArticleRequest from "../types/requests/article/deleteArticleRequest";
import GetArticleRequest from "../types/requests/article/getArticleRequest";
import UpdateArticleRequest from "../types/requests/article/updateArticleRequest";
import GetAllArticleRequest from "../types/requests/article/getAllArticleRequest";

export default {
    createArticle: async (req: Request, res: Response) => {
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

    getArticle: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const request: GetArticleRequest = {
            id: req.params.articleId,
        }

        return res.status(200).json(await getArticle(request));
    },

    updateArticle: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const request: UpdateArticleRequest = {
            id: req.params.articleId,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            profilePicture: req.body.profilePicture,
            category: req.body.category
        };

        await updateArticle(request);
        return res.sendStatus(200);
    },

    deleteArticle: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const request: DeleteArticleRequest = {
            id: req.params.articleId,
            profileId: JSON.parse(<string>req.headers.user).id
        };

        await deleteArticle(request);
        return res.sendStatus(204);
    },

    getAllArticle: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const request: GetAllArticleRequest = {
            id: req.params.restaurantId,
        };

        return res.status(200).json(await getAllArticle(request));

    }



};