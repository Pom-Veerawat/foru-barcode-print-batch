import React from "react";
import BarcodeData from "./BarcodeData";
import classes from "./ComponentToPrint.module.css";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  //console.log(props.items);

  const onClickDelete = (pid, event) => {
    //console.log(pid);
    props.onDeleteData(pid);
    

  };

  return (
    <div className={classes.MainA4Div} ref={ref}>
      {props.items.map((item) => (
        <BarcodeData
          key={item.pid}
          title={item.title}
          des={item.des}
          price={item.price}
          barcode={item.barcode}
          itemId ={item.pid}
          onDeleteHandler ={onClickDelete}
        />
      ))}
    </div>
  );
});
