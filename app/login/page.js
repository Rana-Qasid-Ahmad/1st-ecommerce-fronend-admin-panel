import LoginForm from "@/components/LoginForm/LoginForm";

function Page() {
  return (
    <>
      <LoginForm API_URL={process.env.API_URL}/>
    </>
  );
}

export default Page;
