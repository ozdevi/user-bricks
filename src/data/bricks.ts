import { Brick } from "./types";

export const bricks: Record<string, Brick> = {
    introductoryText: {
        name: 'introductoryText',
        instruction: "First brick",
        isDone: true,
        order: 1,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-01'),
        finishedTime: new Date('2025-12-02'),
    },
    stockpile: {
        name: 'stockpile',
        instruction: "Add a stockpile (todo) list for bricks.",
        isDone: true,
        order: 2,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-03'),
        finishedTime: new Date('2025-12-03'),
    },
    timeTraveler: {
        name: 'timeTraveler',
        instruction: "Show the time line of bricks.",
        isDone: true,
        order: 3,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-01'),
        finishedTime: new Date('2025-12-01'),
    },
    userBricksLogo: {
        name: 'userBricksLogo',
        instruction: "Show a logo for the project.",
        isDone: true,
        order: 4,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-01'),
        finishedTime: new Date('2025-12-11'),
    },
    defineForever: {
        name: 'defineForever',
        instruction: "Define forever",
        isDone: true,
        order: 5,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-05'),
        finishedTime: new Date('2025-12-07'),
    },
    underConstructionGif: {
        name: 'underConstructionGif',
        instruction: "Show an under construction gif.",
        isDone: true,
        order: 6,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-09'),
        finishedTime: new Date('2025-12-10'),
    },

} as const;