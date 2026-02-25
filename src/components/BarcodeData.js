import React from "react";
import classes from "./BarcodeData.module.css";

const BarcodeData = (props) => {
  // console.log("props BarcodeData", props);

  const formatNumber = (val) => {
    const num = parseFloat(val);
    if (isNaN(num)) return ["0", "00"];
    const formatted = num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatted.split(".");
  };

  const [intPart, decimalPart] = formatNumber(props.gp19);
  const [intPart2, decimalPart2] = formatNumber(props.gp20);

  return (
    <div
      className={classes.allinline}
      onClick={props.onDeleteHandler.bind(this, props.itemId)}
    >
      <div
        className={classes.title}
        style={{
          fontSize:
            props.title && props.title.length > 12 ? "0.2cm" : undefined,
        }}
      >
        {props.title}{" "}
      </div>
      <div className={classes.topSection}>
        <div className={classes.title2}>ราคาปกติ</div>
        <div className={classes.priceRow}>
          <div className={classes.price}>
            <span className={classes.intPart}>{intPart}</span>
            <span className={classes.decimalPart}>.{decimalPart}</span>
          </div>
          <div className={classes.bath}> บาท</div>
        </div>
      </div>

      <div className={classes.bottomSection}>
        <div className={classes.title2}>ราคาสมาชิก</div>
        <div className={classes.priceRow}>
          <div className={classes.price}>
            <span className={classes.intPart}>{intPart2}</span>
            <span className={classes.decimalPart}>.{decimalPart2}</span>
          </div>
          <div className={classes.bath}>บาท</div>
        </div>
        <div className={classes.unit}>{props.unit}</div>
      </div>
    </div>
  );
};

export default BarcodeData;
