import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "../redux/reducers/auth/auth.reducer";
import artworkReducer from "./reducers/Artwork/artwork.reducer";
import exhibitionReducer from "./reducers/Exhibition/exhibition.reducer";
import galleryReducer from "./reducers/Gallery/gallery.reducer";
import cartReducer from "./reducers/cart/cart.reducer";
import filtersReducer from "./reducers/Filters/filters.reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    authReducer,
    artworkReducer,
    exhibitionReducer,
    galleryReducer,
    cartReducer,
    filtersReducer
  })
);
let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
let persistor = persistStore(store);
export default store;
export { persistor };
