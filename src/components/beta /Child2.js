import React from 'react'
import { Button } from '@mui/material'

const Child2 = ({ fromchild2, data }) => {

  var data2 = [
    'data from 2nd child01',
    'data from 2nd child02',
    'data from 2nd child03',
    'data from 2nd child04',
  ]
  return (
    <div className='flex flex-col justify-between items-center gap-4'>
      {data2.map((dta, index) => (
        <Button variant="contained" size='large' onClick={() => fromchild2(dta)} key={index} > {dta}</Button>)
      )}
    </div>
  )
}

export default Child2

