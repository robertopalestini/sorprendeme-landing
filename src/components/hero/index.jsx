import HeroImage from './../../images/HeroImage.png'
import './hero.css'
import { Button } from 'primereact/button';

const Hero = () => {
    return (
        <div className='p-d-flex  p-jc-center p-mt-4'>
            <div className="p-grid">
                <div className="p-col p-mx-auto">
                    <h3 style={{color: '#4A50A2'}}>Más que un repositorio,</h3>
                    <h1 className="hero-tittle">Un Buscador Inteligente</h1>
                    <p className="hero-p">Sosprendeme es un software que permite la búsqueda avanzada e inteligente de tus documentos físicos digitalizados, ahorrando tiempo, papel y dinero.</p>
                    <Button label="Solicitar Cotizacion" className="p-button" />
                </div>

                <div className="p-col">
                    <img src={HeroImage} alt="Sorprendeme" className="hero-image "/>
                </div>
            </div>
        </div>
    )
}

export default Hero