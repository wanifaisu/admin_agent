"use client";

import { useEffect, useState } from "react";
import OTPForm from "./components/otp-form";

function Verification() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("email") || "()";
    setEmail(value);
  }, []);

  return (
    <section className="text-center">
      <header className="mb-10 text-black">
        <h1 className="text-left text-xl font-bold lg:text-4xl 2xl:text-[30px] mb-[13px]">
          Verification
        </h1>
        <p className="text-sm text-left text-left">
          We have sent a 4 digit verification code on{" "}
          <span className="font-bold text-left flex  items-center gap-x-2">
            ( {"wani@gmail.com"} )
          </span>
        </p>
      </header>

      <main>
        <OTPForm />
      </main>
    </section>
  );
}

export default Verification;
