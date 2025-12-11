import { bricks } from "./bricks";

export const stockpile = Object.entries(bricks).map(([key, value]) => {
    return {
        name: key,
        ...value,
    };
}).sort((a, b) => b.order - a.order);