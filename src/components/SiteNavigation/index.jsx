import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SiteNavigation = () => {
	return (
		<NavBase>
			<nav>
				<NavLink id="logo" to="/">
					Steff Dziadkowiec
				</NavLink>
				<NavListBase>
					<NavLink className="nav-item" activeStyle={{ color: '#ffdf6c' }} exact to="/">
						<li>home</li>
					</NavLink>
					<NavLink className="nav-item" activeStyle={{ color: '#ffdf6c' }} exact to="/about">
						<li>about</li>
					</NavLink>
					<NavLink className="nav-item" activeStyle={{ color: '#ffdf6c' }} exact to="/projects">
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

		@media only screen and (max-width: 280px) {
			justify-items: center;
			border: 1px solid white;
		}

		#logo {
			text-decoration: none;
			font-size: 4rem;
			padding-left: 3rem;
			color: white;
			width: fit-content;
			@media only screen and (max-width: 850px) {
				font-size: 3rem;
			}

			@media only screen and (max-width: 680px) {
				font-size: 2.5rem;
				padding-left: 1rem;
			}

			@media only screen and (max-width: 280px) {
				font-size: 2.3rem;
				padding-left: 0.5rem;
				width: 139px;
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
	width: fit-content;

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

	@media only screen and (max-width: 280px) {
		padding-right: 1.3rem;
		gap: 0rem;
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

		@media only screen and (max-width: 280px) {
			li {
				padding: 0rem 0.5rem;
			}
		}
	}

	.nav-item:nth-child(1) {
		@media only screen and (max-width: 930px) {
			display: none;
		}
	}
`;

export default SiteNavigation;
