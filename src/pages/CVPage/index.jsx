import React from 'react';
import styled from 'styled-components';

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
				<div style={{ backgroundColor: '#e6dade' }}>
					<img src="https://i.imgur.com/kaPocmX.jpg" alt="me" />
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
						<li>Instructor & Trainer</li>
					</ul>
				</div>
			</SectionOneBase>
			<SectionTwoBase>
				<div>
					<h1>Work History</h1>
					<ul>
						<li>
							<b>Manager (Avdelingsleder)</b>
							<br />
							Smestad Activity School in Oslo, Norway
							<br />
							11/2017 - 06/2020<br />
						</li>
						<li>
							<b>Assistant and Substitute Teacher</b>
							<br />
							Smestad School & Activity School in Oslo, Norway
							<br />
							08/2014 - 11/2017<br />
						</li>
						<li>
							<b>Private Academic Tutor</b>
							<br />
							Oslo, Norway & Fargo, ND USA
							<br />
							2010 - 2016<br />
						</li>
						<li>
							<b>Restaurant Hostess</b>
							<br />
							Denny's in Fargo, ND USA
							<br />
							05/2011 - 08/2011<br />
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
	color: #3f3f3f;

	@media only screen and (max-width: 1140px) {
		margin-left: 2rem;
		margin-right: 2rem;
	}
`;

const SectionOneBase = styled.section`
        margin: 0 auto;
		width: 70vw;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 200px 300px;
		gap: 2rem;
	
		@media only screen and (max-width: 1140px) {
		width: 90vw;
	   }

	   @media only screen and (max-width: 850px) {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	   }

		div {
			overflow-y: scroll;
			padding: 1.5rem;

		

			h1 {
				font-size: 3rem;
				margin-left: 1rem;
				margin-top: .3rem;
				margin-bottom: 1rem;
			}

			ul {
				font-size: 2rem;
				margin-left: 3.5rem;
			}
		}

		div:nth-child(2) {
			overflow: hidden;
			padding: 0;
			img {
				width: 100%;
				@media only screen and (max-width: 1380px){
					height: 100%;
					width: auto;
				}
				@media only screen and (max-width: 850px) {
					display: none;
	   			}
			}
		}
	}
`;

const SectionTwoBase = styled.section`
	margin: 2rem auto;
	width: 70vw;
	background-color: #ffdf6c;
	@media only screen and (max-width: 1140px) {
		width: 90vw;
	}

	@media only screen and (max-width: 850px) {
		background-color: #c4c4c4;
	}

	div {
		padding: 1.5rem;
		h1 {
			font-size: 3rem;
			margin-left: 1rem;
			margin-bottom: 1rem;
		}

		ul {
			font-size: 2rem;
			margin-left: 3.5rem;
		}
	}
`;
export default CVPage;
