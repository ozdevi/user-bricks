"use client";
import { useBrickContext } from '@/providers/BrickProvider';
import { isBefore } from 'date-fns';
import React from 'react';
import { Suspense, useMemo, lazy } from 'react';

interface LoaderProps {
    brick: string;
    version: number;
}

export const DynamicBrickLoader = ({ brick, version }: LoaderProps) => {

    const Component = useMemo(() => {
        return lazy(() => import(`@/components/${brick}/V${version}`)
            .catch((err) => {
                console.error("Brick load failed:", err);
                return {
                    default: () => (
                        <div>
                            <strong>Error:</strong> Brick "{brick}" not found.
                        </div>
                    )
                };
            })
        );
    }, [brick, version]);

    return (
        <Suspense fallback={<div className="animate-pulse">Loading Brick...</div>}>
            <Component />
        </Suspense>
    );
}


interface BrickProps extends React.HTMLAttributes<HTMLElement> {
    name: string;
    tag?: React.ElementType;
    isDevMode?: boolean;
    // children: React.ReactNode;
    fallback?: React.ReactNode;
}

const Brick = ({
    name,
    tag: Tag = 'span',
    isDevMode = false,
    children,
    fallback,
    ...props
}: BrickProps) => {

    const { bricks: contextBricks, currentDate } = useBrickContext();
    const brick = contextBricks.find(brick => brick.name === name);
    console.log('brick', brick);
    // temporary algorithm
    const latestVersion = brick?.versions
        ?.sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime())
        ?.find(version => {
            return isBefore(version.releaseDate, currentDate)
        });

    if (latestVersion) {
        return <DynamicBrickLoader brick={latestVersion.name} version={latestVersion.version} />
    }


    // if (isDone) {
    //     return <Tag {...props}>{children}</Tag>;
    // } else {
    //     return <Tag {...props}>{fallback}</Tag>;
    // }
};

export default Brick;
