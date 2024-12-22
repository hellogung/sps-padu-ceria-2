import React from 'react';
import {APP_NAME} from "@/constant/const";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="text-center text-sm">
                Copyright 2024 {APP_NAME}
                </div>
            </footer>
        </div>
    );
};

export default Footer;