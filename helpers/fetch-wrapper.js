import getConfig from 'next/config';
import { userService } from '../services';

const { publicRuntimeConfig } = getConfig();

export const fetchWrapper = {
	get,
	post,
	put,
	delete: del,
};

const get = async (url) => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader(url),
	};

	return await fetch(url, requestOptions);
};

const post = async (url, body) => {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', ...authHeader(url) },
		body: JSON.stringify(body),
	};

	return await fetch(url, requestOptions);
};

const put = async (url, body) => {
	const requestOptions = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json', ...authHeader(url) },
		body: JSON.stringify(body),
	};

	return await fetch(url, requestOptions);
};

const del = async (url) => {
	const requestOptions = {
		method: 'DELETE',
		headers: authHeader(url),
	};

	return await fetch(url, requestOptions);
};

const authHeader = (url) => {
	const user = userService.userValue;
	const isLoggedIn = user && user.token;
	const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
	if (!isLoggedIn && !isApiUrl) return {};
	return {
		Authorization: `Bearer ${user.token}`,
	};
};

const handleResponse = async (response) => {
	const { status } = response;
	const data = await response.json();
	if (status >= 200 && status < 300) {
		return data;
	}
	const error = new Error(data.message);
	error.status = status;
	error.data = data;
	throw error;
};
