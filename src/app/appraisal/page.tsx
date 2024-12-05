"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/app/page.module.css";
import { handler as formHandler } from "@/actions/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";
import { ImSpinner2 } from "react-icons/im";

const Appraisal: React.FC = () => {
  // Create a ref to manipulate input file after form submit
  const inputRef = useRef<HTMLInputElement>(null);
  const resetInputValue = () => {
    // Access the input element using the current property of the ref
    if (inputRef.current) {
      // Reset the value of the input element
      inputRef.current.value = "";
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    contactName: "",
    phoneNumber: "",
    email: "",
    address: "",
    assetDescription: "",
    valuationPurpose: "",
  });
  const [title, setTitle] = useState<any>([]);

  const handleFileChange = (e: any) => {
    const fileList = e.target.files;
    if (fileList) {
      const filesArray = Array.from(fileList);
      setTitle(filesArray);
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    console.log("entered", name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const notify = (response: string) =>
    toast.success(response, {
      style: { color: "rgb(0,0,0)" },
      icon: false,
    });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    try {
      setSubmitting(true);
      console.log("entered", formData);
      const response = await formHandler(formData);
      console.log(response);
      // Reset form data after submission if needed
      if (response) {
        notify(response);
        setFormData({
          name: "",
          contactName: "",
          phoneNumber: "",
          email: "",
          address: "",
          assetDescription: "",
          valuationPurpose: "",
        });
        setTitle([]);
        resetInputValue();
        setSubmitting(false);
      }
    } catch (error) {
      console.log("Form submission failed:", error);
    }
  };

  const checkFileFirst = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form event:", e);
    const formData = new FormData(e.currentTarget);
    if (title.length > 0) {
      title.forEach((file: File) => {
        formData.append(`file`, file);
      });
    }
    console.log(title, formData);
    if (title.length === 0) {
      console.log("line 81:", title, formData);
      handleSubmit(formData);
    } else {
      console.log("line 86:", title, formData);
      handleSubmit(formData);
    }
  };

  return (
    <div className="mt-[5rem] sm:mt-[7rem] pb-[10rem] pt-[3rem] w-screen sm:text-lg text-black">
      <ToastContainer position="bottom-right" autoClose={2500} />
      <div className={styles.container}>
        <div className="flex justify-center items-center p-3 text-2xl font-bold">
          Appraisal Form
        </div>
        <hr />
        <div className="w-full flex justify-center items-center">
          <form
            onSubmit={(e) => {
              setSubmitting(true);
              checkFileFirst(e);
            }}
            className="flex flex-col pt-10 pb-10 gap-8 "
          >
            <div className="flex flex-col  gap-1">
              <label htmlFor="name" className="font-semibold">
                Name :{" "}
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-b-2 border-amber-700 p-1 bg-gray-200/30"
              />
            </div>
            <div className="flex gap-y-8 gap-x-5 flex-col sm:flex-row">
              <div className="flex flex-col  gap-1">
                <label htmlFor="contactName" className="font-semibold">
                  Contact name :{" "}
                </label>
                <input
                  required
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="border-b-2 border-amber-700 p-1 bg-gray-200/30"
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <label htmlFor="phoneNumber" className="font-semibold">
                  Contact&#39;s phone number :{" "}
                </label>
                <input
                  required
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="border-b-2 border-amber-700 p-1 bg-gray-200/30"
                />
              </div>
            </div>
            <div className="flex flex-col  gap-1">
              <label htmlFor="contactName" className="font-semibold">
                Email :{" "}
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-b-2 border-amber-700 p-1 bg-gray-200/30"
              />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="address" className="font-semibold">
                Address of Asset :{" "}
              </label>
              <input
                required
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border-b-2 border-amber-700 p-1 bg-gray-200/30"
              />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="assetDescription" className="font-semibold">
                Description of Asset :{" "}
              </label>
              <textarea
                id="assetDescription"
                name="assetDescription"
                value={formData.assetDescription}
                onChange={handleChange}
                className="border-b-2 border-amber-700 p-2 bg-gray-200/30 h-[150px] sm:h-[300px]"
              />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="valuationPurpose" className="font-semibold">
                Purpose of Valuation :{" "}
              </label>
              <input
                required
                type="text"
                id="valuationPurpose"
                name="valuationPurpose"
                value={formData.valuationPurpose}
                onChange={handleChange}
                className="border-b-2 border-amber-700 p-1 bg-gray-200/30"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="title" className="font-semibold">
                Title/ Invoice/ Inventory :{" "}
              </label>
              <input
                required
                type="file"
                multiple
                id="title"
                name="title"
                ref={inputRef}
                onChange={handleFileChange}
                className="border-b-2 border-amber-700 p-1  bg-gray-200/30"
              />
            </div>
            <div className="flex justify-center items-center">
              {" "}
              <button
                type="submit"
                disabled={submitting}
                className="flex bg-amber-900 hover:scale-110 text-white font-semibold py-2 px-4 rounded-md"
              >
                {submitting ? (
                  <p className="flex gap-x-2">
                    <p>Submitting</p>
                    <p>
                      <ImSpinner2 className="text-xl animate-spin" />
                    </p>
                  </p>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>{" "}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Appraisal;
