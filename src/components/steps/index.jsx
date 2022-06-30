import './step.css'
import './../../App.css'
import StepOne from './../../images/step/Step1.svg'
import StepTwo from './../../images/step/Step2.svg'
import StepThree from './../../images/step/Step3.svg'
import StepFour from './../../images/step/Step4.svg'
import StepFive from './../../images/step/Step5.svg'

const Steps = () => {
    return (
        <>
        <div className="p-d-none p-d-lg-inline">
            <section className="step-background  ">

                <div className="p-d-flex p-ai-center ">
                    <div className="p-grid part-one" >
                        <div className="p-col">
                            <h2>Paso 1</h2>
                            <p style={{ "marginTop": "-10px", "width": "150px", "marginRight": "280px","color":"#6c757d" }}>Relevamiento general de su documentación.</p>
                        </div>

                        <div className="p-col" >
                            <h2>Paso 3</h2>
                            <p style={{ "marginTop": "-10px", "width": "190px", "marginRight": "260px","color":"#6c757d" }}>Nosotros procesamos, clasificamos e indexamos las mismas.</p>
                        </div>
                        <div className="p-col">
                            <h2>Paso 5</h2>
                            <p style={{ "marginTop": "-10px", "width": "150px","color":"#6c757d" }}>Consulte digitalmente su documentación.</p>
                        </div>
                    </div>
                </div>
                <div className="search-icon">

</div>
                <div className="trazado-background " >
                 

                    <div className="step-one">

                    </div>
                    <div className="step-two">

                    </div>
                    <div className="step-three">

                    </div>
                    <div className="step-four">

                    </div>
                    <div className="step-five">

                    </div>

                </div>

                <div className="p-grid part-two" >
                    <div className="p-col p-ml-4">
                        <h2>Paso 2</h2>
                        <p style={{ "marginTop": "-10px", "width": "190px", "marginRight": "240px","color":"#6c757d" }}>Envíe las imágenes digitalizadas de sus documentos.</p>
                    </div>

                    <div className="p-col p-ml-4">
                        <h2>Paso 4 </h2>
                        <p style={{ "marginTop": "-10px", "width": "160px", "marginRight": "140px","color":"#6c757d" }}> Alta digital documental en sistema Sorprendeme.</p>
                    </div>

                </div>
            </section>
            </div>

            {/* small screen */}
            <div class="p-d-lg-none">
            <section className="step-background box">

                <div className="p-d-flex p-ai-center ">
                    <div className="p-grid " style={{ width: "70%" }}>
                        <div className="p-col p-ml-4" style={{ marginTop: "-20%" }}>
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
                            <img width="" height="" src={StepOne} alt="" className="step-icon" />
                        </div>

                        <div className="p-col">
                            <img width="" height="" src={StepTwo} alt="" className="step-icon" />
                        </div>
                        <div className="p-col">
                            <img width="" height="" src={StepThree} alt="" className="step-icon" />
                        </div>
                        <div className="p-col">
                            <img width="" height="" src={StepFour} alt="" className="step-icon" />
                        </div>
                        <div className="p-col">
                            <img width="" height="" src={StepFive} alt="" className="step-icon" />
                        </div>

                    </div>

                    <div className="p-grid " style={{ width: "70%" }}>
                        <div className="p-col p-ml-2">
                            <h2>Paso 2</h2>
                            <p>Envíe las imágenes digitalizadas de sus documentos.</p>
                        </div>

                        <div className="p-col p-ml-2">
                            <h2>Paso 4 </h2>
                            <p>Alta digital documental en sistema Sorprendeme.</p>
                        </div>

                    </div>
                </div>
            </section>
            </div>
        </>
    )
}

export default Steps