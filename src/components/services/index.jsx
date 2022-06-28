import TabletBox from './../../images/TabletSorprendeme.jpg'
import IconOne from './../../images/services/network.svg'
import IconTwo from './../../images/services/analytics.svg'
import IconThree from './../../images/services/ux.svg'
import IconFour from './../../images/services/cloud-computing.svg'
import IconFive from './../../images/services/puzzle.svg'
import IconSix from './../../images/services/responsive-webpage.svg'
import IconSeven from './../../images/services/magnifying-glass.svg'
import IconEight from './../../images/services/workflow.svg'
import IconNine from './../../images/services/engranaje.svg'

import Encontra from './../../images/services/encontra.svg'
import Optimiza from './../../images/services/optimiza.svg'
import './services.css'

const Services = () => {
    return (
        <>
        <section className="services ">
            <div className='p-d-flex  p-jc-center  p-mt-4'>
                <div className="p-grid" >
                    <div className="p-col" style={{marginTop:"30px"}}>
                        <div className="p-d-flex ">
                            <div className="p-mx-auto p-px-auto p-order-1 services-item" style={{height: '100px', width: '170px'}}>
                                <img src={IconOne} alt="" className="services-item" />
                                <p className="services-desc">Integrable</p>
                            </div>
                            <div className="p-mx-auto p-order-2 services-item" style={{height: '100px', width: '170px'}}>
                                <img src={IconTwo} alt="" className="services-item" />
                                <p className="services-desc">Reportes</p>
                            </div>
                            <div className="p-mx-auto p-order-3 services-item" style={{height: '100px', width: '170px'}}>
                                <img src={IconThree} alt="" className="services-item" />
                                <p className="services-desc">Ux Design</p>
                            </div>
                        </div>
                        <div className="p-d-flex">
                            <div className="p-mx-auto p-order-1 services-item" style={{height: '100px', width: '170px'}}>
                                <img src={IconFour} alt="" className="services-item" />
                                <p className="services-desc">Webservice</p>
                            </div>
                            <div className="p-mx-auto p-order-2 services-item" style={{height: '100px', width: '170px'}}>
                                <img src={IconFive} alt="" className="services-item" />
                                <p className="services-desc">Customizable</p>
                            </div>
                            <div className="p-mx-auto p-order-3 services-item" style={{height: '100px', width: '170px'}}>
                                <img src={IconSix} alt="" className="services-item" />
                                <p className="services-desc">Multidispositivo</p>
                            </div>
                        </div>
                        <div className="p-d-flex">
                            <div className="p-mx-auto p-order-1 services-item "style={{height: '100px', width: '170px'}}>
                                <img src={IconSeven} alt="" className="services-item" />
                                <p className="services-desc">Búsqueda avanzada</p>
                            </div>
                            <div className="p-mx-auto p-order-2 services-item"style={{height: '100px', width: '170px'}}>
                                <img src={IconEight} alt="" className="services-item" />
                                <p className="services-desc">Workflow</p>
                            </div>
                            <div className="p-mx-auto p-order-3 services-item"style={{height: '100px', width: '170px'}}>
                                <img src={IconNine} alt="" className="services-item" />
                                <p className="services-desc">Configurable</p>
                            </div>
                        </div>

                    </div>

                    <div className="p-col">
                        <img src={TabletBox} alt="Sorprendeme" className="service-image" />
                    </div>
                </div>
            </div >

            <div className='p-d-flex p-jc-center p-ai-center p-mt-4 services-background '>
                <div className="p-grid">
                    <div className="p-col p-d-flex ">
                        <div><img src={Encontra} alt=""  className="service-icon"/></div>
                        <div><h3>Encontrá</h3>
                        <p className="services-p">Toda la información de manera efectiva con este gestor y repositorio de documentos.</p></div>
                    </div>
                    <div className="p-col p-d-flex ">
                    <div ><img src={Optimiza} alt=""  className="service-icon"/></div>
                        <div><h3>Optimizá</h3>
                        <p className="services-p">Optimizá procesos, reducí costos y mantené tu información segura.</p></div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Services