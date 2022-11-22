import requests from "../Requests";

export const ROWS = [
    {
        id: 1,
        title: 'UpComing',
        fetchURL: requests.requestUpcoming
    },
    {
        id: 2,
        title: 'Popular',
        fetchURL: requests.requestPopular
    },
    {
        id: 3,
        title: 'Trending',
        fetchURL: requests.requestTrending
    },
    {
        id: 4,
        title: 'Top Rated',
        fetchURL: requests.requestTopRated
    },
    {
        id: 5,
        title: 'Horror',
        fetchURL: requests.requestHorror
    },
]