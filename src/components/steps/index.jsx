const Steps = () => {
    return (
        <>
            <div class="p-d-lg-none ">
                <div className="p-d-flex p-ai-center step-absolute "  style={{"zIndex":"1"}}>
                    <div className="p-grid " style={{ width: "70%"}}>
                        <div className="p-col p-ml-4" >
                            <h2>Paso 1</h2>
                            <p>Relevamiento general de su documentación.</p>
                        </div>
                        <div className="p-col p-ml-4" >
                            <h2>Paso 3</h2>
                            <p>Nosotros procesamos, clasificamos e indexamos las mismas.</p>
                        </div>
                        <div className="p-col p-ml-4">
                            <h2>Paso 5</h2>
                            <p>Consulte digitalmente su documentación.</p>
                        </div>
                    </div>
                    <div className="p-grid " style={{ width: "70%", marginTop:"20%"}}>
                        <div className="p-col">
                            <img src={`${process.env.PUBLIC_URL}images/step/Step1.svg`} alt="" className="step-icon" />
                        </div>

                        <div className="p-col">
                            <img src={`${process.env.PUBLIC_URL}images/step/Step2.svg`} alt="" className="step-icon" />
                        </div>
                        <div className="p-col">
                            <img src={`${process.env.PUBLIC_URL}images/step/Step3.svg`} alt="" className="step-icon" />
                        </div>
                        <div className="p-col">
                            <img src={`${process.env.PUBLIC_URL}images/step/Step4.svg`} alt="" className="step-icon" />
                        </div>
                        <div className="p-col">
                            <img src={`${process.env.PUBLIC_URL}images/step/Step5.svg`} alt="" className="step-icon" />
                        </div>

                    </div>
                    <div className="p-grid " style={{ width: "70%" }}>
                        <div className="p-col p-ml-2" style={{marginTop:"-50px"}}>
                            <h2>Paso 2</h2>
                            <p className="step-p">Envíe las imágenes digitalizadas de sus documentos.</p>
                        </div>

                        <div className="p-col p-ml-2">
                            <h2>Paso 4 </h2>
                            <p>Alta digital documental en sistema Sorprendeme.</p>
                        </div>

                    </div>
                </div>
                {/* <div className='step-relative' style={{"zIndex":"0"}}>
                    <img src={`${process.env.PUBLIC_URL}images/step/Background.png`} alt="" className='step-background' />
                </div> */}
              
            </div>

            <div className="p-d-none p-d-lg-inline">

                <div className="card">
                    <div className="card-container purple-container step-trazado">

                        {/* STEP ICONS */}
                        <div className="">
                            <img src={`${process.env.PUBLIC_URL}images/step/Step1.svg`} className="step-trazado step-style step-iconOne" />
                            <img src={`${process.env.PUBLIC_URL}images/step/Step2.svg`} className="step-trazado step-style step-iconTwo" />
                            <img src={`${process.env.PUBLIC_URL}images/step/Step3.svg`} className="step-trazado step-style step-iconThree" />
                            <img src={`${process.env.PUBLIC_URL}images/step/Step4.svg`} className="step-trazado step-style step-iconFour" />
                            <img src={`${process.env.PUBLIC_URL}images/step/Step5.svg`} className="step-trazado step-style step-iconFive" />
                        </div>
                        {/* STEP TEXT */}
                        <div className="step-text step-position1">
                            <div className="">
                                <h3>Paso 1</h3>
                                <p>Relevamiento&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; general de su documentación.</p>
                            </div>
                        </div>
                        <div className="step-text step-position2">
                            <div className="">
                                <h3>Paso 2</h3>
                                <p>Envíe las imágenes digitalizadas de sus documentos.</p>
                            </div>
                        </div>
                        <div className="step-text step-position3">
                            <div className="">
                                <h3>Paso 3</h3>
                                <p>Nosotros procesamos,&nbsp; clasifícamos e indexamos&nbsp; las mismas.</p>
                            </div>
                        </div>
                        <div className="step-text step-position4">
                            <div className="">
                                <h3>Paso 4</h3>
                                <p>Alta digital&nbsp;&nbsp; documental en&nbsp; sistema Sorprendeme.</p>
                            </div>
                        </div>
                        <div className="step-text step-position5">
                            <div className="">
                                <h3>Paso 5</h3>
                                <p>Consulte&nbsp;&nbsp; digitalmente su&nbsp;&nbsp; documentación.</p>
                            </div>
                        </div>

                        <div className="">
                            <img src={`${process.env.PUBLIC_URL}images/step/Stepper.svg`} className="step-trazado step-style" />
                        </div>
                        <div className="">
                            <img src={`${process.env.PUBLIC_URL}images/step/SearchIcon.svg`} className="step-searchIcon step-style" />
                        </div>


                    </div>

                </div>

                <div className='step-relative'>
                    <img src={`${process.env.PUBLIC_URL}images/step/Background.png`} alt="" className='step-background' />
                </div>
            </div>

        </>
    )
}

export default Steps