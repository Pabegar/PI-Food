import "./App.css";
import {Route} from "react-router";
import Landing from "./Components/Landing/Landing.js";
import Home from "./Components/Home/Home.js";
import Details from "./Components/Details/Details.js";
import CreateRecipe from "./Components/CreateRecipe/CreateRecipe.js";

function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/details/:id" component={Details} />
      <Route exact path="/createrecipe" component={CreateRecipe} />
    </div>
  );
}

export default App;
