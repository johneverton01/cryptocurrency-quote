import React, { FC, useEffect, useState } from 'react';
import { Coin } from '../Coin';
import { cryptoHttp }  from '../../http/index';
import './index.css';


interface HeaderProps {
    onSelected: (coin: string) => void;
};

interface Price{
    [key: string]: {oldPrice: number, currentPrice: number}
}

const All_PRICES: Price= {
    BTC:{oldPrice: 0, currentPrice: 0},
    LTC:{oldPrice: 0, currentPrice: 0},
}

export const Header: FC<HeaderProps> = (props) => {
    const { onSelected } = props;
    const [prices, setPrices] = useState<Price>(All_PRICES);

    useEffect(() => {
        const intervals = Object.keys(All_PRICES).map((coin) => {
            return setInterval(() => {
                cryptoHttp.get(`price?fsym=${coin}&tsyms=BRL`).then((response) => {
                    setPrices((prevState) => {
                        if(prevState[coin].currentPrice === response.data.BRL) {
                            return prevState;
                        }
                        return {
                            ...prevState,
                            [coin]: {
                                oldPrice: prevState[coin].currentPrice,
                                currentPrice: response.data.BRL
                            }
                        }
                    })
                });
            }, 5000);
        });
        return () => {
            intervals.forEach(interval => clearInterval(interval))
        }
    },[])

    return (
        <div className="Header">
            {Object.keys(prices).map((coin) => (
                <div key={coin} onClick={() => onSelected(coin)}>
                    <Coin
                    coin={coin}
                    oldPrice={prices[coin].oldPrice}
                    currentPrice={prices[coin].currentPrice}
                    />
                </div>
            ))}
        </div>
    );
};