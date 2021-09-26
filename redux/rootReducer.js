import { combineReducers } from "redux";
import carouselImageSlice from "./slices/carouselImagesSlice";
import homeCategoriesSlice from "./slices/homeCategoriesSlice";
import homeContentSlice from "./slices/homeContentSlice";
import categoriesSlice from "./slices/categoriesSlice";
import itemListSlice from "./slices/itemListSlice";

const rootReducer = combineReducers({
  carouselImages: carouselImageSlice,
  homeCategories:homeCategoriesSlice,
  homeContent:homeContentSlice,
  categories:categoriesSlice,
  itemList:itemListSlice,
});
export default rootReducer;