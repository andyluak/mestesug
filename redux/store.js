import { createStore, applyMiddleware } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "redux/rootReducer";

const storage = require("redux-persist/lib/storage").default;

const logger = createLogger();

let middlewares = [thunkMiddleware, logger];

applyMiddleware(...middlewares);

const makeStore = ({ isServer }) => {
	if (isServer) {
		return createStore(rootReducer, applyMiddleware(...middlewares));
	} else {
		const { persistStore, persistReducer } = require("redux-persist");
		const persistConfig = {
			key: "root",
			storage,
			whitelist: ["user"],
		};

		const persistedReducer = persistReducer(persistConfig, rootReducer);

		const store = createStore(
			persistedReducer,
			applyMiddleware(...middlewares)
		);
		store.__persistor = persistStore(store);

		return store;
	}
};

export const wrapper = createWrapper(makeStore, { debug: true });
