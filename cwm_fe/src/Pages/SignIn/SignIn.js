import classes from "./SignIn.module.css";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { useState, useRef, useContext } from "react";

import UserCard from "../../components/Layout/UserCard";
import { ReactComponent as Arrow_left } from "../../Svg/arrow_left.svg";
import { AuthContext } from "../../Context/ThemeContext";

const SignIn = () => {
  const { login } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowPwChecked, setShowPwChecked] = useState(false);
  const passwordRef = useRef(null);

  const handleShowPwChecked = () => {
    const password = passwordRef.current;
    if (password === null) return;

    setShowPwChecked(!isShowPwChecked);
    if (!isShowPwChecked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  const handleSignUp = async () => {
    try {
      // 회원가입 요청을 보내고 응답을 처리합니다.
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        login();
        // 회원가입 성공 처리
        // 예: 회원가입 완료 메시지 표시 등
      } else {
        // 회원가입 실패 처리
        // 예: 에러 메시지 표시 등
      }
    } catch (error) {
      console.error("회원가입 중 에러 발생:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  const style = {
    margin: "0.5rem auto 3rem auto",
  };

  return (
    <div className={classes.background}>
      <div className={classes.logo_container}>
        <Logo />
      </div>
      <UserCard style={style}>
        <div className={classes.arrow_left}>
          <Arrow_left width="100%" height="100%" />
        </div>
        <div className={classes.title}>SIGN IN</div>
        <div className={classes.sub_title}>Use Your Email Account</div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <label className={classes.label}>Name</label>
          <input
            className={classes.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxlength="30"
          ></input>
          <label className={`${classes.label} ${classes.margin_add}`}>
            Email
          </label>
          <input
            className={classes.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxlength="30"
          ></input>
          <label className={`${classes.label} ${classes.margin_add}`}>
            Password
          </label>
          <input
            className={classes.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
            maxlength="24"
          ></input>
          <radio className={classes.radio}>
            <input
              className={classes.radio_checkbox}
              type="checkbox"
              onChange={handleShowPwChecked}
            />
            <span className={classes.radio_span}>Show Password</span>
          </radio>
          <button className={classes.next_btn} type="submit">
            NEXT
          </button>
          <Link to="/Login" className={classes.link}>
            Do You Have An Account
          </Link>
        </form>
      </UserCard>
    </div>
  );
};

export default SignIn;
