"use client";

import { useBrickContext } from '@/providers/BrickProvider';
import React from 'react';
import { differenceInCalendarDays, addDays, format, endOfDay } from 'date-fns';

const startDate = new Date('2025-12-01');

export default function TimeTraveller() {
    const { currentDate, setCurrentDate } = useBrickContext();

    const today = new Date();

    // Calculate total days between start and today
    const diffDays = differenceInCalendarDays(today, startDate);

    // Initial value based on current date
    const initialDiff = differenceInCalendarDays(currentDate, startDate);
    const [sliderValue, setSliderValue] = React.useState(Math.min(Math.max(initialDiff, 0), diffDays));

    // Sync local state if external current date changes
    React.useEffect(() => {
        const currentDiff = differenceInCalendarDays(currentDate, startDate);
        setSliderValue(Math.min(Math.max(currentDiff, 0), diffDays));
    }, [currentDate, diffDays]);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(parseInt(e.target.value, 10));
    };

    const handleRelease = () => {
        const newDate = addDays(startDate, sliderValue);
        setCurrentDate(endOfDay(newDate));
    };

    const previewDate = addDays(startDate, sliderValue);

    return (
        <div>
            <div>
                <h3>
                    <label htmlFor="time-travel-slider">
                        Time Travel: {format(previewDate, 'dd-MM-yyyy')}
                    </label>
                </h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <span>{format(startDate, 'dd-MM-yyyy')}</span>
                    <input
                        id="time-travel-slider"
                        type="range"
                        min="0"
                        max={diffDays}
                        value={sliderValue}
                        onChange={handleSliderChange}
                        onMouseUp={handleRelease}
                        onTouchEnd={handleRelease}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />

                    <span>{format(today, 'dd-MM-yyyy')}</span>
                </div>
            </div>
        </div>
    );
};
