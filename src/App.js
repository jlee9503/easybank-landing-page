import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./components/Pages/Home/Home";
import GlobalStyle from "./globalStyle";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
