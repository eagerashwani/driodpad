import { Button } from "./ui/button";
import AppleLogo from "../assets/appleIcon.svg";
import { Input } from "./ui/input";
import { useState } from "react";

const CreateAccountForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <div className="pt-14 pl-32 flex flex-col w-full">
      <h1 className="font-semibold text-4xl">Create an account</h1>
      <p>Start with our 30 day free trial.</p>
      <div className="pt-8">
      <div className="grid w-full items-center">
      {/* <Label htmlFor="email">Email</Label> */}
      <label htmlFor="email" className="text-cgreen">EMAIL OR USERNAME</label>
        <Input
          className="w-2/4 mt-2 h-16 border-b-2 p-0 border-black border-opacity-25 outline-none text-lg"
          type="email"
          placeholder="futurelabs@gmail.com"
        />
      </div>
        <Input
          className="w-2/4 mt-5 h-16 border-b-2 p-0 border-black border-opacity-25 outline-none text-lg"
          type="text"
          placeholder="Name"
        />
        <div className="relative w-2/4 border-b-2 p-0 border-black border-opacity-25 outline-none">
          <Input
            className="w-2/4 mt-5 h-16  text-xl outline-none p-0"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
          />

          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <Button className="w-2/4 h-14 rounded-none bg-cgreen mt-8 ">
        SIGN UP
      </Button>
      <Button className="w-2/4 h-14 rounded-none mt-4" variant={"outline"}>
        SIGN UP WITH GOOGLE
      </Button>
      <Button className="w-2/4 h-14 rounded-none mt-4 mb-6 bg-cdarkgreen">
        <img src={AppleLogo} className="pr-3" alt="Apple logo" />
        SIGN UP WITH APPLE
      </Button>
      <p>
        Already have an account <span className="text-cgreen">LOGIN</span>
      </p>
    </div>
  );
};

export default CreateAccountForm;
