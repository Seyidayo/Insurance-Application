export const fetchData = async (url, token) =>
	fetch(url, {
		method: "GET",
		headers: new Headers({
			Token: token
		})
	}).then(response => response.json);
