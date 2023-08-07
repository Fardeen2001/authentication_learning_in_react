import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../Store/auth-context";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const changePassword = useRef("");
  const authCxt = useContext(AuthContext);
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    const newEnteredPassword = changePassword.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBe9W2gQ0ALvLADIMdBgojiAXHX8l7MYwY",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCxt.token,
          password: newEnteredPassword,
          returnSecureToken: false,
        }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      history.replace("/");
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={changePassword}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
