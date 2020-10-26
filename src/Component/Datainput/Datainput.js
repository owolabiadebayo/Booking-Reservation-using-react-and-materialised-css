import React, { Component } from "react";
import "../Datainput/Datainput.css";
import Pic from "../Datainput/4.jpg";
import { Img } from "./RandomNumberList";
import { Id } from "./RandomId";

const SectionStyle = {
  width: "100%",
  height: "95vh",
  backgroundImage: `url(${Pic})`,
};

export class Datainput extends Component {
  state = {
    Country: "",
    CheckInDate: "",
    Id: `${Id}`,
    CheckOutDate: "",
    ImgLocation: `./img/${Img}.jpg`,
    Weather: "..Sunny Day",
    location: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddDataInput(this.state);
    console.log(this.state);
  };
  render() {
    return (
      <section
        className="container responsive-img"
        style={SectionStyle}
        id="section"
      >
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <div className="row">
              <div className="col s12 l8">
                <div className="card datacard">
                  <div className="card-content datacard-content">
                    <div className="input-field">
                      <input
                        type="text"
                        id="Country"
                        onChange={this.onChange}
                        placeholder="COUNTRY"
                      />
                      <i className="fa fa-edit material-icons prefix"></i>
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        id="location"
                        onChange={this.onChange}
                        placeholder="Location"
                      />
                      <i className="fa fa-edit material-icons prefix"></i>
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        id="Number"
                        onChange={this.onChange}
                        placeholder="NUMBER OF PERSON"
                      />
                      <i className="fa fa-edit material-icons prefix"></i>
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        id="Check-In-Date"
                        onChange={this.onChange}
                        placeholder="CHECK-IN-DATE"
                        className="datepicker"
                      />
                      <i className="fa fa-check material-icons green-text prefix"></i>
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        onChange={this.onChange}
                        id="Check-Out-Date"
                        placeholder="CHECK-OUT-DATE"
                        className="datepicker"
                      />
                      <i className="fa fa-close red-text prefix"></i>
                    </div>
                    <div className="input-field">
                      <button className="center-align btn">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default Datainput;
