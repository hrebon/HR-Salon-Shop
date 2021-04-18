import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const Review = () => {
    const [info, setInfo] = useState();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleBlur = (e) => {
        const newValue = {...info}
        newValue[e.target.name] = e.target.value;
        setInfo(newValue);
    }
  const onSubmit = data => {
      
      console.log(data);
      fetch('https://pure-sands-23213.herokuapp.com/addReview',{
          method: 'POST',
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify(info),
      }).then(res => {
          console.log(res);
      })
  };
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h1>Review</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
     
                <input type="text" name="name" onBlur={handleBlur} class="form-control"  placeholder="Your name"/>
                <br/>
                <input type="text" name="company" onBlur={handleBlur} class="form-control"  placeholder="company name"/>
                <br/>
                <textarea onBlur={handleBlur} name="describe" class="form-control"  placeholder="Description" rows="3"></textarea>
                <br/>
                <input className='btn btn-primary' type="submit" />
                </form>

            </div>

        </section>
    );
};

export default Review;