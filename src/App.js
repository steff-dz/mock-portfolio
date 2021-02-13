import React, { useEffect, useState } from 'react';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SiteNavigation from './components/SiteNavigation';
//import Wrapper from './components/Wrapper';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
	return (
		<React.Fragment>
			<Router>
				<GlobalStyle />
				<SiteNavigation />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about" component={AboutPage} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
