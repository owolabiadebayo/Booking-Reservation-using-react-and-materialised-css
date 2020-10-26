import { act } from "@testing-library/react";

const initState = {
  
  Bookings: [],
};

 fetch("./Data.json")
   .then((response) => response.json())
   .then((res) => initState.Bookings.push(res))

console.log(initState.Bookings);
export const Reducer = (state = initState, action) =>{
  return(
      if(action.type === 'AddDataInput'){
        return(
         Booking:  
        )
      }
  )

}

 