
import {
    Grid,
    Box,
    Typography,
    Button,
    Collapse,
    List,
    ListItem,
} from "@mui/material";
import React, { useState } from "react";
const FAQS = [
    {
        heading: " Is this AGood Product",
        description:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro undeducimus officiis animi vitae!",
    },
    {
        heading: " Is this AGood Product 2",
        description:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro undeducimus officiis animi vitae!",
    },
    {
        heading: " Is this AGood Product 3",
        description:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro undeducimus officiis animi vitae!",
    },
];
export default function Faqs() {

    return (
        <Grid style={{ padding: 100 }}>
            <Grid container style={{ background: "#061ab8" }}>
                <h1 style={{ color: "white", marginLeft: 350 }}>Frequently Asked Questions</h1>

                <Grid container style={{ margin: 60 }}>
                    {FAQS.map((faq, i) => <Faq key={i} data={faq} />)}
                </Grid>
            </Grid>
        </Grid>

    );
}

function Faq({ data }) {
    const [open, setOpen] = useState(false);
    const collaps = () => {
        setOpen(!open);

    };
    return (

        <Box style={{ background: "white", marginTop: 10 }}>

            <Grid container>
                <Grid item xs={9}>

                    <Typography style={{ fontSize: 30 }}>
                        {data.heading}
                    </Typography>
                    <Collapse in={open}>
                        <Typography>
                            {data.description}
                        </Typography>
                    </Collapse>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="outlined"
                        style={{
                            fontSize: 50,
                            minWidth: 10,
                            margin: 5,
                            height: 40,
                            borderRadius: 10,
                            background: "#d3d8fd",
                            color: "blue",
                        }}
                        onClick={collaps}
                    >
                        {open ? "-" : "+"}
                    </Button>
                </Grid>
            </Grid>
        </Box>


    );
}