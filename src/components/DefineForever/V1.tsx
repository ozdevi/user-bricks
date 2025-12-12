"use client";

import { useState } from 'react';
import Brick from '../Brick';

export default function DefineForever() {
    const [defined, setDefined] = useState(false);

    return (
        <span
            onClick={() => setDefined(!defined)}
        >
            <span style={{ cursor: 'pointer', backgroundColor: 'yellow', padding: '0 4px', borderRadius: '5px', border: '1px solid #ccc' }}><strong>forever</strong></span>
            {defined && (
                <div style={{ margin: '1rem 0', border: '1px solid #ccc', padding: '0 16px', borderRadius: '5px', width: 'max-content', }}>
                    <p>
                        <span title="A word that describes or gives more information about a verb, adjective or other adverb.">adverb.</span>
                    </p>
                    <div style={{ margin: '1rem 0' }}>
                        <span>B1 for all time:</span>
                        <div><q>I like the UserBricks but I can&apos;t imagine It&apos;ll live forever</q></div>
                    </div>
                    <div style={{ margin: '1rem 0' }}>
                        <span>B2 for an extremely long time or too much time:</span>
                        <div><q>We&apos;d better work a bit quicker - it&apos;s going to take forever if we go at this pace</q></div>
                    </div>
                </div>
            )}
        </span>
    );
};
