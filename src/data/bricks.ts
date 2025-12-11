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
        createdTime: new Date('2025-12-04'),
        finishedTime: new Date('2025-12-04'),
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
        finishedTime: new Date('2025-12-09'),
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
        finishedTime: new Date('2025-12-06'),
    },
    underConstructionGif: {
        name: 'underConstructionGif',
        instruction: "Show an under construction gif.",
        isDone: true,
        order: 6,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-07'),
        finishedTime: new Date('2025-12-08'),
    },
    defineBrick: {
        name: 'defineBrick',
        instruction: "Define `brick` clearly on the page. pretend the person knows nothing.",
        isDone: true,
        order: 7,
        owner: {
            name: 'quackintosh',
        },
        createdTime: new Date('2025-12-10'),
        finishedTime: new Date('2025-12-11'),
    },
    buildFormForSubmission: {
        name: 'buildFormForSubmission',
        instruction: "Build a form for submission of the `Brick`",
        isDone: false,
        order: 8,
        owner: {
            name: 'quackintosh',
        },
        createdTime: new Date('2025-12-10'),
    },
    soggyCat: {
        name: 'soggyCat',
        instruction: "Add soggy cat meme.",
        isDone: false,
        order: 9,
        owner: {
            name: 'carrie',
        },
        createdTime: new Date('2025-12-11'),
    },
    bricksWall: {
        name: 'bricksWall',
        instruction: "Create a visualization of all submitted bricks(a wall, perhaps?) letting you roll over each one to see it's details",
        isDone: false,
        order: 10,
        owner: {
            name: 'tkoa',
        },
        createdTime: new Date('2025-12-11T06:48:10'),
    },
    stockPileIdea: {
        name: 'stockPileIdea',
        instruction: "Add a stockpile (todo) list for bricks.",
        isDone: true,
        order: 11,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-03'),
        finishedTime: new Date('2025-12-03'),
    },

} as const;