import LogoP from './assets/curlybrackets.png'
import Proyectimg from './assets/proyectimage.webp'
import GitHub from './assets/octocat1.png'
import Python from './assets/python.png'
import Pandas from './assets/pandas.png'
import Flet from './assets/flet.png'

export const Proyects = () => {
    return(
        <section id= "proyects" className='proyects-section'>
            <div className='banner-proyects'>
                <img className='img-logop' src={LogoP} alt="Logo de la programacion" />
                <h2 className='proyect-text'>Proyects</h2>
            </div>
            <div className='proyect-calculator'>
                <div className='container-proyect-img'>
                    <img className='proyect-image' src={Proyectimg} alt="" />
                    <div className='proyect-image-text'>
                        <div className='tech-used'>
                            <img src={Python} alt="Python logo" />
                            <img src={Pandas} alt="Pandas logo" />
                            <img className="flet-logo" src={Flet} alt="Flet logo" />
                        </div>
                    </div>
                </div>
                <div className='container-proyect-descrip'>
                    <div>
                        <h2 className='proyect-description'>Pediatric Percentile Calculator</h2>
                        <p className='proyect-short-info'>
                        The Pediatric Percentile Calculator is an essential tool designed to offer quick and accurate assessments of a child's growth patterns, comparing their weight, height,<br />
                         and body composition against standardized percentiles. 
                        </p>
                    </div>
                    <div className='buttons-proyect'>
                        <button className='button-github-code' onClick={()=> location.href = 'https://github.com/yosbelm/pediatric_percentile_calculator'}>
                            <span className='code-github-button'>
                                <img className='github-button' src={GitHub} alt="Github logo" />
                                <p className='text-button'>Code</p>
                            </span>
                        </button>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    )
}