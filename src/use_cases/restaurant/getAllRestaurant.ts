import Restaurant from "../../repositories/restaurant";

export default async () => {
  return await Restaurant.find();
};
