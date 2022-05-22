import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1tdnBBi6FBKjNNZpraspypb005cwduYGLLtch7bXMzQ1CzrQJgLocZgLuX6Qp3TXbtH37WrelZsUpHm6NqmDbl009D1i6mzH"
);

const Payment = () => {
  const { id } = useParams();

  const url = `https://still-badlands-93657.herokuapp.com/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello, {appointment?.patientName}
          </p>
          <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
          <p>
            Your Appointment:
            <span className="text-orange-700 ml-2">
              {appointment.date}
            </span>{" "}
            <span className="mr-2">at</span>
            {appointment.slot}
          </p>
          <p>Please pay: ${appointment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
