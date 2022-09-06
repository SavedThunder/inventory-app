import * as React from 'react';
import { RemoveButton } from './inventory-form';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function InventoryTable(props) {


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Project</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align='right'>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.inventory.map((row) => (
            <TableRow key={row.itemId}>
              <TableCell align="right">{row.itemName}</TableCell>
              <TableCell align="right">{row.itemCategory}</TableCell>
              <TableCell align="right">{row.itemStatus}</TableCell>
              <TableCell align="right">{row.itemProject}</TableCell>
              <TableCell align="right">{row.itemOwner}</TableCell>
              <TableCell align="right">
                {<RemoveButton 
                    itemId={row.itemId}
                    inventory={props.inventory}
                    setInventory={props.setInventory}/>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
