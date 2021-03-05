import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Home, About } from "./components";
import GlobalStyle from "./globalStyle";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Home />
			<About />
			{/* <Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</Switch> */}
		</Router>
	);
}

export default App;
