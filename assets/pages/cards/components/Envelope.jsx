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
        <div ref={scope} className="relative flex flex-1 justify-center items-center">
            <div
                className={clsx("envelope relative w-70 h-45 shadow-lg", open ? "cursor-default" : "cursor-pointer ")}
                onClick={() => handleClick()}
            >
                <MotionFlap
                    className="flap absolute top-0 left-0 w-full origin-top pointer-events-none z-30"
                />
                <Pocket className="absolute w-full h-full top-0 left-0 z-20" />
                <Inside className="absolute w-full h-full top-0 left-0 z-0" />
            </div>
            <div className="card flex absolute bg-red-300 z-10 rounded-lg shadow-lg min-w-60 min-h-39 max-w-125 box-border p-2">
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
