import React, { useEffect } from 'react';
import './TourSearchPage.scss';

export function CruiseSearchPage() {
    let script: HTMLScriptElement;
    const loadScript = () => {
        if (!document.getElementById("ces-script")) {
            script = document.createElement("script");

            script.id = "ces-script";
            script.src = "https://widget.gocruise.ru/js/app.js";
            script.async = true;

            // @ts-ignore
            window['cesSettings'] = {
                currencies: ["USD", "BYN", "EUR"],
            };
            document.getElementById('ces-script-div')?.appendChild(script);
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
        return () => {
            document.getElementById('ces-script-div')?.removeChild(script);
        };
    }, []);
    return (
        <div>
            <div id="ces-script-div"></div>
            <div id="ces"></div>
        </div>
    );
}
