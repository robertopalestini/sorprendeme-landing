import './solutions.css'
import './../../App.css'
import JornalYa from './../../images/JornalYaLogo.svg'
import SignBox from './../../images/SignBoxLogo.svg'
import Workflow from './../../images/WorkflowLogo.svg'

const Solutions = () => {
    return (
        <>
        <div className="solutions p-pb-4">
            <div className='p-d-flex  p-jc-center p-mt-4'>
                <h1 className="solutions-tittle">Conoce nuestras soluciones</h1>
            </div>
            <div className="p-d-flex p-flex-column p-flex-md-row p-jc-center p-mt-3 ">
                <div className="p-mr-2 p-d-flex  p-jc-center">
                    <img width="" height="" src={JornalYa} alt="" />

                </div>
                <div className="p-mr-2 p-d-flex  p-jc-center">
                    <img width="" height="" src={SignBox} alt="" />
                </div>
                <div className="p-d-flex  p-jc-center">
                    <img width="" height="" src={Workflow} alt="" />
                </div>
            </div>
        </div>
            </>
       
    )
}

export default Solutions