import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Placeholder } from "../../components/placeholder/Palceholder";
import { HeaderNoAnim } from "../../components/header/HeaderNoAnim";
import { PricingComponent } from "../../components/pricingComponent/PricingComponent";
import { Header } from "../../components/header/Header";
export const Pricing = () =>{
    return(
        <div className="pageWrapper static">
            <HeaderNoAnim />
            <PricingComponent />
            <Footer />
        </div>
    )
}