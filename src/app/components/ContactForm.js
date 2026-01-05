'use client'
import React, {useState, useEffect} from 'react';
import { Formik, Form } from 'formik';
import { Input, Button} from 'antd';
import ApiService from '../service/api/api.services';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");

  const generateCaptcha = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 4; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const initialValues = {
    name: '',
    surname: '',
    pin: '',
    city: '',
    state: '',
    country: '',
    contactNumber: '',
    email: '',
    captcha: '',
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

  if (!values.captcha) {
    errors.captcha = "Required";
  } else if (values.captcha !== generatedCaptcha) {
    errors.captcha = "Invalid captcha";
  }

  return errors;
};


const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
  try {
    const formData = new FormData();

    formData.append("name", `${values.name} ${values.surname}`);
    formData.append("email", values.email);
    formData.append("phone", values.contactNumber);
    formData.append("country", values.country);
    formData.append(
      "message",
      `City: ${values.city}, State: ${values.state}, PIN: ${values.pin}`
    );

    const res = await ApiService.submitInquiry(formData);
    toast.success(res?.message);

    resetForm();
    generateCaptcha();
  } catch (error) {
    console.error(error);
    setErrors({ email: "Something went wrong. Try again." });
  } finally {
    setSubmitting(false);
  }
};

  return (
    <div>
      <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="inquiry-form">
            <div className="inquiry-block">
              <div className="form-block">
                <label htmlFor="name" className="label-style">Your Name</label>
                <Input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-style"
                />
                {errors.name && touched.name && <div className="errors">{errors.name}</div>}
              </div>

              <div className="form-block">
                <label htmlFor="surname" className="label-style">Your Surname</label>
                <Input
                  id="surname"
                  name="surname"
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-style"
                />
                {errors.surname && touched.surname && <div className="errors">{errors.surname}</div>}
              </div>

              <div className="form-block">
                <label htmlFor="pin" className="label-style">PIN Code</label>
                <Input
                  id="pin"
                  name="pin"
                  value={values.pin}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-style"
                />
                {errors.pin && touched.pin && <div className="errors">{errors.pin}</div>}
              </div>

              <div className="form-block">
                <label htmlFor="city" className="label-style">City</label>
                <Input
                  id="city"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-style"
                />
                {errors.city && touched.city && <div className="errors">{errors.city}</div>}
              </div>

              <div className="form-block">
                <label htmlFor="state" className="label-style">State</label>
                <Input
                  id="state"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-style"
                />
                {errors.state && touched.state && <div className="errors">{errors.state}</div>}
              </div>

              <div className="form-block">
                <label htmlFor="country" className="label-style">Country</label>
                <Input
                  id="country"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-style"
                />
                {errors.country && touched.country && <div className="errors">{errors.country}</div>}
              </div>

              <div className="form-block">
                <label htmlFor="contactNumber" className="label-style">Contact Number</label>
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  value={values.contactNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-style"
                />
                {errors.contactNumber && touched.contactNumber && <div className="errors">{errors.contactNumber}</div>}
              </div>

              <div className="form-block">
                <label htmlFor="email" className="label-style">Email Address</label>
                <Input
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-style"
                />
                {errors.email && touched.email && <div className="errors">{errors.email}</div>}
              </div>

              <div className="form-block">
                <label htmlFor="captcha" className="label-style">Captcha</label>
                <Input
                  id="captcha"
                  name="captcha"
                  value={values.captcha}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-style"
                />
                {errors.captcha && touched.captcha && <div className="errors">{errors.captcha}</div>}
              </div>

              <div className="form-block captcha-block">
                <span className="captcha-box">
                  {generatedCaptcha}
                </span>
                <Button
                  type="button"
                  className="refresh-captcha no-antd-style"
                  onClick={generateCaptcha}
                >
                  <i className="fa-solid fa-arrows-rotate"></i>
                </Button>
              </div>
            </div>

            <div className="inquiry-btn">
              <Button
                htmlType="submit"
                className="red-btn"
                disabled={isSubmitting}
              >
                Send Now
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
