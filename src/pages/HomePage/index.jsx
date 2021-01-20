import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';
import Ellipse from '../../other/Ellipse';
import styled from 'styled-components';
import Portrait from '../../other/Portrait.png';

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
				console.log(data);
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
		return <article dangerouslySetInnerHTML={{ __html: pageData.content }} />;
	}

	return (
		<MainBase>
			{pageData === null ? renderSkeleton() : renderPage()}
			<Ellipse id="ellipse" />
			<img src={Portrait} />
		</MainBase>
	);
};

const MainBase = styled.main`
	position: relative;
	overflow: hidden;

	img {
		width: 525px;
		position: absolute;
		left: 5%;
		top: 5%;
	}

	#ellipse {
		border: 1px solid black;
	}

	article {
		width: 50%;
		z-index: 10;
		position: absolute;
		top: 35%;
		left: 40%;

		h1 {
			font-size: 3.5rem;
			margin: 0;
			padding: 0;
			font-weight: normal;
		}

		h1:nth-child(2) {
			font-size: 8rem;
			font-weight: normal;
		}

		p {
			font-size: 2.5rem;
			padding: 0;
			margin: 0;
		}
	}
`;

export default HomePage;

//<Ellipse id="ellipse" />

//{pageData === null ? renderSkeleton() : renderPage()}
