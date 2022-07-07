const Solutions = () => {
    return (
        <>
        <div className="solutions p-pb-4">
            <div className='p-d-flex  p-jc-center p-mt-4'>
                <h1 className="solutions-tittle">Conoce nuestras soluciones</h1>
            </div>
            <div className="p-d-flex p-flex-column p-flex-md-row p-jc-center p-mt-3 p-ml-6 ">
                <div className="p-mr-6 p-d-flex  p-jc-center md:p-m">
                    <img width="" height="" src={`${process.env.PUBLIC_URL}images/JornalYaLogo.svg`} alt="" />

                </div>
                <div className="p-mr-6 p-d-flex  p-jc-center">
                    <img width="" height="" src={`${process.env.PUBLIC_URL}images/SignBoxLogo.svg`} alt="" />
                </div>
                <div className="p-mr-6 p-d-flex  p-jc-center">
                    <img width="" height="" src={`${process.env.PUBLIC_URL}images/WorkflowLogo.svg`} alt="" />
                </div>
            </div>
        </div>
            </>
       
    )
   
    
}

export default Solutions