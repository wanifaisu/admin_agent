import CreateNewPassword from "./components/create-new-password-form";

function CreatePassword() {
  return (
    <>
      <header className="text-center 2xl:mb-[78px] mb-10">
        <h1 className="text-2xl text-left text-black font-extrabold lg:text-2xl 2xl:text-[40px] 2xl:leading-[97.52px] mb-[13px]">
          Enter New Password
        </h1>
      </header>

      <main>
        <CreateNewPassword />
      </main>
    </>
  );
}

export default CreatePassword;
