import { NavLink } from "react-router-dom";

function Home() {
	document.title = 'Accueil - SportSee'

	return (
		<section className="home">
            <h2>Sélection de l'utilisateur : </h2>
			<NavLink to="Profil/12">👦 Karl </NavLink>
            
            <NavLink to="Profil/18">👩 Cecilia </NavLink>
		</section>
	)
}

export default Home