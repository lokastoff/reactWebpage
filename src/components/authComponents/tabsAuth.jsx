import React from "react";
import { Tab } from "@headlessui/react";
export const TabsAuth = (props) => {
    return(
        <Tab className="px-[30px] py-[9px] bg-[#3f3f3f] rounded-[8px] text-center border-2 border-[#3f3f3f] opacity-[40%] w-full ui-selected:opacity-[100%] ui-selected:outline-none ">
            <span className="text-[14px]">{props.text}</span>
        </Tab>
    )
}
