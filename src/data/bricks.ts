import dynamic from "next/dynamic";
import { Brick } from "./types";

export const bricks: Brick[] = [
    {
        name: 'introductoryText',
        instruction: "First brick",
        isDone: true,
        order: 1,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-01T00:00:00.000Z'),
        finishedTime: new Date('2025-12-02'),
        versions: [{
            version: 1,
            name: 'IntroductoryText',
            releaseDate: new Date('2025-12-01'),
        },
        {
            version: 2,
            name: 'IntroductoryText',
            releaseDate: new Date('2025-12-02'),
        },
        {
            version: 3,
            name: 'IntroductoryText',
            releaseDate: new Date('2025-12-06'),
        },
        {
            version: 4,
            name: 'IntroductoryText',
            releaseDate: new Date('2025-12-11'),
            instruction: "Define `brick` clearly on the page. pretend the person knows nothing.",
        },
        {
            version: 5,
            name: 'IntroductoryText',
            releaseDate: new Date('2025-12-12'),
        }],
    },
    {
        name: 'stockpile',
        instruction: "Add a stockpile (todo) list for bricks.",
        isDone: true,
        order: 2,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-04'),
        finishedTime: new Date('2025-12-04'),
        versions: [{
            version: 1,
            name: 'Stockpile',
            releaseDate: new Date('2025-12-02'),
        }],
    },
    {
        name: 'timeTraveler',
        instruction: "Show the time line of bricks.",
        isDone: true,
        order: 3,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-01T01:00:00.000Z'),
        finishedTime: new Date('2025-12-01'),
        versions: [{
            version: 1,
            name: 'TimeTraveller',
            releaseDate: new Date('2025-12-01'),
        }],
    },
    {
        name: 'userBricksLogo',
        instruction: "Show a logo for the project.",
        isDone: true,
        order: 4,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-02'),
        finishedTime: new Date('2025-12-09'),
        versions: [{
            version: 1,
            name: 'UserBricksLogo',
            releaseDate: new Date('2025-12-09'),
        }],
    },
    {
        name: 'defineForever',
        instruction: "Define forever",
        isDone: true,
        order: 5,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-05'),
        finishedTime: new Date('2025-12-06'),
        versions: [{
            version: 1,
            name: 'DefineForever',
            releaseDate: new Date('2025-12-06'),
        }],
    },
    {
        name: 'underConstructionGif',
        instruction: "Show an under construction gif.",
        isDone: true,
        order: 6,
        owner: {
            name: 'oz',
        },
        createdTime: new Date('2025-12-07'),
        finishedTime: new Date('2025-12-08'),
        versions: [{
            version: 1,
            name: 'UnderConstructionGif',
            releaseDate: new Date('2025-12-08'),
        },
        {
            version: 2,
            name: 'UnderConstructionGif',
            releaseDate: new Date('2025-12-13T15:16:38.012Z'),
        }],
    },
    {
        name: 'defineBrick',
        instruction: "Define `brick` clearly on the page. pretend the person knows nothing.",
        isDone: true,
        order: 7,
        owner: {
            name: 'quackintosh',
        },
        createdTime: new Date('2025-12-10'),
        finishedTime: new Date('2025-12-11')
    },
    {
        name: 'buildFormForSubmission',
        instruction: "Build a form for submission of the `Brick`",
        isDone: true,
        order: 8,
        owner: {
            name: 'quackintosh',
        },
        createdTime: new Date('2025-12-10'),
        finishedTime: new Date('2025-12-12'),
        versions: [{
            version: 1,
            name: 'BrickForm',
            releaseDate: new Date('2025-12-12'),
        }],
    },
    {
        name: 'soggyCat',
        instruction: "Add soggy cat meme.",
        isDone: true,
        order: 9,
        owner: {
            name: 'carrie',
        },
        createdTime: new Date('2025-12-11'),
        finishedTime: new Date('2025-12-13T01:04:10.961Z'),
        versions: [{
            version: 1,
            name: 'SoggyCat',
            releaseDate: new Date('2025-12-13T01:04:10.961Z'),
        }],
    },
    {
        name: 'bricksWall',
        instruction: "Create a visualization of all submitted bricks(a wall, perhaps?) letting you roll over each one to see it's details",
        isDone: false,
        order: 10,
        owner: {
            name: 'tkoa',
        },
        createdTime: new Date('2025-12-11T06:48:10'),
    },
    {
        name: 'foremanOfTheDay',
        instruction: "Display the social handle of the user who made the most recent request as “Foreman of the Day” somewhere on the page.",
        isDone: true,
        order: 11,
        owner: {
            name: 'mnshanbhag',
        },
        createdTime: new Date('2025-12-11T01:23:19.355Z'),
        finishedTime: new Date('2025-12-13T15:16:38.012Z'),
        versions: [{
            version: 1,
            name: 'ForemanOfTheDay',
            releaseDate: new Date('2025-12-13T15:16:38.012Z'),
        }],
    },
    {
        name: 'backgroundColor',
        instruction: "Add a light green and even lighter green checkered background",
        isDone: false,
        order: 12,
        owner: {
            name: 'carrie/evie',
        },
        createdTime: new Date('2025-12-13T04:42:45.526Z'),
    },
    {
        name: 'c64Theme',
        instruction: "C64 color setup from cyber space",
        isDone: false,
        order: 13,
        owner: {
            name: 'Dr Quackintosh Dubly',
            profile: "https://www.slowjamastan.org/"
        },
        createdTime: new Date('2025-12-13T04:42:45.526Z'),
    }
];