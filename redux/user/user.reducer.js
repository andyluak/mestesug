import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
	isAuthenticated: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
	console.log(action.payload);
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload.user,
				isSeller: action.payload.seller,
				isAuthenticated: true,
			};
		case UserActionTypes.UPDATE_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		case UserActionTypes.LOGOUT_USER:
			return {
				...state,
				currentUser: null,
				isAuthenticated: false,
			};
		default:
			return state;
	}
};
