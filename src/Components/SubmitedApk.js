import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./SubmitedApk.module.css";

const SubmitedApk = (props) => {
  const submit = () => {
    const newobj = {
      token: "b2a2a7bf-551d-423c-95b0-713b14d19860",
      ...props.onSubmit[0],
      ...props.onSubmit[1],
      ...props.onSubmit[2],
      ...props.onSubmit[3],
    };

    console.log(newobj);
    axios
      .post("https://bootcamp-2022.devtest.ge/api/application", newobj)
      .then((response) => {
        console.log(response.status);
        console.log(response.data.token);
      });
  };

  return (
    <>
      <div className={classes.background}>
        <Link to="/thanks">
          <button onClick={submit} className={classes.btn}>
            <span className={classes.btntext}>Submit</span>
          </button>
        </Link>
        <Link className={classes.link} to="/">
          go back
        </Link>
      </div>
    </>
  );
};
export default SubmitedApk;
