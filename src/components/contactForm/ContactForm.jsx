"use client";
import { useState } from "react";
import classNames from "classnames";
import Loader from "../loader/loader";
import useToast from "@/utils/useToast";
const initValues = {
  name: "",
  email: "",
  message: "",
};

const initState = {
  values: initValues,
};

function ContactForm() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const [showToast, showToastWithTimeout, Toast] = useToast();
  const { values } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };
  const handleSubmit = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      await sendFormData(values);
      setTouched({});
      setState(initState);
      showToastWithTimeout();
    } catch (error) {
      setState((prev) => {
        return {
          ...prev,
          loading: false,
          error: error.message,
        };
      });
    }
  };
  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };
  const sendFormData = async (data) => {
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to send email");
      return res.json();
    });
  };
  return (
    <div className="flex flex-col w-full h-full  relative">
      {showToast && <Toast title="Email sent successfully" type="success" />}
      <h4 className="text-2xl">Send an automatic email</h4>
      <p
        className={
          `text-red-500 font-bold absolute top-10 right-0 px-5 ` +
          ((touched.name && !values.name) ||
          (touched.email && !values.email) ||
          (touched.message && !values.message)
            ? "flex"
            : "hidden")
        }
      >
        Please fill all details.*
      </p>

      <input
        className={classNames(
          "mt-10 py-3 px-5 rounded-[20px] text-xl text-black focus:outline-none cursor-pointer border-2 border-transparent",
          {
            "border-red-500": !values.name && touched.name,
          }
        )}
        type="text"
        placeholder="Your name here"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlurCapture={onBlur}
      />
      <textarea
        className={classNames(
          "mt-4 w-full py-3 px-5 text-xl rounded-[20px] text-black  focus:outline-none  cursor-pointer border-2 border-transparent",
          { "border-red-500": !values.message && touched.message }
        )}
        placeholder="Your message here"
        name="message"
        id="message"
        cols="30"
        rows="3"
        value={values.message}
        onChange={handleChange}
        onBlurCapture={onBlur}
      ></textarea>
      <div className="mt-4 relative  cursor-pointer">
        <input
          className={classNames(
            " py-3 pl-5 pr-8 rounded-[20px] text-xl w-full text-black focus:outline-none  border-2 border-transparent",
            {
              "border-red-500": !values.email && touched.email,
            }
          )}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          onBlurCapture={onBlur}
        />
        <button
          disabled={!values.name || !values.email || !values.message}
          className="bg-brand_primary_dark py-2 px-7 rounded-full absolute top-1/2  -translate-y-1/2 right-2 disabled:cursor-not-allowed disabled:bg-gray-700 cursor-pointer"
          onClick={handleSubmit}
        >
          {state.loading ? <Loader /> : "Send"}
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
