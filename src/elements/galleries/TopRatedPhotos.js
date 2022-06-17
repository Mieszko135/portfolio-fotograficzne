import React from 'react';
import { BestPhotos } from './BestPhotos';


export function TopRatedPhotos() {
    return (
        <div className="top-rated-photos-container container">
            <h2 className="top-header">Najlepsze zdjęcia:</h2>
            <div className="top-photos">
                <BestPhotos />
            </div>
        </div>
    )
}