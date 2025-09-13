import { useAuthStore } from "@/store/store";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { logIn } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    if (!email) {
      alert("Email is Required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Enter Valid email");
      return;
    }
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await logIn(email, pass);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-600 to-indigo-600 font-Poppins">
      <div className="flex flex-col shadow-xl w-full max-w-sm py-5 px-10 rounded-lg bg-white">
        <h1 className="mb-7 text-center text-3xl font-bold uppercase">Login</h1>
        <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
          <input
            type="email"
            className="border py-2 px-5 rounded-full border-gray-400 text-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border py-2 px-5 rounded-full border-gray-400 text-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
            placeholder="Enter Your Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          {error && <p className="text-center my-2 text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-gradient-to-r from-violet-600 to-indigo-600 self-center mt-3 py-2 px-5 rounded-full text-white font-bold"
          >
            {loading ? "Loading ..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
