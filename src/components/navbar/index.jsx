import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { SpeedDialDemo } from './Speed'
 
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import './navbar.css'
import './../../App.css'
import Logo from './../../images/LogoNavbar.svg'


const Navbar = () => {
        
    return (
        <>
            {/* oculto en pantallas chicas */}
            <div className="p-d-none p-d-lg-inline">
                <div className="p-d-flex p-jc-between p-ai-center p-mt-4">
                    <div className="navbar-item">
                        <img src={Logo} alt="" className="navbar-logo" />
                        <h3 className="navbar-typologo">Sorprendeme</h3>
                    </div>
                    <div className="navbar-item" style={{ "marginRight": "12%" }}>
                        <span className="" style={{ "marginRight": "10px" }}><a href="#"> Inicio </a></span>

                        <span className="" style={{ "marginRight": "10px" }}><a href="#"> Servicios</a></span>

                        <span className="" style={{ "marginRight": "10px" }}><a href="#"> Nosotros</a></span>

                        <Button label="Contacto" className=" brandcolor" style={{ "marginRight": "10px" }} />

                        <Button label="LogIn" className="p-button brandcolor" />
                    </div>

                </div>
            </div>

            {/* VISIBLE ON SMALL SCREEN */}
            <div class="p-d-lg-none">
                <div className="p-d-flex p-jc-between p-ai-center p-mt-4">

                    <div className="navbar-speeddialdemo" >
                    <SpeedDialDemo model={SpeedDialDemo} direction="down"  />
                    {/* <i className="pi pi-bars" style={{ 'fontSize': '2em', 'color': '#000' }}></i> */}
                    </div>
                    <div className="navbar-item" style={{ marginLeft: "-20px" }}>
                        <img src={Logo} alt="" className="navbar-logo" />
                        <h2 className="navbar-typologo" >Sorprendeme</h2>
                    </div>
                    <div className="navbar-item">
                        <i className="pi pi-user" style={{ 'fontSize': '2em', 'color': '#000', marginRight: "20px" }}></i>

                    </div>

                </div>
            </div>



        </>
    )
}

export default Navbar