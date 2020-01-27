/**
 * Utility for extracting the id of a given entity from the swapi
 * @param {string} type
 * @param {string} url
 * @returns {string} entity id
 */
export function getIdFromUrl (type: string, url: string): string {
	return url.replace(`https://swapi.co/api/${type}/`, '').slice(0, -1);
}

/**
 * Retrieves item from localStorage
 * @param {String} itemKey
 * @returns {T} Generic
 */
export function getItemFromLocalStorage<T> (itemKey: string): T {
	return JSON.parse(window.localStorage.getItem(itemKey));
}
