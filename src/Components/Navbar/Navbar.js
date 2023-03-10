import React , {useState, useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [toggleMenu, setTogglemenu]= useState (false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    
    const toggleNav = () => {
        setTogglemenu(!toggleMenu);
    }
    const changeWidth = () =>{
        setLargeur(window.innerWidth);
    }
    

   useEffect(() => {
        window.addEventListener('resize', changeWidth)
        
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
   }, [])
   

    return (
        <nav>
            {(toggleMenu ||largeur > 500 )&& (
            <ul className='liste'>
                <li className="items">
                    <Link to="/">Accueil </Link>
                    
                    </li>
                    <li className="items">
                    <Link to="/ecrire">Ecrire </Link>
                    
                    </li> <li className="items">
                    <Link to="/contact">Contact </Link>
                    
                    </li>
              
            </ul>
            )}
            <button onClick={toggleNav} className="btn">btn</button>
        </nav>
  )
}
