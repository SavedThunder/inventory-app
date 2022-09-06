import React, {useState} from 'react';
import { Button, InputLabel, Select, MenuItem, FormControl, TextField, paperClasses } from '@mui/material';

export function RemoveButton(props){

    function removeItem(){
        props.setInventory(props.inventory.splice(props.itemId, 1))
    }

    return (
        <div>
            <Button onClick={() => removeItem()}>Remove</Button>
        </div>
    )
}

export function InventoryForm(props){

    const [itemName, setItemName] =useState("")
    const [itemCategory, setItemCategory] =useState("")
    const [itemStatus, setItemStatus] =useState("")
    const [itemProject, setItemProject] =useState("")
    const [itemOwner, setItemOwner] =useState("")

    const ownerList = props.owners.map((owner) => 
        <MenuItem value={owner}>{owner}</MenuItem>)

    const projectList = props.projects.map((project) => 
        <MenuItem value={project}>{project}</MenuItem>)

    function clearInputs(){
        setItemName("")
        setItemCategory("")
        setItemStatus("")
        setItemProject("")
        setItemOwner("")
    }

    function addItem(){
        var newElement = {
            "itemId": props.inventory.length + 1,
            "itemName": itemName,
            "itemCategory": itemCategory,
            "itemStatus": itemStatus,
            "itemProject": itemProject,
            "itemOwner": itemOwner
        }
        props.setInventory([...props.inventory, newElement]);
        clearInputs()
    }

    return(
        <div>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <TextField 
                    id="standard-basic" 
                    label="Item Name" 
                    variant="standard"
                    value={itemName} 
                    onChange={(e) => setItemName(e.target.value)}/>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <TextField 
                    id="standard-basic" 
                    label="Category" 
                    variant="standard"
                    value={itemCategory}
                    onChange={(e) => setItemCategory(e.target.value)} />
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <TextField 
                    id="standard-basic" 
                    label="Status" 
                    variant="standard"
                    value={itemStatus}
                    onChange={(e) => setItemStatus(e.target.value)} />
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="project-select-inventory-form-label">Project</InputLabel>
                <Select
                    labelId="project-select-inventory-form-label"
                    label="Project"
                    onChange={(e) => setItemProject(e.target.value)}
                    value={itemProject}
                    >
                {projectList}
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="owner-select-inventory-form-label">Owner</InputLabel>
                <Select
                    labelId="owner-select-inventory-form-label"
                    label="Owner"
                    onChange={(e) => setItemOwner(e.target.value)}
                    value={itemOwner}
                    >
                {ownerList}
                </Select>
            </FormControl>
            

            <Button variant="contained" onClick={() => addItem()}>Add Item</Button>

        </div>
    )
}