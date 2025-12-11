"use client";

import { createContext, useContext, ReactNode, useState, useMemo } from 'react';
import { bricks as initialBricks } from '@/data/bricks';
import { Brick } from '@/data/types';
import { format, isAfter } from 'date-fns';

type BrickContextType = {
    bricks: typeof initialBricks;
    stockpile: Brick[];
    currentDate: Date;
    setCurrentDate: (date: Date) => void;
    history: string[];
};

const BrickContext = createContext<BrickContextType | undefined>(undefined);

export const BrickProvider = ({ children }: { children: ReactNode }) => {

    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const { derivedBricks, derivedStockpile, history } = useMemo(() => {
        const dBricks = { ...initialBricks };
        const dStockpile: Brick[] = [];
        const historySet = new Set<string>();

        // We need to process keys to maintain the object structure 
        // but simulate state based on currentDate.
        (Object.keys(dBricks) as Array<keyof typeof initialBricks>).forEach(key => {
            const brick = dBricks[key];

            // Populate history with finishedTime dates
            if (brick.finishedTime) {
                historySet.add(format(brick.finishedTime, 'yyyy-MM-dd'));
            }
            // if (brick.createdTime) {
            //     historySet.add(format(brick.createdTime, 'yyyy-MM-dd'));
            // }

            // Logic: If finishedTime is in the future relative to currentDate, it's NOT done yet.
            const isFinishedInTheFuture = brick.finishedTime && isAfter(brick.finishedTime, currentDate);
            // Also need to consider if it was even created yet? 
            // Usually "time travel" implies seeing the state at that time.
            // If createdTime > currentDate, strictly it shouldn't exist?
            // But for this "Brick" builder metaphor, maybe it just appears as undone?
            // Let's assume strict "isDone" toggle for now as per specific request "filter out unfinished bricks".

            const effectiveIsDone = isFinishedInTheFuture ? false : brick.isDone;

            // Create a new brick object for the derived state to avoid mutating original
            dBricks[key] = {
                ...brick,
                isDone: effectiveIsDone
            };

            const isCreatedInFuture = brick.createdTime && isAfter(brick.createdTime, currentDate);
            if (!isCreatedInFuture) {
                dStockpile.push(dBricks[key]);
            }
        });

        // Add today to history if not present
        historySet.add(format(new Date(), 'yyyy-MM-dd'));
        // Add hardcoded start '2025-12-09' if not present? logic below handles start date slider

        return {
            derivedBricks: dBricks,
            derivedStockpile: dStockpile.sort((a, b) => b.createdTime.getTime() - a.createdTime.getTime()),
            history: Array.from(historySet).sort()
        };
    }, [currentDate]);

    return (
        <BrickContext.Provider value={{
            bricks: derivedBricks,
            stockpile: derivedStockpile,
            currentDate,
            setCurrentDate,
            history
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
