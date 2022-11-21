import * as React from "react";
import { loginStart } from "../../redux/actions/signInAction";
import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const signin = useSelector((state) => state.signIn);
  console.log("signin", signin);

  const handleSubmit = (event) => {
    console.log("user", user);
    event.preventDefault();
    console.log(event.target.value);
    dispatch(loginStart(user));
  };

  return (
    <div className="container">
      <div className="justify-content-center">
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-4">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="password">
            Password:
          </label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-4">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button
              type="submit"
              className="btn btn-default"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
