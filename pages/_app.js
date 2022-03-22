import "../styles/globals.css";

import { wrapper } from "redux/store";
import { useStore, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
	const store = useStore((state) => state);
	const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

	return typeof window !== undefined ? (
		<PersistGate loading={<div>Loading</div>} persistor={store.__persistor}>
			<Header isLoggedIn={isAuthenticated} />
			<Component {...pageProps} />
			<Footer />
		</PersistGate>
	) : (
		<PersistGate persistor={store}>
			<Header isLoggedIn={isAuthenticated} />
			<Component {...pageProps} />
			<Footer />
		</PersistGate>
	);
}

export default wrapper.withRedux(MyApp);
