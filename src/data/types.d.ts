type Version = {
    instruction?: string;
    version: number;
    name: string;
    releaseDate: Date;
}

export type Brick = {
    name: string;
    instruction: string;
    isDone: boolean;
    order: number;
    owner: {
        name: string;
        profile?: string;
    };
    createdTime: Date;
    finishedTime?: Date;
    versions?: Version[];
};