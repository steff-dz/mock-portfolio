import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SiteNavigation = () => {
	const navList = useRef();
	const burgerBar = useRef();
	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < 850) {
				navList.current.style.display = 'none';
				burgerBar.current.style.display = 'flex';
			} else if (window.innerWidth > 850) {
				navList.current.style.display = 'flex';
				burgerBar.current.style.display = 'none';
			}
		});
	}, []);

	function handleClick() {
		console.log('you clicked the burger menu!');
	}
	return (
		<NavBase>
			<span>Steff Dziadkowiec</span>
			<BurgerContainer onClick={() => handleClick()} ref={burgerBar}>
				<div />
				<div />
				<div />
			</BurgerContainer>
			<NavList ref={navList}>
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
			</NavList>
		</NavBase>
	);
};

const NavBase = styled.nav`
	border: 1px solid black;
	background-color: #202020;
	height: 10vh;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 5rem;
	padding-right: 10rem;
	overflow: hidden;

	span {
		font-size: 3.3rem;
		color: white;
	}

	@media only screen and (max-width: 850px) {
		padding-left: 1rem;
		padding-right: 1rem;
		span {
			font-size: 2.5rem;
		}
	}
`;

const BurgerContainer = styled.div`
	height: 75px;
	width: 75px;
	flex-direction: column;
	justify-content: space-evenly;
	padding: .5rem;
	display: none;
	div {
		width: 100%;
		height: 6px;
		background-color: #ffdf6c;
	}
`;

const NavList = styled.ul`
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
		padding: 0rem .5rem;
	

`;

export default SiteNavigation;
