import { Button } from 'primereact/button';

const Hero = () => {
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
            <div class="p-d-md-none">
                <div className='p-d-flex  p-jc-center p-mt-4'>
                    <div className="p-grid" style={{ "marginLeft": "20px" }}>
                        <div className="p-col">
                            <img width="" height="" src={`${process.env.PUBLIC_URL}images/HeroImage.png`} alt="Sorprendeme" className="hero-image " />
                        </div>
                        <div className="p-col-12 md:p-col-6 lg:p-col-3 p-mx-auto">
                            <h3 style={{ color: '#4a50fd' }}>Más que un repositorio,</h3>
                            <h1 className="hero-tittle">UN BUSCADOR INTELIGENTE</h1>
                            <p className="hero-p">Sosprendeme es un software que permite la búsqueda avanzada e inteligente de tus documentos físicos digitalizados, ahorrando tiempo, papel y dinero.</p>
                            <Button label="Solicitar Cotizacion" className="hero-button" style={{ "borderRadius": "20px" }} />
                        </div>
                    </div>
                </div>

            </div>
            <div className="p-d-none p-d-md-inline " >

                <div className="p-grid" style={{ "marginLeft": "10%", "marginTop": "50px" }}>
                    <div className="p-col p-mx-auto">
                        <h3 style={{ color: '#4a50fd', fontWeight: 400 }}>Más que un repositorio,</h3>
                        <h1 className="hero-tittle">UN BUSCADOR INTELIGENTE</h1>
                        <p className="hero-p">Sosprendeme es un software que permite la búsqueda avanzada e inteligente de tus documentos físicos digitalizados, ahorrando tiempo, papel y dinero.</p>

                        <Button goto='form' onClick={handlerScroll} label="Solicitar Cotizacion" className="hero-button" style={{ "borderRadius": "20px" }} />

                    </div>

                    <div className="p-col">
                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/HeroImage.png`} alt="Sorprendeme" className="hero-image " />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero