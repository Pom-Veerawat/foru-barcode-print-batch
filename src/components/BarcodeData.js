import React from "react";
import classes from "./BarcodeData.module.css";
import Barcode from "react-barcode";

const BarcodeData = (props) => {
  // --- Data Handling Fixes ---
  // 1. Provide a default value for the "regular price" if props.gp19 is missing.
  const desAll = () => {
    const priceText = props.gp19 || "0.00";
    return "ราคาปกติ " + priceText + " บาท";
  };

  // 2. Provide a fallback of 0 if props.gp20 (member price) is missing to prevent NaN.
  const number = parseFloat(props.gp20 || 0).toFixed(2);
  const [intPart, decimalPart] = number.split(".");

  return (
    <div
      className={classes.allinline}
      onClick={
        props.onDeleteHandler
          ? props.onDeleteHandler.bind(this, props.itemId)
          : null
      }
    >
      <div className={classes.maindatabarcode}>
        <div className={classes.title}>{props.title}</div>

        {/* Flexbox container for price details */}
        <div className={classes.detailsContainer}>
          {/* Left side content */}
          <div className={classes.leftDetails}>
            <div className={classes.title2}>ราคาสมาชิก</div>
            <div className={classes.unit}>{props.unit}</div>
          </div>

          {/* Right side content */}
          <div className={classes.rightDetails}>
            <div className={classes.price}>
              <span className={classes.intPart}>{intPart}</span>
              <span className={classes.decimalPart}>.{decimalPart}</span>
            </div>
            <div className={classes.bath}>บาท</div>
          </div>
        </div>

        {/* Regular price line */}
        <div className={classes.position}>{desAll()}</div>
      </div>

      {/* Barcode container */}
      <div className={classes.seconddatabarcode}>
        <div className={classes.barcodeWrapper}>
          <Barcode
            value={props.barcode || "00000000"} // Add fallback for barcode
            width={1.2}
            height={17}
            flat={true}
            fontSize={props.fontV}
            displayValue={false}
          />
        </div>
      </div>
    </div>
  );
};

export default BarcodeData;
