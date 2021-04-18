import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useHistory } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import hi from '../../../images/special cut.jpg'

const ServiceDetail = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleService = (id) => {
    const url = `service/${id}`;
    console.log(url);
    history.push(url);
  };
  console.log(props.service);
  const { description, image, service, _id } = props.service;
  return (
    <div className="col-md-4 text-center">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <button onClick={handleClick}><img
        style={{ height: "100px" }}
        src={`data:image/png;base64,${image.img}`}
        alt=""
      /></button>
        </div>

        <div>
          <button onClick={handleClick}><img
        style={{ height: "100px" }}
        src={hi}
        alt=""
      /></button>
        </div>
      </ReactCardFlip>
      <h5 className="mt-3 mb-3">{service}</h5>
      <p className="text-secondary">{description}</p>
      <button onClick={() => handleService(_id)} className="btn btn-primary">
        Get Service
      </button>
    </div>
  );
};

export default ServiceDetail;
