import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import reducers from "../src/reducers";
import { configureStore } from "@reduxjs/toolkit";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Define middleware
const middleware = [thunk];

// Create the Redux store using configureStore
const store = configureStore({
  reducer: reducers,
  middleware
});

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
