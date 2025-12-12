"use client";

import { createContext, useContext, ReactNode, useState, useMemo } from 'react';
import { bricks as initialBricks } from '@/data/bricks';
import { Brick } from '@/data/types';
import { isAfter, isBefore } from 'date-fns';

type BrickContextType = {
    bricks: typeof initialBricks;
    stockpile: Brick[];
    currentDate: Date;
    setCurrentDate: (date: Date) => void;
};

const BrickContext = createContext<BrickContextType | undefined>(undefined);

export const BrickProvider = ({ children }: { children: ReactNode }) => {

    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const { derivedBricks, derivedStockpile } = useMemo(() => {
        const dBricks = [...initialBricks];
        const dStockpile: Brick[] = [];

        dBricks.forEach((brick, bindex) => {

            const isFinishedInTheFuture = brick.finishedTime && isAfter(brick.finishedTime, currentDate);

            const effectiveIsDone = isFinishedInTheFuture ? false : brick.isDone;

            dBricks[bindex] = {
                ...brick,
                isDone: effectiveIsDone
            };

            if (isBefore(brick.createdTime, currentDate)) {
                dStockpile.push(dBricks[bindex]);
            }

        });

        return {
            derivedBricks: dBricks,
            derivedStockpile: dStockpile.sort((a, b) => b.createdTime.getTime() - a.createdTime.getTime()),
        };
    }, [currentDate]);

    return (
        <BrickContext.Provider value={{
            bricks: derivedBricks,
            stockpile: derivedStockpile,
            currentDate,
            setCurrentDate,
        }}>
            {children}
        </BrickContext.Provider>
    );
};

export const useBrickContext = () => {
    const context = useContext(BrickContext);
    if (!context) {
        throw new Error('useBrickContext must be used within a BrickProvider');
    }
    return context;
};
