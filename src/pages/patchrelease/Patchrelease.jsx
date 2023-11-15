import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Placeholder } from "../../components/placeholder/Palceholder";
import { HeaderNoAnim } from "../../components/header/HeaderNoAnim";
import { PatchComponent } from "../../components/patchComponent/PatchComponent";
export const PatchRelease = () =>{
    return(
        <div className="pageWrapper static">
            <HeaderNoAnim />
            <PatchComponent />
            <Footer />
        </div>
    )
}