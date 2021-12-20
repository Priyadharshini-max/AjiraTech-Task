import Image from "../Images/Rectangle 6.png";
import "../Styles/Orders.style.css";

export default function Orders() {
    return (
        <div className="OrderDetails">
            <div className="orderHeading">
                <p>My Orders</p>
            </div>
            <div className="OrderDetail">
                <div>
                    <img src={Image} />
                </div>
                <div className="OrderDetail-Right">
                    <p>Order#12345678</p>
                    <p>Madeup White Cotton Blend</p>
                    <p>Checkered Slim Fit Shirt</p>
                    <p>Express Delivery by Sat, Aug 30</p>
                </div>
                <div className="Payment-Details">
                    <p>Credit Card Payment</p>
                    <p>Rs 1,899</p>
                    <p><i class="fas fa-chevron-down"></i></p>
                    <p>Pending</p>
                </div>
            </div>

            <div className="OrderDetail">
                <div>
                    <img src={Image} />
                </div>
                <div className="OrderDetail-Right">
                    <p>Order#12345678</p>
                    <p>Madeup White Cotton Blend</p>
                    <p>Checkered Slim Fit Shirt</p>
                    <p>Express Delivery by Sat, Aug 30</p>
                </div>
                <div className="Payment-Details">
                    <p>Credit Card Payment</p>
                    <p>Rs 1,899</p>
                    <p><i class="fas fa-chevron-down"></i></p>
                    <p>Pending</p>
                </div>
            </div>
            <div className="OrderDetail">
                <div>
                    <img src={Image} />
                </div>
                <div className="OrderDetail-Right">
                    <p>Order#12345678</p>
                    <p>Madeup White Cotton Blend</p>
                    <p>Checkered Slim Fit Shirt</p>
                    <p>Express Delivery by Sat, Aug 30</p>
                </div>
                <div className="Payment-Details">
                    <p>Credit Card Payment</p>
                    <p>Rs 1,899</p>
                    <p><i class="fas fa-chevron-down"></i></p>
                    <p>Delivered</p>
                </div>
            </div>
            <div className="OrderDetail">
                <div>
                    <img src={Image} />
                </div>
                <div className="OrderDetail-Right">
                    <p>Order#12345678</p>
                    <p>Madeup White Cotton Blend</p>
                    <p>Checkered Slim Fit Shirt</p>
                    <p>Express Delivery by Sat, Aug 30</p>
                </div>
                <div className="Payment-Details">
                    <p>Credit Card Payment</p>
                    <p className="amount">Rs 1,899</p>
                    <p><i class="fas fa-chevron-down"></i></p>
                    <p>Delivered</p>
                </div>
            </div>
        </div>
    )
}