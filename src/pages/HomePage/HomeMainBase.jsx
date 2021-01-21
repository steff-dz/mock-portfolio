import styled from 'styled-components';

const HomeMainBase = styled.main`
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
		top: 45%;
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

export default HomeMainBase;
