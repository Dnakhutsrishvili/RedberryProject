import { useEffect, useState } from "react";
import classes from "./personalinfo.module.css";
import { Link } from "react-router-dom";

const PersonalInfo = (props) => {
  //next page
  const [nextPage, setnextPage] = useState("");

  //firstname
  const [inputName, setinputName] = useState("");
  const [firstNameError, setfirstNameError] = useState(false);

  const getInputvalueName = (e) => {
    setinputName(e.target.value);
  };
  //lastname
  const [inputLastName, setinputLastName] = useState("");
  const [lastNameError, setlastNameError] = useState(false);

  const getInputvaluelastName = (e) => {
    setinputLastName(e.target.value);
  };
  //Email

  const [inputEmail, setinputEmail] = useState("");
  const [EmailError, setEmailError] = useState(false);

  const getInputvalueEmail = (e) => {
    setinputEmail(e.target.value);
  };

  //phone

  const [inputPhone, setInputPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [phonevaidation, setphonevaidation] = useState(true);
  const getInputValuePhone = (e) => {
    setInputPhone(e.target.value);
  };

  const validate = () => {
    if (inputName.length <= 2) {
      setfirstNameError(true);
    } else {
      setfirstNameError(false);
    }
    if (inputLastName.length <= 2) {
      setlastNameError(true);
    } else {
      setlastNameError(false);
    }

    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    if (
      inputPhone.trim().startsWith(+995, 0) &&
      inputPhone.length.trim() >= 10
    ) {
      setphonevaidation(true);
    } else {
      setPhoneError(true);
    }
    //passing personal info to parent component
    const personalInfo = {
      first_name: inputName,
      last_name: inputLastName,
      email: inputEmail,
      phone: inputPhone,
    };
    if (inputPhone === "") {
      delete personalInfo.phone;
    }

    props.onValidate(personalInfo);
  };

  const nextPageValidate = () => {
    if (
      phonevaidation &&
      inputName.length > 2 &&
      inputLastName.length > 2 &&
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail) &&
      inputPhone.trim().startsWith(+995, 0) &&
      inputPhone.length.trim() >= 10
    ) {
      setnextPage("teckskill");
    }
  };

  useEffect(() => {
    if (
      phonevaidation &&
      inputName.length > 2 &&
      inputLastName.length > 2 &&
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)
    ) {
      setnextPage("teckskill");
    } else {
      setnextPage("");
    }
  }, [inputName, phonevaidation, inputLastName, inputEmail, inputPhone]);
  return (
    <>
      <div className={classes.parent}>
        <div className={classes.leftPanel}>
          <h1 className={classes.leftTitle}>
            Hey, Rocketeer, what are your coordinates?
          </h1>

          <form className={classes.form}>
            <input
              onChange={getInputvalueName}
              className={classes.input}
              type="text"
              placeholder="First Name"
              value={inputName}
              required
            ></input>
            {firstNameError && (
              <p className={classes.error}>
                *First Name must be at least 2 Characters Long!
              </p>
            )}
            <input
              value={inputLastName}
              onChange={getInputvaluelastName}
              className={classes.input}
              type="text"
              placeholder="Last Name"
              required
            ></input>
            {lastNameError && (
              <p className={classes.error}>
                *Last Name must be at least 2 Characters Long!
              </p>
            )}

            <input
              onChange={getInputvalueEmail}
              className={classes.input}
              type="email"
              placeholder="E Mail"
              name="email"
              required
            ></input>

            {EmailError && (
              <p className={classes.error}>*Your Email is not Valid!</p>
            )}
            <input
              onChange={getInputValuePhone}
              className={classes.input}
              type="number"
              placeholder="+995 5__ __ __ __"
              required
            ></input>
            {phoneError && (
              <p className={classes.error}>
                Phone Number must be Georgian Phormat
              </p>
            )}
          </form>
        </div>
        <div className={classes.rightPanel}>
          <h1 className={classes.rightTitle}> Redberry Origins</h1>
          <p className={classes.description}>
            You watch “What? Where? When?” Yeah. Our founders used to play it.
            That’s where they got a question about a famous American author and
            screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
            exact name and he answered Ray Redberry. And at that moment, a name
            for a yet to be born company was inspired - Redberry 😇
          </p>
        </div>
      </div>
      <div className={classes.navigation}>
        <Link to="/">
          <div className={classes.arrowleftDiv}>
            <p>
              <i className={classes.arrowleft}></i>
            </p>
          </div>
        </Link>

        <div className={classes.ball1}></div>

        <Link onClick={(nextPageValidate, validate)} to={nextPage}>
          <div className={classes.ball2}></div>
        </Link>

        <div className={classes.ball3}></div>

        <div className={classes.ball4}></div>

        <div className={classes.ball5}></div>

        <Link onClick={nextPageValidate} to={nextPage}>
          <div onClick={validate} className={classes.arrowRightDiv}>
            <p>
              <i className={classes.arrowRight}></i>
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default PersonalInfo;
