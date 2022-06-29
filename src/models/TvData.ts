export class TvData {
    backdrop_path:string;
    first_air_date:string;
    genre_ids:number[];
    id:number;
    name:string;
    origin_country:string;
    original_language:string;
    original_name:string;
    overview:string;
    popularity:number;
    poster_path:string;
    vote_average:number;
    vote_count:number;

    constructor(bp:string, fad:string, gi:number[], id:number, name:string, oc:string, ol:string, on:string, 
    ov:string, pop:number, pp:string, va:number, vc:number) {
        
        this.backdrop_path = bp;
        this.first_air_date = fad;
        this.genre_ids = gi;
        this.id = id;
        this.name = name;
        this.origin_country = oc;
        this.original_language = ol;
        this.original_name = on;
        this.overview = ov;
        this.popularity = pop;
        this.poster_path = pp;
        this.vote_average = va;
        this.vote_count = vc;
    }
}

export default TvData;
