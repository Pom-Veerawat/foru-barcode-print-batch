import React, { useEffect, useState } from "react";

const ComponentToAdd = (props) => {
  const [error, setError] = useState();
  const [inputText, setInputText] = useState("");
  const [bulkInputText, setBulkInputText] = useState("");
  const [priceLevel, setPriceLevel] = useState("1"); // ตัวเลือกเริ่มต้น

  const [lenghtOfItem, setLenghtOfItem] = useState("" + props.lengthItem);
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
  const [apiData, setApiData] = useState({
    productid: "0909",
    branch_id: props.branchID,
    price_level: "1",
  });

  //let data = { productid: "1784" };

  useEffect(() => {
    // Only call API if apiData has a valid productid that's not the default
    if (apiData.productid !== "0909") {
      readDataAPI();
    }
  }, [apiData, priceLevel]);

  const inputOnchangeHandler = (event) => {
    setInputText((prev) => {
      //prev การันตีค่าก่อนหน้า
      return event.target.value;
    });
  };

  const bulkInputOnchangeHandler = (event) => {
    setBulkInputText((prev) => {
      return event.target.value;
    });
  };

  useEffect(() => {
    if (inputText === "") return;

    const handler = setTimeout(() => {
      console.log("Auto call after delay 0.5s:", inputText);
      setError(null);
      onButtonClickHandler();
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [inputText]);

  useEffect(() => {
    if (bulkInputText === "") return;

    const handler = setTimeout(() => {
      console.log("Auto bulk call after delay 0.5s:", bulkInputText);
      setError(null);
      processBulkInput();
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [bulkInputText]);

  const processBulkInput = () => {
    try {
      // Split by comma or space and remove empty strings and whitespace
      const productIds = bulkInputText
        .split(/[,\s]+/)
        .map(id => id.trim())
        .filter(id => id !== '');
      
      console.log("Processing bulk IDs:", productIds);
      setError(null);
      
      // Process each ID by feeding it into the original single input logic
      const processSingleId = (ids, currentIndex = 0) => {
        if (currentIndex >= ids.length) {
          // All IDs processed, clear the bulk input
          setBulkInputText("");
          return;
        }
        
        const productId = ids[currentIndex];
        console.log(`Processing bulk ID ${currentIndex + 1}/${ids.length}:`, productId);
        
        // Set the single input text to trigger the original processing logic
        setInputText(productId);
        
        // Wait for the original processing to complete, then process next ID
        setTimeout(() => {
          processSingleId(ids, currentIndex + 1);
        }, 2000); // 2 second delay to allow original processing to complete
      };
      
      // Start processing the first ID
      processSingleId(productIds);
      
    } catch (err) {
      setError("เกิดข้อผิดพลาดในการประมวลผล bulk input");
      return;
    }
  };

  const onButtonClickHandler = () => {
    try {
      /*  const result = parseInt(inputText);
      console.log(result); */
      console.log("inputText", inputText);
      setError(null);
      setApiData({
        productid: inputText,
        branch_id: props.branchID,
        price_level: priceLevel,
      });
    } catch (err) {
      setError("กรอกได้เฉพาะตัวเลขเท่านั้น !!");
      return;
    }
  };
  const onButtonInsertHandler = () => {
    if (lenghtOfItem == "32") {
      window.alert("ครบ 32 แล้ว");
      return;
    }

    props.onAddItem({
      ...apiCallItem,
      price: parseFloat(apiCallItem.price)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")
        .toString(),
    });
    //console.log(apiCallItem);
  };
  function readDataAPI() {
    /* setIsLoading(true); */
    /* const lineid = props.lineid; */
    console.log("apiData", apiData);
    
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
        console.log("API call finished for:", apiData.productid, "Result:", result);
        setApiCallItem({ ...result });

        // Add item immediately after API response - no additional delays
        props.onAddItem({
          ...result,
          price: parseFloat(result.price)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, "$&,")
            .toString(),
        });
        
        // Clear input after adding item
        setInputText("");
        console.log("Item added and input cleared for:", apiData.productid);
      })
      .catch((error) => {
        console.log("API error for:", apiData.productid, "Error:", error);
        // Clear input even on error to continue bulk processing
        setInputText("");
      });
    //console.log("finish call apiload");
  }
  const handleRefresh = () => {
    window.location.reload();
  };
  const onClickDelete = (pid, event) => {
    //console.log(pid);
    //props.onDeleteData(pid);
  };
  return (
    <div>
      <select
        value={priceLevel}
        onChange={(e) => setPriceLevel(e.target.value)}
        style={{ marginBottom: "10px" }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <input
        style={{ width: "500px" }}
        onChange={inputOnchangeHandler}
        value={inputText}
        type="text"
        placeholder="กรุณาใส่ id สินค้า"
      ></input>
      <br></br>
      <br></br>
      <input
        style={{ width: "500px" }}
        onChange={bulkInputOnchangeHandler}
        value={bulkInputText}
        type="text"
        placeholder="กรุณาใส่ id สินค้าหลายตัว คั่นด้วยเครื่องหมายจุลภาคหรือช่องว่าง (เช่น 123,456,789 หรือ 123 456 789)"
      ></input>
      <br></br>
      <div>
        <button onClick={handleRefresh}>Refresh Window</button>
      </div>
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
