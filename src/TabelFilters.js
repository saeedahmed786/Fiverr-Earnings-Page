import { Button, Menu, MenuItem, Select } from '@material-ui/core'
import React, { useEffect } from 'react'

export const TabelFilters = () => {
    const [filter, setFilter] = React.useState(1);
    const [year, setYear] = React.useState(1);
    const [month, setMonth] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [yearOpen, setYearOpen] = React.useState(false);
    const [monOpen, setMonOpen] = React.useState(false);
    
    const handleChange = (event) => {
        setFilter(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleClick = () => {
        setOpen(true);
      };
    
      const handleYearClick = () => {
        setYearOpen(true);
      };
    const handleYearChange = (event) => {
        setYear(event.target.value);
      };
    
      const handleYearClose = () => {
        setYearOpen(false);
      };
    
    
    const handleMonChange = (event) => {
        setMonth(event.target.value);
      };
    
      const handleMonClose = () => {
        setMonOpen(false);
      };
    
      const handleMonClick = () => {
        setMonOpen(true);
      };

    return (
        <div>
               <div className = 'tabel-filters'>
               <label style = {{fontSize: '23px', paddingRight: '15px', lineHeight: '31px'}}>Show </label>
                <span style = {{paddingLeft: '38px'}} className = 'select-dropdown everything'>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleClick}
                        value={filter}
                        onChange={handleChange}
                        >
                    <MenuItem value = '1'>Everything</MenuItem>
                    <MenuItem value = '2'>Withdrawn</MenuItem>
                    <MenuItem value = '3'>Pending Clearance</MenuItem>
                    <MenuItem value = '54'>Cancelled Revenues</MenuItem>
                    <MenuItem value = '6'>Cleared</MenuItem>
                    <MenuItem value = '7'>Used for Purchases</MenuItem>
                    </Select>

                </span>
                <span style = {{paddingLeft: '8px'}} className = 'year select-dropdown'>
                    <Select
                        style = {{width: '80px'}}
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={yearOpen}
                        onClose={handleYearClose}
                        onOpen={handleYearClick}
                        value={year}
                        onChange={handleYearChange}
                        >
                    <MenuItem value = '1'>2020</MenuItem>
                    <MenuItem value = '2'>2019</MenuItem>
                    <MenuItem value = '3'>2018</MenuItem>
                   
                    </Select>

                </span>
                <span style = {{paddingLeft: '8px'}} className = 'select-dropdown months'>
                    <Select
                        style = {{width: '120px'}}
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={monOpen}
                        onClose={handleMonClose}
                        onOpen={handleMonClick}
                        value={month}
                        onChange={handleMonChange}
                        >
                    <MenuItem value = '0'>All Months</MenuItem>
                    <MenuItem value = '1'>January</MenuItem>
                    <MenuItem value = '2'>February</MenuItem>
                    <MenuItem value = '3'>March</MenuItem>
                    <MenuItem value = '5'>April</MenuItem>
                    <MenuItem value = '6'>May</MenuItem>
                    <MenuItem value = '7'>June</MenuItem>
                    <MenuItem value = '8'>July</MenuItem>
                    <MenuItem value = '9'>August</MenuItem>
                    <MenuItem value = '10'>September</MenuItem>
                    <MenuItem value = '11'>October</MenuItem>
                    <MenuItem value = '12'>November</MenuItem>
                    <MenuItem value = '13'>December</MenuItem>
                    </Select>

                </span>
                <span className = 'export-to-csv-wrapper' style = {{float: 'right', color: '#4a73e8', fontWeight: '541', marginTop: '20px'}}>
                  <a href = '#' style = {{textDecoration: 'none'}} className = 'export-to-csv'>                  
                  Export to CSV
                     </a>
                </span>
               </div>
        </div>
    )
}
