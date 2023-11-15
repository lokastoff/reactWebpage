import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Placeholder } from "../../components/placeholder/Palceholder";
import { HeaderNoAnim } from "../../components/header/HeaderNoAnim";
import { AuthComponent } from "../../components/authComponents/authComponent";
export const Auth = () =>{
    return(
        <div className="pageWrapper static">
            <HeaderNoAnim />
            <AuthComponent/>
            <Footer />
        </div>
    )
}