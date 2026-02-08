
import { motion } from "framer-motion";
import { Button } from "./Button";

export const Letter = () => {
  return (
    <div className="flex flex-col py-6 px-3 gap-5 text-white font-bold">
      <div className="">
        <p className="text-2xl text-white font-bold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum soluta, optio repudiandae distinctio aliquam iure illum tempore accusamus dolor cumque tempora illo earum numquam eaque! Illo doloribus nemo totam mollitia?</p>
      </div>
      <div className="flex flex-row justify-between">
        <span>Do: </span>
        <span>Od: </span>
      </div>

      <div className="flex flex-col gap-2 m-auto">
        <p className="text-xl">Czy zostaniesz moją walentynką?</p>
        <div className="flex flex-row  justify-between">
        <Button>Tak</Button>
        <Button>Nie</Button>
        </div>
      </div>

    </div>
  );
};
