import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNav from "./component/MyNav";
import MyFooter from "./component/MyFooter";
import MyMain from "./component/MyMain";
import User from "./component/User";
import Settings from "./component/Settings";

function App() {
  return (
    <div className='App'>
      <header>
        <MyNav />
      </header>
      {/* <main>
        <MyMain />
      </main> */}
      {/* <User /> */}
      <Settings />
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
