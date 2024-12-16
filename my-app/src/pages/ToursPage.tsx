import React, { useEffect } from "react";

export function ToursPage() {
    let script: HTMLScriptElement;
    const loadScript = () => {
        script = document.createElement("script");
        script.src = "//tourclient.ru/f/jsboot/crm163208/vitrina_tourV2?style=default&conf=default";
        document.getElementById('tours-div')?.appendChild(script);
    }
    useEffect(() => {
        loadScript();
        return () => {
            document.getElementById('tours-div')?.removeChild(script);
        };
    }, []);
    return (
        <div>
            <div id="tours-div"></div>
        </div>
    );
}
