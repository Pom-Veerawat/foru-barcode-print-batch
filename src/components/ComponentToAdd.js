import React, { useEffect, useState } from "react";

const ComponentToAdd = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  let data = { "productid": "1784" };

  useEffect(() => {
    readDataAPI();
  }, []);

  function readDataAPI() {
    setIsLoading(true);
    const lineid = props.lineid;
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    };

    fetch("https://www.forucenter.com/dev/api/WebHookApi", requestOptions)
      .then((response) =>  response.json() )
      .then((result) => {
        console.log(result);
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
      })
      .catch((error) => console.log("error", error));
    console.log("finish call apiload");
  }

  return <div>

  </div>;
};

export default ComponentToAdd;
