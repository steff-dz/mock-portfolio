import React from 'react';
import styled from 'styled-components';
import ImgResume from '../../other/Resumeimg.jpg';

const CVPage = () => {
	return (
		<MainBase>
			<SectionOneBase>
				<div style={{ backgroundColor: '#ffdf6c' }}>
					<h1>Details</h1>
					<ul>
						<li>
							<b>Full Name:</b> Stefanie Marie Dziadkowiec
						</li>
						<li>
							<b>Birth Date:</b> June 25th 1990
						</li>
						<li>
							<b>Residence:</b> Oslo, Norway
						</li>
						<li>
							<b>Telephone:</b> 481 58 606
						</li>
						<li>
							<b>E-mail Address:</b> stefaniemarie.dz@gmail.com
						</li>
					</ul>
				</div>
				<div style={{ backgroundColor: '#c4c4c4' }}>
					<img src={ImgResume} alt="me" />
				</div>
				<div style={{ backgroundColor: '#c4c4c4' }}>
					<h1>Education</h1>
					<ul>
						<li>
							<b>Front-end Web Development</b>
							<br />
							Fagskolen Kristiania in Oslo, Norway<br />
							08/2020 - 06/2021
						</li>
						<li>
							<b>Bergentstest/Norwegian Language Proficiency Certification </b>
							<br />
							Rosenhof VO School in Oslo, Norway<br />
							02/2015 - 04/2015
						</li>
						<li>
							<b>Norwegian Language A1 through B2 </b>
							<br />
							Stange Kommune & Rosenhof VO School in Oslo, Norway<br />
							2013 - 2015
						</li>
						<li>
							<b>BA in German as a Foreign Language & English Literature </b>
							<br />
							Concordia College in Moorhead, MN USA<br />
							08/2009 - 06/2012
						</li>
						<li>
							<b>German as a Foreign Language & Liberal Arts </b>
							<br />
							College of Dupage in Glen Ellyn, IL USA<br />
							08/2008 - 06/2009
						</li>
						<li>
							<b>Hinsdale Central High School</b>
							<br />
							Hinsdale, IL USA<br />
							08/2004 - 05/2008
						</li>
					</ul>
				</div>
				<div style={{ backgroundColor: '#ffdf6c' }}>
					<h1>Other Skills</h1>
					<ul>
						<li>Organized</li>
						<li>Creative</li>
						<li>Leadership & Management</li>
						<li>Determined</li>
						<li>Responsible</li>
						<li>Outgoing</li>
						<li>Multilingual </li>
						<li>Roller Skating Instructor </li>
					</ul>
				</div>
			</SectionOneBase>
			<SectionTwoBase>
				<div>
					<h1>Work History</h1>
					<ul>
						<li>
							<b>Avdelingsleder (Manager) at Smestad Activity School in Oslo, Norway</b>
							<br />
							11/2017 - 06/2020<br />
							Manaer of the second grade with approximately 100 children each year. I organized and
							facilitated daily activities, trained and managed a staff of ten employees, and coordinated
							between teachers and parents. I also designed and maintained the AKS website.
						</li>
						<li>
							<b>Assistant and Substitute Teacher at Smestad School & Activity School</b>
							<br />
							08/2014 - 11/2017<br />
							Manaer of the second grade with approximately 100 children each year. I organized and
							facilitated daily activities, trained and managed a staff of ten employees, and coordinated
							between teachers and parents. I also designed and maintained the AKS website.
						</li>
						<li>
							<b>Private Instructor in Oslo, Norway and Fargo, ND USA</b>
							<br />
							2010 - 2016<br />
							I have worked as a private tutor to children between the ages of 9 and 14 in the subjects of
							German and English.
						</li>
						<li>
							<b>Hostess at Denny's in Fargo, ND USA</b>
							<br />
							05/2011 - 08/2011<br />
							I worked as a Hostess at a restaurant chain for a summer. My work as a hostess focused
							largely on customer service and working the cash register.
						</li>
					</ul>
				</div>
			</SectionTwoBase>
		</MainBase>
	);
};

const MainBase = styled.main`
	margin: 3rem 5rem;
	height: fit-content;
`;

const SectionOneBase = styled.section`
        margin: 0 auto;
		width: 70vw;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 200px 300px;
		gap: 2rem;

		div {
			overflow-y: scroll;
			h1 {
				font-size: 3rem;
				margin-left: 1rem;
				margin-top: .3rem;
			}

			ul {
				font-size: 2rem;
				margin-left: 3.5rem;
			}
		}

		div:nth-child(2) {
			overflow: hidden;
			img {
				width: 100%;
			}
		}
	}
`;

const SectionTwoBase = styled.section`
	margin: 3rem auto;
	width: 70vw;
	background-color: #ffdf6c;

	div {
		padding: .5rem;
		h1 {
			font-size: 3rem;
			margin-left: 1rem;
		}

		ul {
			font-size: 2rem;
			margin-left: 3.5rem;
		}
	}
`;
export default CVPage;
