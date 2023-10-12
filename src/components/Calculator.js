// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import React, { useState } from 'react';


import { List, ListItem, ListItemText } from "@mui/material";
export default function Calculator() {



    const [principal, setprincipals] = useState(0);
    const [rate, setRate] = useState(0);
    const [time, setTime] = useState(0);
    const [totalintrest, setTotalintrest] = useState(0);
    const [totalamount, setTotalamount] = useState(0);
    const intrast = () => {
        const interest = principal * rate * time;
        setTotalintrest(interest / 100);
        setTotalamount(interest / 100 + principal);
    };

    return (


        <Box style={{ display: "flex" }}>
            <Box>
                <Grid style={{ margin: "50px 30px", border: "1px solid black", borderRadius: "20px", width: "500px", height: "500px", backgroundColor: 'white' }}>

                    <Grid style={{ display: "flex", marginLeft: "10%" }}>
                        <Grid marginRight="20px">
                            <TextField type='number' label="Principal($):" variant="standard" onChange={(event) => setprincipals(Number(event.target.value))} />
                        </Grid>
                        <Grid>
                            <TextField type='number' value={rate} label="Rate:" variant="standard" onChange={(event) => setRate(Number(event.target.value))} />
                        </Grid>
                    </Grid>
                    <Grid style={{ display: "flex", marginLeft: "10%", marginTop: "20px" }}>
                        <Grid marginRight="20px">
                            <TextField type='number' value={time} label="Time:" variant="standard" onChange={(event) => setTime(Number(event.target.value))} />
                        </Grid>

                        {/* <Grid>
                        <Box >
                            <FormControl style={{ width: "200px", borderRadius: "10px" }}>
                                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Number}
                                    label="year"

                                >
                                    <MenuItem ></MenuItem>
                                    <MenuItem ></MenuItem>
                                    <MenuItem ></MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid> */}
                    </Grid>
                    <Grid padding="10px">
                        <Button variant="contained" color="success" onClick={intrast}>
                            Calculate
                        </Button>
                    </Grid>
                    <Grid container style={{ padding: ' 20px 100px', height: "100px" }} >
                        <List
                            sx={{ width: "100%", maxWidth: 400 }}
                            component="nav"
                            aria-labelledby="nested-list-subheader" style={{ background: "#72ffb4" }}
                        >
                            <ListItem>
                                <ListItemText id="princepal" primary="Principal Amount :" />
                                <p>{principal}</p>
                            </ListItem>
                            <ListItem>
                                <ListItemText id="total" primary="Total Interest :" />
                                <p>{totalintrest}</p>
                            </ListItem>
                            <ListItem>
                                <ListItemText id="t amount" primary="Total Amount :" />
                                <p>{totalamount}</p>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{margin:"150px 70px"}}>
                <Grid style={{color:"white",fontSize:"70px"}}>SIMPLE INTRAST </Grid>
                <Grid fontSize="90px"> CALCULATOR</Grid>
                <Grid style={{border:"1px solid black",backgroundColor:"white",fontSize:"70px",padding:"5px"}}> HTML,CSS&React</Grid>
            </Box>
        </Box>

    );

}