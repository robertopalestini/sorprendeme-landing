import Image from 'next/image'


const Steps = () => {
    return (
        <>

            <div className="card">
                <div className="card-container purple-container step-trazado">
                   

                <div className="">
                        <img src={`${process.env.PUBLIC_URL}images/step/Step1.svg`} className="step-trazado step-style" />
                        <img src={`${process.env.PUBLIC_URL}images/step/Step2.svg`} className="step-trazado step-style" />
                        <img src={`${process.env.PUBLIC_URL}images/step/Step3.svg`} className="step-trazado step-style" />
                        <img src={`${process.env.PUBLIC_URL}images/step/Step4.svg`} className="step-trazado step-style" />
                        <img src={`${process.env.PUBLIC_URL}images/step/Step5.svg`} className="step-trazado step-style" />
                    </div>
                    <div className="">
                        <img src={`${process.env.PUBLIC_URL}images/step/Stepper.svg`} className="step-trazado step-style" />
                    </div>
                    <div className="">
                        <img src={`${process.env.PUBLIC_URL}images/step/SearchIcon.svg`} className="step-searchIcon step-style" />
                    </div>


                </div>
                
            </div>

            <div style={{ position: "relative", }}>
                <img src={`${process.env.PUBLIC_URL}images/step/Background.png`} alt="" className='step-background' />
            </div>
        </>
    )
}

export default Steps