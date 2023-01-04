import React , {useState, useEffect} from 'react'
import './Navbar.css'

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
                <li className="items">Accueil</li>
                <li className="items">Ecrire</li>
                <li className="items">Contact</li>
              
            </ul>
            )}
            <button onClick={toggleNav} className="btn">btn</button>
        </nav>
  )
}
