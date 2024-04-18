import './ShareComponent.css';
import { useEffect, useState } from "react";
import { consultaAcaoPorCodigo } from "../../services/ShareAPI";
import { ShareRequestProps } from "../../interfaces/ShareRequestProps";

const ShareComponent: React.FC<ShareRequestProps> = ({ symbol }) => {
    const [share, setShareData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        consultaAcaoPorCodigo(symbol)
            .then((response) => {
                setShareData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [symbol]);
    if (loading) return <div> Loading ...</div>;
    if (error) return <div> Error: {error}</div>;

    return (
        <>
            <div>
                <div className="container">
                <img src={share?.logourl} alt={`${symbol}'s avatar`} width={100}/>
                    <div>
                        <h5>{share?.shortName}</h5>
                        <p>{share?.longName}</p>
                        <a href="https://www.itau.com.br/investimentos/acoes">Ações Itaú</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShareComponent;
