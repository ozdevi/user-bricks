"use client";
import { bricks } from '@/data/bricks';
import { useBrickContext } from '@/providers/BrickProvider';
import React, { PropsWithChildren } from 'react';

interface BrickProps extends React.HTMLAttributes<HTMLElement> {
    name: keyof typeof bricks;
    tag?: React.ElementType;
    isDevMode?: boolean;
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

const Brick = ({
    name,
    tag: Tag = 'span',
    isDevMode = false,
    children,
    fallback,
    className, ...props
}: BrickProps) => {

    const { bricks: contextBricks } = useBrickContext();
    const brick = contextBricks[name];
    const isDone = isDevMode ? true : (brick && brick.isDone);

    if (isDone) {
        return <Tag className={className} {...props}>{children}</Tag>;
    } else {
        // Vue slot "old" equivalent is the fallback prop or fallback content
        return <Tag className={className} {...props}>{fallback}</Tag>;
    }
};

export default Brick;
