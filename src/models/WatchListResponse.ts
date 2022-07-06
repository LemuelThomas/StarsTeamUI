export class WatchListResponse {
    id:number;
    video:number;
    user:number;
    type:string;
    genres:string[];

    constructor(id:number, video:number, user:number, type:string, genres:string[]){
        this.id = id;
        this.video = video;
        this.user = user;
        this.type = type;
        this.genres = genres;
    }
}

export {}