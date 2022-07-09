import PropTypes from 'prop-types'
import React from "react";
import "./ChartColumn.css";

export default function ChartColumn(props) {
  const { text, total, unit, percentage } = props;
  return (
    <div className="cc-block m-5">
      <div className="d-flex flex-column align-items-center cc-head">
        <h1
          className="pt-4"
          style={{ fontSize: "1.2rem", textAlign: "center", color: "#888" }}
        >
            {text}
        </h1>
        <h2 style={{ fontWeight: "300", color: "#3fc2d7", fontSize: "3rem" }}>
            {unit}{total}
        </h2>
      </div>
      <div className="d-flex cc-foot">
        <div className="cc-foot__progressbar d-flex flex-column align-items-center">
          <div className="progress progress-bar-vertical">
            <div
              className="progress-bar"
              role="progressbar"
              style={{backgroundColor: '#dd4e5c' ,height: `${percentage[0]}%` }}
            ></div>
          </div>
          <span>MON</span>
        </div>
        <div className="cc-foot__progressbar d-flex flex-column align-items-center">
          <div className="progress progress-bar-vertical">
            <div
              className="progress-bar"
              role="progressbar"
              style={{backgroundColor: '#3ed761' ,height: `${percentage[1]}%` }}
            ></div>
          </div>
          <span>TUE</span>
        </div>
        <div className="cc-foot__progressbar d-flex flex-column align-items-center">
          <div className="progress progress-bar-vertical">
            <div
              className="progress-bar"
              role="progressbar"
              style={{backgroundColor: '#f3ce5e' ,height: `${percentage[2]}%` }}
            ></div>
          </div>
          <span>WED</span>
        </div>
        <div className="cc-foot__progressbar d-flex flex-column align-items-center">
          <div className="progress progress-bar-vertical">
            <div
              className="progress-bar"
              role="progressbar"
              style={{backgroundColor: '#5fd9ed' ,height: `${percentage[3]}%` }}
            ></div>
          </div>
          <span>THU</span>
        </div>
        <div className="cc-foot__progressbar d-flex flex-column align-items-center">
          <div className="progress progress-bar-vertical">
            <div
              className="progress-bar"
              role="progressbar"
              style={{backgroundColor: '#f9943f' ,height: `${percentage[4]}%` }}
            ></div>
          </div>
          <span>FRI</span>
        </div>
      </div>
    </div>
  );
}

ChartColumn.propTypes = {
    text: PropTypes.string,
    total: PropTypes.number,
    unit: PropTypes.string,
    percentage: PropTypes.array,
}
