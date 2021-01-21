import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';
import HomeMainBase from './HomeMainBase';
import Ellipse from '../../other/Ellipse';
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
		<HomeMainBase>
			{pageData === null ? renderSkeleton() : renderPage()}
			<Ellipse id="ellipse" />
			<img src={Portrait} />
		</HomeMainBase>
	);
};

export default HomePage;
