// import * as React from 'react';

import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

import Slider from '@mui/material/Slider';
import React, { useState, useEffect } from 'react';

export default function Bmicalculator() {
    const [heightValue, setHeightValue] = useState(1);
    const [weightValue, setWeightValue] = useState(1);
    const [bmi, setBmi] = useState(0);

    const weight = (event) => {
        const weight1 = Number(event.target.value);
        setWeightValue(weight1);
    };

    const height = (event) => {
        const height1 = Number(event.target.value);
        setHeightValue(height1);
    };

    useEffect(() => {
        const heightinmeaters = heightValue / 100;
        const BMI = (weightValue / (heightinmeaters * heightinmeaters));
        setBmi(BMI);
        console.log('useEffect called');
    }, [weightValue, heightValue]);

    //console.log({ weightValue, heightValue, bmi });

    return (
        <Grid style={{ backgroundColor: "rgb(51, 50, 50)", height: "700px", padding: "150px 350px" }}>
            <Box style={{ backgroundColor: "#a0aebd", width: "600px", height: "450px", }}>
                <h1 style={{ border: "1px solid black", backgroundColor: "blue", width: "600px", height: "60px" }}>Project:7 BMI CALUCULATOR</h1>
                <Grid style={{ padding: "30px" }}>
                    <h3>weigth</h3>
                    <Slider

                        defaultValue={0}
                        min={30}
                        max={100}

                        aria-label="heigeihtvalue"
                        valueLabelDisplay="auto"
                        onChange={weight}
                    />
                    <h3>height</h3>
                    <Slider defaultValue={0}
                        min={30}
                        max={100}

                        aria-label="weigeihtvalue"
                        valueLabelDisplay="auto" onChange={height} />

                    <Grid>
                        <h4>Your BMI is</h4>
                        <p style={{
                            border: "1px solid black ",
                            borderRadius: "10px",
                            width: "150px",
                            backgroundColor: "blue",
                            marginLeft: "180px"
                        }
                        }>{bmi}</p>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
}