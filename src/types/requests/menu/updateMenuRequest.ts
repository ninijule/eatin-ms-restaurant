export default interface UpdateMenuRequest {
  id: String;
  restaurantId: String;
  name: String;
  description: String;
  price: Number;
  profilePicture: String;
  categories: String[];
  profileId: String;
}
