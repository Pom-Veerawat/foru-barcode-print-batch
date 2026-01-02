import React from "react";
import classes from "./BarcodeData.module.css";
const BarcodeData = (props) => {
  console.log("props BarcodeData", props);
  const desAll = () => {
    let val = props.des;
    if (val.length < 15) {
      const addMroe = 15 - val.length;
      //console.log(addMroe);
      for (let index = 0; index < addMroe; index++) {
        val = val + "--";
      }
    }
    //console.log(val);
    //return "000000000000000"
    //return props.des + " ราคาปกติ " + props.gp19 + " บาท";
    return "      ราคาสมาชิก " + props.gp20 + " บาท";
  };
  const number = parseFloat(props.gp19).toFixed(2);
  const [intPart, decimalPart] = number.split(".");
  //desAll();
  return (
    <div
      className={classes.allinline}
      onClick={props.onDeleteHandler.bind(this, props.itemId)}
    >
      <div className={classes.maindatabarcode}>
        <div
          className={classes.title}
          style={{
            fontSize:
              props.title && props.title.length > 31 ? "0.21cm" : undefined,
          }}
        >
          {props.title}{" "}
        </div>

        <div>
          <div className={classes.bath}> บาท</div>
          <div className={classes.price}>
            <span className={classes.intPart}>{intPart}</span>
            <span className={classes.decimalPart}>.{decimalPart}</span>
          </div>
          <div style={{ flexDirection: "column" }}>
            <div className={classes.title2}>ราคาปกติ</div>
            <div className={classes.unit}> {props.unit}</div>
          </div>
        </div>
        <div className={classes.position}>{desAll()}</div>
      </div>
    </div>
  );
};

export default BarcodeData;
