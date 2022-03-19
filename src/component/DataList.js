import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDatas } from "../redux/features/dataSlice";
import { Link } from "react-router-dom";

const DataList = () => {
  const { datas, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedData, setModifiedData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDatas());
  }, []);

  



  return (
      
    <div className='container'>
      <h2>Data</h2>
    
    </div>
    
  );

};

export default DataList;
