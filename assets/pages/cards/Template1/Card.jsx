
import { delay, motion } from "framer-motion";
import { Button } from "../components/Button";
import UfoImage from "../svg/ufo.svg?react";
import PixelHeartImage from "../svg/pixel_heart.svg?react";

const MotionPixelHeartImage = motion.create(PixelHeartImage);
const MotionUfoImage = motion.create(UfoImage);

export const Card = () => {
  return (
    <div className="flex flex-col items-center py-6 px-3 gap-5 font-bold text-rose-400">
      <div className="flex flex-row gap-2 items-center">
        <MotionUfoImage
          className="h-25 w-auto z-0"
          animate={{ y: [0, -5, 0], }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <MotionPixelHeartImage
          className="absolute top-26 left-12 h-5 w-auto -translate-y-1"
          animate={{ y: [0, -5, 0], rotate: [0, 20, -20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <div>
          <p className="text-2xl font-bold text-justify">Hejka, jesteś może UFO?</p>
          <p className="text-2xl font-bold text-justify">BO JESTEŚ NIEZIEMSKA</p>
        </div>
      </div>
      <div className="flex flex-col w-full text-xl">
        <span>Od: Adrian</span>
        <span>Do: Marysia </span>
      </div>
      <div className="absolute top-70 w-full items-center p-3 flex flex-col bg-red-200 rounded-2xl shadow-2xl gap-2">
        <p className="text-xl text-center">Czy zostaniesz moją walentynką?</p>
        <div className="flex flex-row z-10 w-full items-stretch gap-2">
          <Button>Tak</Button>
          <Button>Nie</Button>
        </div>
        <img src="/assets/img/hellokitty.png" alt="Hello Kitty" className="absolute -left-5 -top-10 z-0 w-20 rotate-[-25deg]" />
      </div>

    </div>
  );
};
