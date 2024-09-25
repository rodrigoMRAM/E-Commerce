export interface Product {
    amiiboSeries: string;
    character: string;
    gameSeries: string;
    head:string;
    image: string;
    name: string;
    release:Release;
    tail: string;
    type: string;
    id:number;
}

export interface CarProduct{
    id: number;
    name: string;
    image: string;
    quantity: number
}

export interface Release {
    au: string;
    eu: string;
    jp: string;
    na: string;
}