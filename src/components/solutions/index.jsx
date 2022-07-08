const Solutions = () => {
    return (
        <>


            <div className='solutions-relative'>
                <div className="card solutions-absolute">
                    <div className="card-container purple-container">

                        <div className='p-d-flex p-jc-center'>
                            <h1 className="solutions-tittle">Conoce nuestras soluciones</h1>
                        </div>
                        <div className="p-d-flex p-flex-column p-flex-md-row p-jc-center p-mt-3 p-ml-6 ">
                            <div className="p-mr-6 p-d-flex  p-jc-center md:p-m">
                                <img src={`${process.env.PUBLIC_URL}images/JornalYaLogo.svg`} alt="Jornal Ya Logo" />

                            </div>
                            <div className="p-mr-6 p-d-flex  p-jc-center">
                                <img src={`${process.env.PUBLIC_URL}images/SignBoxLogo.svg`} alt="Sign Box Logo" />
                            </div>
                            <div className="p-mr-6 p-d-flex  p-jc-center">
                                <img src={`${process.env.PUBLIC_URL}images/WorkflowLogo.svg`} alt="Workflow Logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={`${process.env.PUBLIC_URL}images/solutionsbackground.webp`} className="solutions-back" alt="soluciones" />
            </div>

        </>

    )


}

export default Solutions