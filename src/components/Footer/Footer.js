import React from 'react'
import '../Footer/Footer.css';
const Footer = () => {
    return ( <
        div className = "footer" >
        <
        span className = "name" >
        Inshorts clone made by - { "  " } <
        a href = "https://www.linkedin.com/in/himani-jindal-06660b1a9/"
        target = "_blank" > Himani < /a>   <
        /
        span > <

        hr style = {
            { width: "90%" }
        }
        />  <
        div className = "iconContainer" >
        <
        a href = ""
        target = "_blank" >
        <
        i class = "fab fa-instagram-square fa-2x" > < /i>          < /
        a > <
        a href = "https://www.linkedin.com/in/himani-jindal-06660b1a9/"
        target = "_blank" >
        <
        i class = "fab fa-linkedin fa-2x" > < /i>       < /
        a >
        <
        a href = "netlify"
        target = "_blank" >
        <
        i class = "fas fa-link fa-2x" > < /i>       < /
        a >
        <
        /div> < /
        div >
    )
}

export default Footer;