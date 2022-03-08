import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import spaceman from "../img/rocketman.png";
import stars from "../img/stars.png";

const Home = () => {
  const starsvar = {
    backgroundImage: `url(${stars})`,
    backgroundColor: "black",
    height: "1080px",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "1920px",
  };
  const spacemanvar = {
    backgroundImage: `url(${spaceman})`,
    position: "absolute",
    width: "409.92px",
    height: "420.45px",
    left: " 661px",
    top: "599.88px",
  };
  return (
    <>
      <div style={starsvar}>
        <h1 className={classes.title}>Welcome Rocketeer!</h1>

        <Link to="Personalinfo">
          <button className={classes.btn}>
            <span className={classes.btntxt}>Start Questionnaire</span>
          </button>
        </Link>
      </div>

      <span style={spacemanvar} alt="spaceman"></span>
      <Link className={classes.submit} to="submitedapk">
        submited applications
      </Link>
    </>
  );
};
export default Home;
