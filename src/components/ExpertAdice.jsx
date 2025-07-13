import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const ExpertAdvice = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // replace URL below with your actual endpoint
      const response = await axios.post(
        "https://www.D.S research.co//home/free_trial",
        data
      );
      console.log("Form submitted successfully!", response.data);
      alert("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="bgWhite01">
        <div className="trial">
          <h1>
            <span>Get Expert Advice Right Now</span>
          </h1>
          <p className="freee">
            D.S Researech service acts as a guide in delivering trading tips
            to traders looking to trade in the Indian financial market. Our
            highly insightful and constantly updated track sheets, stock
            reports, and commodity reports are available on our website.
          </p>
          <br />
          <p className="freee">
            Kindly Note: If any DND Customer fills our form, then D.S research
            Research is authorized to Call and Message him/her.
          </p>
        </div>

        <div className="pad01">
          <form id="freetrial" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name.message}</small>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">Email</label>
                  <input
                    type="email"
                    id="trialemail"
                    className="form-control"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">Mobile Number</label>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    maxLength={10}
                    className="form-control"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit mobile number"
                      }
                    })}
                  />
                  {errors.mobile && (
                    <small className="text-danger">
                      {errors.mobile.message}
                    </small>
                  )}
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="form-field col-md-6">
                <label className="control-label">Confirmation Code</label>
                <input
                  type="text"
                  placeholder="Confirmation Code"
                  className="form-control fr-form"
                  style={{ marginTop: "-1px" }}
                  {...register("cicaptcha", {
                    required: "Confirmation code is required"
                  })}
                />
                {errors.cicaptcha && (
                  <small className="text-danger">
                    {errors.cicaptcha.message}
                  </small>
                )}
              </div>

              <div className="form-field col-md-6 form-m-bttm imgMarg">
                <img
                  id="Imageid"
                  src="captcha/1750950721.4553.jpg"
                  style={{ width: 150, height: 30, border: 0 }}
                  alt="Captcha"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <button className="btn01" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpertAdvice;
