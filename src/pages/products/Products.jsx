import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Placeholder } from "../../components/placeholder/Palceholder";
import { HeaderNoAnim } from "../../components/header/HeaderNoAnim";
import { ProductComponent } from "../../components/productsComponent/ProductsComponent";
export const Products = () =>{
    return(
        <div className="pageWrapper static">
            <HeaderNoAnim />
            <ProductComponent />
            <Footer />
        </div>
    )
}