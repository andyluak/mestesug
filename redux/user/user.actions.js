import { UserActionTypes } from "./user.types";
import { login } from "services/user.service";

export const setCurrentUser = (email, password) => {
	return async (dispatch) => {
		try {
			const { user } = await login(email, password);
			dispatch({
				type: UserActionTypes.SET_CURRENT_USER,
				payload: user,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
