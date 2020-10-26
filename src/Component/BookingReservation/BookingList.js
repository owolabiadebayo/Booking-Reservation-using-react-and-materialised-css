import React from "react";
import Bookingitems from "./BookingItems";
import "./Booking.css";

const BookingList = ({ Bookings, DeleteDataInput, SaveDataInput }) => (
  <section className="Bookings">
    {Bookings.map((Booking, bookindex) => (
      <Bookingitems
        key={bookindex}
        Id={Booking.Id}
        ImgLocation={Booking.ImgLocation}
        DeleteDataInput={DeleteDataInput}
        SaveDataInput={SaveDataInput}
        Weather={Booking.Weather}
        Country={Booking.Country}
        HotelInfo={Booking.HotelInfo}
        Location={Booking.location}
      />
    ))}
  </section>
);

export default BookingList;
