import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";
import  ComponentToAdd  from "./ComponentToAdd";
import classes from "./PrintingContent.module.css";

const PrintingContent = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const mybarcode = [
    {
      pid: "001",
      title: "Vistra 1",
      des: "Sushi",
      price: "200",
      barcode: 22.99,
    },
    {
      pid: "002",
      title: "Vistra 2",
      des: "Schnitzel",
      price: "300",
      barcode: 16.5,
    },
    {
      pid: "003",
      title: "Vistra 3",
      des: "Barbecue Burger",
      price: "400",
      barcode: 12.99,
    },
    {
      pid: "004",
      title: "Vistra 4",
      des: "Green Bowl",
      price: "500",
      barcode: 18.99,
    },
  ];
  const [barcodes, setBarcodes] = useState(mybarcode);

  const onDeleteItem = (pid, event) => {
    let ans = window.confirm("คุณต้องการที่จะลบรายการนี้หรือไม่ " + pid + " ?");
    let loadedBarcodes = [];
    if (ans) {
      loadedBarcodes = barcodes.filter((item) => item.pid !== pid);
    }
    setBarcodes(loadedBarcodes);
  };

  return (
    <div className={classes.A4}>
      Click ที่ป้ายเพื่อลบ
      <ComponentToAdd />
      <ComponentToPrint
        onDeleteData={onDeleteItem}
        items={barcodes}
        ref={componentRef}
      />
      <button onClick={handlePrint}>Print!</button>
    </div>
  );
};

export default PrintingContent;
