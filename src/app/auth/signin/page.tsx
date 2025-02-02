import LoginForm from "./components/Login-form";

function SignIn() {
  return (
    <>
      <header className="text-left 2xl:mb-[8px] mb-10 text-black">
        <h1 className="text-2xl text-black font-extrabold lg:text-2xl 2xl:text-[38px] 2xl:leading-[97.52px] mb-[13px]">
          Sign In
        </h1>
      </header>
      <main className="">
        <LoginForm />
      </main>
    </>
  );
}

export default SignIn;
