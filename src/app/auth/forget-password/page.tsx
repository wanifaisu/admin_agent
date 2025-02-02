import ForgotPasswordForm from "./components/forgot-password-form";

function ForgetPassword() {
  return (
    <>
      <header className="text-left 2xl:mb-[78px] mb-10">
        <h1 className="text-xl text-black font-extrabold lg:text-2xl 2xl:text-[40px] 2xl:leading-[97.52px] mb-[13px]">
          Forget password
        </h1>
        <small className="text-sm text-black ">
          Enter your valid email address where you will receive otp.
        </small>
      </header>
      <main>
        <ForgotPasswordForm />
      </main>
    </>
  );
}

export default ForgetPassword;
