import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Checkout = () => {
  const biodata = useLoaderData();
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm biodata={biodata}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Checkout;
