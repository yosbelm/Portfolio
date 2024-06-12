import BrainWhite from './assets/brainwhite.png'
import JavaScript from './assets/jscript.svg'
import HTML from './assets/html.svg'
import CSS from './assets/css.svg'
import React from './assets/react.svg'
import Python from './assets/piton.png'
import Pandas from './assets/pandas.png'
import GitHub from './assets/github-skill-light.png'
import Git from './assets/git.svg'
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
                    <div className='js-div'>
                        <img src={JavaScript} alt="Javascript logo" />
                        <p>JavaScript</p>
                    </div>
                    <div className='html-div'>
                        <img src={HTML} alt="HTML logo" />
                        <p>HTML5</p>
                    </div>
                    <div className='css-div'>
                         <img src={CSS} alt="CSS logo" />
                         <p>CSS3</p>
                    </div>
                    <div className='react-div'>
                         <img src={React} alt="React logo" />
                         <p>React</p>
                    </div>
                </div>
                <div className='backend-logo'>
                    <div>
                        <img src={Python} alt="Python logo" />
                        <p>Python</p>
                    </div>
                    <div>
                        <img src={Pandas} alt="Pandas logo" />
                        <p>Pandas</p>
                    </div>
                    <div>
                        <img src={Flet} alt="Flet logo" />
                        <p>Flet</p>
                    </div>
                </div>
                <div className='tech-logo'>
                    <div>
                        <img src={GitHub} alt="GitHub logo" />
                        <p>GitHub</p>
                    </div>
                    <div>
                        <img src={VSC} alt="Visual Studio Code logo" />
                        <p>VSC</p>
                    </div>
                    <div>
                        <img src={Git} alt="Git logo" />
                        <p>Git</p>
                    </div>
                </div>
            </div>
        </section>
    )
}