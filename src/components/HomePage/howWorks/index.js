import style from "./style.module.css";

export function HowWorks() {
  return (
    <div className={style.howWorksComp}>
      <div className={style.howWorksH2}>
        <h2>How does it works?</h2>
      </div>
      <div>
        <h3 className={style.howWorksH3one}>1</h3>
        <p className={style.howWorksP1}>STEP ONE TEXT HERE</p>
        <h3 className={style.howWorksH3two}>2</h3>
        <p className={style.howWorksP2}>STEP TWO TEXT HERE</p>
        <h3 className={style.howWorksH3three}>3</h3>
        <p className={style.howWorksP3}>STEP THREE TEXT HERE</p>
      </div>
    </div>
  );
}
