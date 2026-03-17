import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const empIdRegex = /^[0-9]+$/;

    if (!email) {
      tempErrors.email = "Email or User ID is required";
    } else {
      const isValidEmail = emailRegex.test(email);
      const isValidEmpId = empIdRegex.test(email);

      if (!isValidEmail && !isValidEmpId) {
        tempErrors.email = "Please enter a valid Email or Employee ID";
      }
    }

    if (!password) {
      tempErrors.password = "Password is required";
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) return;

    setLoading(true);

    try {
      console.log("Login Data:", { email, password });

      // API call example
      // const resp = await loginUser({ email, password });

      // localStorage.setItem("token", resp.token);
      // localStorage.setItem("user", JSON.stringify(resp.user));

      alert("Login Successful (API integration pending)");
    } catch (error) {
      console.error(error);
      setErrors({ auth: "Invalid credentials" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-12 min-h-screen overflow-hidden items-center justify-center bg-white px-4">

      {/* Header */}
      <div className="flex w-full mx-auto items-center justify-around mb-4">
        <h2 className="mb-5 text-center text-3xl font-bold text-[#0033A0]">
          {/* Welcome To Exibition  */}
        </h2>
      </div>

      <div className="flex w-full items-center justify-center gap-10">

        {/* Left Illustration */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          {/* Add image here if needed */}
        </div>

        {/* Login Card */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[450px] rounded-lg bg-[#f5faff] p-8 shadow-md flex flex-col">

            <h2 className="mb-10 text-center text-2xl font-semibold text-[#0033a0]">
              Login
            </h2>

            <form onSubmit={handleLogin}>

              {/* Email / User ID */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) {
                      const updatedErrors = { ...errors };
                      delete updatedErrors.email;
                      setErrors(updatedErrors);
                    }
                  }}
                  className={`w-full rounded border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } px-4 py-2 focus:border-[#0033a0] focus:outline-none`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) {
                      const updatedErrors = { ...errors };
                      delete updatedErrors.password;
                      setErrors(updatedErrors);
                    }
                  }}
                  className={`w-full rounded border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } px-4 py-2 focus:border-[#0033a0] focus:outline-none`}
                />

                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 cursor-pointer text-sm font-medium text-gray-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>

                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Remember / Forgot */}
              <div className="my-6 flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#0033a0]" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="font-medium text-[#0033a0] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Auth Error */}
              {errors.auth && (
                <p className="text-red-500 text-sm text-center mb-3">
                  {errors.auth}
                </p>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded bg-black py-2 font-bold text-white hover:bg-gray-900 transition disabled:opacity-60 flex justify-center items-center"
              >
                {loading ? "Logging in..." : "LOGIN"}
              </button>

              <p className="mt-8 text-center text-[10px] text-gray-500">
                DESIGNED AND DEVELOPED BY{" "}
                <span className="font-bold text-[#0033a0]">
                  IDILIGENCE SOLUTIONS PVT LTD
                </span>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}