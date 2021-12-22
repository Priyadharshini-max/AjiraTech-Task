import "../Styles/Navbar.style.css";
import { useContext } from "react";
import { mycontext } from "../Config/contex";

export default function Header() {
    const { User, changeUser } = useContext(mycontext);

    const ChangeComponent = () => {
        console.log("mydata");
        changeUser("mydata");
    }

    const ChangeUserComponent = () => {
        console.log("profile");
        changeUser("profile");
    }

    return (
        <div className='Nav-Content'>
            <ul type='none'>
                <div className="navDiv1">
                    <li style={{ background: "red", color: "white", padding: "2px 3px", cursor: "pointer" }} onClick={ChangeComponent}>MADE UP</li>
                </div>
                <div className="navDiv2">
                    <li style={{ color: "red" }}>For Me</li>
                    <li>Jeans</li>
                    <li>Shirts</li>
                    <li>T-Shirts</li>
                    <li>Trousers</li>
                    <li>Joggers</li>
                    <li>Shorts</li>
                </div>
                <div className="navDiv3">
                    <li><i className="fa fa-search"></i></li>
                    <li><i className="fas fa-shopping-cart"></i></li>
                    <li><i className="fa fa-heart"></i></li>
                    <li><i className="fa fa-user" style={{ cursor: "pointer" }} onClick={ChangeUserComponent}></i></li>
                </div>
            </ul>
        </div>
    )
}