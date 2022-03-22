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
				currentUser: action.payload,
				isAuthenticated: true,
			};
		default:
			return state;
	}
};
