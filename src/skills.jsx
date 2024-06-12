import BrainWhite from './assets/brainwhite.png'
import JavaScript from './assets/jscript.svg'
import HTML from './assets/html.svg'
import CSS from './assets/css.svg'
import React from './assets/react.svg'
import Python from './assets/python.svg'
import Pandas from './assets/pandas.png'
import GitHub from './assets/github.png'
import Git from './assets/git.png'
import VSC from './assets/vsc.png'
import Flet from './assets/flet.png'


export const Skills = () => {
    return(
        <section className="skills-section" id="skills">
            <div className='banner-skills'>
                <img className='img-brain' src={BrainWhite} alt="brain" />
                <h2 className='skills-text'>Skills</h2>
            </div>
            <div className='logos-prog'>
                <div className='frontend-logo'>
                    <img src={JavaScript} alt="Javascript logo" />
                    <img src={HTML} alt="HTML logo" />
                    <img src={CSS} alt="CSS logo" />
                    <img src={React} alt="React logo" />
                </div>
                <div className='backend-logo'>
                    <img   src={Python} alt="Python logo" />
                    <img src={Pandas} alt="Pandas logo" />
                    <img src={JavaScript} alt="Javascript logo" />
                </div>
                <div className='technologys-logo'>
                    <img src={GitHub} alt="GitHub logo" />
                    <img src={VSC} alt="Visual Studio Code logo" />
                    <img src={Git} alt="Git logo" />
                </div>
            </div>
        </section>
    )
}