import React from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import logo from "../assets/images/logo.svg";

const initialState = {
  email: "",
  passsword: "",
};

const handleChange = (e) => {
  console.log("Nice");
};

const Login = () => {
  const [values, setValues] = React.useState(initialState);
  return (
    <Wrapper>
      <form className="form">
        <img src={logo} alt="Jobster logo" className="logo" />
        <h3>Login</h3>
        <div className="form-row">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="button" className="btn btn-block btn-hipster">
          dmeo app
        </button>
        <p>
          Not a member yet?{" "}
          <button className="member-btn" type="button">
            Register
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
