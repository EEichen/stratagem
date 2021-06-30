import React from 'react'
import ghLogo from '../../images/ghLogo.png'

const Footer = () => {
    return(
        <div className='footer'>
            <span>
                Created by: Elias Eichen <a className='gh-link' href="https://github.com/EEichen"><img src={ghLogo} alt="GitHub" /></a>
            <span><a className='li-link' href="https://www.linkedin.com/in/elias-eichen-bb15a4198/"><i id='liico' class="fab fa-linkedin-in"></i></a></span>
            </span>
        </div>
    )
}

export default Footer