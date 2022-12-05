import React from 'react'
import { Navbar, Footer } from '../../component/index'
import './Shopping.css'
import Prod from '../../assist/images/tp-link ax55.jpg'
const Shopping = () => {
    return (
        <>
            <div className="products">
                <Navbar />
                <h1>هنا جميع المنتجات التي قمت باختيارها</h1>
                <p> هنا ستجد جميع المواد التي تم اضافتها الى عربة التسوق يمكنك تأكيد عملية الشراء <br /> وازالتها وتغييرها وطلب المساعدة ان احببت  </p>
                
            </div>


            <div class="product-card">
                <div class="badge">Hot</div>

                <div class="product-tumb">
                    <img src={Prod} alt="" />
		        </div>

                    <div class="product-details">
                        <span class="product-catagory">tp-link ax55</span>
                        <h4><a href="">tp-link ax55</a></h4>
                        <p>TP-Link OneMesh™ Flexibly Create Whole Home WiFi with Archer AX55 ... Want to build a whole-home Wi-Fi? Archer AX55 supports OneMesh to form seamless whole-home ...</p>
                        
                        <div class="product-bottom-details">
                            <div class="product-price"><small>$89.99</small>$59.99</div>
                            <div class="product-links">
                                <a href=""><i class="fa fa-heart"></i></a>
                                <a href=""><i class="fa fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-card">
                <div class="badge">Hot</div>

                <div class="product-tumb">
                    <img src={Prod} alt="" />
		        </div>

                    <div class="product-details">
                        <span class="product-catagory">tp-link ax55</span>
                        <h4><a href="">tp-link ax55</a></h4>
                        <p>TP-Link OneMesh™ Flexibly Create Whole Home WiFi with Archer AX55 ... Want to build a whole-home Wi-Fi? Archer AX55 supports OneMesh to form seamless whole-home ...</p>
                        
                        <div class="product-bottom-details">
                            <div class="product-price"><small>$89.99</small>$59.99</div>
                            <div class="product-links">
                                <a href=""><i class="fa fa-heart"></i></a>
                                <a href=""><i class="fa fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
        </>
            )
        }
        
        export default Shopping
