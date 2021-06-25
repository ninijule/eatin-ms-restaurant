import Menu from "../../repositories/menu";
import GetAllMenuRequest from "../../types/requests/menu/getAllMenuRequest";


export default async (request: GetAllMenuRequest) => {
    return await Menu.findById(request.id);
}