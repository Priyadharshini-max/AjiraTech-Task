import "../Styles/Navbar.style.css";
import Profile from "../Images/image 1.png";
import { useContext, useEffect, useState } from "react";
import Orders from "./Orders";
import MyProfile from "./MyProfile";
import { mycontext } from "../Config/contex";
import MadeupData from "./MadeUpData";
import Footer from "./Footer";

export default function NavbarFn() {
    const [state, setState] = useState("profile");
    const { User, changeUser } = useContext(mycontext);

    const changeorderComponent = () => {
        setState("order");
    }

    const changeProfileComponent = () => {
        setState("profile")
    }

    useEffect(() => {
        console.log(User);
    }, [])

    useEffect(() => {
        console.log(User);
    })
    return (
        <div>
            {User == "mydata" ? <MadeupData /> :
                <div className='mainDiv'>
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
                            <div className="profileDetails" onClick={changeProfileComponent} style={{ cursor: "pointer" }}>
                                <div className="profileName">
                                    <p>My Profile</p>
                                    <p>Notifications, password</p>
                                </div>
                                <div className="rightArrow"><i class="fas fa-chevron-right"></i>
                                </div>
                            </div>

                            <div className="profileDetails" onClick={changeorderComponent} style={{ cursor: "pointer" }}>
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
                            {state == "profile" ? <MyProfile /> : <Orders />}
                        </div>
                    </div>
                    <Footer />
                </div>
            }

        </div>
    )
}