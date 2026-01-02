import React from "react";
import classes from "./BarcodeData.module.css";

const BarcodeData = (props) => {
  console.log("props BarcodeData", props);

  const number = parseFloat(props.gp19).toFixed(2);
  const [intPart, decimalPart] = number.split(".");

  const number2 = parseFloat(props.gp20).toFixed(2);
  const [intPart2, decimalPart2] = number2.split(".");

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

        <div style={{ clear: "both" }}>
          <div className={classes.bath} style={{ marginTop: "10px" }}>
            {" "}
            บาท
          </div>
          <div className={classes.price}>
            <span className={classes.intPart}>{intPart2}</span>
            <span className={classes.decimalPart}>.{decimalPart2}</span>
          </div>
          <div className={classes.title2} style={{ marginBottom: 0 }}>
            ราคาสมาชิก
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarcodeData;
