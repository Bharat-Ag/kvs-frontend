"use client";

import React, { useState, useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import { Input, Button, Modal, Spin } from "antd";
import Image from "next/image";
import ApiService from "../service/api/api.services";
import { toast } from "react-toastify";

const InquiryModal = ({ isOpen, setIsOpen, productId, productImage, productName }) => {
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const formikRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);

  /* ---------------- CAPTCHA ---------------- */
  const generateCaptcha = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 4; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(result);
  };

  useEffect(() => {
    if (isOpen) generateCaptcha();
  }, [isOpen]);

  /* ---------------- FORM ---------------- */
  const initialValues = {
    name: "",
    surname: "",
    pin: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    email: "",
    captcha: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) errors.name = "Required";
    if (!values.surname) errors.surname = "Required";
    if (!values.pin) errors.pin = "Required";
    if (!values.city) errors.city = "Required";
    if (!values.state) errors.state = "Required";
    if (!values.country) errors.country = "Required";

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^\d+$/.test(values.phone)) {
      errors.phone = "Phone number must contain only numbers";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email";
    }

    if (!values.captcha) {
      errors.captcha = "Required";
    } else if (values.captcha !== generatedCaptcha) {
      errors.captcha = "Invalid captcha";
    }

    return errors;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (values, { resetForm, setErrors }) => {
    setSubmitting(true);
    try {
      const formData = new FormData();

      formData.append("product_id", productId);
      formData.append("product_name", productName);
      formData.append("name", `${values.name} ${values.surname}`);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("country", values.country);
      formData.append("message", `City: ${values.city}, State: ${values.state}, PIN: ${values.pin}`);

      const res = await ApiService.submitInquiry(formData);
      toast.success(res?.message || "Inquiry sent successfully");

      resetForm();
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      setErrors({ email: "Something went wrong. Try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal open={isOpen} onCancel={() => setIsOpen(false)} footer={null} centered destroyOnHidden width={1170} closeIcon={null} className="inqury-modal">
      <div className="form-area">
        {/* LEFT IMAGE */}
        <div className="frm-col img-box">
          {productImage && (
            <div className="img-shows">
              <Image src={productImage} alt={productName} width={540} height={520} />
            </div>
          )}
        </div>

        {/* FORM */}
        <div className="frm-col form-box">
          <Formik innerRef={formikRef} initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form className="inquiry-form">
                <div className="inquiry-block">
                  {[
                    ["name", "Your Name"],
                    ["surname", "Your Surname"],
                    ["pin", "PIN Code"],
                    ["city", "City"],
                    ["state", "State"],
                    ["country", "Country"],
                    ["phone", "Phone Number"],
                    ["email", "Email Address"],
                    ["captcha", "Captcha"],
                  ].map(([field, label]) => (
                    <div className="form-block" key={field}>
                      <label className="label-style">{label}</label>
                      <Input name={field} value={values[field]} onChange={handleChange} onBlur={handleBlur} className="input-style" disabled={submitting} />
                      {errors[field] && touched[field] && <div className="errors">{errors[field]}</div>}
                    </div>
                  ))}

                  {/* CAPTCHA */}
                  <div className="form-block captcha-block">
                    <span className="captcha-box">{generatedCaptcha}</span>
                    <Button type="button" className="refresh-captcha no-antd-style" onClick={generateCaptcha} disabled={submitting}>
                      <i className="fa-solid fa-arrows-rotate"></i>
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* BUTTONS */}
        <div className="btn-area flex-box w-100">
          <button type="button" className="red-outline-btn rounded-full fw-semibold flex-box" onClick={() => setIsOpen(false)} disabled={submitting}>
            Cancel
          </button>

          <button type="button" className="red-btn rounded-full fw-semibold flex-box" onClick={() => formikRef.current?.submitForm()} disabled={submitting || Object.keys(formikRef.current?.errors || {}).length > 0}>
            {submitting ? <Spin size="small" /> : "Send Now"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default InquiryModal;
