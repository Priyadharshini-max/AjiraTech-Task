import "../Styles/madeupData.style.css";
import Dress from "../Images/dress.png";
import Img4 from "../Images/img4.png";
import Boy from "../Images/boy.png";

export default function MadeupData() {
    return (
        <div className="madeup-mainDiv">
            <div className="madeup-subDiv1">
                <button>Clothes that <span>respire</span></button>
                <button>for men who <span>aspire</span></button>
                <button>BROWSE COLLECTIONS</button>
            </div>
            <div className="madeup-subDiv2">
                <div className="img2Div">
                    <button><span>Summer</span> is here and</button>
                    <button>so is our <span>collection</span></button>
                </div>
                <div className="img3Div">
                    <div className="rightImg1">
                        <button><span>Wrinkle-free</span> t-shirts</button>
                    </div>
                    <div className="rightImg2">
                        <button><span>Stain-free</span> denim shirts</button>
                    </div>
                </div>
            </div>
            <div className="madeup-subDiv3">
                <p>LATEST COLLECTIONS</p>
            </div>
            <div className="madeup-subDiv4">
                <div>
                    <img src={Dress} />
                    <p>Printed Polo T-Shirt</p>
                    <p className="price">1,4999.00</p>
                </div>
                <div>
                    <img src={Img4} />
                    <p>Printed Polo T-Shirt</p>
                    <p className="price">1,4999.00</p>
                </div>
                <div>
                    <img src={Dress} />
                    <p>Printed Polo T-Shirt</p>
                    <p className="price">1,4999.00</p>
                </div>
                <div>
                    <img src={Img4} />
                    <p>Printed Polo T-Shirt</p>
                    <p className="price">1,4999.00</p>
                </div>
                <div>
                    <img src={Dress} />
                    <p>Printed Polo T-Shirt</p>
                    <p className="price">1,4999.00</p>
                </div>
            </div>
            <div className="madeup-subDiv5">
                <div className="item1">TESTIMONIALS</div>
                <div className="item2">
                    <div>
                        <img src={Boy} /></div>
                    <div className="details">
                        <div className="sub-details">
                            <div className="userName">Vikas</div>
                            <div className="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="description">Love the cloth material!
                            So breezy and comfortable. Really durable as well.
                            I must say the jeans
                            I bought was worth the price.
                        </div>
                    </div>
                </div>
                <div className="item3">
                    <div><img src={Boy} /></div>
                    <div className="details">
                        <div className="sub-details">
                            <div className="userName">Vikas</div>
                            <div className="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="description">Love the cloth material!
                            So breezy and comfortable. Really durable as well.
                            I must say the jeans
                            I bought was worth the price.
                        </div>
                    </div>
                </div>
                <div className="item4">
                    <div><img src={Boy} /></div>
                    <div className="details">
                        <div className="sub-details">
                            <div className="userName">
                                Vikas
                            </div>
                            <div className="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="description">Love the cloth material!
                            So breezy and comfortable. Really durable as well.
                            I must say the jeans
                            I bought was worth the price.
                        </div>
                    </div>
                </div>
            </div>
            <div className="madeup-subDiv6">
                <div>
                    <p> GET COUPONS & STYLE GUIDES</p>
                </div>
                <div>
                    <p>Subscribe to our Newsletter</p>
                </div>
                <div>
                    <input type="text" placeholder="E-mail ID" /><button>SUBSCRIBE</button>
                </div>

            </div>
            <div className="location"><p><span><i class="fas fa-map-marker-alt"></i></span>LOCATE  US</p></div>
            
        </div>
    )
}