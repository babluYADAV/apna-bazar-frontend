import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { loginStart } from "../../redux/actions/signInAction";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const signin = useSelector((state) => state.signIn);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginStart(user));
    console.log("signin", signin);
    if (signin?.user?.data?.token) {
      localStorage.setItem("user", JSON.stringify(signin));
      toast("You have loggedIn successfully");
      navigate("/");
    } else {
      toast("Please enter proper details.");
    }
  };

  return (
    <section className="h-80 gradient-form" style={{ backGroundColor: "#eee" }}>
      <ToastContainer />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="data:image/jpeg;base64,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"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">Apna Bazar</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          value={user.email}
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
                          id="email"
                          className="form-control"
                          placeholder="Enter email"
                          required={true}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          value={user.password}
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                          id="pwd"
                          placeholder="Enter password"
                          className="form-control"
                          required={true}
                        />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Log in
                        </button>
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => navigate("/signUp")}
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
