import Menu from "../../repositories/menu";
import CreateMenuRequest from "../../types/requests/menu/createMenuRequest";

export default async (request: CreateMenuRequest) => {
    return await Menu.create(request);
};