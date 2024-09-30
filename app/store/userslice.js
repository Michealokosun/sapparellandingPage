const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  user: null,
};

const userslice = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    singninuser: (state, action) => {
      state.user = action.payload;
    },
    signoutuser: (state, action) => {
      state.user = null;
    },
  },
});

export const { singninuser, signoutuser } = userslice.actions;

export default userslice.reducer;
