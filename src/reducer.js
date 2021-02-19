export const initialState = {
    user: null,
    playing: false,
    playlists: [],
    item: null,
    token: null
}

export const reducer = (state, action) => {
    

    switch (action.type)
    {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            } 
        case 'GET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
    

}