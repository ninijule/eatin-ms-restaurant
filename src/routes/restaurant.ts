import express from "express";
import { body } from "express-validator";
import articleController from "../controller/articleController";
import categoryController from "../controller/categoryController";
import menuController from "../controller/menuController";
import restaurantController from "../controller/restaurantController";

const router = express.Router();

//Restaurant
router.post(
  "/",

  body("name").escape().isLength({ min: 1, max: 50 }),

  body("description").escape().isLength({ min: 1, max: 255 }),

  body("profilePicture").isLength({ min: 1, max: 255 }),

  restaurantController.createRestaurant
);

router.delete(
  "/:id",

  restaurantController.deleteRestaurant
);

router.get(
  "/",

  restaurantController.getAllRestaurant
);

router.get(
  "/:id",

  restaurantController.getRestaurant
);

router.put(
  "/:id",

  body("name").escape().isLength({ min: 1, max: 50 }),

  body("description").escape().isLength({ min: 1, max: 255 }),

  body("profilePicture").isLength({ min: 1, max: 255 }),

  restaurantController.updateRestaurant
);

//Article

router.post(
  "/:restaurantId/article",

  body("name").escape().isLength({ min: 1, max: 255 }),

  body("description").escape().isLength({ min: 1, max: 50 }),

  body("price").escape().isLength({ min: 1, max: 50 }),

  body("profilePicture").isLength({ min: 1, max: 255 }),

  body("category").escape().isLength({ min: 1, max: 50 }),

  articleController.createArticle
);

router.get(
  "/:restaurantId/article/:articleId",

  articleController.getArticle
);

router.get(
  "/:restaurantId/article/",

  articleController.getAllArticles
);

router.delete(
  "/:restaurantId/article/:articleId",

  articleController.deleteArticle
);

router.put(
  "/:restaurantId/article/:articleId",

  body("name").escape().isLength({ min: 1, max: 255 }),

  body("description").escape().isLength({ min: 1, max: 50 }),

  body("price").escape().isLength({ min: 1, max: 50 }),

  body("profilePicture").isLength({ min: 1, max: 255 }),

  body("category").escape().isLength({ min: 1, max: 50 }),

  articleController.updateArticle
);

//Menu
router.post(
  "/:restaurantId/menu",

  body("name").escape().isLength({ min: 1, max: 255 }),

  body("description").escape().isLength({ min: 1, max: 50 }),

  body("price").escape().isLength({ min: 1, max: 50 }),

  body("profilePicture").isLength({ min: 1, max: 255 }),

  menuController.createMenu
);

router.put(
  "/:restaurantId/menu/:menuId",

  body("name").escape().isLength({ min: 1, max: 255 }),

  body("description").escape().isLength({ min: 1, max: 50 }),

  body("price").escape().isLength({ min: 1, max: 50 }),

  body("profilePicture").isLength({ min: 1, max: 255 }),

  menuController.updateMenu
);

router.delete(
  "/:restaurantId/menu/:menuId",

  menuController.deleteMenu
);

router.get(
  "/:id/menu",

  menuController.getAllMenu
);

router.get(
  "/:restaurantId/menu/:menuId",

  menuController.getMenu
);

//Category
router.post(
  "/:restaurantId/category",

  body("name").escape().isLength({ min: 1, max: 255 }),

  categoryController.createCategory
);

router.put(
  "/:restaurantId/category/:categoryId",

  body("name").escape().isLength({ min: 1, max: 255 }),

  categoryController.updateCategory
);

router.get(
  "/:restaurantId/category/:categoryId",

  categoryController.getCategory
);

router.delete(
  "/:restaurantId/category/:categoryId",

  categoryController.deleteCategory
);

export default router;
