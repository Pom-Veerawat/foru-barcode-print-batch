import React, { useRef,useState,useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from './ComponentToPrint';
import classes from './PrintingContent.module.css'

const PrintingContent = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  const [barcodes, setBarcodes] = useState([]);
  
  useEffect(()=>{
    const loadedBarcodes = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setBarcodes(loadedBarcodes);
  },[]);

  const mybarcode = [
    {
      pid :'001',
      title: 'm1',
      des: 'Sushi',
      price: 'Finest fish and veggies',
      barcode: 22.99,
    },
    {
      pid :'002',
      title: 'm2',
      des: 'Schnitzel',
      price: 'A german specialty!',
      barcode: 16.5,
    },
    {
      pid :'003',
      title: 'm3',
      des: 'Barbecue Burger',
      price: 'American, raw, meaty',
      barcode: 12.99,
    },
    {
      pid :'004',
      title: 'm4',
      des: 'Green Bowl',
      price: 'Healthy...and green...',
      barcode: 18.99,
    },
  ];
  



  return (
    <div className={classes.A4}>
      <ComponentToPrint items={barcodes} ref={componentRef} />
      <button onClick={handlePrint}>Print!</button>
    </div>
  );
};

export default PrintingContent;