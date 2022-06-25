import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import './navbar.css'
import Logo from './../../images/LogoNavbar.svg'



const Navbar = () => {
    return (
        <>
            {/* oculto en pantallas chicas */}
            <div className="p-d-none p-d-md-inline-flex">
                <div className="p-d-flex p-jc-center p-ai-center p-mt-4">
                    <div className="navbar-item">
                        <img src={Logo} alt="" className="navbar-logo" />
                        <h2 className="navbar-typologo">Sorprendeme</h2>
                    </div>
                    <div className="navbar-item">
                        <span className=""> Inicio</span>
                    </div>
                    <div className="navbar-item">
                        <span className="">Servicios</span>
                    </div>
                    <div className="navbar-item">
                        <span className="">Nosotros</span>
                    </div>
                    <div className="p-mr-2">
                        <Button label="Contacto" className="p-button-secondary" />
                    </div>
                    <div className="p-mr-2">
                        <Button label="Log In" />
                    </div>
                </div>
            </div>

            {/* VISIBLE ON SMALL SCREEN */}
            <div class="p-d-md-none">
                <div className="p-d-flex p-jc-center p-ai-center p-mt-4">
                    <div className="navbar-item">
                        <img src={Logo} alt="" className="navbar-logo" />
                        <h2 className="navbar-typologo">Sorprendeme</h2>
                    </div>
                    
                </div>
            </div>



        </>
    )
}

export default Navbar