import React, { useState } from "react";
import "./styles.css";

const Form = ({ onAdd }) => {
  const [url, setUrl] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ url });
    setUrl("");
  };

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Add Url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="form-btn">
          <button type="submit" className="btn btn-block">
            {" "}
            Add URL
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
