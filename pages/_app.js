import "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { getCookie } from "helpers/getCookie";

function MyApp({ Component, pageProps }) {
	const [isLoggedIn, setIsLoggedIn] = useState(null);

	useEffect(() => {
		let cookie = getCookie("authCookie");

		if (cookie) {
			setIsLoggedIn(true);
		}
	}, []);
	return (
		<>
			<Header isLoggedIn={isLoggedIn} />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
