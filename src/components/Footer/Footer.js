import React from 'react';
import './Footer.scss'
const Footer = () => {
    return (
        <footer>
            <p className="medium">Zapraszamy do kontaktu</p>
            <p>sala.jedrzejewski@gmail.com</p>
            <p>+48 501-344-519</p>
            <p className="medium">lub do odwiedzin</p>
            <p>Sala Jędrzejewski</p>
            <p>Natolin 43</p>
            <p>05-825</p>
            <p>Grodzisk Mazowiecki</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.891959264463!2d20.620350816151774!3d52.136286779743386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719492b4577e6a1%3A0x6a70b4e95891e08c!2sSala+J%C4%99drzejewski!5e0!3m2!1spl!2spl!4v1557329068413!5m2!1spl!2spl" 
                    width="100%" 
                    height="250px" 
                    frameBorder="0" 
            />
        </footer>
    );
};

export default Footer;