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

        <div >
          <div className={classes.bath}> บาท</div>
          <div className={classes.price}>{props.price}</div>
          <div className={classes.unit}> {props.unit}</div>
        </div>
        <div className={classes.position}>
        aad 99/99/999
          
        </div>
      </div>
      <div className={classes.seconddatabarcode}>
        {/* <div>{props.barcode}</div> */}
        <div>
          <Barcode
            value={props.barcode}
            width={1.2}
            height={20}
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
