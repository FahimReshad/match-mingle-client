import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Checkout = () => {
  const biodata = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Match Mingle || Checkout</title>
      </Helmet>
      <Elements stripe={stripePromise}>
        <CheckoutForm biodata={biodata}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Checkout;
