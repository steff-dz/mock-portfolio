import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SiteNavigation = () => {
	// const burgerMenu = useRef();

	// function handleOpen() {
	// 	burgerMenu.current.style.right = 0;
	// }

	// function handleClose() {
	// 	burgerMenu.current.style.right = `-400vw`;
	// }

	return (
		<NavBase>
			<nav>
				<span>Steff Dziadkowiec</span>
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

		span {
			font-size: 4rem;
			padding-left: 3rem;

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
`;

const BurgerContainer = styled.div``;
const MenuOverlayBase = styled.div``;
const MenuListBase = styled.ul``;

// const NavBase = styled.nav`
// 	border: 1px solid black;
// 	background-color: #202020;
// 	height: 10vh;
// 	width: 100vw;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	padding-left: 5rem;
// 	overflow: hidden;

// 	span {
// 		font-size: 3.3rem;
// 		color: white;
// 	}

// 	@media only screen and (max-width: 850px) {
// 		padding-left: 1rem;
// 		span {
// 			font-size: 2.5rem;
// 		}
// 	}
// `;

// const BurgerContainer = styled.div`
// 	height: 75px;
// 	width: 75px;
// 	flex-direction: column;
// 	justify-content: space-evenly;
// 	padding: .5rem;
// 	margin-right: 2rem;
// 	display: none;
// 	cursor: pointer;
// 	div {
// 		width: 100%;
// 		height: 6px;
// 		background-color: #ffdf6c;
// 	}

// 	@media only screen and (max-width: 850px) {
// 		display: flex;
// 	}
// `;

// const MenuOverlayBase = styled.div`
// 	width: 60%;
// 	height: 100vh;
// 	background-color: #202020;
// 	position: absolute;
// 	z-index: 10;
// 	right: -400vw;

// 	.fa-times {
// 		font-size: 4rem;
// 		color: #ffdf6c;
// 		padding: 0 2rem;
// 		cursor: pointer;
// 	}

// 	@media only screen and (min-width: 850px) {
// 		display: none;
// 	}
// `;

// const MenuListBase = styled.ul`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	list-style: none;
// 	gap: 2rem;

// 	.menu-item {
// 		color: #ffdf6c;
// 		font-size: 2.5rem;
// 		text-decoration: none;
// 	}
// `;

// const NavListBase = styled.ul`
// 	display: flex;
// 	height: 100%;
// 	width: 30vw;
// 	align-items: center;
// 	gap: 1rem;
// 	list-style: none;
// 	margin: 0;
// 	margin-right: 5%;
// 	padding: 0;

// 	.nav-item {
// 		text-decoration: none;
// 		color: white;
// 		font-size: 3rem;
// 		padding: 0rem .5rem;

// 		&:hover {
// 			color: #ffdf6c;
// 		}
// 		&:active {
// 			color: #ffdf6c;
// 		}
// 	}

// 	@media only screen and (max-width: 850px) {
// 		display: none;
// 	}
// `;

export default SiteNavigation;

/* <MenuOverlayBase ref={burgerMenu}>
<i onClick={() => handleClose()} className="fas fa-times" />
<MenuListBase>
	<NavLink className="menu-item" to="/">
		<li>home</li>
	</NavLink>
	<NavLink className="menu-item" to="/about">
		<li>about</li>
	</NavLink>
	<NavLink className="menu-item" to="/projects">
		<li>projects</li>
	</NavLink>
</MenuListBase>
</MenuOverlayBase> */

/* <BurgerContainer onClick={() => handleOpen()}>
<div />
<div />
<div />
</BurgerContainer> */
