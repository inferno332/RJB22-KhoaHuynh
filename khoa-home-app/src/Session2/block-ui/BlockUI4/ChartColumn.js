import PropTypes from 'prop-types'
import React from "react";
import "./ChartColumn.css";

export default function ChartColumn(props) {
  const { text, total, unit, percentage } = props;
  let barInfo = [{
      day: 'MON',
      bgcolor: '#dd4e5c',
      percen: percentage[0],
    },
    {
      day: 'TUE',
      bgcolor: '##3ed761',
      percen: percentage[1],
    },
    {
      day: 'WED',
      bgcolor: '#5fd9ed',
      percen: percentage[2],
    },
    {
      day: 'THU',
      bgcolor: '#f3ce5e',
      percen: percentage[3],
    },
    {
      day: 'FRI',
      bgcolor: '#f9943f',
      percen: percentage[4],
    },
  ]
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
           {barInfo.map((items,i) => columnBar(items))}
      </div>
    </div>
  );
}

function columnBar(barInfo) {
  return (
    <div className="cc-foot__progressbar d-flex flex-column align-items-center">
          <div className="progress progress-bar-vertical">
            <div
              className="progress-bar"
              role="progressbar"
              style={{backgroundColor: `${barInfo.bgcolor}` ,height: `${barInfo.percen}%` }}
            ></div>
          </div>
          <span>{barInfo.day}</span>
    </div>
  );
}

ChartColumn.propTypes = {
    text: PropTypes.string,
    total: PropTypes.number,
    unit: PropTypes.string,
    percentage: PropTypes.array,
}
