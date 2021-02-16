import React from 'react';
import styled from 'styled-components';
import CvIcon from '../../other/cv.png';

const AboutPage = () => {
	return (
		<MainBase>
			<AboutSection>
				<article>
					<div>
						<ul>
							<li>Born and raised in Chicago, but I've been living in Norway since 2013. </li>

							<li>
								I have a BA in German language and English Literature. I've worked in elementary schools
								for a decade, and I have some serious stikkball skills.
							</li>
							<li>
								My first game console was a Sega Genesis. My favorite games are Dragon Age, Zelda, and
								Pokemon.
							</li>
							<li>
								I spend 10 hours a week on roller skates. I skate with Chicks in Bowls Oslo, and I play
								a contact sport called Roller Derby. Currently, I play for Oslo Roller Derby A Team and
								Team Poland.
							</li>
							<li>
								I love playing the accordion, puzzling, rock climbing, the KingKiller Chronicles, crime
								podcasts, and bulletjournaling.
							</li>
						</ul>
					</div>
				</article>
				<article>
					<h1>languages</h1>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>SASS</li>
						<li>JavaScript</li>
					</ul>

					<h1>libraries</h1>
					<ul>
						<li>React</li>
						<li>Mapbox GL JS</li>
					</ul>

					<h1>other</h1>
					<ul>
						<li>Styled Components</li>
						<li>Github</li>
						<li>Cosmic JS</li>
						<li>Netflify</li>
						<li>Figma</li>
					</ul>
				</article>
			</AboutSection>
			<LinkSection>
				<div id="link-container">
					<span />
					<div id="icon-container">
						<a href="https://github.com/steff-dz" target="_blank">
							<i className="fab fa-github-square" />
						</a>
						<a href="https://www.linkedin.com/in/stefanie-dz/" target="_blank">
							<i className="fab fa-linkedin" />
						</a>
						<a href="/cv">
							<img id="cv-icon" src={CvIcon} alt="" />
						</a>
					</div>
				</div>
				<a id="email" href="mailto:stefaniemarie.dz@gmail.com">
					stefaniemarie.dz@gmail.com
				</a>
			</LinkSection>
		</MainBase>
	);
};

const MainBase = styled.main`
	height: fit-content;
	margin-top: 2.5rem;
	margin-left: 10rem;
	margin-right: 10rem;
	@media only screen and (max-width: 850px) {
		margin-left: 0;
		margin-right: 0;
	}
`;

const AboutSection = styled.section`
	display: grid;
	grid-template-columns: 2fr 1fr;
	height: 100%;
	@media only screen and (max-width: 850px){
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	article {
		height: 100%;
		}

		h1 {
			font-size: 3rem;
			font-weight: 400;
			@media only screen and (max-width: 750px) {
				font-size: 2.5em;
			}
		}

		li {
			font-size: 2.3rem;
			@media only screen and (max-width: 750px) {
				font-size: 2rem;
			}
		}
	}

	article:nth-child(1) {
		border: 5px solid #ffdf6c;
		width: 80%;
		margin: 0 auto;
		line-height: 3rem;
		padding: 2.3rem;

		ul {
			list-style: inside;

			li {
				padding: .3rem 0rem;
			}
		}
	}

	article:nth-child(2) {
		//do i need position relative??
		position: relative;
		@media only screen and (max-width: 850px){
			margin: 0rem 5rem;
		}

		h1 {
			z-index: -1;
			background: linear-gradient(to bottom, #ffdf6c 50%, #ffffff 60%);
			width: 40%;
			@media only screen and (max-width: 850px){
			width: 100%;
		}

		}

		ul {
			list-style: none;

			li {
				padding-left: 2rem;
			}
		}
	}
`;

const LinkSection = styled.section`
	width: 100%;
	height: 20vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: .5rem;

	#link-container {
		width: 40%;
		height: 100px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		span {
			background-color: #ffdf6c;
			height: 2rem;
			width: 70%;
			padding-left: 10rem;

			@media only screen and (max-width: 850px) {
				width: 100%;
			}
		}

		#icon-container {
			font-size: 5rem;
			position: absolute;
			display: flex;
			justify-items: center;
			gap: 10px;
			cursor: pointer;

			a {
				color: #333;
			}

			#cv-icon {
				height: 50px;

				&:hover {
					height: 55px;
				}
			}

			i {
				&:hover {
					font-size: 5.5rem;
				}
			}
		}
	}

	#email {
		text-decoration: none;
		font-size: 2rem;
		color: #333;
		padding: .5rem;

		&:hover {
			background-color: #ffdf6c;
		}
	}
`;
export default AboutPage;
