type LocationType = {
    latitude: number;
    longitude: number;
    zoom: number;
}

type CityType = {
    name: string;
    location: LocationType;
}


export default CityType;
export type { LocationType };
