export const login = async (email, password) => {
	let res = await fetch("/api/users/login", {
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
