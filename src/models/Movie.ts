export class Movie {
    adult:boolean;
    backdrop_path:string;
    genre_ids:number[];
    id:number;
    original_language:string;
    overview:string;
    popularity:number;
    poster_path:string;
    release_date:string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count:Number;

    constructor(adult:boolean, bdp:string, gid:number[],id:number,ol:string,ot:string,ov:string,pop:number,pp:string,rd:string,title:string,video:boolean,va:number,vc:number) {
        this.adult = adult;
        this.backdrop_path = bdp;
        this.genre_ids = gid;
        this.id = id;
        this.original_language = ol;
        this.overview = ov;
        this.popularity = pop;
        this.poster_path = pp;
        this.release_date = rd;
        this.title = title;
        this.video = video;
        this.vote_average = va;
        this.vote_count = vc;
    }

}

export {}