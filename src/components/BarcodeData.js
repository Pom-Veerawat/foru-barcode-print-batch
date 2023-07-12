import React from "react";
import classes from "./BarcodeData.module.css";
import Barcode from "react-barcode";

const BarcodeData = (props) => {

  const desAll =()=>{
    
    let val =props.des;
    if(val.length<15)
    {
      const addMroe = 15 - val.length;
      //console.log(addMroe);
      for (let index = 0; index < addMroe; index++) {
        val = val + "--";
        
      }
    }
    //console.log(val);
    //return "000000000000000"
    return props.des+" สมาชิก ---- บาท";
    
  }
//desAll();
  return (
    <div
      className={classes.allinline}
      onClick={props.onDeleteHandler.bind(this, props.itemId)}
    >
      <div className={classes.maindatabarcode}>
        <div className={classes.title}>{props.title}</div>

        <div>
          <div className={classes.bath}> บาท</div>
          <div className={classes.price}>{props.price}</div>
          <div className={classes.unit}> {props.unit}</div>
        </div>
        <div className={classes.position}>{desAll()}</div>
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
