import express from "express";
import { body } from "express-validator";
import restaurantController from "../controller/restaurantController";
//import menuController from "../controller/menuController";
//import articleController from "../controller/articleController";

const router = express.Router();

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




export default router;
