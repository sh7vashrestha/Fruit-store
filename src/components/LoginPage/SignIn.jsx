import React, { useRef, useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LOGIN_URL = "/auth/login/admin";

function SignIn() {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { setAuth } = useAuth();

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          email: user,
          password: pwd,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const accessToken = res?.data?.token;
      setPwd("");
      setUser("");
      setAuth(accessToken);
      navigate("/adminpanel");
    } catch (err) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response.status === 401) {
        setErrMsg("Invalid Credentials");
      } else if (err.response.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response.status === 500) {
        setErrMsg("Server Error");
      } else {
        setErrMsg("Something went wrong");
      }
      errRef.current.focus();
    }
  };

  return (
    <div>
        <section>
          <div
            className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
              <div className="text-white">
                <div className="mb-8 flex flex-col items-center">
                  <Link to="/">
                    <img src={logo} width="150" alt="LOGO" />
                  </Link>
                  <h1 className="mb-2 text-2xl">Sagarmatha Fruit Store</h1>
                  <span className="text-gray-300">Enter Login Details</span>
                  <div className="h-auto">
                    <p
                      ref={errRef}
                      className={
                        errMsg
                          ? "text-[#ff7878] insfont-semibold text-lg p-2"
                          : "hidden"
                      }
                      aria-live="assertive">
                      {errMsg}
                    </p>
                  </div>
                </div>
                <form onSubmit={handelSubmit}>
                  <div className="mb-4 text-lg">
                    <input
                      className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                      type="text"
                      id="username"
                      onChange={(e) => setUser(e.target.value)}
                      ref={userRef}
                      value={user}
                      placeholder="ID"
                      required
                    />
                  </div>

                  <div className="mb-4 text-lg">
                    <input
                      className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                      type="Password"
                      id="Password"
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)}
                      placeholder="*********"
                      required
                    />
                  </div>
                  <div className="mt-8 flex justify-center text-lg text-black">
                    <button
                      type="submit"
                      className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default SignIn;
