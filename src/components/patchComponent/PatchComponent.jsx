import React from "react";
import { MatrixRainingLetters } from "react-mdr";

export const PatchComponent = () => {
    return(
        <section className='flex justify-center items-center text-center h-screen bg-headerImg bg-cover bg-center'>
            <MatrixRainingLetters custom_class="mtop w-full h-full" />
        </section>
    )
}