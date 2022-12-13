/* eslint-disable react/prop-types */
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../App.css'
import car from '../assets/imgs/cart.svg'
import icon from '../assets/imgs/userIcon.svg'

class Template extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			sectionToDisplay: [],
			user: '',
			cantCart: '',
		}
	}

	render() {
		return (
			<body>
				<Navbar className='color-nav'>
					<Container fluid>
						<Navbar.Brand href='/'>KFashion</Navbar.Brand>
						<Nav className='me-auto'></Nav>
						<a>
							<img src={icon}></img>
						</a>
						<a>
							<img src={car}></img>
						</a>
					</Container>
				</Navbar>
				{this.props.sectionToDisplay}
				<article></article>
				<footer contentEditable className='color-nav'></footer>
			</body>
		)
	}
}

export default Template
