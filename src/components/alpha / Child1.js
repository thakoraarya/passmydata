import { Button } from '@mui/material'
import React from 'react'

const Child1 = ({ fromchild,data }) => {

    var data = [
        'data from child01',
        'data from child02',
        'data from child03',
        'data from child04',
    ]
    return (
        <div className='flex flex-col justify-between items-center gap-4'>
            {data.map((dta, index) => (
                <Button variant="contained" size='large' onClick={() => fromchild(dta)} key={index} > {dta}</Button>)
            )}
        </div>
    )
}

export default Child1
