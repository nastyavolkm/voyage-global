import React, { useEffect } from 'react';
import stub from '../assets/tour-search.png';
import './TourSearchPage.scss';
import { createConnection } from "node:net";

export function CruiseSearchPage() {
    const loadScript = () => {
        if (!document.getElementById("ces-script")) {
            const script = document.createElement("script");

            script.id = "ces-script";
            script.src = "https://widget.gocruise.ru/js/app.js";
            script.async = true;

            // @ts-ignore
            window['cesSettings'] = {
                currencies: ["USD", "BYN", "EUR"],
            };
            document.body.appendChild(script);
        }

        if (!document.getElementById("ces-styles")) {
            const link = document.createElement("link");
            link.id = "ces-styles";
            link.href = "https://widget.gocruise.ru/css/app.css";
            link.rel = "stylesheet";
            document.head.appendChild(link);
        }
    }
    useEffect(() => {
        loadScript();
    }, []);
    return (
        <div id='ces'></div>
    )
}
