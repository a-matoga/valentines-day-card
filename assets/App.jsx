import { Envelope } from "./pages/cards/components/Envelope";

export const App = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-rose-300">
            <div className="container m-auto h-full flex items-center justify-center">
                <Envelope />
            </div>
        </div>
    );
};