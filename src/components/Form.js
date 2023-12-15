import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Form() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
  });

  function changeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    toast.success("Form Submitted Successfully");
    console.log(formData);
    setFormData({
      fullname: "",
      email: "",
    });
  }

  return (
    <div className="">
      <form onSubmit={submitHandler} className="flex flex-col">
        <input
          type="Full Name"
          required
          name="fullname"
          placeholder="Full Name"
          onChange={changeHandler}
          value={formData.fullname}
          className="w-full border rounded-md p-2 "
        />
        <br/>
        <input
          type="email"
          required
          name="email"
          placeholder="Email Address"
          onChange={changeHandler}
          value={formData.email}
          className="w-full border rounded-md p-2"
        /><br/>

        <button className="w-full bg-blue-400 rounded-md p-2 text-lg font-bond text-white opacuty-90
        active:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}
