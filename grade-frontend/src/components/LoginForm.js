import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submit = (event) => {
    event.preventDefault();

    if (details.email == "") {
      error = "Email is required";
    }
    if (details.name == "") {
      error = "Name is required";
    }
    if (details.password == "") {
      error = "Password is required";
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={submit}>
        <div className="form-inner">
          <h2>Login</h2>
          {error != "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="name"> Your name: </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(event) =>
                setDetails({ ...details, name: event.target.value })
              }
              value={details.name}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="email"> Your email: </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(event) =>
                setDetails({ ...details, email: event.target.value })
              }
              value={details.email}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password"> Your password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(event) =>
                setDetails({ ...details, password: event.target.value })
              }
              value={details.password}
            ></input>
          </div>
          <input type="submit" value="Log In!"></input>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
