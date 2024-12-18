import React, { useEffect, useState } from "react";

export function ToursPage() {
    const [iframeHeight, setIframeHeight] = useState('10px');  // Default height

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data.frameHeight) {
                setIframeHeight(`${event.data.frameHeight}px`);
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);
    return (
        <iframe
            scrolling={'no'}
            className='tours-iframe'
            src="/tours-iframe.html"
            style={{ width: '100%', height: iframeHeight, border: 'none' }}
            title="Tours"
        ></iframe>
    );
}
