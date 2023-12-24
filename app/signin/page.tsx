import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";

export default async function Signin() {
  return (
    <div className="stack">
      <h1 className="title">SignIn</h1>
      <GoogleButton />
      <div className="title">or</div>
      <SignInForm />
    </div>
  );
}
