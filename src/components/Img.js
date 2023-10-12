import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { Grid } from "@mui/material";
import { useState } from 'react';

const imgs = [
    {
        image: " https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg",
    },
];
export default function Img() {
    const [img, setImg] = useState(0);
    const left = () => {
        if (img == 0) {
            let image = imgs.length - 1;
            setImg(image);
        }
        else {
            setImg(img - 1);
        }
    }
    const right = () => {
        if (img == 0) {
            let image = imgs.length - 1;
            let img = 0;
            setImg(image);
        }
        else {
            setImg(img + 1);
        }
    }
    return (
        <Grid>
            <Grid>
                <ListItemButton onClick={left}>
                    <ListItemIcon >
                        < ArrowBackIosIcon />
                    </ListItemIcon>
                </ListItemButton>
            </Grid>


            <img src={imgs[img].image} style={{ width: 500 }} />

            <Grid>
                <ListItemButton>
                    <ListItemIcon onClick={right}>
                        < ArrowForwardIosIcon />
                    </ListItemIcon>
                </ListItemButton>
            </Grid>

        </Grid>

    );
}