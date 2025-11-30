import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../api/Api";
import { toast } from "react-toastify";

function CreatAccount() {
  const [create, setCreate] = useState({ emailorphone: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const CheckDtata = async (e) => {
    e.preventDefault();

    // reset seterror and set succe
    setError("");
    setLoading(true);

    const { emailorphone, password } = create;

    let payload = {};

    // check not empty fields
    if (!create.emailorphone.trim() || !create.password.trim()) {
      setError("⚠️ Please enter email/phone and password");
      setLoading(false);
      return 
    }

    const isEmail = emailorphone.includes("@");

    // Email check
    if (isEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailorphone)) {
        setError("please enter a valid email");
        setLoading(false);
        return 
      }
      payload.email = emailorphone;
    }

    // Phone check
    if (!isEmail) {
      const phoneRegex = /^[0-9]{10,12}$/;
      if (!phoneRegex.test(emailorphone)) {
        setError("📱 please enter a valid phone number");
        setLoading(false);
        return 
      }
      payload.phone = emailorphone;
    }

    // check password
    if (password.length < 8) {
      setError("🔒 Password must be at least 8 characters long");
      setLoading(false);
      return ;
    }

    payload.password = password;

    try {
      await api.post("/auth/register", payload);

      toast.success("Account created successfully!");

      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed";
      setError(msg);
      toast.error(msg);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 col-12">
          <img className="w-75" src="/image/loo.png" alt="login" />
        </div>

        <div className="col-md-4 col-12 mt-lg-5 pb-lg-5">
          <h2 className="mt-4">Create an account</h2>
          <h6 className="pt-2 mb-5">Enter your details below</h6>

          <form className="row gap-4" onSubmit={CheckDtata}>
            <div className="row mb-3 ">
              <div className="col-sm-12">
                <input
                  type="text"
                  name="emailorphone"
                  placeholder="Email or Phone Number"
                  className="form-control border border-0 border border-bottom"
                  value={create.emailorphone}
                  onChange={(e) =>
                    setCreate({
                      ...create,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control border border-0 border border-bottom"
                  value={create.password}
                  onChange={(e) =>
                    setCreate({
                      ...create,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* <div className="row mb-3 ">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-danger ps-5 pe-5 pt-2 pb-2 w-100"
                >
                  Create Account
                </button>
              </div>
            </div> */}

            <div className="row mb-3 ">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-danger ps-5 pe-5 pt-2 pb-2 w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="d-flex justify-content-center align-items-center gap-2">
                      <span className="spinner-border spinner-border-sm text-light"></span>
                      Creating...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>
            </div>

            <div className="row mb-3 ">
              <div className="col-sm-12">
                <button
                  type="button"
                  className="btn btn-outline-dark ps-5 pe-5 pt-2 pb-2 w-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 16 16"
                  >
                    <g fill="none" fill-rule="evenodd" clip-rule="evenodd">
                      <path
                        fill="#f44336"
                        d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86"
                        opacity="0.987"
                      />
                      <path
                        fill="#ffc107"
                        d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92"
                        opacity="0.997"
                      />
                      <path
                        fill="#448aff"
                        d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49"
                        opacity="0.999"
                      />
                      <path
                        fill="#43a047"
                        d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z"
                        opacity="0.993"
                      />
                    </g>
                  </svg>
                  &nbsp; Sign up with Google
                </button>
              </div>
            </div>

            <p className="text-center">
              Already have account ? &nbsp;
              <Link
                to="/login"
                className="text-black text-decoration-none border-bottom border-dark pb-1"
              >
                Log in
              </Link>
            </p>

            {error && (
              <div className="alert alert-danger card rounded-2   text-center py-2 fs-6">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatAccount;
