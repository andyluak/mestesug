export const login = async (email, password, seller) => {
	const URL = seller ? "/api/sellers/login" : "/api/users/login";
	let res = await fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});
	let data = await res.json();

	// Set cookie to store the bearer token
	document.cookie = `bearer=${data.token}; path=/`;

	return data;
};
