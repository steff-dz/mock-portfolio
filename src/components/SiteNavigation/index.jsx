import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SiteNavigation = () => {
	return (
		<NavBase>
			<span>Steff Dziadkowiec</span>
			<ul>
				<NavLink className="nav-item" to="/">
					<li>home</li>
				</NavLink>
				<NavLink className="nav-item" to="/about">
					<li>about</li>
				</NavLink>
				<NavLink className="nav-item" to="/projects">
					<li>projects</li>
				</NavLink>
				<NavLink className="nav-item" to="/contact">
					<li>contact</li>
				</NavLink>
				<NavLink className="nav-item" to="/blog">
					<li>blog</li>
				</NavLink>
			</ul>
		</NavBase>
	);
};

const NavBase = styled.nav`
	border: 1px solid black;
	background-color: #202020;
	height: 10vh;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 5rem;
	padding-right: 10rem;

	span {
		font-size: 3.3rem;
		color: white;
	}

	ul {
		display: flex;
		height: 100%;
		width: 30vw;
		justify-content: space-around;
		align-items: center;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-item {
		text-decoration: none;
		color: white;
		font-size: 2.5rem;
	}
`;

export default SiteNavigation;
