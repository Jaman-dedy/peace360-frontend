import { updatedObject } from "../../shared/utility";

const authLogout = (state, action) => {
  return updatedObject(state, { token: null, userId: null });
};

export default authLogout;
