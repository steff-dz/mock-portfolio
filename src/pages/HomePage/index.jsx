import React from 'react';
import styled from 'styled-components';
import Portrait from '../../images/Portrait.png';
import BackgroundIndex from '../../images/backgroundindex.png';

const HomePage = () => {
	// function renderPage() {
	// 	return (

	// 	);
	// }

	return (
		<HomeMainBase>
			<section>
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
			</section>
		</HomeMainBase>
	);
};

const HomeMainBase = styled.main`
	background-color: lightgrey;
	/* height: 100vh; */
	height: 100vh;
	background-image: url(${BackgroundIndex});
	background-size: cover;
	background-position: center bottom;
	position: fixed;

	section {
		display: flex;
		flex-direction: row-reverse;
		height: 100%;
		overflow: hidden;
		padding: 0rem 1rem;
		width: 100%;
	}
	img {
		height: 600px;
		align-self: flex-end;
		margin-bottom: 3.8%;
	}

	article {
		height: fit-content;
		align-self: center;
		width: 50%;
		margin-top: 8rem;
		margin-right: 8%;
		margin-left: 3%;

		h1 {
			font-size: 4.5rem;
			font-weight: normal;
		}

		h1:nth-child(2) {
			font-size: 6rem;
			font-weight: bold;
			margin: 1rem 0rem;
		}

		p {
			font-size: 2.8rem;
		}
	}

	@media only screen and (max-width: 1280px) {
		img {
			margin-left: 3%;
			margin-bottom: 4%;
			height: 500px;
		}
		article {
			padding-right: 2rem;
			h1 {
				font-size: 3.5rem;
			}
			h1:nth-child(2) {
				font-size: 4rem;
			}

			p {
				font-size: 2.5rem;
			}
		}
	}

	@media only screen and (max-width: 900px) {
		section {
			flex-direction: column;
			width: 100vw;
			justify-content: space-between;
			padding: 0;
		}

		img {
			height: 500px;
			align-self: center;
		}

		article {
			width: 100%;
			margin: 0;
			margin-top: 3rem;
			padding: 0 2.5rem;
			position: relative;

			h1 {
				font-size: 3.5rem;
			}
			h1:nth-child(2) {
				font-size: 4.5rem;
			}

			p {
				display: none;
			}
		}
	}
`;

export default HomePage;
