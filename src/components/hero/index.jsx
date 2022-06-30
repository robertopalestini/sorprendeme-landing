import HeroImage from './../../images/HeroImage.png'
import './hero.css'
import './../../App.css'
import { Button } from 'primereact/button';

const Hero = () => {
    return (
        <>
            <div class="p-d-md-none">
            <div className='p-d-flex  p-jc-center p-mt-4'>
                <div className="p-grid"   style={{"marginLeft": "80px"}}>
                    <div className="p-col">
                        <img src={HeroImage} alt="Sorprendeme" className="hero-image " />
                    </div>
                    <div className="p-col-12 md:p-col-6 lg:p-col-3 p-mx-auto">
                        <h3 style={{ color: '#4a50fd' }}>Más que un repositorio,</h3>
                        <h1 className="hero-tittle">Un Buscador Inteligente</h1>
                        <p className="hero-p">Sosprendeme es un software que permite la búsqueda avanzada e inteligente de tus documentos físicos digitalizados, ahorrando tiempo, papel y dinero.</p>
                        <Button label="Solicitar Cotizacion" className="hero-button" />
                    </div>
                    </div>
                </div>

            </div>
            <div className="p-d-none p-d-md-inline">
            
                <div className="p-grid"  style={{"marginLeft": "200px", "marginTop": "50px"}}>
                    <div className="p-col p-mx-auto">
                        <h3 style={{ color: '#4a50fd', fontWeight: 400 }}>Más que un repositorio,</h3>
                        <h1 className="hero-tittle">un buscador inteligente</h1>
                        <p className="hero-p">Sosprendeme es un software que permite la búsqueda avanzada e inteligente de tus documentos físicos digitalizados, ahorrando tiempo, papel y dinero.</p>
                        <Button label="Solicitar Cotizacion" className="hero-button" />
                    </div>

                    <div className="p-col">
                        <img src={HeroImage} alt="Sorprendeme" className="hero-image " />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Hero