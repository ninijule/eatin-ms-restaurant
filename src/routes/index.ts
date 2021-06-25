import RouterConfig from "../types/utils/routerConfig";
import restaurantRouter from "./restaurant";

const restaurant: RouterConfig = {
  router: restaurantRouter,
  path: "/restaurant",
};

export default [restaurant];