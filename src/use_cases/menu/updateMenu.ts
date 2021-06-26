import Menu from "../../repositories/menu";
import Restaurant from "../../repositories/restaurant";
import NotAuthorizedError from "../../types/errors/notAuthorizedError";
import UpdateMenuRequest from "../../types/requests/menu/updateMenuRequest";

export default async (request: UpdateMenuRequest) => {

    const menu = await Menu.findById(request.id);
    const restaurant = await Restaurant.findById(menu.restaurantId);
    if (request.profileId != restaurant.profileId) {
        throw new NotAuthorizedError();
    }

    menu.restaurantId = request.restaurantId,
        menu.name = request.name,
        menu.description = request.description,
        menu.price = request.price,
        menu.profilePicture = request.profilePicture,
        menu.category = request.category
    menu.save();

}