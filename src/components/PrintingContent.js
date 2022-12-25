import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";
import ComponentToAdd from "./ComponentToAdd";
import classes from "./PrintingContent.module.css";
import Card from "../UI/Card";
const PrintingContent = (props) => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const mybarcode = [
    /* {
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
    }, */
  ];
  const [barcodes, setBarcodes] = useState(mybarcode);

  const onAddItem = (item) => {
    const allItem = [...barcodes];
    allItem.push(item);
    setBarcodes(allItem);
    //console.log(allItem);
  };

  const onDeleteItem = (pid, event) => {
    let ans = window.confirm("คุณต้องการที่จะลบรายการนี้หรือไม่ " + pid + " ?");
    let loadedBarcodes = [];
    console.log(ans);
    if (ans === true) {
      loadedBarcodes = barcodes.filter((item) => item.pid !== pid);
      setBarcodes(loadedBarcodes);
    }
  };
  const [inputFontText, setInputFontText] = useState("9");
  const inputFontHandler = (event) => {
    setInputFontText((prev) => {
      //prev การันตีค่าก่อนหน้า
      return event.target.value;
    });
  };
  return (
    <div className={classes.A4}>
      <Card>
        <ComponentToAdd onAddItem={onAddItem} branchID={props.branchId} />
      </Card>
      {/* <Card>
        <p>ตั้งค่า font barcode</p>
        <div>
          <input
            style={{ width: "50px" }}
            onChange={inputFontHandler}
            value={inputFontText}
            type="text"
            placeholder="font px"
          ></input>
        </div>
      </Card> */}
      Click ที่ป้ายเพื่อลบ
      <ComponentToPrint
        onDeleteData={onDeleteItem}
        items={barcodes}
        fontval ={inputFontText}
        ref={componentRef}
      />
      <button onClick={handlePrint}>Print!</button>
    </div>
  );
};

export default PrintingContent;
