import Template from '../components/template'
import '../App.css'

function MainPage() {
	return (
		<Template
			sectionToDisplay={
				<div className='container'>
					<div>
						<h1>¡Bienvenida a KFashion!</h1>
						<h3>Tienda virtual de ropa</h3>
						<a href='/Catalog' className='btn btn-default bg-dark text-white'>
							Visitar nuestro catalogo
						</a>
					</div>
				</div>
			}
		></Template>
	)
}

export default MainPage
