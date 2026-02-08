import { useState, useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import { HorizontalTextSkeleton } from "./HorizontalTextSkeleton";
import clsx from "clsx";
import Flap from "../svg/flap.svg?react";
import Pocket from "../svg/pocket.svg?react";
import Inside from "../svg/inside.svg?react";

const MotionFlap = motion.create(Flap);

export const Envelope = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (!open) {
            const controls = animate(
                scope.current,
                { y: [15, -15] },
                {
                    duration: 1.5,
                    repeatType: "mirror",
                    repeat: Infinity,
                    ease: "easeOut",
                }
            );

            return () => {
                controls.stop();
            };
        }
    }, [open, animate, scope]);

    const handleClick = async () => {
        if (!open) {
            setOpen(true);
            await animate(scope.current, { y: 0 }, { duration: 0.5 });
            await animate(".flap", { rotateX: -90 }, { duration: 0.5 });
            await animate(".flap", { rotateX: -180, zIndex: 0 }, { duration: 0.5 })
            await animate(".card", { y: -170 }, { duration: 1 });
            await animate(".card", { rotate: 90 }, { duration: 0.5 });
            await animate(".card", { y: "-100vh" }, { duration: 0.5 });
            await animate(".card", { rotate: 0 }, { duration: 0 });
            setShowContent(true);
            animate(".card", { y: 0 }, { duration: 0.5 });
            animate(".envelope", { y: "100vh", opacity: 0, display: "none" }, { duration: 0.5 });
        }
    };

    return (
        <div ref={scope} className="relative flex flex-1 flex-col justify-center items-center">
            <div
                className={clsx("envelope relative w-70 h-45 shadow-2xl", open ? "cursor-default" : "cursor-pointer ")}
                onClick={() => handleClick()}
            >
                <MotionFlap
                    className="flap absolute top-0 left-0 w-full origin-top pointer-events-none z-30"
                />
                <Pocket className="absolute w-full h-full top-0 left-0 z-20" />
                <Inside className="absolute w-full h-full top-0 left-0 z-0" />
            </div>
            <div className="envelope absolute flex top-50 text-2xl font-bold p-5 rounded-2xl shadow-2xl w-70 justify-center items-center bg-rose-300 text-white mt-4">Kliknij w kopertę</div>
            <div className="card flex absolute bg-red-200 z-10 rounded-lg shadow-2xl min-w-60 min-h-39 max-w-125 box-border p-2">
                <div className="flex flex-1 border-4 border-red-400 border-dashed rounded-lg ">
                    {showContent ? (
                        <div>
                            {children}
                        </div>
                    ) : (<HorizontalTextSkeleton />)}
                </div>
            </div>
        </div>
    );
};
