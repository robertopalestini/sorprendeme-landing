const About = () => {
    return (
        <>
            <div className='p-d-flex p-jc-center p-mt-6  '>
            <img width="" height="" src={`${process.env.PUBLIC_URL}images/logo_header.svg`}  className="about-logo"/>  
            </div> 
            <div className='p-d-flex p-jc-center p-mt-2 '>
            <p className="about-p">Somos una compañia argentina apasionada por la innovación! Con más de 25 aos de experiencia y trayectoria, nuestra unidad de negocio "Software as a Service" revoluciona y simplifica la gestión de tus procesos de negocio a través de  la digitalización.</p> 
            </div> 
            <div className='p-d-flex p-jc-center p-mb-4 '>
            <p className="about-p-link p-d-flex">Conocé nuestra empresa Box custodia 
                <img width="" height="" src={`${process.env.PUBLIC_URL}images/arrow.svg`} className="p-ml-3"/>  
</p>
</div> 
            
        </>
       
    )
}

export default About