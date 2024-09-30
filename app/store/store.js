import userslice from "./userslice";

const { configureStore } = require("@reduxjs/toolkit");

export default configureStore({
  reducer: {
    user: userslice,
  },
});
