import React, { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";
const Form = ({ onAdd }) => {
  const [url, setUrl] = useState([]);
  

  const onSubmit = (e) => {
    e.preventDefault();

    //Small validation
    if (!url) {
      alert("Please add a url");
      return;
    }

    onAdd({ url });
    console.log(url);

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
        <input type="submit" value="Add URL" className="btn btn-block" />
        {/* <Button
          type="submit"
          color="#004743"
          text="Add new URL"
          onClick={onAdd}
        /> */}
      </form>
       
    </>
  );
};

export default Form;
