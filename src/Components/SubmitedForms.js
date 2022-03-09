import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import classes from "./SubmitedForms.module.css";

const SubmitedForms = () => {
  const [dataa, setData] = useState([]);
  const [indexer, setindexer] = useState(false);

  const id = Math.round(Math.random() * 10);

  useEffect(() => {
    axios
      .get(
        "https://bootcamp-2022.devtest.ge/api/applications?token=479b20d7-6522-47e9-857c-54f42ff16c16"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const handleRemoveItem = (e) => {
  //   if (dataa.map((opt) => opt.email === e)) {
  //     setindexer(true);
  //   }
  // };
  const click = () => {
    setindexer(true);
    if (indexer) {
      setindexer(false);
    }
  };

  return (
    <>
      <div className={classes.background}>
        <h1 className={classes.title}>Submitted Applications</h1>
      </div>

      <div>
        {dataa.map((option, index) => (
          <div key={index}>
            <button className={classes.btn} onClick={click}>
              {index + 1}
            </button>

            {indexer && (
              <div>
                <div className={classes.mappeddiv}>
                  <div className={classes.personalinfo}>
                    <h1 className={classes.personaltitle}>
                      Personal Information
                    </h1>
                    <h1 className={classes.personaldata}>
                      First Name:
                      <span className={classes.name}>{option.first_name}</span>
                    </h1>
                    <h1 className={classes.personaldata}>
                      Last Name:
                      <span className={classes.name}>{option.last_name}</span>
                    </h1>
                    <h1 className={classes.personaldata}>
                      E Mail:
                      <span className={classes.name}>{option.email}</span>
                    </h1>
                    <h1 className={classes.personaldata}>
                      Phone:
                      <span className={classes.name}>{option.phone}</span>
                    </h1>
                  </div>
                  {/* skillset */}
                  <div className={classes.skillset}>
                    <h1 className={classes.personaltitle}>Skillset</h1>
                    {dataa[0].skills.map((option) => (
                      <div className={classes.flex}>
                        <div>
                          <h1 className={classes.personaldata}>{option.id}</h1>
                        </div>

                        <div>
                          <h1 className={classes.name}>
                            Years of Experience: {option.experience}
                          </h1>
                        </div>
                      </div>
                    ))}
                    {/* Insigts */}
                    <h1 className={classes.personaltitle}>Insigts</h1>
                    <p className={classes.pcovid}>
                      Would you attend Devtalks and maybe also organize your
                      own?
                    </p>
                    {option.will_organize_devtalk === true && (
                      <div className={classes.flexradio}>
                        <div>
                          <input
                            type="radio"
                            id="yesdev"
                            name="yesdev"
                            value="yesdev"
                            defaultChecked
                          />

                          <label className={classes.label}>Yes</label>
                        </div>
                        <div>
                          <input type="radio" name="Nodevv" value="Nodevv" />
                          <label className={classes.label}>No</label>
                        </div>
                      </div>
                    )}
                    {option.will_organize_devtalk === false && (
                      <div className={classes.flexradio}>
                        <div>
                          <input
                            type="radio"
                            id="Norad"
                            name="Norad"
                            value="Norad"
                            defaultChecked
                          />

                          <label className={classes.label}>No</label>
                        </div>
                        <div>
                          <input type="radio" name="Yesrad" value="Yesrad" />
                          <label className={classes.label}>Yes</label>
                        </div>
                      </div>
                    )}
                    {option.will_organize_devtalk === true && (
                      <div>
                        <p className={classes.pcovid}>
                          What would you speak about at Devtalk?
                        </p>
                        <textarea className={classes.textarea}>
                          {option.devtalk_topic}
                        </textarea>

                        <p className={classes.pcovid}>
                          Tell us somthing special
                        </p>
                        <textarea className={classes.textareaspecial}>
                          {option.something_special}
                        </textarea>
                      </div>
                    )}
                  </div>
                </div>
                {/* Covid Situation */}
                <div className={classes.flexcovid}>
                  <h1 className={classes.covidTitle}>Covid Situation</h1>
                  <p className={classes.pcovid}>
                    how would you prefer to work?
                  </p>
                  <div>
                    {option.work_preference === "from_office" && (
                      <div className={classes.flexradio}>
                        <div>
                          <input
                            type="radio"
                            id="Office"
                            name="Office"
                            value="Office"
                            defaultChecked
                          />
                          <label className={classes.label}>
                            From Sairme Office
                          </label>
                        </div>
                        <div>
                          <input type="radio" name="Home" value="Home" />
                          <label className={classes.label}>From Home</label>
                        </div>
                        <div>
                          <input type="radio" name="Hybrid" value="Hybrid" />
                          <label className={classes.label}>Hybrid</label>
                        </div>
                      </div>
                    )}

                    {option.work_preference === "from_home" && (
                      <div className={classes.flexradio}>
                        <div>
                          <input
                            type="radio"
                            id="Home"
                            name="Home"
                            value="Home"
                            defaultChecked
                          />
                          <label className={classes.label}>From Home</label>
                        </div>
                        <div>
                          <input type="radio" name="Office" value="Office" />
                          <label className={classes.label}>
                            From Sairme Office
                          </label>
                        </div>

                        <div>
                          <input
                            className={classes.input}
                            type="radio"
                            name="Hybrid"
                            value="Hybrid"
                          />
                          <label className={classes.label}>Hybrid</label>
                        </div>
                      </div>
                    )}

                    {option.work_preference === "hybrid" && (
                      <div className={classes.flexradio}>
                        <div>
                          <input
                            type="radio"
                            id="Hybrid"
                            name="Hybrid"
                            value="Hybrid"
                            defaultChecked
                          />

                          <label className={classes.label}>Hybrid</label>
                        </div>
                        <div>
                          <input type="radio" name="Office" value="Office" />
                          <label className={classes.label}>
                            From Sairme Office
                          </label>
                        </div>
                        <div>
                          <input type="radio" name="Home" value="Home" />
                          <label className={classes.label}>From Home</label>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Covid y/n */}
                  <h1 className={classes.pcovid}>Did you have covid 19?</h1>
                  {option.had_covid === true && (
                    <div className={classes.flexradio}>
                      <div>
                        <input
                          type="radio"
                          id="yes"
                          name="yes"
                          value="yes"
                          defaultChecked
                        />

                        <label className={classes.label}>Yes</label>
                      </div>
                      <div>
                        <input type="radio" name="No" value="No" />
                        <label className={classes.label}>No</label>
                      </div>
                    </div>
                  )}
                  {option.had_covid === false && (
                    <div className={classes.flexradio}>
                      <div>
                        <input
                          type="radio"
                          id="No"
                          name="No"
                          value="No"
                          defaultChecked
                        />

                        <label className={classes.label}>No</label>
                      </div>
                      <div>
                        <input type="radio" name="Yes" value="Yes" />
                        <label className={classes.label}>Yes</label>
                      </div>
                    </div>
                  )}

                  {option.had_covid === true && (
                    <div>
                      <p className={classes.pcovid}>
                        When did you have covid 19?
                      </p>
                      <input
                        className={classes.date}
                        type="date"
                        id="start"
                        name="trip-start"
                        value={option.had_covid_at}
                      ></input>
                    </div>
                  )}
                  {/* vaccinated */}
                  <h1 className={classes.pcovid}>Have you been vaccinated?</h1>
                  {option.vaccinated === true && (
                    <div className={classes.flexradio}>
                      <div>
                        <input
                          type="radio"
                          id="yesvacine"
                          name="yesvacine"
                          value="yesvacine"
                          defaultChecked
                        />

                        <label className={classes.label}>Yes</label>
                      </div>
                      <div>
                        <input type="radio" name="No" value="No" />
                        <label className={classes.label}>No</label>
                      </div>
                    </div>
                  )}
                  {option.vaccinated === false && (
                    <div className={classes.flexradio}>
                      <div>
                        <input
                          type="radio"
                          id="Novacine"
                          name="Novacine"
                          value="Novacine"
                          defaultChecked
                        />

                        <label className={classes.label}>No</label>
                      </div>
                      <div>
                        <input type="radio" name="Yes" value="Yes" />
                        <label className={classes.label}>Yes</label>
                      </div>
                    </div>
                  )}
                  {option.vaccinated === true && (
                    <div>
                      <p className={classes.pcovid}>
                        When did you get covid vaccine?
                      </p>
                      <input
                        className={classes.date}
                        type="date"
                        id="start"
                        name="trip-start"
                        value={option.vaccinated_at}
                      ></input>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default SubmitedForms;
