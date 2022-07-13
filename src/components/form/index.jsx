import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const LabelForm =
    <>
        <p className="form-button">Enviar <img width="" height="" src={`${process.env.PUBLIC_URL}images/contact/Icon material-s.svg`} style={{ marginLeft: "10px" }} alt="Contact icon" /> </p>
    </>


const Form = () => {
    return (
        <div id="form">

            <div className='p-d-flex p-jc-center'>
                <h1 className="form-tittle">¿Cómo podemos ayudarlo?</h1>
            </div>
            <div className='p-d-flex p-jc-center'>
                <p className="form-p">Llene el formulario ó contáctese con nuestro asistente comercial.</p>
            </div>

            <div className="p-d-none p-d-md-inline">
                <div className='p-d-flex p-jc-center p-mt-4'>
                    <div className="p-grid">
                        <div className="p-col  p-jc-center " style={{ marginLeft: "20%" }}>
                            <p className="contact-p">
                                <img width="" height="" src={`${process.env.PUBLIC_URL}images/contact/material-phone-in-talk.svg`} alt="" className="p-mr-3" style={{ height: "23px", width: "23px" }} />
                                (0351) 153 88 32 57
                            </p>
                            <p className="contact-p">
                                <img width="" height="" src={`${process.env.PUBLIC_URL}images/contact/material-phonelink-ring.svg`} alt="" className="p-mr-3" style={{ height: "23px", width: "23px" }} />
                                (0351) 496 1326 int. 1009
                            </p>
                            <p className="contact-p">
                                <img width="" height="" src={`${process.env.PUBLIC_URL}images/contact/material-mail-outline.svg`} alt="" className="p-mr-3" style={{ height: "23px", width: "23px" }} />
                                comercial@boxcustodia.com
                            </p>

                        </div>
                        <div className="p-col p-d-flex  " style={{ marginLeft: "-20%" }}>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col-8 p-md-8">
                                    <InputText id="nombreyapellido" placeholder="Nombre y apellido" type="text" />
                                </div>
                                <div className="p-field p-col-8 p-md-8">
                                    <InputText id="telefono" placeholder="Telefono" type="text" />
                                </div>
                                <div className="p-field p-col-8 p-md-8">
                                    <InputText id="email" placeholder="Email" type="text" />
                                </div>
                                <div className="p-field p-col-8 p-md-8">
                                    <InputText id="empresa" placeholder="Empresa" type="text" />
                                </div>
                                <div className="p-field p-col-8 p-md-">
                                    <InputTextarea id="mensaje" placeholder="Mensaje" type="text" />
                                </div>
                                <div className="p-field p-col-8">
                                    <Button type="button" label={LabelForm} className="form-button" style={{ "height": "50px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-d-md-none">
                <div style={{"position": "absolute","left":"20vw"}}>
                    <div className='p-d-flex p-md-jc-center p-md-ai-center p-mt-4'>
                        <div className=" p-md-jc-center ">
                            <div className="p-jc-center" style={{maxWidth:"80vw"}}>
                                <p className="form-info">
                                    <img width="" height="" src={`${process.env.PUBLIC_URL}images/contact/material-phone-in-talk.svg`} alt="" className="p-mr-3" />
                                    (0351) 153 88 32 57
                                </p>
                                <p className="form-info">
                                    <img width="" height="" src={`${process.env.PUBLIC_URL}images/contact/material-phonelink-ring.svg`} alt="" className="p-mr-3" />
                                    (0351) 496 1326 int. 1009
                                </p>
                                <p className="form-info">
                                    <img width="" height="" src={`${process.env.PUBLIC_URL}images/contact/material-mail-outline.svg`} alt="" className="p-mr-3" />
                                    comercial@boxcustodia.com
                                </p>

                            </div>
                            <div className="p-d-flex ">
                                <div className="p-fluid p-formgrid p-grid">
                                    <div className="p-field p-col-2 p-md-2">
                                        
                                    </div>
                                </div>
                                <div className="p-fluid p-formgrid p-grid">
                                    <div className="p-field p-col-8 p-md-8">
                                        <InputText id="nombreyapellido" placeholder="Nombre y apellido" type="text" />
                                    </div>
                                    <div className="p-field p-col-8 p-md-8">
                                        <InputText id="telefono" placeholder="Telefono" type="text" />
                                    </div>
                                    <div className="p-field p-col-8 p-md-8">
                                        <InputText id="email" placeholder="Email" type="text" />
                                    </div>
                                    <div className="p-field p-col-8 p-md-8">
                                        <InputText id="empresa" placeholder="Empresa" type="text" />
                                    </div>
                                    <div className="p-field p-col-8 p-md-">
                                        <InputTextarea id="mensaje" placeholder="Mensaje" type="text" />
                                    </div>
                                    <div className="p-field p-col-8">
                                        <Button type="button" label={LabelForm} className="form-button" style={{ "height": "50px" }}  />
                                    </div>

                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="p-fluid p-formgrid p-grid" style={{"position":"relative"}}>
                                   a
                                </div>
        </div>

    )
}

export default Form