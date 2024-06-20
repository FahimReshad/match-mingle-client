import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const CheckoutForm = ({biodata}) => {
  console.log(biodata);
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const price = 5;
  const statuss = "pending";

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price, statuss })
      .then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    //   confirm payment:
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("payment intent:", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // console.log(paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user?.email,
          price: price,
          biodata: biodata,
          transactionId: paymentIntent.id,
          date: new Date(),
          status: 'pending'
        }

        const res = await axiosSecure.post('/payments', payment)
        console.log('payment save', res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "payment successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }

      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="my-5 bg-[#66451c] text-white py-2 px-4 rounded font-poppins font-semibold hover:cursor-pointer"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Submit
        </button>
        <p className="text-red-600 text-xl">{error}</p>
        {transactionId && (
          <p className="text-green-600 text-xl">
            Your transaction id: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
