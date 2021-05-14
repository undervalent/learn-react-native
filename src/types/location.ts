export interface LocationInt {
  lat: string;
  lng: string;
  viewport: {
    northWest: {
      lat: string;
      lng: string;
    };
    southWest: {
      lat: string;
      lng: string;
    };
  };
}
export interface LocationContextInt {
  isLoading: boolean;
  error: string;
  location: LocationInt | null;
  search(keyword: string): void;
  keyword: string;
}
