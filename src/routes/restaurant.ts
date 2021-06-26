import express from "express";
import { body } from "express-validator";
import articleController from "../controller/articleController";
import menuController from "../controller/menuController";
import restaurantController from "../controller/restaurantController";
//import articleController from "../controller/articleController";

const router = express.Router();


//Restaurant
router.post(
  "/",

  body("name").escape().isLength({ min: 1, max: 50 }),

  body("description").escape().isLength({ min: 0, max: 255 }),

  body("profilePicture").escape().isLength({ min: 1, max: 50 }),

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

  body("description").escape().isLength({ min: 0, max: 255 }),

  body("profilePicture").escape().isLength({ min: 1, max: 50 }),

  restaurantController.updateRestaurant
);

//Article

router.post(
  "/article",

  body("restaurantId").escape().isLength({ min: 1, max: 26 }),

  body("name").escape().isLength({ min: 0, max: 255 }),

  body("description").escape().isLength({ min: 1, max: 50 }),

  body("price").escape().isLength({ min: 1, max: 50 }),

  body("profilePicture").escape().isLength({ min: 1, max: 50 }),

  body("category").escape().isLength({ min: 1, max: 50 }),

  articleController.createArticle
);


router.delete(
  "/:restaurantId/article/:articleId",

  articleController.deleteArticle
);


//Menu
router.post(
  "/menu",

  body("restaurantId").escape().isLength({ min: 1, max: 26 }),

  body("name").escape().isLength({ min: 0, max: 255 }),

  body("description").escape().isLength({ min: 1, max: 50 }),

  body("price").escape().isLength({ min: 1, max: 50 }),

  body("profilePicture").escape().isLength({ min: 1, max: 50 }),

  body("category").escape().isLength({ min: 1, max: 50 }),

  menuController.createMenu
);


router.put(
  "/:restaurantId/menu/:menuId",

  body("restaurantId").escape().isLength({ min: 1, max: 26 }),

  body("name").escape().isLength({ min: 0, max: 255 }),

  body("description").escape().isLength({ min: 1, max: 50 }),

  body("price").escape().isLength({ min: 1, max: 50 }),

  body("profilePicture").escape().isLength({ min: 1, max: 50 }),

  body("category").escape().isLength({ min: 1, max: 50 }),

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





export default router;
