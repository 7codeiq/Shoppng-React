import React from 'react'
import './Home.css'

import { Navbar ,Footer } from '../../component/index'
import Hero from "../../assist/images/Hero.png"
import delivery from "../../assist/images/delivery.png"

import camera from "../../assist/images/camera.png"
import mobile from "../../assist/images/mobile.png"
import phone from "../../assist/images/phone.png"
import smart from "../../assist/images/smart.png"
const Home = () => {
    return (
        <>
            <header>
                <Navbar />

                <div className="hero">
                    <div className="text-hero">
                        <h1>تسوق وانت في منزلك ابني احلامك معنا </h1>
                        <p> مع الجزائري لاداعي ان تذهب بعيدا سوف نجهزك بكل شيء استرح ودعنا نعمل عنك<br />
                            جعلنا كل شيء سهل جميع المواد والادوات واللاكترونيات تجدها هنا
                </p>
                    </div>

                    <div>
                        <img src={Hero} />
                    </div>


                </div>
            </header>

            <h1 className="head-home">المنتجات الاكثر طلباً</h1>
            <div class="container">

                <div class="card first">
                    <a class="back" href="#">
                        <div class="screen"></div>
                    </a>
                    <div class="description">
                        <h2><a href="#">ACER A270 ABI LED-MONITOR 68.6CM (27)</a></h2>
                    </div>
                    <div class="shop">
                        <h3>799<span>$</span></h3>
                        <button>شراء</button>
                    </div>
                </div>

                <div class="card second" href="#">
                    <a class="back" href="#">
                        <div class="screen"></div>
                    </a>
                    <div class="description">
                        <h2><a href="#">CANON INK GI-490M MAGENTA BOTTLE</a></h2>
                    </div>
                    <div class="shop">
                        <h3>799<span>$</span></h3>
                        <button>شراء</button>
                    </div>
                </div>

                <div class="card third" href="#">
                    <a class="back" href="#">
                        <div class="screen"></div>

                    </a>
                    <div class="description">
                        <h2><a href="#">CANON PIXMA TS205 BLACK PRINTER COLOR</a></h2>
                    </div>
                    <div class="shop">
                        <h3>799<span>$</span></h3>
                        <button>شراء</button>
                    </div>
                </div>

                <div class="card four" href="#">
                    <a class="back" href="#">
                        <div class="screen"></div>
                    </a>
                    <div class="description">
                        <h2><a href="#">JABRA EVOLVE CHARGING STAND 65 MS MONO</a></h2>
                    </div>
                    <div class="shop">
                        <h3>799<span>$</span></h3>
                        <button>شراء</button>
                    </div>
                </div>

                <div class="card five">
                    <a class="back" href="#">
                        <div class="screen"></div>

                    </a>
                    <div class="description">
                        <h2><a href="#">VIDEO CONFERENCING SOLUTION 8100-119 PANACAST MSPANORAMIC</a></h2>
                    </div>
                    <div class="shop">
                        <h3>799<span>$</span></h3>
                        <button>شراء</button>
                    </div>
                </div>

                <div class="card six" href="#">
                    <a class="back" href="#">
                        <div class="screen"></div>

                    </a>
                    <div class="description">
                        <h2><a href="#">KEYBOARD USB LOGITECH OEM K120 BLACK</a></h2>
                    </div>
                    <div class="shop">
                        <h3>799<span>$</span></h3>
                        <button>شراء</button>
                    </div>
                </div>

                <div class="card seven" href="#">
                    <a class="back" href="#">
                        <div class="screen"></div>

                    </a>
                    <div class="description">
                        <h2><a href="#">KINGSTON SSD</a></h2>
                    </div>
                    <div class="shop">
                        <h3>799<span>$</span></h3>
                        <button>شراء</button>
                    </div>
                </div>

                <div class="card eight" href="#">
                    <a class="back" href="#">
                        <div class="screen"></div>
                    </a>
                    <div class="description">
                        <h2><a href="#">LOGITECH H151 HEADSET</a></h2>
                    </div>
                    <div class="shop">
                        <h3>799<span>$</span></h3>
                        <button>شراء</button>
                    </div>
                </div>

            </div>


            <div className="delivery">
                <div className="text-delivery">
                    <h2>من خدماتنا ابقى في منزلك وجميع المنتجات تصلك بأمان</h2>
                    <p>كل ما تحتاجه  يصل لكم بضغطة زر وخلال دقائق وبخدمات متوفرة 24/7 إكتشف المزيد. <br /> يتم تسليم منتجاتنا في أكياس حرارية للحفاظ على درجة حرارة الأصناف الطازجة.<br />  كل ما تحتاجه في مكان واحد.</p>
                </div>

                <div className="img-delivery">
                    <img src={delivery} />
                </div>
            </div>

            <div className="prod">
                <div className="prod-1">
                    <img src={camera} />
                    <img src={mobile} />
                </div>
                <div className="prod-2">
                <img src={phone} />
                <img src={smart} />
                </div>
            </div>

            <div className="search">

                <form id="searchbox5">
                    <input id="search5" type="text" placeholder="بحث..." />
                </form>

                <h3>ابحث عن المنتجات</h3>

            </div>

            <Footer />
        </>
    )
}

export default Home
