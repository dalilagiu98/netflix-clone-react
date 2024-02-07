import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNav from "./component/MyNav";
import MyFooter from "./component/MyFooter";
import MyMain from "./component/MyMain";
import Welcome from "./component/Welcome";
import User from "./component/User";
import Settings from "./component/Settings";
import MovieDetails from "./component/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          <MyNav />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Welcome />}></Route>
            <Route path='/tv-shows' element={<MyMain />}></Route>
            <Route path='/user' element={<User />}></Route>
            <Route path='/settings' element={<Settings />}></Route>
            <Route path='/details/:movieId' element={<MovieDetails />}></Route>
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
