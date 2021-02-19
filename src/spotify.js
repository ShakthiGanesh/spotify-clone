require('dotenv').config()
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";

const scopes = [
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state"
]

export const getToken = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, items) => {
            const parts = items.split("=")
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${process.env.CLIENT_ID}&scope=${scopes.join("%20")}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;