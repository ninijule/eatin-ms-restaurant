import Menu from "../../repositories/menu";
import GeMenuRequest from "../../types/requests/menu/getMenuRequest";

export default async (request: GeMenuRequest) => {
    return await Menu.findById(request.id);
}