import { combineReducers } from "redux";
import carouselImageSlice from "./slices/carouselImagesSlice";

const rootReducer = combineReducers({
  carouselImages: carouselImageSlice,
});
export default rootReducer;