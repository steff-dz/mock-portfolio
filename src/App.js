import React, { useEffect, useState } from 'react';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SiteNavigation from './components/SiteNavigation';
//import Wrapper from './components/Wrapper';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
	return (
		<React.Fragment>
			<Router>
				<GlobalStyle />
				<SiteNavigation />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/projects" component={ProjectsPage} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
