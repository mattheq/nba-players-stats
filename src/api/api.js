export async function getPlayers(searchQuery) {
    try {
        const response = await fetch(`https://www.balldontlie.io/api/v1/players?per_page=5&search=${searchQuery}`);
        const json = await response.json();
        return json.data;
    } catch (error) {
        throw new Error(error);
    }
}