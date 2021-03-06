const Services = () => {
    return (
        <>
            <section className="services  max-w-full min-w-full">
                <div className="p-d-none p-d-md-inline">
                    <div className='p-d-flex  p-jc-center  p-mt-4'>
                        <div className="p-grid" >
                            <div className="p-col" style={{ marginTop: "30px" }}>
                                <div className="p-d-flex ">
                                    <div className="p-mx-auto p-px-auto p-order-1 services-item" style={{ height: '100px', width: '170px' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/network.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Integrable</p>
                                    </div>
                                    <div className="p-mx-auto p-order-2 services-item" style={{ height: '100px', width: '170px' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/analytics.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Reportes</p>
                                    </div>
                                    <div className="p-mx-auto p-order-3 services-item" style={{ height: '100px', width: '170px' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/ux.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Ux Design</p>
                                    </div>
                                </div>
                                <div className="p-d-flex">
                                    <div className="p-mx-auto p-order-1 services-item" style={{ height: '100px', width: '170px' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/cloud-computing.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Webservice</p>
                                    </div>
                                    <div className="p-mx-auto p-order-2 services-item" style={{ height: '100px', width: '170px' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/puzzle.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Customizable</p>
                                    </div>
                                    <div className="p-mx-auto p-order-3 services-item" style={{ height: '100px', width: '170px' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/responsive-webpage.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Multidispositivo</p>
                                    </div>
                                </div>
                                <div className="p-d-flex">
                                    <div className="p-mx-auto p-order-1 services-item " style={{ height: '100px', width: '170px' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/magnifying-glass.svg`} alt="" className="services-item" />
                                        <p className="services-desc">B??squeda avanzada</p>
                                    </div>
                                    <div className="p-mx-auto p-order-2 services-item" style={{ height: '100px', width: '170px' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/workflow.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Workflow</p>
                                    </div>
                                    <div className="p-mx-auto p-order-3 services-item" style={{ height: '100px', width: '170px' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/engranaje.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Configurable</p>
                                    </div>
                                </div>

                            </div>

                            <div className="p-col">
                                <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/boxtablet.webp`} alt="Sorprendeme" className="service-image" />
                            </div>
                        </div>
                    </div >

                    <div className='p-d-flex p-jc-center p-ai-center p-mt-4 services-background '>
                        <div className="p-grid">
                            <div className="p-col p-d-flex ">
                                <div><img width="" height="" src={`${process.env.PUBLIC_URL}images/services/encontra.svg`} alt="" className="service-icon" /></div>
                                <div><h3>Encontr??</h3>
                                    <p className="services-p">Toda la informaci??n de manera efectiva con este gestor y repositorio de documentos.</p></div>
                            </div>
                            <div className="p-col p-d-flex ">
                                <div ><img width="" height="" src={`${process.env.PUBLIC_URL}images/services/optimiza.svg`} alt="" className="service-icon" /></div>
                                <div><h3>Optimiz??</h3>
                                    <p className="services-p">Optimiz?? procesos, reduc?? costos y manten?? tu informaci??n segura.</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-d-md-none">
                    <div className='p-d-flex  p-jc-center  p-mt-4'>
                        <div className="p-grid" >
                            <div className="p-col p-mt-4 p-ml-4">
                                <div className="p-d-flex ">
                                    <div className="p-mx-auto p-px-auto p-order-1 services-item" style={{ height: '40%', width: '40%' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/network.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Integrable</p>
                                    </div>
                                    <div className="p-mx-auto p-order-2 services-item" style={{ height: '40%', width: '40%' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/analytics.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Reportes</p>
                                    </div>

                                </div>
                                <div className="p-d-flex">
                                    <div className="p-mx-auto p-order-1 services-item" style={{ height: '40%', width: '40%' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/cloud-computing.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Webservice</p>
                                    </div>
                                    <div className="p-mx-auto p-order-2 services-item" style={{ height: '40%', width: '40%' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/puzzle.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Customizable</p>
                                    </div>

                                </div>
                                <div className="p-d-flex">
                                    <div className="p-mx-auto p-order-1 services-item " style={{ height: '40%', width: '40%' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/magnifying-glass.svg`} alt="" className="services-item" />
                                        <p className="services-desc">B??squeda avanzada</p>
                                    </div>
                                    <div className="p-mx-auto p-order-2 services-item" style={{ height: '40%', width: '40%' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/workflow.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Workflow</p>
                                    </div>

                                </div>
                                <div className="p-d-flex">
                                    <div className="p-mx-auto p-order-3 services-item" style={{ height: '40%', width: '40%' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/ux.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Ux Design</p>
                                    </div>
                                    <div className="p-mx-auto p-order-3 services-item" style={{ height: '40%', width: '40%' }}>
                                        <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/responsive-webpage.svg`} alt="" className="services-item" />
                                        <p className="services-desc">Multidispositivo</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-col">
                                <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/boxtablet.webp`} alt="Sorprendeme" className="service-image" />
                            </div>
                        </div>
                    </div >

                    <div className="grid grid-rows-2 grid-flow-col" style={{backgroundColor:"#f4f6fa"}}>

                        <div className="col-span-2 flex">
                            <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/encontra.svg`} alt="" />
                            <div>
                                <h3>Encontr??</h3>
                                <p className="services-p">Toda la informaci??n de manera efectiva con este gestor y repositorio de documentos.</p>
                            </div>
                        </div>

                        <div className="col-span-2 flex">
                            <img width="" height="" src={`${process.env.PUBLIC_URL}images/services/optimiza.svg`} alt=""  />
                            <div>
                                <h3>Optimiz??</h3>
                                <p className="services-p">Optimiz?? procesos, reduc?? costos y manten?? tu informaci??n segura.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Services