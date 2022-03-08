import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import PersonalInfo from "./Components/PersonalInfo";
import SubmitedApk from "./Components/SubmitedApk";
import TecknicalSkill from "./Components/TecknicalSkill";
import Covid from "./Components/Covid";
import Insights from "./Components/Insights";
import Thanks from "./Components/Thanks";
import SubmitedForms from "./Components/SubmitedForms";

function App() {
  //getting personal info from child component
  const Data = [];
  const savePersonalInfo = (data) => {
    Data.push(data);
  };

  const saveSkillInfo = (data) => {
    const ne = {
      skills: data,
    };
    Data.push(ne);
  };

  const saveCovidInfo = (data) => {
    Data.push(data);
  };

  const saveInsights = (data) => {
    Data.push(data);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/Personalinfo"
          element={<PersonalInfo onValidate={savePersonalInfo} />}
        ></Route>
        <Route
          path="Personalinfo/teckskill"
          element={<TecknicalSkill onValidate={saveSkillInfo} />}
        ></Route>
        <Route
          path="Personalinfo/teckskill/covid"
          element={<Covid onValidate={saveCovidInfo} />}
        ></Route>
        <Route
          path="Personalinfo/teckskill/covid/insights"
          element={<Insights onValidate={saveInsights} />}
        ></Route>
        <Route
          path="Personalinfo/teckskill/covid/insights/submitedapk"
          element={<SubmitedApk onSubmit={Data} />}
        ></Route>
        <Route path="thanks" element={<Thanks />}></Route>

        <Route path="submitedapk" element={<SubmitedForms />}></Route>
      </Routes>

      <Link to="/"></Link>
    </>
  );
}

export default App;
