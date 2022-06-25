import './step.css'
import StepOne from './../../images/step/Step1.svg'
import StepTwo from './../../images/step/Step2.svg'
import StepThree from './../../images/step/Step3.svg'
import StepFour from './../../images/step/Step4.svg'
import StepFive from './../../images/step/Step5.svg'

const Steps = () => {
    return (
        <>
            <section className="step-background box">

                <div className="p-d-flex p-ai-center ">
                    <div className="p-grid step-background " style={{ width: "70%" }}>
                        <div className="p-col">
                            <h2>Paso 1</h2>
                            <p>Relevamiento general de su documentación.</p>
                        </div>

                        <div className="p-col" >
                            <h2>Paso 3</h2>
                            <p>Nosotros procesamos, clasificamos e indexamos las mismas.</p>
                        </div>
                        <div className="p-col">
                            <h2>Paso 5</h2>
                            <p>Consulte digitalmente su documentación.</p>
                        </div>
                    </div>

                    <div className="p-grid step-background" style={{ width: "70%"}}>
                        <div className="p-col">
                            <img src={StepOne} alt="" className="step-icon" />
                        </div>

                        <div className="p-col">
                            <img src={StepTwo} alt="" className="step-icon" />
                        </div>
                        <div className="p-col">
                            <img src={StepThree} alt="" className="step-icon" />
                        </div>
                        <div className="p-col">
                            <img src={StepFour} alt="" className="step-icon" />
                        </div>
                        <div className="p-col">
                            <img src={StepFive} alt="" className="step-icon" />
                        </div>

                    </div>

                    <div className="p-grid step-background" style={{ width: "70%" }}>
                        <div className="p-col p-ml-4">
                            <h2>Paso 2</h2>
                            <p>Envíe las imágenes digitalizadas de sus documentos.</p>
                        </div>

                        <div className="p-col p-ml-4">
                            <h2>Paso 4 </h2>
                            <p>Alta digital documental en sistema Sorprendeme.</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Steps