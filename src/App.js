import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Books from "./pages/Books";
import Geography from "./pages/Geography";
import Mythology from "./pages/Mythology";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/art" component={Art} />
        <Route path="/books" component={Books} />
        <Route path="/geography" component={Geography} />
        <Route path="/mythology" components={Mythology} />
      </div>
    </BrowserRouter>
  );
}

export default App;
