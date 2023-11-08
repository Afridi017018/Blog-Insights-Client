import 'ka-table/style.css';
import React from 'react';
import { Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
import { useState } from 'react';



const Featured = () => {

const axios = useAxios();
const [fetchLoading,setFetchLoading] = useState(true)

const getFeatured = async ()=>{
 const res = await axios.get(`/get-feature`);
 return res;
}

const {data, isLoading} = useQuery({
  queryKey: ["featured"],
  queryFn: getFeatured
})


if(isLoading)
{
  return <Loading />
}




 

  const dataArray = data.data.result
  .map((element, index) => ({
    serial: index+1,
    name: element.user,
    title: element.title,
    id: element._id,
  }))

    return (
        <div className='my-5 px-5'>
            <Table
      columns={[
        { key: 'serial', title: 'Serial', dataType: DataType.String },
        { key: 'name', title: 'Owner', dataType: DataType.String },
        { key: 'title', title: 'Title', dataType: DataType.String },
      ]}
      data={dataArray}
      editingMode=""
      rowKeyField={'id'}
      sortingMode={SortingMode.Single}
    />
        </div>
    );
};

export default Featured;