import { Template1 } from "./pages/cards/templates/Template1/Template1";
import { Route } from "react-router";
import { CardProvider } from "./contexts/CardContext";  

export const App = () => {
    return (
        <CardProvider>
            <Template1/>
        </CardProvider>
    );
};