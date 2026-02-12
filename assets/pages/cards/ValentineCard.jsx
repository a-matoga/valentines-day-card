import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Template1 } from "./Template1";
import { useCard } from "../../contexts/CardContext";

//WIP: card routing by token, fetching card data and rendering template based on cardSymbol

export const ValentineCard = () => {
    const { setCardData } = useCard();
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();

    const cardUrlToken = searchParams.get("t");

    useEffect(() => {
        if (!cardUrlToken) return;

        const fetchCard = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/card/${cardUrlToken}`);
                setData(response.data);
                setStatus(response.status);
            } catch (err) {
                setError(err.message);
                setStatus(err.response?.status || 500);
            } finally {
                setLoading(false);
            }
        };

        fetchCard();
    }, [cardUrlToken, setCardData]);

    const renderTemplate = () => {
        if (!data) return null;

        switch (data.cardSymbol) {
            case "template1":
                return <Template1/>;
            default:
                return <Error />;
        }
    };

    return (
        <CardProvider>
            {loading && <Loading />}
            {error && <Error />}
            {status === 200 && !error && renderTemplate()}
        </CardProvider>
    );
};