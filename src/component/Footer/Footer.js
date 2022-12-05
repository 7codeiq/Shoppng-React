import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
import Logo from "../../assist/images/Logo.png"
const Footer = () => {
    return (
        <>
           <footer class="footer-distributed">

<div class="footer-left">

    <img src={Logo} />

    <p class="footer-links">

        <Link to="/" >الرئيسية</Link>
        
        <Link to="/Products" >المنتجات</Link>
    
        <a href="#">عربة التسوق</a>
    
        <a href="#">من نحن</a>
        
        <a href="#">اتصل بنا</a>
        
    </p>

    <p class="footer-company-name">الجزائري للتسوق © 2023</p>
</div>

<div class="footer-center">

    <div>
        <i class="fa fa-map-marker"></i>
        <p><span>  العنوان :</span> بغداد المنصور مول المنصور طابق 3</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>9647733013115+</p>
        
    </div>
    <div>
        <i class="fa fa-phone"></i>
        <p>9647509151360+</p>        
    </div>


    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:mortada.teach@outlook.com">mortada.teach@outlook.com</a></p>
    </div>

</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span>الجزائري للتسوق</span>
        مع الجزائري لاداعي ان تذهب بعيدا سوف نجهزك بكل شيء استرح ودعنا نعمل عنك
جعلنا كل شيء سهل جميع المواد والادوات واللاكترونيات تجدها هنا
    </p>

    <div class="footer-icons">

        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>

    </div>

</div>

</footer>
        </>
    )
}

export default Footer
