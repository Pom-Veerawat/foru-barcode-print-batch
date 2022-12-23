import React from "react";
import classes from "./BarcodeData.module.css";
import Barcode from "react-barcode";

const BarcodeData = (props) => {
  return (
    <div
      className={classes.allinline}
      onClick={props.onDeleteHandler.bind(this, props.itemId)}
    >
      <div className={classes.maindatabarcode}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.des}>{props.des}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div className={classes.seconddatabarcode}>
        {/* <div>{props.barcode}</div> */}
        <div>
          <Barcode value={props.barcode} width={1} height={12} flat={true} fontSize={props.fontV}/>
        </div>
      </div>
    </div>
  );
};

export default BarcodeData;
