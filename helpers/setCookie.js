export function setCookie(value) {
	document.cookie = `authCookie=${value}; max-age=3600`;
}
