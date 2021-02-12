import React from 'react';
import styled from 'styled-components';

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
								My first game console was a Sega Genesis. My favorite games are Dragon Age, Zelda,
								Pokemon and the Elder Scrolls.
							</li>
							<li>
								I spend 10 hours a week on roller skates. I skate with Chicks in Bowls Oslo, and I play
								a contact sport called Roller Derby. Currently, I play for Oslo Roller Derby A Team and
								Team Poland.
							</li>
							<li>
								I love playing the accordion, puzzling, coffee, rock climbing, the KingKiller
								Chronicles, crime podcasts, and bulletjournaling.
							</li>
						</ul>
					</div>
				</article>
				<article>
					<div>
						<h1>languages</h1>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>SASS</li>
							<li>JavaScript</li>
						</ul>
					</div>
					<div>
						<h1>libraries</h1>
						<ul>
							<li>React</li>
							<li>Mapbox GL JS</li>
						</ul>
					</div>
					<div>
						<h1>other tools</h1>
						<ul>
							<li>Styled Components</li>
							<li>Github</li>
							<li>Cosmic JS</li>
							<li>Netflify</li>
							<li>Figma</li>
						</ul>
					</div>
				</article>
			</AboutSection>
		</MainBase>
	);
};

const MainBase = styled.main`
	border: 1px solid black;
	height: 65vh;
	margin-top: 2.5rem;
	margin-left: 10rem;
	margin-right: 10rem;
`;

const AboutSection = styled.section`
	display: grid;
	grid-template-columns: 2fr 1fr;
	height: 100%;

	article {
		border: 1px solid green;
		height: 100%;
	}

	article:nth-child(1) {
		div {
			border: 5px solid #ffdf6c;
			width: 80%;
			margin: 0 auto;
			font-size: 2.3rem;
			line-height: 3rem;
			padding: 2.3rem;

			ul {
				list-style: inside;

				li {
					padding: .3rem 0rem;
				}
			}
		}
	}

	article:nth-child(2) {
		border: 1px solid red;

		div {
			ul {
				list-style: none;
			}
		}
	}
`;

export default AboutPage;
