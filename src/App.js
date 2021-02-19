import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getToken } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi()

function App() {


  const [{ token, user }, dispatch] = useDataLayerValue()
  useEffect(() => {
  
      const hash = getToken()
      window.location.hash = ""
      const _token = hash.access_token
      if (_token) {
        dispatch( {
          type: 'GET_TOKEN',
          token: _token
        })

        spotify.setAccessToken(_token)
        spotify.getMe().then(user => {
          dispatch({
            type: 'SET_USER',
            user: user
          })  
        })

        spotify.getUserPlaylists().then(playlists => 
          // console.log(playlists)
          dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
         )

        spotify.getPlaylist('37i9dQZF1E356BxtEJWPDq').then(response =>
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: response
          })
          )
      }
      
  }, [])

  

  return (
    <div className="App">
        {
          
          (token) ?
          <Player spotify={spotify} /> :
          <Login />
        }
        
    </div>
  );
}

export default App;
