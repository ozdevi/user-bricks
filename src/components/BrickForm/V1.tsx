"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import styles from './V1.module.css';

export default function BrickForm() {
    const [instruction, setInstruction] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [ownerSocialHandle, setOwnerSocialHandle] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!instruction.trim() || !ownerName.trim()) return;

        setStatus('submitting');

        const { error } = await supabase
            .from('bricks')
            .insert([
                {
                    instruction,
                    ownerName,
                    ownerSocialHandle,
                }
            ]);

        if (error) {
            console.error('Error submitting brick:', error);
            setStatus('error');
        } else {
            setStatus('success');
            setInstruction('');
            setOwnerName('');
            setOwnerSocialHandle('');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section>
            {status === 'success' ? (
                <div>
                    <h3>Brick Submitted! 🧱</h3>
                    <p>Thanks for building with us.</p>
                    <button
                        onClick={() => setStatus('idle')}
                    >
                        Add another
                    </button>
                </div>
            ) : (
                <>
                    <h3>Ready to build?</h3>
                    <form onSubmit={handleSubmit} className={styles.brickForm}>
                        <div>
                            <label htmlFor="instruction">Brick Instruction</label>
                            <textarea
                                id="instruction"
                                value={instruction}
                                onChange={(e) => setInstruction(e.target.value)}
                                maxLength={140}
                                required
                                placeholder="e.g. Add a dark mode toggle..."
                                rows={5}
                            />
                            <div style={{ textAlign: 'right' }}>
                                <small>{instruction.length}/140</small>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="ownerName">Your Name</label>
                            <input
                                type="text"
                                id="ownerName"
                                value={ownerName}
                                onChange={(e) => setOwnerName(e.target.value)}
                                required
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="ownerProfile">Social Profile (Optional)</label>
                            <input
                                type="url"
                                id="ownerProfile"
                                value={ownerSocialHandle}
                                onChange={(e) => setOwnerSocialHandle(e.target.value)}
                                placeholder="https://x.com/..."
                            />
                        </div>

                        {status === 'error' && (
                            <p>
                                Something went wrong. Please try again.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'Laying Brick...' : 'Place Brick'}
                        </button>
                    </form>
                </>
            )}
            <hr />
        </section>
    );
}
