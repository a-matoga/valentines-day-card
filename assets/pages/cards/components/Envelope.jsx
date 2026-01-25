import { useState } from "react";
import { motion } from "framer-motion";

export const Envelope = () => {
    const [open, setOpen] = useState(false);

    const width = 280;
    const height = 180;

    return (
        <div
            className="relative w-[280px] h-[180px] cursor-pointer rounded-[6px] bg-red-400 ml-auto mr-auto shadow-lg overflow-hidden"
            data-state={open ? "open" : "close"}
            onClick={() => setOpen(true)}
        >
            <div className="absolute w-0 h-0 z-3 border-l-[140px]" />
            <motion.div 
            className="absolute top-0 left-0 right-0 w-full h-[60%] [clip-path:polygon(0_0,100%_0,50%_100%)] rounded-b-[12px] bg-red-700 origin-top pointer-events-none z-10" 
            animate={{ 
                rotateX: open ? -180 : 0 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setOpen(!open)}
            />
            <div className="z-0">
                <div className="absolute bottom-0 left-0 w-full h-full [clip-path:polygon(0_0,0_100%,50%_50%)] bg-blush-100 z-50" />
                <div className="absolute bottom-0 left-0 w-full h-full [clip-path:polygon(100%_0,100%_100%,50%_50%)] bg-amber-100 z-50" />
                <div className="absolute bottom-0 left-0 w-full h-full [clip-path:polygon(0_100%,100%_100%,50%_50%)] bg-amber-500 z-50" />
            </div>
        </div>
    );
};
