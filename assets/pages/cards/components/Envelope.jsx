import { useState } from "react";
import { motion, useAnimation } from "motion/react";
import Flap from "../svg/flap.svg?react";
import Pocket from "../svg/pocket.svg?react";
import Inside from "../svg/inside.svg?react";

const MotionFlap = motion.create(Flap);

function Paper({ open }) {
    return (
        <motion.div
            className="
                absolute
                w-[230px]
                h-[150px]
                bg-white
                rounded-md
                shadow-xl
                opcacity-1
            "
            initial={{
                y: 10,
                opacity: 1,
                zIndex: 10,
            }}
            animate={
                open
                    ? {
                          y: -50,
                          opacity: 1,
                      }
                    : {
                          y: 10,
                          opacity: 1,
                      }
            }
            transition={{
                duration: 1.5,
                ease: "easeInOut",
            }}
        />
    );
}

export const Envelope = () => {
    const [open, setOpen] = useState(false);

    const flapVariants = {
  closed: {
    rotateX: 0,
    zIndex: 30,
  },
  open: {
    rotateX: [-0, -185, -175], 
    z: [0, -12, -6],  
    transition: {
      duration: 2,
      times: [0, 0.75, 1.5],
      ease: [0.25, 0.8, 0.25, 1], 
    },
    transitionEnd: {
      zIndex: 0,
    },
  },
};

    return (
        <div className="relative flex justify-center">
        <div
            className="relative w-[280px] h-[180px] cursor-pointer ml-auto mr-auto shadow-lg"
            data-state={open ? "open" : "close"}
            onClick={() => setOpen(true)}
        >
            <MotionFlap
                className="absolute top-0 left-0 w-full h-[60%] origin-top pointer-events-none"
                style={{ transformStyle: "preserve-3d" }}
                preserveAspectRatio="none"
                variants={flapVariants}
                initial="closed"
                animate={open ? "open" : "closed"}
            />
            <Pocket className="absolute w-full h-full top-0 left-0 z-20" />
            <Inside className="absolute w-full h-full top-0 left-0 z-0" />
        </div>
                <Paper open={open} />
        </div>
    );
};
