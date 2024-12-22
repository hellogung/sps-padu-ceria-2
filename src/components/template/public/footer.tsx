import {APP_NAME} from "@/constant/const";

const FooterComponent = () => {
    return (
        <>
            <footer className="border-t p-5 bg-slate-100 dark:bg-slate-950 text-white font-semibold">
                <div className="flex items-center justify-center">
                    <p className="lowercase">
                        Copyright © 2024 .{APP_NAME}
                    </p>
                </div>
            </footer>
        </>
    )
        ;
};

export default FooterComponent;
