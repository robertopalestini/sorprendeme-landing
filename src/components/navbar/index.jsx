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
            <div className="p-d-none p-d-md-inline">
                <div className="p-d-flex p-jc-center p-ai-center p-mt-4">
                    <div className="navbar-item">
                        <img src={Logo} alt="" className="navbar-logo" />
                        <h3 className="navbar-typologo">Sorprendeme</h3>
                    </div>
                    <div className="navbar-item">
                        <span className=""><a href="#"> Inicio </a></span>
                    </div>
                    <div className="navbar-item">
                        <span className=""><a href="#"> Servicios</a></span>
                    </div>
                    <div className="navbar-item">
                        <span className=""><a href="#"> Nosotros</a></span>
                    </div>
                    <div className="p-mr-2 navbar-item">
                        <Button label="Contacto" className="p-button-secondary" />
                    </div>
                    <div className="p-mr-2 navbar-item">
                        <Button label="LogIn" />
                    </div>
                </div>
            </div>

            {/* VISIBLE ON SMALL SCREEN */}
            <div class="p-d-md-none">
                <div className="p-d-flex p-jc-center p-ai-center p-mt-4">
                    
                    <div className="navbar-item">
                    <i className="pi pi-bars"  style={{'fontSize': '2em', 'color': '#000'}}></i>
                        <img src={Logo} alt="" className="navbar-logo" />
                        <h2 className="navbar-typologo">Sorprendeme</h2>
                    <i className="pi pi-user"  style={{'fontSize': '2em', 'color': '#000'}}></i>
                    </div>
                    <div className="navbar-item">

                    </div>

                </div>
            </div>



        </>
    )
}

export default Navbar