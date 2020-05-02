import React from 'react'
import Logo from '../../images/Garden-Guru-Transparent-Tiny.png'
import './style.css'


function Title(){
    return(
        <React.Fragment>
        <h1 className = 'gg-title col-md-12'><span><img alt="Left Logo" className ="title-logo" src={Logo}/></span>GARDEN GURU<span><img alt="Right Logo" className ="title-logo" src={Logo}/></span></h1>
        </React.Fragment>
    )
}

export default Title