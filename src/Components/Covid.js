import classes from "./covid.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Covid = (props) => {
  const [place, setPlace] = useState("");
  const [covidcontact, setCovidcontact] = useState("");
  const [covidDate, setcovidDate] = useState(false);
  const [date, setDate] = useState("");
  const [vaccinated, setVaccinated] = useState("");
  const [vacineDate, setvacineDate] = useState(false);
  const [vacineDateForm, setvacineDateForm] = useState("");
  const [nextPage, setnextPage] = useState("");

  const getDateVaccine = (event) => {
    setvacineDateForm(event.target.value);
  };

  const handleChangeCovid = (e) => {
    setCovidcontact(e.target.value);
  };

  useEffect(() => {
    if (covidcontact === "Yes") {
      setcovidDate(true);
    } else {
      setcovidDate(false);
    }
  }, [covidcontact]);

  useEffect(() => {
    if (vaccinated === "Yes") {
      setvacineDate(true);
    } else {
      setvacineDate(false);
    }
  }, [vaccinated]);

  const handleChange = (e) => {
    setPlace(e.target.value);
  };

  const handleChangeVacine = (e) => {
    setVaccinated(e.target.value);
  };

  const getDate = (event) => {
    setDate(event.target.value);
  };

  const validate = () => {
    const covidInfo = {
      work_preference: place,
      had_covid: covidDate,
      had_covid_at: date,
      vaccinated: vacineDate,
      vaccinated_at: vacineDateForm,
    };
    console.log(place);
    console.log(covidDate);
    console.log(date);
    console.log(vacineDate);
    console.log(vacineDateForm);

    if (date === "") {
      delete covidInfo.had_covid_at;
    }
    if (vacineDateForm === "") {
      delete covidInfo.vaccinated_at;
    }

    console.log(covidInfo);
    props.onValidate(covidInfo);
  };

  useEffect(() => {
    if (place !== "" && covidDate !== "" && vaccinated !== "") {
      setnextPage("insights");
    }
  }, [place, covidDate, vaccinated]);
  return (
    <>
      <div className={classes.parent}>
        <div className={classes.leftPanel}>
          <h1 className={classes.leftTitle}>Covid Stuff</h1>
          <div className={classes.firstparent}>
            <form>
              <div>
                <p className={classes.ptag}>how would you prefer to work?</p>
                <div>
                  <input
                    type="radio"
                    value="from_office"
                    id="from_office"
                    onChange={handleChange}
                    name="workplace"
                    required
                  />
                  <label>From Sairme Office</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="from_home"
                    id="from_home"
                    onChange={handleChange}
                    name="workplace"
                    required
                  />
                  <label>From Home</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="hybrid"
                    id="hybrid"
                    onChange={handleChange}
                    name="workplace"
                    required
                  />
                  <label>Hybrid</label>
                </div>
              </div>
            </form>
          </div>

          <div className={classes.secondtparent}>
            <p className={classes.ptag}>Did you contact covid 19? :(</p>
            <form>
              <div>
                <div>
                  <input
                    type="radio"
                    value="No"
                    id="No"
                    onChange={handleChangeCovid}
                    name="answer"
                  />
                  <label>No</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="Yes"
                    id="Yes"
                    onChange={handleChangeCovid}
                    name="answer"
                    required
                  />
                  <label>Yes</label>
                </div>
              </div>
            </form>

            {covidDate && (
              <div>
                <p>When?</p>
                <input
                  onChange={getDate}
                  className={classes.date}
                  type="date"
                  id="coviddate"
                  name="coviddate"
                ></input>
              </div>
            )}
          </div>
        </div>

        <div className={classes.thirdtparent}>
          <p className={classes.ptag}>Have you been vaccinated?</p>
          <form>
            <div>
              <div>
                <input
                  type="radio"
                  value="No"
                  id="No"
                  onChange={handleChangeVacine}
                  name="answer"
                  required
                />
                <label>No</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Yes"
                  id="Yes"
                  onChange={handleChangeVacine}
                  name="answer"
                  required
                />
                <label>Yes</label>
              </div>
            </div>
          </form>

          {vacineDate && (
            <div>
              <p>When did you get your last covid vaccine?</p>
              <input
                onChange={getDateVaccine}
                className={classes.date}
                type="date"
                id="vacinedate"
                name="vacinedate"
              ></input>
            </div>
          )}
        </div>

        <div className={classes.rightPanel}>
          <h1 className={classes.rightTitle}> Redberry Covid Policies</h1>
          <p className={classes.description}>
            As this infamous pandemic took over the world, we adjusted our
            working practices so that our employees can be as safe and
            comfortable as possible. We have a hybrid work environment, so you
            can either work from home or visit our lovely office on Sairme
            Street. If it was up to us, we would love you to see us in the
            office because we think face-to-face communications Zoom meetings.
            Both on the fun and productivity scales.
          </p>
        </div>
      </div>
      <div className={classes.navigation}>
        <Link to="/Personalinfo/teckskill">
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

        <div className={classes.ball3}></div>

        <Link to={nextPage}>
          <div onClick={validate} className={classes.ball4}></div>
        </Link>

        <div className={classes.ball5}></div>

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

export default Covid;
