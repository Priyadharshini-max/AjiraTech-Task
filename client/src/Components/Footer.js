import { useContext, useEffect } from "react";
import { mycontext } from "../Config/contex";
import "../Styles/Navbar.style.css";

export default function Footer() {
    const { User, changeUser } = useContext(mycontext);
    useEffect(() => {
        console.log("footer");
        console.log(User);
    })
    
    return (
        <div className="footer">
            <div className="footerDiv1">
                <p>About Us</p>
                <p>Delivery Information</p>
                <p>Return & Exchange</p>
                <p>Technical & Privacy</p>
                <p>Order Status</p>
            </div>
            <div className="footerDiv2">
                <p>MADE UP</p>
                <p>Stay in touch with us</p>
                <p><span><i class="fab fa-facebook"></i></span>
                    <span><i class="fab fa-instagram"></i></span>
                    <span><i class="fab fa-youtube"></i></span>
                </p>
            </div>
            <div className="footerDiv3">
                <p>Our Corporate Office</p>
                <p>No: 7,A2B road,Adayar Rajpuram </p>
                <p>T-Nagar, Chennai-642002</p>
                <div className="footerDiv3-SubDiv" >
                    <p><span><i class="fas fa-envelope"></i></span><span>sales@derbymen.com</span></p>
                    <p><span><i class="fas fa-phone-alt"></i></span><span>044 5566 6889</span></p>
                </div>
            </div>
        </div>
    )
}