"use client";

import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Input, Button, Modal } from "antd";

const InquiryModal = ({ isOpen, setIsOpen, productId, productImage }) => {
  const initialValues = {
    name: "",
    surname: "",
    pin: "",
    city: "",
    state: "",
    country: "",
    contactNumber: "",
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
    if (!values.contactNumber) errors.contactNumber = "Required";
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email";
    }
    if (!values.captcha) errors.captcha = "Required";
    return errors;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form submitted:", values);
    setSubmitting(false);
    resetForm();
    setIsOpen(false);
  };

  return (
    <Modal
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={null}
      centered
      destroyOnHidden
      width={1170}
      closeIcon={null}
    >
      <div className="form-area">
        <div className="img-box">
          
        </div>
        <div className="form-box"></div>
      </div>
    </Modal>
  );
};

export default InquiryModal;
