import React from 'react';
import {APP_NAME} from "@/constant/const";

const Topbar = () => {
    return (
        <>
            <header>
                <h1 className="font-bold text-xl">
                    {APP_NAME}
                </h1>
            </header>
        </>
    );
};

export default Topbar;