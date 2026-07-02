import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-hot-toast";
import "./auth.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await login(
        form.email,
        form.password
      );

      toast.success("Login successful");

      switch (data.user.role) {
        case "ADMIN":
          navigate("/admin");
          break;

        case "DOCTOR":
          navigate("/doctor");
          break;

        case "NURSE":
          navigate("/nurse");
          break;

        default:
          navigate("/");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
        "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-left">

        <div className="brand">

          <h1>MediCare HMS</h1>

          <p>
            Enterprise Hospital
            Management Platform
          </p>

        </div>

      </div>

      <div className="auth-right">

        <form
          onSubmit={handleSubmit}
          className="auth-card"
        >

          <h2>Welcome Back</h2>

          <p>
            Sign in to continue
          </p>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button
            disabled={loading}
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>

          <div className="auth-footer">

            <span>
              No account?
            </span>

            <Link to="/register">
              Register
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}