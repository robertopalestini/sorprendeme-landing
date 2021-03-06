const Solutions = () => {
    return (
        <>
            <div className="p-d-none p-d-md-inline">
                <div className='solutions-relative'>
                    <div className="card solutions-absolute">
                        <div className="card-container purple-container">
                            <div className='p-d-flex p-jc-center'>
                                <h1 className="solutions-tittle">Conoce nuestras soluciones</h1>
                            </div>
                            <div className="p-d-flex p-flex-column p-flex-md-row p-jc-center p-mt-3  ">
                                <div className="p-mr-6 p-d-flex  p-jc-center md:p-m">
                                    <img src={`${process.env.PUBLIC_URL}images/JornalYaLogo.svg`} className="solutions-maxwidth" alt="Jornal Ya Logo" />

                                </div>
                                <div className="p-mr-6 p-d-flex  p-jc-center">
                                    <img src={`${process.env.PUBLIC_URL}images/SignBoxLogo.svg`} className="solutions-maxwidth" alt="Sign Box Logo" />
                                </div>
                                <div className="p-mr-6 p-d-flex  p-jc-center">
                                    <img src={`${process.env.PUBLIC_URL}images/WorkflowLogo.svg`} className="solutions-maxwidth" alt="Workflow Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}images/solutionsbackground.webp`} className="solutions-back" alt="soluciones" />
                </div>
            </div>


            <div class="p-d-md-none grid justify-items-center py-5" style={{ backgroundColor: "#4a50fd" }} >
                <div>
                    <h1 className="solutions-tittle">Conoce nuestras soluciones</h1>
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}images/JornalYaLogo.svg`} className="solutions-maxwidth" alt="Jornal Ya Logo" />
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}images/SignBoxLogo.svg`} className="solutions-maxwidth" alt="Sign Box Logo" />
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}images/WorkflowLogo.svg`} className="solutions-maxwidth" alt="Workflow Logo" />
                </div>

            </div>

        </>

    )


}

export default Solutions