import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";

import { WavyBackground } from "../../components/ui/WaveBackground";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <WavyBackground>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Sign-Up
            <span className="text-blue-500"> #ur app name swaroop</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span>Full Name</span>
              </label>
              <input
                type="text"
                placeholder="e.g : John Haven"
                className="w-full input input-bordered h-10"
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    fullName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="label p-2">
                <span>Username</span>
              </label>
              <input
                type="text"
                placeholder="e.g : john"
                className="w-full input input-bordered h-10"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    username: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="label p-2">
                <span>Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full input input-bordered h-10"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="label p-2">
                <span>Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full input input-bordered h-10"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />
            <Link
              to="/login"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Already have an account?
            </Link>
            <div>
              <button className="btn btn-block btn-sm mt-2">
                {"Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </WavyBackground>
  );
};

export default SignUp;
