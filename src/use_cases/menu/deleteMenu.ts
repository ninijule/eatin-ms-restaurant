import Menu from "../../repositories/menu";
import DeleteMenuRequest from "../../types/requests/menu/deleteMenuRequest";

export default async (request: DeleteMenuRequest) => {
    await Menu.findByIdAndDelete(request.id);
}