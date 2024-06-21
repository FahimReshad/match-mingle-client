/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
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

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price }, {withCredentials: true})
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
    <div className="md:w-1/2 lg:w-1/3 mx-auto mt-10">
      <h3 className="">Please provide your card number and submit it paying the fee <span className="text-[#66451c]">[5 USD]</span></h3>
      <form onSubmit={handleSubmit}>
        <label className="font-semibold">Biodata Id:</label>
        <input className="w-full p-2 font-poppins font-semibold mb-2" type="text" value={biodata.biodataId} readOnly />
        <label className="font-semibold">Self Email:</label>
        <input className="w-full p-2 font-poppins font-semibold mb-4" type="text" value={user?.email} readOnly />
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#000000",
                "::placeholder": {
                  color: "#000000",
                  fontSize: 'bold'
                },
              },
              invalid: {
                color: "#000000",
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
