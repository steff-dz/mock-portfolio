import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Cosmic from 'cosmicjs';
//import Ellipse from '../../other/Ellipse';
import Portrait from '../../other/Portrait.png';
import BackgroundIndex from '../../other/backgroundindex.png';

const HomePage = () => {
	const [ pageData, setPageData ] = useState(null);

	useEffect(() => {
		const client = new Cosmic();
		const bucket = client.bucket({
			slug: process.env.BUCKET_SLUG,
			read_key: process.env.READ_KEY
		});

		bucket
			.getObject({
				slug: 'home-page',
				props: 'slug,title,content'
			})
			.then((data) => {
				setPageData(data.object);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	function renderSkeleton() {
		return <p>Loading page...</p>;
	}

	function renderPage() {
		return (
			<section>
				<article dangerouslySetInnerHTML={{ __html: pageData.content }} />
				<img src={Portrait} />
			</section>
		);
	}

	return <HomeMainBase>{pageData === null ? renderSkeleton() : renderPage()}</HomeMainBase>;
};

const HomeMainBase = styled.main`
	background-color: lightgrey;
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
			margin: 0;
			margin-top: 5%;
			width: 100%;
			text-align: center;
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
