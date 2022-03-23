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

export const updateCurrentUser = (id) => {
	return async (dispatch) => {
		try {
			const bearer = document.cookie.split(";")[0].split("=")[1];
			const res = await fetch(`/api/users/${id}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${bearer}`,
				},
			});
			const user = await res.json();
			dispatch({
				type: UserActionTypes.UPDATE_CURRENT_USER,
				payload: user,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
