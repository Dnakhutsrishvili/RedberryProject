import classes from "./TecknicalSkill.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const TecknicalSkill = (props) => {
  const [nextPage, setnextPage] = useState("");
  const [newSkillobj, setNewskillobj] = useState([]);

  const [btnDisabled, setbtnDisabled] = useState(false);

  // const [objectToMove, setobjectToMove] = useState();
  const [newid, setnewid] = useState();
  const [skills, setSkills] = useState([]);
  const [experinece, setExperince] = useState("");
  const [skillobj, setSkillobj] = useState("HTML");

  useEffect(() => {
    axios
      .get("https://bootcamp-2022.devtest.ge/api/skills")
      .then((res) => {
        setSkills(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getvalue = (event) => {
    setSkillobj(event.target.value);
  };

  useEffect(() => {
    if (newSkillobj.length >= 1) {
      for (let i = 0; i < newSkillobj.length; i++) {
        if (skillobj === newSkillobj[i].skill) {
          setbtnDisabled(true);
        } else {
          setbtnDisabled(false);
        }
      }
    }
  }, [newSkillobj]);
  //new id
  useEffect(() => {
    setbtnDisabled(false);
    for (let i = 0; i < skills.length; i++) {
      if (skillobj === skills[i].title) {
        setnewid(skills[i].id);
      }
    }
  }, [skillobj]);

  const getExperience = (event) => {
    setExperince(event.target.value);
  };
  const addExp = (event) => {
    event.preventDefault();

    setNewskillobj((newarray) => [
      ...newarray,
      {
        id: newid,
        skill: skillobj,
        experience: experinece,
      },
    ]);
  };

  const removeFromList = (listToRemove) => {
    setNewskillobj(newSkillobj.filter((prod) => prod !== listToRemove));
  };

  useEffect(() => {
    if (newSkillobj.length > 0) {
      setnextPage("covid");
    }

    //
  }, [newSkillobj]);

  const moveToParent = () => {
    props.onValidate(newSkillobj);
  };
  console.log(newSkillobj);
  return (
    <>
      <div className={classes.parent}>
        <div className={classes.leftPanel}>
          <h1 className={classes.leftTitle}>Tell us about your skills</h1>

          <form onSubmit={addExp}>
            <select className={classes.dropdown} onChange={getvalue}>
              {skills.map((option) => (
                <option
                  name={option.title}
                  key={option.id}
                  value={option.title}
                >
                  {option.title}
                </option>
              ))}
            </select>
            <input
              onChange={getExperience}
              className={classes.input}
              type="number"
              placeholder="Experience Duration in Years"
              required
            ></input>
            <button
              disabled={btnDisabled}
              type="submit"
              className={classes.btn}
            >
              Add Programming Language
            </button>
          </form>
          <div className={classes.newparentold}>
            {newSkillobj.map((option) => (
              <div key={option.id} className={classes.newparent}>
                <h2 className={classes.newchild1}>{option.skill}</h2>
                <h2 className={classes.newchild2}>
                  Years of Experience: {option.experience}
                </h2>
                <button
                  className={classes.btnclose}
                  onClick={() => removeFromList(option)}
                >
                  -
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.rightPanel}>
          <h1 className={classes.rightTitle}> A bit about our battles</h1>
          <p className={classes.description}>
            As we said, Redberry has been on the field for quite some time now,
            and we have touched and embraced a variety of programming languages,
            technologies, philosophies, and frameworks. We are battle-tested in
            PHP Laravel Stack with Vue.js, refined in React, and allies with
            Serverside technologies like Docker and Kubernetes, and now we have
            set foot in the web3 industry.
          </p>
        </div>
      </div>
      <div className={classes.navigation}>
        <Link to="/Personalinfo">
          <div className={classes.arrowleftDiv}>
            <p>
              <i className={classes.arrowleft}></i>
            </p>
          </div>
        </Link>
        <Link to="/Personalinfo">
          <div className={classes.ball1}></div>
        </Link>

        <div className={classes.ball2}></div>

        <Link to={nextPage}>
          <div className={classes.ball3}></div>
        </Link>

        <div className={classes.ball4}></div>

        <div className={classes.ball5}></div>

        <Link to={nextPage}>
          <div onClick={moveToParent} className={classes.arrowRightDiv}>
            <p>
              <i className={classes.arrowRight}></i>
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default TecknicalSkill;
