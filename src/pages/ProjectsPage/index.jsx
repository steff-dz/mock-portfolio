import React from 'react';
import styled from 'styled-components';

const ProjectsPage = () => {
	return (
		<MainBase>
			<section>
				<div>
					<article>text</article>
					<article>pic container</article>
				</div>
				<div className="right-container">
					<article>textr</article>
					<article>pic container</article>
				</div>
				<div>
					<article>text</article>
					<article>pic container</article>
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
	background-color: lightgrey;
	margin-top: 2.5rem;
	margin-left: 5rem;
	margin-right: 5rem;
	height: 100vh;

	section {
		display: grid;
		gap: 2rem;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;

		div {
			display: flex;
			border: 1px solid green;
			justify-content: flex-end;
			gap: .5rem;
			background-color: green;

			article {
				border: 1px solid blue;
				height: 250px;
				width: 250px;
				background-color: lightblue;
			}
		}

		.right-container {
			justify-content: flex-start;
		}
	}
`;

export default ProjectsPage;
