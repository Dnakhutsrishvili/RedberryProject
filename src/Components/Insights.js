import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./insights.module.css";

const Insights = (props) => {
  const [devboolean, setdevboolean] = useState(false);
  const [dev, setdev] = useState("");
  const [talk, settalk] = useState("");
  const [spec, setspec] = useState("");
  const [nextPage, setnextPage] = useState("");

  const handleChangedev = (e) => {
    setdev(e.target.value);
  };

  useEffect(() => {
    if (dev === "yes") {
      setdevboolean(true);
    } else {
      setdevboolean(false);
    }
  }, [dev]);

  //

  console.log(devboolean);
  const getdevtalktext = (e) => {
    settalk(e.target.value);
  };

  const getspecialtext = (e) => {
    setspec(e.target.value);
  };

  const validate = () => {
    const insightsobj = {
      will_organize_devtalk: devboolean,
      devtalk_topic: talk,
      something_special: spec,
    };

    props.onValidate(insightsobj);
  };

  useEffect(() => {
    if (dev !== "") {
      setnextPage("submitedapk");
    }
  }, [dev]);
  return (
    <>
      <div className={classes.parent}>
        <div className={classes.leftPanel}>
          <h1 className={classes.leftTitle}>What about you?</h1>
          <form>
            <div className={classes.devtalk}>
              <p className={classes.firstp}>
                Would you attend Devtalks and maybe also organize your own?
              </p>
              <input
                type="radio"
                value="yes"
                id="yes"
                onChange={handleChangedev}
                name="answer"
              />
              <label>yes</label>
            </div>
            <div className={classes.seconddiv}>
              <input
                type="radio"
                value="no"
                id="no"
                onChange={handleChangedev}
                name="answer"
                required
              />
              <label>no</label>
            </div>
          </form>

          <div>
            <label className={classes.secondp}>
              What would you speak about at Devtalk?
            </label>

            <textarea
              id="devtalk"
              name="devtalk"
              rows="6"
              cols="50"
              placeholder="I would..."
              onChange={getdevtalktext}
              className={classes.text}
            ></textarea>

            <label className={classes.lastquestion}>
              Tell us something special
            </label>

            <textarea
              id="special"
              name="special"
              rows="4"
              cols="30"
              placeholder="I..."
              onChange={getspecialtext}
            ></textarea>
          </div>
        </div>
        <div className={classes.rightPanel}>
          <h1 className={classes.rightTitle}> Redberrian Insights</h1>
          <p className={classes.description}>
            We were soo much fun before the pandemic started! Parties almost
            every weekend and lavish employee birthday celebrations!
            Unfortunately, covid ruined that fun like it did almost everything
            else in the world. But we try our best to zhuzh it up a bit. For
            example, we host biweekly Devtalks where our senior and lead
            developers talk about topics they are passionate about. Previous
            topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold
            these talks in the office but you can join our Zoom broadcast as
            well. Feel free to join either as an attendee or a speaker!
          </p>
        </div>
      </div>
      <div className={classes.navigation}>
        <Link to="/Personalinfo/teckskill/covid">
          <div className={classes.arrowleftDiv}>
            <p>
              <i className={classes.arrowleft}></i>
            </p>
          </div>
        </Link>
        <Link to="/Personalinfo">
          <div className={classes.ball1}></div>
        </Link>
        <Link to="/Personalinfo/teckskill">
          <div className={classes.ball2}></div>
        </Link>
        <Link to="/Personalinfo/teckskill/covid">
          <div className={classes.ball3}></div>
        </Link>

        <div className={classes.ball4}></div>
        <Link to={nextPage}>
          <div onClick={validate} className={classes.ball5}></div>
        </Link>
        <Link to={nextPage}>
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
export default Insights;
