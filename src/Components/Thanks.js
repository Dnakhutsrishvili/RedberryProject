import classes from "./insights.module.css";

const Thanks = () => {
  window.setTimeout(function () {
    window.location.href = "/";
  }, 3000);
  return (
    <>
      <div className={classes.background}>
        <h1 className={classes.Thankyou}>Thanks for Joining 😊</h1>
      </div>
    </>
  );
};
export default Thanks;
