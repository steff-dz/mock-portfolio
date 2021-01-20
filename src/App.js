import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SiteNavigation from './components/SiteNavigation';
//import Wrapper from './components/Wrapper';
import HomePage from './pages/HomePage';

function App() {
	return (
		<React.Fragment>
			<Router>
				<GlobalStyle />
				<SiteNavigation />
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
