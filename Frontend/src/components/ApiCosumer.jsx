import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiComponent = () => {
    const [data, setData] = useState([]); // State para almacenar los datos de la API
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get("http://localhost:3001/groups/");
        const data = response.data;
  
        setData(data);
      };
  
      fetchData();
    }, []); // Se ejecuta solo al montar el componente

    console.log(data);
  
    return (
      <div>
        {data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    );
  };
  
  export default ApiComponent;