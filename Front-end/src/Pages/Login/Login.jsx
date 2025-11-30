import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({
    emailorphone: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(formData.emailorphone, formData.password);

      toast.success("Login successful!");
      navigate("/product");
    } catch (err) {
      console.error(err); 
      setError("Incorrect email/phone or password");
      toast.error("Login failed");
}

    setLoading(false);
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 col-12">
          <img className="w-75" src="/image/loo.png" alt="login" />
        </div>

        <div className="col-md-4 col-12 mt-lg-5 pb-lg-5 mt-5 pt-5">
          <h2 className="mt-4">Log in to Pes cart</h2>
          <h6 className="pt-2 mb-5">Enter your details below</h6>

          <form className="row gap-4" onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="text"
                  name="emailorphone"
                  placeholder="Email or Phone Number"
                  className="form-control border-0 border-bottom"
                  value={formData.emailorphone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
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
                  className="form-control border-0 border-bottom"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-between">
              <button
                type="submit"
                className="btn btn-danger ps-5 pe-5 pt-2 pb-2 w-100"
                disabled={loading}
              >
                {loading ? (
                  <span className="d-flex justify-content-center align-items-center gap-2">
                    <span className="spinner-border spinner-border-sm text-light"></span>
                    Logging in...
                  </span>
                ) : (
                  "Log In"
                )}
              </button>

              <div className="pt-2 text-danger" style={{ fontSize: "12px" }}>
                <a className="text-decoration-none text-danger" href="#">
                  Forget Password?
                </a>
              </div>
            </div>

            {error && (
              <div className="alert alert-danger text-center py-2 fs-6">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
