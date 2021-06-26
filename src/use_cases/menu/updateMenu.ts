import Menu from "../../repositories/menu";
import UpdateMenuRequest from "../../types/requests/menu/updateMenuRequest";

export default async (request: UpdateMenuRequest) => {
    const menu = await Menu.findById(request.id);
    menu.restaurantId = request.restaurantId,
        menu.name = request.name,
        menu.description = request.description,
        menu.price = request.price,
        menu.profilePicture = request.profilePicture,
        menu.category = request.category
    menu.save();

}