export interface City {
    city_id: number;
    list: listItem[];
}

export interface listItem {
    dt: number;
    main: mainItem;
    wind: windDet[];
    weather: weatherDet;
}

export interface mainItem {
    temp: number;
    humidity: number;
}

export interface windDet {
    speed: number;
    deg: number;
}

export interface weatherDet {
    main: string;
    description: string;
}
