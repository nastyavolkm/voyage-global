import React, { useEffect } from 'react';
import './TourSearchPage.scss';

export function TourSearchPage() {
    let script: HTMLScriptElement;
    const loadScript = () => {
        script = document.createElement("script");
        script.src = "//tourclient.ru/f/jsboot/crm163208/find_tour_form?style=default&conf=default";
        document.getElementById('tour-search-script-div')?.appendChild(script);

        script = document.createElement("script");
        script.src = "//tourclient.ru/f/jsboot/crm163208/find_tour_offers?style=default&conf=default";
        document.getElementById('tour-search-offers-script-div')?.appendChild(script);
    }
    useEffect(() => {
        loadScript();
        return () => {
            document.getElementById('tour-search-script-div')?.removeChild(script);
            document.getElementById('tour-search-offers-script-div')?.removeChild(script);
        };
    }, []);
    return (
        <div>
            <div id="tour-search-script-div"></div>
            <div id="tour-search-offers-script-div"></div>
        </div>
    );
}
