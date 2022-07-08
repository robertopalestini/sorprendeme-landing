import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { SpeedDialDemo } from './Speed'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons



const Navbar = () => {
    const scroll2El = async (id) => {
        var offset = await document.getElementById(id)
        return (
            window.scrollTo({
                top: offset.offsetTop - 60,
                behavior: 'smooth',
            })
        )
    };
    
    const handlerScroll = (e) => {
        e.preventDefault();
        const goto = e.target.getAttribute('goto');
        scroll2El(goto);
    
    }
    return (
        <>
            {/* oculto en pantallas chicas */}
            <div className="p-d-none p-d-md-inline" style={{'maxWidth': "100vw"}}>
                <div className="p-d-flex p-jc-between p-ai-center p-mt-4" >
                    <div className="navbar-item">
                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/LogoNavbar.svg`} alt="" className="navbar-logo" />
                        <h3 className="navbar-typologo">Sorprendeme</h3>
                    </div>
                    <div className="navbar-item" style={{ "marginRight": "12%" }}>
                        <span className="" style={{ "marginRight": "50px" }}><a href="#"> Inicio </a></span>

                        <span className="" style={{ "marginRight": "50px" }}><a href="#"> Servicios</a></span>
                        
                        <span className="" style={{ "marginRight": "50px" }}><a href="#"> Nosotros</a></span>

                        <Button goto="form" onClick={handlerScroll} label="Contacto" className=" brandcolor" style={{ "marginRight": "10px" }} />

                        <Button label="LogIn" className="p-button brandcolor" />
                    </div>

                </div>
            </div>

            {/* VISIBLE ON SMALL SCREEN */}
            <div className="p-d-md-none">
                <div className="p-d-flex p-jc-between p-ai-center p-mt-4">

                    <div className="navbar-speeddialdemo" >
                    <SpeedDialDemo model={SpeedDialDemo} direction="down" rotateAnimation={false}/>
                    {/* <i className="pi pi-bars" style={{ 'fontSize': '2em', 'color': '#000' }}></i> */}
                    </div>
                    <div className="navbar-item" style={{ marginLeft: "-20px" }}>
                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/LogoNavbar.svg`} alt="" className="navbar-logo" />
                        <h2 className="navbar-typologo" >Sorprendeme</h2>
                    </div>
                    <div className="navbar-item">
                        <i className="pi pi-user" style={{ 'fontSize': '1.3em', 'color': '#000', marginRight: "20px" }}></i>

                    </div>

                </div>
            </div>



        </>
    )
}

export default Navbar