import React from 'react'
import './About.css'
import { Navbar ,Footer } from '../../component/index'
const About = () => {
    return (
        <>
            <div className='about'>
                <Navbar/>

                <h1>مركز متكامل لتجهيز الشركات وصناع المحتوى والمهووسين</h1>
                <p>الجزائري للتسوق معنا سوف تنطلق بعيدا بعالم الاكترونيات سوف نكون داعمين لكم  <br/> لاتحتار راسلنا اذا احببت المساعدة لدينا فريق دعم يلبي احتياجاتك ورغباتك <br/> لاتتردد في طلب المساعدة </p>
            </div>

            <Footer/>
        </>
    )
}

export default About
