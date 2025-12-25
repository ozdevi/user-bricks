"use client";
import { useBrickContext } from '@/providers/BrickProvider';
import { format } from 'date-fns';
import Brick from '../Brick';

const BrickOwner = ({ owner }: { owner: { name: string; profile?: string } }) => {
    return (
        <span>
            {' — '}
            {owner.profile ? (
                <a href={owner.profile} rel="noopener noreferrer"><strong>@{owner.name}</strong></a>
            ) : (
                <span><strong>{owner.name}</strong></span>
            )}
        </span>
    );
}

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
                        {brick.name === 'marqueeText' && brick.isDone ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Brick name="marqueeText" />
                                <BrickOwner owner={brick.owner} />
                            </div>) : (
                            <>
                                <span style={{ textDecoration: brick.isDone ? 'line-through' : 'none' }}>
                                    {brick.instruction}
                                </span>
                                <BrickOwner owner={brick.owner} />
                            </>
                        )}

                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
};
