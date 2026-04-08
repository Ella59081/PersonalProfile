import { useState } from "react";

// const DefaultButton = () =>{
    const PrimaryButton = (color, bgColor, padding, borderRd, fontSize, text) =>{
        return <button style={{color: color, backgroundColor: bgColor,
             padding: padding, borderRadius: borderRd, fontSize: fontSize}}>
                {text}
             </button>
    }

    // return PrimaryButton
// }

export default PrimaryButton