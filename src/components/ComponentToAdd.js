import React, { useEffect, useState } from "react";

const ComponentToAdd = (props) => {
  const [error, setError] = useState();
  const [inputText, setInputText] = useState("");
  
  const [apiCallItem, setApiCallItem] = useState({
    pid: "1",
    pcode: "P-1",
    title: "12+MULTI 60'S.(BM)",
    des: " ",
    unit: "ขวด",
    type: "DIETRARY SUPPLEMENT อาหารเสริม ",
    price: "780.0000",
    barcode_num: "8994333385670",
    barcode: "",
  });
  const [apiData, setApiData] = useState({ productid: "1784" });

  //let data = { productid: "1784" };

  useEffect(() => {
    readDataAPI();
  }, [apiData]);
  const inputOnchangeHandler = (event) => {
    setInputText((prev) => {
      //prev การันตีค่าก่อนหน้า
      return event.target.value;
    });
  };
 
  const onButtonClickHandler = () => {
    try {
      const result = parseInt(inputText);
      console.log(result);
      setError(null);
      setApiData({ productid: inputText });
    } catch (err) {
      setError("กรอกได้เฉพาะตัวเลขเท่านั้น !!");
      return;
    }
  };
  const onButtonInsertHandler = () => {
    props.onAddItem({
      ...apiCallItem,
      price: parseFloat(apiCallItem.price).toFixed(2).toString(),
    });
    //console.log(apiCallItem);
  };
  function readDataAPI() {
    /* setIsLoading(true); */
    /* const lineid = props.lineid; */
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(apiData), // body data type must match "Content-Type" header
    };

    fetch("https://www.forucenter.com/dev/api/WebHookApi", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setApiCallItem({ ...result });

        //console.log(result);
        /* setCusName(result.cusName);
        setCusLastName(result.cusLastName);
        setCusAvatarLink(result.cusAvatarLink);
        setCusId(result.cusId);
        setCusPoint(result.cusPoint);
        setCusBirthday(result.cusBirthday);
        setCusRegisterDate(result.cusRegisterDate);
        setCusPhone(result.cusPhone);
        setCusEmail(result.cusEmail);
        setIsLoading(false); */
        /*  setIsLoading(false); */
      })
      .catch((error) => console.log("error", error));
    //console.log("finish call apiload");
  }
  const onClickDelete = (pid, event) => {
    //console.log(pid);
    //props.onDeleteData(pid);
  };
  return (
    <div>
      <input
        style={{ width: "500px" }}
        onChange={inputOnchangeHandler}
        value={inputText}
        type="text"
        placeholder="กรุณาใส่ id สินค้า"
      ></input>
      <br></br>
      <div>
        {error ?? "กรุณากรอกตัวเลขแล้วกด Call"}
        {!error ?? error}
      </div>

      <button onClick={onButtonClickHandler}>Call</button>
      <br></br>
      <br></br>
      <div>
        {apiCallItem.pid}
        <br></br>
        {apiCallItem.title}
        <br></br>
        {apiCallItem.des}
        <br></br>
        {apiCallItem.price}
        <br></br>
        {apiCallItem.barcode}
      </div>
      {/* <BarcodeData
          key={apiCallItem.pid}
          title={apiCallItem.title}
          des={apiCallItem.des}
          price={apiCallItem.price}
          barcode={apiCallItem.barcode}
          itemId={apiCallItem.pid}
          onDeleteHandler ={onClickDelete}
        /> */}
      
      <br></br>
      <button onClick={onButtonInsertHandler}>Insert</button>
    </div>
  );
};

export default ComponentToAdd;
