import { legacy_createStore as createStore } from "redux";
import nameReducer from "./reducer";

const store = createStore(nameReducer);

export default store;