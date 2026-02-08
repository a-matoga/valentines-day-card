import { Envelope } from "../components/Envelope";
import { Card } from "./Card";

export const Template1 = () => {
    return (
        <div className="flex h-screen w-screen bg-blush-300">
            <div className="container flex flex-1 m-auto w-2/5 h-full p-2 md:p-0 items-center justify-center">
                <Envelope>
                    <Card />
                </Envelope>
            </div>
        </div>
    );
};