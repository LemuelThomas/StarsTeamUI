import { videoType } from "./videoType";

export class WatchListRequest{
    video:number;
    userId:number;
    type:videoType;
    genre:number[];

    constructor(video:number, userId:number, type:videoType, genre:number[]) {
        this.video = video;
        this.userId = userId;
        this.type = type;
        this.genre = genre;
    }
}

export {}