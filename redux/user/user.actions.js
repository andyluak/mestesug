import { UserActionTypes } from "./user.types";
import { login } from "services/user.service";

export const setCurrentUser = (email, password, seller = false) => {
	return async (dispatch) => {
		try {
			const { user } = await login(email, password, seller);
			dispatch({
				type: UserActionTypes.SET_CURRENT_USER,
				payload: { user, seller: seller },
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateCurrentUser = (updatedUser) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: UserActionTypes.UPDATE_CURRENT_USER,
				payload: updatedUser,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
