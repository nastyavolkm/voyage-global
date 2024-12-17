import React from "react";

export function ToursPage() {
    return (
        <div>
            <iframe
                src="/tours-iframe.html"
                style={{ width: '100%', height: '500px', border: 'none' }}
                title="Special Content Frame"
            ></iframe>
        </div>
    );
}
