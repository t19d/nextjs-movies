export function getRouteWithSearchParams(route: string, searchParams: Record<string, string | string[] | undefined>) {
	const params: Record<string, string> = {};
	for (const [key, value] of Object.entries(searchParams)) {
		if (value !== undefined) params[key] = `${value}`;
	}
	const urlSearchParams = new URLSearchParams(params);
	return `${route}?${urlSearchParams.toString()}`;
}
