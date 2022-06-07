import React from 'react';
import { DayPhoto } from './DayPhoto';
import { MonthPhoto } from './MonthPhoto';

export function TopRatedPhotos() {
    return (
        <div className="top-rated-photos-container container">
            <h2 className="top-header">Najlepsze zdjęcia:</h2>
            <div className="top-photos">
                <DayPhoto />
                <MonthPhoto />
            </div>
        </div>
    )
}