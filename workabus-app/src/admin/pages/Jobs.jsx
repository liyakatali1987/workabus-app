import React from 'react';
import data from '../../data/jobs.json';
import Table from 'react-tailwind-table';

const Jobs = () => {
  const columns = [
    {
      field:"position",
      use: 'Position'
    },
    {
      field:"title",
      use: 'Title'
    },
    {
      field:"position",
      use: 'Position'
    },
    {
      field:"description",
      use: 'Job Description'
    },
    {
      field:"skills",
      use: 'Skills'
    },
    {
      field:"type",
      use: 'Type'
    }
  ];


  return (
    <Table columns={columns} rows={data.jobs} table_header='Posted jobs'/>
  )
}

export default Jobs