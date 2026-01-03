'use client'
import React from 'react';
import { Formik, Form } from 'formik';
import { Input, Button} from 'antd';

const ContactForm = () => {
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
    if (!values.name) errors.name = 'Required';
    if (!values.surname) errors.surname = 'Required';
    if (!values.pin) errors.pin = 'Required';
    if (!values.city) errors.city = 'Required';
    if (!values.state) errors.state = 'Required';
    if (!values.country) errors.country = 'Required';
    if (!values.contactNumber) errors.contactNumber = 'Required';
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email';
    }
    if (!values.captcha) errors.captcha = 'Required';
    return errors;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form submitted:', values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div >
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

            <div>
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

            <div>
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

            <div>
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

            <div>
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

            <div>
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

            <div>
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

            <div>
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

            <div>
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

            <div style={{ marginTop: 20 }}>
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
