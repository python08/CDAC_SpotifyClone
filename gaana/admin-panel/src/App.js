

import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Album from './pages/Album';
import Artists from './pages/Artists';
import AddAlbum from './pages/AddAlbum';
import AddArtist from './pages/AddArtist';
import AddSongInAlbum from './pages/AddSong';

function App() {
  return (
    <div >
     <BrowserRouter>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Admin 
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/album">
                  Album
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addAlbum">
                 Add-Album
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/artists">
                  Artists
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/addArtist">
                  Add-Artist
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/addSongs">
                  Add-Song
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/mySignin">
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <Switch>
            <Route path="/album" component={Album} />
            <Route path="/addAlbum" component={AddAlbum} />
            <Route path="/artists" component={Artists} />
            <Route path="/addArtist" component={ AddArtist} />
            <Route path="/addSongs" component={ AddSongInAlbum} />
            
          </Switch>
          </div>
     </BrowserRouter>
    </div>
  );
}

export default App;

