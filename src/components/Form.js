import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Form() {
  
  const form = useRef();

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  function changeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r5akwed",
        "template_trvccmq",
        form.current,
        "CbzwImZgAeuvjdVhK"
      )
      .then(
        (result) => {
          toast.success("Form Submitted Successfully");
          console.log(result.text);
        },
        (error) => {
          toast.error("Form Submission Failed");
          console.log(error.text);
        }
      );

    console.log(formData);
    setFormData({
      from_name: "",
      from_email: "",
      message: "",
    });
  }

  return (
    <div className="">
      <form ref={form} onSubmit={submitHandler} className="flex flex-col text-center">
        <input
          type="text"
          required
          name="from_name"
          placeholder="Enter Full Name"
          onChange={changeHandler}
          value={formData.from_name}
          className="w-full border rounded-md p-2 bg-slate-100 "
        />
        <br />
        <input
          type="email"
          required
          name="from_email"
          placeholder="Eg: XYZ@gmail.com"
          onChange={changeHandler}
          value={formData.frofromail}
          className="w-full border rounded-md p-2 bg-slate-100 "
        />
        <br />
        <textarea
          type="text"
          name="message"
          required
          placeholder="Write your message here."
          onChange={changeHandler}
          value={formData.message}
          className="w-full border rounded-md p-2 resize-none bg-slate-100 "

        />
        <br />
        <button
          className="w-full bg-blue-400 rounded-md p-2 text-lg font-bond text-white opacuty-90
        active:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
