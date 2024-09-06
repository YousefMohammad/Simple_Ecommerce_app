import React from "react";

import shopping_slide_1 from '../assests/images/shopping-slide-1.jpg'
import shopping_slide_2 from '../assests/images/shopping-slide-2.jpg'
import shopping_slide_3 from '../assests/images/shopping-slide-3.jpg'

import Slider from "./Slider";

function Header(params){
    return (
        <>
        {
            params.ShowSlider &&
        <Slider img={{
            slide_1:shopping_slide_1,
            slide_2:shopping_slide_2,
            slide_3:shopping_slide_3
        }}/>
    }
    {/* { params.BannerType &&
        <Banner type={params.BannerType} />
    } */}
        </>
    )
}

export default Header;