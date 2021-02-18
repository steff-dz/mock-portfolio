import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SiteNavigation = () => {
	return (
		<NavBase>
			<nav>
				<NavLink id="logo" to="/">
					<span>Steff Dziadkowiec</span>
				</NavLink>
				<NavListBase>
					<NavLink className="nav-item" to="/">
						<li>home</li>
					</NavLink>
					<NavLink className="nav-item" to="/about">
						<li>about</li>
					</NavLink>
					<NavLink className="nav-item" to="/projects">
						<li>projects</li>
					</NavLink>
				</NavListBase>
			</nav>
		</NavBase>
	);
};

const NavBase = styled.header`
	background-color: #202020;
	color: white;
	height: 10vh;

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;

		#logo {
			text-decoration: none;
			font-size: 4rem;
			padding-left: 3rem;
			color: white;
			@media only screen and (max-width: 850px) {
				font-size: 3rem;
			}

			@media only screen and (max-width: 680px) {
				font-size: 2.5rem;
				padding-left: 1rem;
			}
		}
	}
`;

const NavListBase = styled.ul`
	display: flex;
	gap: 2rem;
	list-style: none;
	justify-content: flex-end;
	padding-right: 11rem;

	@media only screen and (max-width: 850px) {
		padding-right: 5rem;
	}

	@media only screen and (max-width: 680px) {
		padding-right: 2rem;
	}

	@media only screen and (max-width: 480px) {
		padding-right: 0.5rem;
	}

	@media only screen and (max-width: 680px) {
		gap: 1rem;
	}

	.nav-item {
		text-decoration: none;
		font-size: 3.5rem;
		color: white;
		@media only screen and (max-width: 850px) {
			font-size: 3rem;
		}

		@media only screen and (max-width: 680px) {
			font-size: 2.5rem;
		}

		@media only screen and (max-width: 480px) {
			font-size: 1.5rem;
		}
	}

	.nav-item:nth-child(1) {
		@media only screen and (max-width: 930px) {
			display: none;
		}
	}
`;

export default SiteNavigation;
