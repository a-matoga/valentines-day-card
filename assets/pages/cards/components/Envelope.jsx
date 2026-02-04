import { useState, useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import Flap from "../svg/flap.svg?react";
import Pocket from "../svg/pocket.svg?react";
import Inside from "../svg/inside.svg?react";

const MotionFlap = motion.create(Flap);

export const Envelope = () => {
    const [open, setOpen] = useState(false);
    const [scope, animate] = useAnimate();

    const handleClick = async () => {
        await animate(".flap", { rotateX: -90 }, { duration: 0.5 });
        animate(".card", { y: -100 }, { duration: 0.5 });
        await animate(".flap", { rotateX: -180, zIndex: 0 }, { duration: 0.5 });
        animate(".envelope", { y: 100, opacity: 0, display: "none" }, { duration: 0.5 });
        animate(scope.current, { width: "100%", height: "100%" }, { duration: 0 });
        await animate(".card", { y: 0 }, { duration: 0.3 });
        animate(".card", { width: "100%", height: "100%" }, { duration: 1 });
        animate(".card", { y: 0 }, { duration: 0.3 });
    }


    return (
        <div ref={scope} className="relative flex justify-center items-center">
            <div
                className="envelope relative w-70 h-45 cursor-pointer shadow-lg"
                data-state={open ? "open" : "close"}
                onClick={() => handleClick()}
            >
                <MotionFlap
                    className="flap absolute top-0 left-0 w-full origin-top pointer-events-none z-30"
                />
                <Pocket className="absolute w-full h-full top-0 left-0 z-20" />
                <Inside className="absolute w-full h-full top-0 left-0 z-0" />
            </div>
            <div className="card absolute  bg-white z-10 rounded-lg shadow-lg w-60 h-32"></div>
        </div>
    );
};
