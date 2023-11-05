import 'ka-table/style.css';
import React from 'react';
import { Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';

const dataArray = Array(10)
  .fill(undefined)
  .map((_, index) => ({
    serial: `column:1 row:${index}`,
    profile: `column:2 row:${index}`,
    name: `column:3 row:${index}`,
    title: `column:4 row:${index}`,
    id: index,
  }));

const Featured = () => {



    return (
        <div className='my-5 px-5'>
            <Table
      columns={[
        { key: 'serial', title: 'Serial', dataType: DataType.String },
        { key: 'profile', title: 'Profile Picture', dataType: DataType.String },
        { key: 'name', title: 'Name', dataType: DataType.String },
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