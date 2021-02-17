import React from 'react';
import styled from 'styled-components';
import Portrait from '../../images/Portrait.png';
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

				<img src={Portrait} />
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
			/* width: 50%; */
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
	}
`;

// const HomeMainBase = styled.main`
// 	background-color: lightgrey;
// 	height: 100vh;
// 	width: 100%;
// 	overflow-x: hidden;
// 	background-image: url(${BackgroundIndex});
// 	background-size: cover;
// 	background-position: center bottom;
// 	position: fixed;
// 	border: 1px solid blue;

// 	section {
// 		display: flex;
// 		flex-direction: row-reverse;
// 		height: 100%;
// 		overflow: hidden;
// 		padding: 0rem 1rem;
// 		width: 100%;
// 	}
// 	img {
// 		height: 600px;
// 		align-self: flex-end;
// 		margin-bottom: 3.8%;
// 		overflow: hidden;
// 	}

// 	article {
// 		height: fit-content;
// 		align-self: center;
// 		width: 50%;
// 		margin-top: 8rem;
// 		margin-right: 8%;
// 		margin-left: 3%;

// 		h1 {
// 			font-size: 4.5rem;
// 			font-weight: normal;
// 		}

// 		h1:nth-child(2) {
// 			font-size: 6rem;
// 			font-weight: bold;
// 			margin: 1rem 0rem;
// 		}

// 		p {
// 			font-size: 2.8rem;
// 		}
// 	}

// 	@media only screen and (max-width: 1280px) {
// 		img {
// 			margin-left: 3%;
// 			margin-bottom: 4%;
// 			height: 500px;
// 		}
// 		article {
// 			padding-right: 2rem;
// 			h1 {
// 				font-size: 3.5rem;
// 			}
// 			h1:nth-child(2) {
// 				font-size: 4rem;
// 			}

// 			p {
// 				font-size: 2.5rem;
// 			}
// 		}
// 	}

// 	@media only screen and (max-width: 900px) {
// 		min-height: 100vh;
// 		background-size: cover;
// 		background-repeat: no-repeat;
// 		background-position: center;
// 		section {
// 			flex-direction: column;
// 			width: 100vw;
// 			justify-content: space-between;
// 			padding: 0;
// 		}

// 		img {
// 			align-self: center;
// 			height: 500px;
// 		}

// 		article {
// 			width: 100%;
// 			margin: 0;
// 			margin-top: 3rem;
// 			padding: 0 2.5rem;
// 			position: relative;

// 			h1 {
// 				font-size: 3.5rem;
// 			}
// 			h1:nth-child(2) {
// 				font-size: 4.5rem;
// 			}

// 			p {
// 				display: none;
// 			}
// 		}
// 	}
// `;

export default HomePage;
