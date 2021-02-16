import React from 'react';
import styled from 'styled-components';
import ChicagoClip from '../../other/ChicagoGuide.jpg';
import ShopClip from '../../other/SkateShop.jpg';
import TaskAppClip from '../../other/TaskApp.jpg';

const ProjectsPage = () => {
	return (
		<MainBase>
			<section>
				<div>
					<article className="text-container">
						<ul>
							<li>React</li>
							<li>Cosmic JS</li>
							<li>Mapbox GL JS</li>
							<li>Plotly</li>
							<li>Styled Components</li>
						</ul>
						<div className="descrip-text">
							Using Mapbox GL JS, I made a local's guide to Chicago in React with venues generated from
							Cosmic JS. This app also features the most recent Covid-19 Data displayed in a graph from
							Plotly.
						</div>
					</article>
					<article>
						<a href="https://github.com/steff-dz/tema5" target="_blank">
							<img src={ChicagoClip} />
						</a>
					</article>
				</div>

				<div className="right-container">
					<article>
						<a href="https://github.com/steff-dz/task-app" target="_blank">
							<img src={TaskAppClip} />
						</a>
					</article>
					<article className="text-container grey-box">
						<ul>
							<li>React</li>
							<li>SASS</li>
						</ul>
						<div className="descrip-text">
							This is my take on the classic React "to do" app. It features a filtering option, delete
							funcionality, and saving to local storage by a custom hook. It also has a random quote
							generator from a free quote API, and a dynamic calender made from scratch.
						</div>
					</article>
				</div>
				<div>
					<article className="white-box">
						<a href="https://github.com/steff-dz/skate-shop" target="_blank">
							<img src={ShopClip} />
						</a>
					</article>
					<article className="text-container grey-box">
						<ul>
							<li>HTML5</li>
							<li>CSS</li>
							<li>JavaScript</li>
						</ul>
						<div className="descrip-text">
							This is a webshop selling rollerskates and helmets that was my second coding project. It
							includes a functional shopping cart, a dynamically rendered product page, and use of local
							storage.
						</div>
					</article>
				</div>
				<div className="right-container">
					<article className="placeholder-container" />
					<article className="placeholder-container" />
				</div>
			</section>
		</MainBase>
	);
};

const MainBase = styled.main`
	margin-top: 2.5rem;
	margin-left: 5rem;
	margin-right: 5rem;
	height: 100vh;
	@media only screen and (max-width: 1130px) {
		margin-left: 1rem;
		margin-right: 1rem;
	}

	section {
		display: grid;
		gap: 2.5rem;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;

		@media only screen and (max-width: 1070px) {
			display: flex;
			flex-direction: column;
		}

		div {
			display: flex;
			justify-content: flex-end;
			gap: 1rem;

			@media only screen and (max-width: 1070px) {
				justify-content: center;
			}

			article {
				height: 250px;
				width: 250px;
				background-color: #ffdf6c;

				img {
					height: 100%;
					width: 100%;
					object-fit: cover;
					object-position: 50% 100%;
					filter: grayscale(100%);

					&:hover {
						filter: grayscale(0%);
					}
				}
			}
		}

		.right-container {
			justify-content: flex-start;

			@media only screen and (max-width: 1070px) {
				justify-content: center;
			}
		}

		.grey-box {
			background-color: #c4c4c4;
		}

		.white-box {
			background-color: white;
			border: 1px solid grey;
		}

		.placeholder-container {
			background-color: rgba(0, 0, 0, 0.164);
		}

		.text-container {
			font-size: 1.4rem;
			overflow-y: scroll;

			ul {
				padding: 1rem 3rem;
			}

			.descrip-text {
				padding: 0rem 2rem;
			}
		}
	}
`;

export default ProjectsPage;
