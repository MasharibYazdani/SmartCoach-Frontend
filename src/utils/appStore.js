import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

// Create persist config
const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: "Masharib",
      onError: function (error) {
        console.error("Encrytpion erro " + error.message);
      },
    }),
  ],
};

// Combine reducers (in case you add more later)
const rootReducer = combineReducers({
  user: userReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer
const appStore = configureStore({
  reducer: persistedReducer,
});

// Export both store & persistor
export const persistor = persistStore(appStore);
export default appStore;
