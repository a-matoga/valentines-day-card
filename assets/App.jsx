import { Envelope } from "./pages/cards/components/Envelope";
import { Letter } from "./pages/cards/components/Letter";

export const App = () => {
    return (
        <div className="flex h-screen w-screen bg-blush-300">
            <div className="container flex flex-1 m-auto w-2/5 p-2 md:p-0 items-center justify-center">
                <Envelope>
                    <Letter />
                </Envelope>
            </div>
        </div>
    );
};