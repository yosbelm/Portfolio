import LogoP from './assets/curlybrackets.png'
import Proyectimg from './assets/proyectimage.webp'

export const Proyects = () => {
    return(
        <section id= "proyects" className='proyects-section'>
            <div className='banner-proyects'>
                <img className='img-logop' src={LogoP} alt="Logo de la programacion" />
                <h2 className='proyect-text'>Proyectos</h2>
            </div>
            <div className='proyect-calculator'>
                <div className='container-proyect-img'>
                    <img className='proyect-image' src={Proyectimg} alt="" />
                    <p className='proyect-image-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis quae placea</p>
                </div>
                <div className='container-proyect-descrip'>
                    <div>
                        <h2 className='proyect-description'>Pediatric Percentile Calculator</h2>
                        <p className='proyect-short-info'>
                            Calculator for pediatric percentiles, specifically for the weight-for-age, height-for-age, and weight-for-height percentiles. It takes in the child's sex, age (in months or years), height, and weight as inputs and returns the corresponding percentile values.
                        </p>
                    </div>
                    <div className='buttons-proyect'>
                        <button className='button-github-code' onClick={()=> location.href = 'https://github.com/yosbelm/pediatric_percentile_calculator'}>Code</button>
                        <button className='button-proyect-info'>Info</button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}