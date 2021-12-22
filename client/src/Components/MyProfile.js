import "../Styles/Myprofile.style.css";

export default function MyProfile() {
    return (
        <div className="ProfileDetails">
            <div className="subProfileDetails">
                <div className="ProfileHeading">
                    <p>My Profile</p>
                </div>
                <div className="nameDiv">
                    <input type="text" placeholder="First name" className="firstName" />
                    <input type="text" placeholder="Last name" className="lastName"/>
                </div>
                <div className="mailDiv">
                    <input type="email" placeholder="Email" className="mailid"/>
                </div>
                <div>
                    <input type="number" placeholder="Phone number" />
                </div>
                <div>
                    <input type="password" placeholder="Password" />
                </div>
                <div>
                    <input type="password" placeholder="Confirm Password" />
                </div>
                <div>
                    <input type="button" value="Add New Address" />
                </div>
            </div>
        </div>
    )
}