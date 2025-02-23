import { MDN_APP_ANDROID, MDN_APP_DESKTOP } from "../../../constants";
import "./index.scss";

export default function AppLogin({ className, children }) {
  let signIn = async () => {};
  if (MDN_APP_DESKTOP) {
    signIn = async () => {
      await window.Desktop.signIn();
    };
  } else if (MDN_APP_ANDROID) {
    signIn = async () => {
      await window.Android.signIn();
    };
  }
  return (
    <button onClick={signIn} className={`desktop-login ${className}`}>
      {children}
    </button>
  );
}
