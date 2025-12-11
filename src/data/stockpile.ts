import { bricks } from "./bricks";

export const stockpile = Object.entries(bricks).map(([_, value]) => {
    return {
        ...value,
    };
}).sort((a, b) => b.order - a.order);