import ArrowIcon from './../../images/arrow.svg'
import './form.css'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import MailIcon from './../../images/contact/material-mail-outline.svg'
import PhoneIcon from './../../images/contact/material-phone-in-talk.svg'
import PhoneLinkIcon from './../../images/contact/material-phonelink-ring.svg'


const Form = () => {
    return (
        <>
<div className='p-d-flex p-jc-center'>
<h1 className="form-tittle">¿Cómo podemos ayudarlo?</h1>
</div> 
<div className='p-d-flex p-jc-center'>
<p className="form-p">Llene el formulario ó contáctese con nuestro asistente comercial.</p>
</div> 


<div className='p-d-flex p-jc-center p-mt-4'>
                <div className="p-grid">
                    <div className="p-col  p-jc-center ">
                    <p >
                    <img src={PhoneIcon} alt="" className="p-mr-3"/>  
                        (0351) 153 88 32 57
                    </p>
                    <p>
                    <img src={PhoneLinkIcon} alt="" className="p-mr-3"/>  
                        (0351) 496 1326 int. 1009
                    </p>
                    <p>
                    <img src={MailIcon} alt="" className="p-mr-3"/>  
                        comercial@boxcustodia.com
                    </p>
            <p className="about-p-link p-d-flex">Conocé nuestra empresa Box custodia 
                <img src={ArrowIcon} alt="" className="p-ml-3"/>  
</p>
                    {/* <div className='p-d-flex p-jc-center  '>
</div>  */}
                    </div>
                    <div className="p-col p-d-flex ">
                    <div className="p-fluid p-formgrid p-grid">
    <div className="p-field p-col-12 p-md-12">
        <InputText id="nombreyapellido" placeholder="Nombre y apellido" type="text" />
    </div>
    <div className="p-field p-col-12 p-md-12">
        <InputText id="telefono" placeholder="Telefono" type="text" />
    </div>
    <div className="p-field p-col-12 p-md-12">
        <InputText id="email" placeholder="Email" type="text" />
    </div>
    <div className="p-field p-col-12 p-md-12">
        <InputText id="empresa" placeholder="Empresa" type="text" />
    </div>
    <div className="p-field p-col-12 p-md-12">
        <InputTextarea id="mensaje" placeholder="Mensaje" type="text" />
    </div>
    <div className="p-field p-col-12">
    <Button type="button" label="Enviar" className="form-button"/>
    </div>
</div>
                    </div>
                </div>
            </div>



        
            </>
       
    )
}

export default Form