import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();

      if (!!user) {
        const userRefSnapShot = await createUserDocumentFromAuth(user);
      } else {
        console.error("User is undefined or null");
      }
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div>
      SignIn Page
      <button onClick={logGoogleUser}>SignIn</button>
    </div>
  );
};

export default SignIn;
