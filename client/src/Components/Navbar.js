import "../Styles/Navbar.style.css";
import Profile from "../Images/image 1.png";
export default function NavbarFn() {
    return (

        <div className='mainDiv'>
            <div className='Nav-Content'>
                <ul type='none'>
                    <li>MADE UP</li>
                    <li>For Me</li>
                    <li>Jeans</li>
                    <li>Shirts</li>
                    <li>T-Shirts</li>
                    <li>Trousers</li>
                    <li>Joggers</li>
                    <li>Shorts</li>
                    <li><i class="fa fa-search"></i></li>
                    <li><i class="fas fa-shopping-cart"></i></li>
                    <li><i class="far fa-heart"></i></li>
                    <li><i class="far fa-user"></i></li>
                </ul>
            </div>
            <div className="secondDiv">
                <p>Home / My Profile</p>
            </div>
            <div className="thirdDiv">
                <div className="thirdDiv-Left">
                    <div className="profileDetails">
                        <div ><img src={Profile} /></div>
                        <div className="profileName">
                            <p>Grishk</p>
                            <p>griiskaim@gmail.com</p>
                        </div>
                    </div>
                    <div className="profileDetails">
                        <div className="profileName">
                            <p>My Profile</p>
                            <p>Notifications, password</p>
                        </div>
                        <div className="rightArrow"><i class="fas fa-chevron-right"></i></div>
                    </div>
                    <div className="profileDetails">
                        <div className="profileName">
                            <p>My orders</p>
                            <p>Already have 12 orders</p>
                        </div>
                        <div className="rightArrow"><i class="fas fa-chevron-right"></i></div>
                    </div>
                    <div className="profileDetails">
                        <div className="profileName">
                            <p>Shipping addresses</p>
                            <p>3 addresses</p>
                        </div>
                        <div className="last-rightArrow"><i class="fas fa-chevron-right"></i></div>
                    </div>
                </div>
                <div className="fourthDiv">
                  
                </div>
            </div>
        </div>

    )
}