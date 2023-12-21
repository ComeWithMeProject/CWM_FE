import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

import UserCard from "../../components/Layout/UserCard";

const Login = () => {
  const style = {
    margin: "1rem auto 0 auto",
  };

  return (
    <div className={classes.background}>
      <div className={classes.logo_container}>
        <Logo />
      </div>
      <UserCard style={style}>
        <div className={classes.title}>LOG IN</div>
        <Link to="/SignIn" style={{ textDecoration: "none" }}>
          <div className={classes.move_to_signin}>Create Account</div>
        </Link>
        <form className={classes.form}>
          <label className={classes.label}>Email</label>
          <input className={classes.input} type="email"></input>
          <radio className={classes.radio}>
            <input className={classes.radio_checkbox} type="checkbox" />
            <span className={classes.radio_span}>Save Email Addres</span>
          </radio>
          <label className={classes.label}>Password</label>
          <input className={classes.input} type="password"></input>
          <radio className={classes.radio}>
            <input className={classes.radio_checkbox} type="checkbox" />
            <span className={classes.radio_span}>Save Password</span>
          </radio>
          <div>
            <div></div>
            <button className={classes.button}>NEXT</button>
          </div>
        </form>
      </UserCard>
    </div>
  );
};

export default Login;
