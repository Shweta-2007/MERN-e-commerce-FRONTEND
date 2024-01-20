import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "qwertyu",
    photo:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1664581580690",
    name: "Macbook",
    price: 85000,
    quantity: 4,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCouponCode(true);
      } else {
        setIsValidCouponCode(false);
      }
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, index) => {
            return <CartItem cartItem={i} key={index} />;
          })
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal} </p>
        <p>Shipping Charges: ₹{shippingCharges} </p>
        <p>Tax: ₹{tax} </p>
        <p>
          Discount: <em className="red">- ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input
          type="text"
          value={couponCode}
          placeholder="Coupon Code"
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
        {cartItems.length > 0 && <Link to={"/shipping"}>Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
