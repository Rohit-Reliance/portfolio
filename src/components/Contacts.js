import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState();
  const serviceId = "service_Id_619";
  const templateId = "template_Id_619";
  const userId = "user_OCUNib4p1jLY72iYQ4oRu";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, r) => {
    sendEmail(
      serviceId,
      templateId,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userId
    );
    r.target.reset();
  };
  const sendEmail = (serviceId, templateId, variables, userId) => {
    //e.preventDefault();
    emailjs
      .send(serviceId, templateId, variables, userId)
      .then((result) => {
        setSuccessMessage(
          "Form sent successfully! We will contact you as soon as possible"
        );
      })
      .catch((err) =>
        console.error(`something went wrong while sending form ${err}`)
      );
  };

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the your project requirements. we will contact you
          very soon!
        </p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* Name Input */}
              <div className="text-center">
                <input
                  id="nameId"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: 20,
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              <div className="text-center">
                {/* Phone Input */}
                <input
                  id="phoneId"
                  type="number"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register("phone", {
                    required: "Please enter your phone number",
                    maxLength: 10,
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              <div className="text-center">
                {/* Email Input */}
                <input
                  id="emailId"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              <div className="text-center">
                {/* Subject Input */}
                <input
                  id="subjectId"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("subject", {
                    required: "Ooops! you forget to write message",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* Description */}
              <div className="text-center">
                <textarea
                  id="descriptionId"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  {...register("description", {
                    required: "Please describe your project needs shortly",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
