import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from "./Header";
import MyHikingMap from "./MyHikingMap";

function Mainframe(){

    const reference = "https://en.wikipedia.org/wiki/Mount_Baldy,_California";
    const choices = [ 
        {   name: "Mt. Baldy Notch via Bentley's Dream",
            file: "BaldyNotch-BentleyDream.csv",
            pos: {lat: 34.26634656520234,lng: -117.62685240340801}, //34.26634656520234, -117.62685240340801
            alltrails: "https://www.alltrails.com/trail/us/california/mt-baldy-notch-via-bentleys-dream?u=i&sh=sqfqqm"
        },
        {   name: "Ice House Canyon Trail",
            file: "IceHouseCanyon.csv",
            pos: {lat: 34.25032933252726,lng: -117.63622960066348}, //34.25032933252726, -117.63622960066348
            alltrails: "https://www.alltrails.com/trail/us/california/ice-house-canyon-trail?u=i&sh=sqfqqm"
        },
    ];
    const [selectedOption, setSelectedOption] = useState(0); // Initial selected option

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return <>
        <Header title={"Mt. Baldy"} reference={reference}/>
        <Stack spacing={1} direction="row">
        {
            choices.map((item, index) => {
            return <Button key={index} value={index} variant={selectedOption==(index) ? "contained" : "outlined"} onClick={handleChange}>{item.name}</Button>
            })
        }
        </Stack>
        <hr></hr>
        <MyHikingMap csv={choices[selectedOption].file} mark={choices[selectedOption].pos}/>
        <hr></hr>
        <h4><a href={choices[selectedOption].alltrails}>More on Alltrails ...</a></h4>
        <p><a href="https://kcfamilyjourney.github.io/home/">Home</a> | <a href="https://forms.gle/ErqZysKrBFxnL5SV7">Contact Us</a></p>
    </>;
}

export default Mainframe;