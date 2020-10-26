import React from "react";

const Bookingitems = ({
  Id,
  ImgLocation,
  Country,
  Weather,
  Location,
  CheckInDate,
  DeleteDataInput,
  SaveDataInput,
}) => (
  <div className="container">
    <div className="row">
      <div className="col s12 s4">
        <div className="card bookingcard">
          <div className="card-image Booking">
            <img
              src={ImgLocation}
              alt="locationImage"
              className="responsive-image materialboxed"
            />
            <a
              href="#he"
              className="right-align halfway-fab btn-floating pink pulse"
            >
              <i className="fa fa-heart"></i>
            </a>
          </div>
          <div className="card-content">
            <span className="card-title blue-text text-darken-3">
              <i className="fa fa-check material-icons green-text prefix"></i>
              Country:{Country}
            </span>
            <ul className="bookinglist">
              <li>
                <a href="#hel">
                  <i className="fa fa-check material-icons green-text prefix"></i>
                  Location:{Location}
                </a>
              </li>
              <li>
                <a href="#hel" className="indigo-text text-darken-3">
                  <i className="fa fa-check material-icons green-text prefix"></i>
                  Weather Condition: {Weather}
                </a>
              </li>
              <li>
                <a href="#hel">
                  <i className="fa fa-check material-icons green-text prefix"></i>
                  Check-In-Date:{CheckInDate}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-Action">
          <button
            className="btn btn-small delete-button delete red red-darken-3 waves-effect wave-light"
            onClick={() => DeleteDataInput(Id)}
            style={Margin} type="button"
          >
            Delete <i className="fa fa-remove"></i>{" "}
          </button>
          <button
            className="btn btn-small save-button green green-darken waves-effect wave-light"
            style={Margin}
          type="button" >
            Save <i className="fa fa-cloud-download "></i>
          </button>
          <button
            className="btn btn-small unsave-button green green-darken waves-effect wave-light"
            style={Margin} type="button"
          >
            UnSave{" "}
            <i className="fa fa-check-circle blue-text text-darken-4"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Margin = {
  marginLeft: 5,
  borderRadius: 3,
  boxShadow: 2,
};

export default Bookingitems;
