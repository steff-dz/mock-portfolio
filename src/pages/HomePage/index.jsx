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
		return <p style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: pageData.content }} />;
	}

	return (
		<MainBase>
			<img src={Portrait} />
		</MainBase>
	);
};

const MainBase = styled.main`
	height: 100vh;
	position: relative;

	img {
		width: 545px;
		border: 1px solid black;
		position: absolute;
		left: 5%;
	}
`;

export default HomePage;

//<Ellipse id="ellipse" />

//{pageData === null ? renderSkeleton() : renderPage()}
