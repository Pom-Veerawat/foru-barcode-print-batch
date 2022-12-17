import React from "react";
import classes from "./BarcodeData.module.css";
const BarcodeData = (props) => {
  return (
    <div className={classes.allinline}>
      <div className={classes.maindatabarcode}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.des}>{props.des}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div className={classes.seconddatabarcode}>
        <div>{props.barcode}</div>
      </div>
    </div>
  );
};

export default BarcodeData;
