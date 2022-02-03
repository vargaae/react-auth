import React, { Component } from 'react';

export class Register extends Component {
  render() {
    return <form>
    <h1 className="h3 mb-3 fw-normal">Please register</h1>

    <div className="form-floating">
      <input
        type="text"
        className="form-control"
        id="floatingName"
        placeholder="John Doe"
      />
      <label htmlFor="floatingName">Name</label>
    </div>
    <div className="form-floating">
      <input
        type="email"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input
        type="password"
        className="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">
      Register
    </button>
  </form>;
  }
}

export default Register;
