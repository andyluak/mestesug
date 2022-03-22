export const getCookie = (name) => {
	if (typeof window == "undefined") return;
	const cookies = document.cookie.split(";");
	let returnValue = false;
	cookies.map((cookie) => {
		// Split the cookie into a key and a value
		const [key, value] = cookie.split("=");
		// If the key is equal to the name passed
		if (key === name) {
			returnValue = JSON.parse(value);
		}
	});

	return returnValue;
};
