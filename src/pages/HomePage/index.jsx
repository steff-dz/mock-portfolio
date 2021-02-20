import React from 'react';
import styled from 'styled-components';
import BackgroundIndex from '../../images/backgroundindex.png';

const HomePage = () => {
	return (
		<HomeMainBase>
			<InfoSection>
				<article>
					<h1>Junior</h1>
					<h1>Front-End Developer</h1>
					<p>
						I am a fresh developer based in Oslo, Norway. Learning, creating and teaching is what I do best.
						I have a passion for crafting efficient and interactive web applications, and solving puzzles is
						my jam.
					</p>
				</article>

				<img src="https://i.imgur.com/iKIN7hS.png" />
			</InfoSection>
		</HomeMainBase>
	);
};

const HomeMainBase = styled.main`
	background-image: url(${BackgroundIndex});
	background-size: cover;
	background-position: center;
	height: 100vh;
	width: 100vw;
	position: fixed;
	@media only screen and (max-width: 950px) {
	}
`;

const InfoSection = styled.section`
	display: flex;
	flex-direction: row-reverse;
	height: 100%;
	gap: 9.5rem;
	@media only screen and (max-width: 1050px) {
		gap: 7rem;
	}

	@media only screen and (max-width: 950px) {
		flex-direction: column;
		gap: 2rem;
	}

	article {
		width: 50%;
		height: fit-content;
		align-self: center;
		color: #3f3f3f;
		margin-right: 10rem;
		margin-top: 12rem;

		h1 {
			font-size: 4.5rem;
			font-weight: normal;
		}

		h1:nth-child(2) {
			font-size: 6rem;
		}

		p {
			font-size: 2.8rem;
			padding: 2rem 0rem;
			line-height: 3.5rem;
			@media only screen and (max-width: 950px) {
				display: none;
			}
		}

		@media only screen and (max-width: 1050px) {
			width: 70%;
			margin-top: 0rem;
		}

		@media only screen and (max-width: 950px) {
			width: 80vw;
			height: 20rem;
			margin: 0;
			margin-top: 2rem;
			align-self: flex-start;
			margin-left: 5rem;
			h1 {
				font-size: 3.5rem;
			}

			h1:nth-child(2) {
				font-size: 5rem;
			}
		}

		@media only screen and (max-width: 280px) {
			width: 90%;
			margin-left: 0.5rem;
			height: fit-content;
			
			
		}
	}

	img {
		max-width: 425px;
		margin-bottom: 3%;
		align-self: flex-end;

		@media only screen and (max-width: 1050px) {
			margin-left: 5%;
			min-width: 400px;
		}

		@media only screen and (max-width: 950px) {
			min-width: 0;
			height: 525px;
			margin: 0;
			align-self: flex-start;
		}

		@media only screen and (max-width: 280px) {
			height: 400px;
	}
`;

export default HomePage;
