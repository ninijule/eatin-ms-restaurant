import Restaurant from "../../repositories/restaurant";

export default async () => {
    try {
        return await Restaurant.find();
    } catch (error) {

    }
}