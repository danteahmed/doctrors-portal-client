import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center transition duration-500 hover:scale-110">
      <div className="card-body text-center">
        <h2 className="text-2xl text-secondary font-semibold text-center">
          {name}
        </h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">
              Not Available: Please Try Another Day
            </span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p><small>Price: ${price}</small></p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length == 0}
            htmlFor="booking-modal"
            className="btn modal-button btn bg-gradient-to-r from-secondary to-primary uppercase text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
