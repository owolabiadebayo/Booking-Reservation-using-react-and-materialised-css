import React, { Component } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Datainput from "./Component/Datainput/Datainput";
import "./App.css";
import BookingList from "./Component/BookingReservation/BookingList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About";
import Reservations from "./Pages/Reservations";
import { connect } from 'react-redux';
import Bookreservation from "./Pages/Bookreservation";
import Reducer from './Reducer/Reducer';
import { Id } from "./Component/Datainput/RandomId";

// import Bookingitems from "./Component/BookingReservation/BookingItems"


export class App extends Component {
  
  

  AddDataInput = (Datainput) => {
    let DataInput = [...this.state.Booking, Datainput];
    this.setState({ Booking: DataInput})
  } 
  
  DeleteDataInput = (Id) => {

    this.setState({Booking: [...this.state.Booking.filter((book) => book.Id !== Id)]});
  };
  // SaveDataInput = (Id) => {

  // };

  render() {
    const { Booking } = this.props;
    console.log(this.props);
    return (
      <Router>
        <Navbar />
        <Route
            exact
            path="/"
        render={(props) => (
              <React.Fragment>
        <Datainput AddDataInput={this.AddDataInput} key={Booking} />
        <BookingList Bookings={Booking} DeleteDataInput={this.DeleteDataInput}  SaveDataInput={this.SaveDataInput}/> 
        </React.Fragment>)}/>
        
        <Route path='/Bookreservation' component={Bookreservation} />
        <Route path='/About' component={About} />
        <Route path='/:Reservation_id' component={Reservations} />
      </Router>
    );
  }
}

const mapsStateToProps = (state) => {
  return{
    Booking: state.Bookings
  }  
}

const mapDispatchToProps = (dispatch) => {
  return{
    AddDataInput: () => (dispatch({type: 'AddDataInput', id: '1'}))
  }
}



export default connect(mapsStateToProps,mapDispatchToProps)(App);
