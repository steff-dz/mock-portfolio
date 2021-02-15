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
							<li>styled Components</li>
						</ul>
						<div className="descrip-text">
							Using Mapbox GL JS, I made a local's guide to Chicago in React with venues generated from
							Cosmic JS. This app also features the most recent Covid-19 Data displayed in a graph from
							Plotly.
						</div>
					</article>
					<article>
						<img src={ChicagoClip} />
					</article>
				</div>
				<div className="right-container">
					<article>
						<img src={TaskAppClip} />
					</article>
					<article className="text-container">pic container</article>
				</div>
				<div>
					<article>
						<img src={ShopClip} />
					</article>
					<article className="text-container">pic container</article>
				</div>
				<div className="right-container">
					<article>textr</article>
					<article>pic container</article>
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

	section {
		display: grid;
		gap: 2.5rem;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;

		div {
			display: flex;
			/* border: 1px solid green; */
			justify-content: flex-end;
			gap: 1rem;

			article {
				/* border: 1px solid blue; */
				height: 250px;
				width: 250px;
				background-color: #ffdf6c;
				overflow: hidden;
				box-shadow: 1px 2px 10px 3px rgba(0, 0, 0, 0.89);

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
		}
	}
`;

export default ProjectsPage;
