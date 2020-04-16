export async function getPlayers(searchQuery) {
    try {
        return await getData(`https://www.balldontlie.io/api/v1/players?per_page=5&search=${searchQuery}`);
    } catch (error) {
        throw error;
    }
}

export async function getSeasonAveragesStats(playerId, season='2019') {
    try {
        return await getData(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerId}&season=${season}`);
    } catch (error) {
        throw error;
    }
}

const getData = async(url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();
    return json.data;
};