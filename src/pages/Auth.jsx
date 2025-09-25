import { useState } from "react";
import SignupForm from "../component/auth/SignupForm";
import LoginForm from "../component/auth/LoginForm";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center">
      {isSignup ? (
        <SignupForm onSwitch={handleSwitch} />
      ) : (
        <LoginForm onSwitch={handleSwitch} />
      )}
    </div>
  );
};

export default Auth;
