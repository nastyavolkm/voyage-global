import React from 'react';
import './TourSearchPage.scss';

export function TourSearchPage() {
    return (
        <div>
            <iframe
                src="/tours-search-iframe.html"
                style={{ width: '100%', height: '500px', border: 'none' }}
                title="Special Content Frame"
            ></iframe>
        </div>
    );
}
