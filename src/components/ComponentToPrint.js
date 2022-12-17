import React from "react";
import BarcodeData from "./BarcodeData";
import classes from "./ComponentToPrint.module.css";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div className={classes.MainA4Div} ref={ref}>
      <BarcodeData
        title={"title"}
        des={"des"}
        price={"9,999.00"}
        barcode={"barcode"}
      />
      <BarcodeData
        title={"title"}
        des={"des"}
        price={"9,999.00"}
        barcode={"barcode"}
      />
      <BarcodeData
        title={"title"}
        des={"des"}
        price={"9,999.00"}
        barcode={"barcode"}
      />
      <BarcodeData
        title={"title"}
        des={"des"}
        price={"9,999.00"}
        barcode={"barcode"}
      />
      <BarcodeData
        title={"title"}
        des={"des"}
        price={"9,999.00"}
        barcode={"barcode"}
      />
      <BarcodeData
        title={"title"}
        des={"des"}
        price={"9,999.00"}
        barcode={"barcode"}
      />
    </div>
  );
});
