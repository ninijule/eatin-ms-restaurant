import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import createArticle from "../use_cases/article/createArticle";
import deleteArticle from "../use_cases/article/deleteArticle";
import getArticle from "../use_cases/article/getArticle";
import updateArticle from "../use_cases/article/updateArticle";
import getAllArticles from "../use_cases/article/getAllArticles";

import CreateArticleRequest from "../types/requests/article/createArticleRequest";
import DeleteArticleRequest from "../types/requests/article/deleteArticleRequest";
import GetArticleRequest from "../types/requests/article/getArticleRequest";
import UpdateArticleRequest from "../types/requests/article/updateArticleRequest";
import GetAllArticlesRequest from "../types/requests/article/getAllArticlesRequest";

export default {
  createArticle: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const request: CreateArticleRequest = {
        restaurantId: <string>req.query.restaurantId,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        profilePicture: req.body.profilePicture,
        category: req.body.category,
        profileId: JSON.parse(<string>req.query.user).id,
      };

      return res.status(200).json((await createArticle(request))._id);
    } catch (error) {
      next(error);
    }
  },

  getArticle: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const request: GetArticleRequest = {
        id: req.params.articleId,
      };

      return res.status(200).json(await getArticle(request));
    } catch (error) {
      next(error);
    }
  },

  updateArticle: async (req: Request, res: Response, next: NextFunction) => {
    try {
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
        category: req.body.category,
        profileId: JSON.parse(<string>req.headers.user).id,
      };

      await updateArticle(request);
      return res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  },

  deleteArticle: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const request: DeleteArticleRequest = {
        id: req.params.articleId,
        profileId: JSON.parse(<string>req.headers.user).id,
      };

      await deleteArticle(request);
      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },

  getAllArticles: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const request: GetAllArticlesRequest = {
        id: req.params.restaurantId,
      };

      return res.status(200).json(await getAllArticles(request));
    } catch (error) {
      next(error);
    }
  },
};
