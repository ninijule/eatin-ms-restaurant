import { validationResult } from "express-validator";
import createRestaurant from "../use_cases/restaurant/createRestaurant";
import deleteRestaurant from "../use_cases/restaurant/deleteRestaurant";
import updateRestaurant from "../use_cases/restaurant/updateRestaurant";
import getRestaurant from "../use_cases/restaurant/getRestaurant";
import getAllRestaurant from "../use_cases/restaurant/getAllRestaurant";

import CreateRestaurantRequest from "../types/requests/restaurant/createRestaurantRequest";
import UpdateRestaurantRequest from "../types/requests/restaurant/updateRestaurantRequest";
import DeleteRestaurantRequest from "../types/requests/restaurant/deleteRestaurantRequest";
import GetRestaurantRequest from "../types/requests/restaurant/getRestaurantRequest";


export default {
  createRestaurant: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const request: CreateRestaurantRequest = {
      name: req.body.name,
      description: req.body.description,
      profilePicture: req.body.profilePicture

    };

    return res.status(200).json((await createRestaurant(request))._id);
  },

  deleteRestaurant: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const request: DeleteRestaurantRequest = {
      id: req.params.id
    }

    if (await deleteRestaurant(request)) {
      return res.sendStatus(204);
    }
    return res.sendStatus(404);

  },

  getRestaurant: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const request: GetRestaurantRequest = {
      id: req.params.id
    };

    const result = await getRestaurant(request);
    if (result) {
      return res.status(200).json(result);
    }
    return res.sendStatus(404);

  },
  getAllRestaurant: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return res.status(200).json(await getAllRestaurant());

  },
  updateRestaurant: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const request: UpdateRestaurantRequest = {
      id: req.params.id,
      name: req.body.name,
      description: req.body.description,
      profilePicture: req.body.profilePicture
    }

    if (await updateRestaurant(request)) {
      return res.sendStatus(200);
    }
    return res.sendStatus(404);
  }

};
