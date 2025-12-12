"use client";
import { useBrickContext } from '@/providers/BrickProvider';
import React from 'react';
import { format } from 'date-fns';

export default function Stockpile() {
    const { stockpile } = useBrickContext();

    return (
        <div className="container mx-auto p-4">
            <h3>Stockpile (todo):</h3>
            <ul>
                {stockpile.map((brick) => (
                    <li
                        key={brick.name}
                        title={`Brick #${brick.order} by @${brick.owner.name} on ${brick.createdTime ? format(brick.createdTime, 'PP') : ''}`}
                    >
                        <span style={{ textDecoration: brick.isDone ? 'line-through' : 'none', color: brick.isDone ? 'gray' : 'black' }}>
                            {brick.instruction}
                        </span>{'—'}
                        {brick.owner.profile ? (
                            <a href={brick.owner.profile} rel="noopener noreferrer">{brick.owner.name}</a>
                        ) : (
                            <span>{brick.owner.name}</span>
                        )}
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
};
