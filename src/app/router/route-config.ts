import {
    AppListing,
    Carousel,
    MindPuzzle,
    PhotoGallery,
    ProgressBar,
    StopWatch,
    Swipe,
} from "@/mini-apps";

export const ROUTE_PATHS = [
    { path: "/", title: "Home", element: AppListing, list: false },
    { path: "/progress-bar", title: "Progress Bar", element: ProgressBar, list: true },
    { path: "/stop-watch", title: "Stop Watch", element: StopWatch, list: true },
    { path: "/swipe", title: "Swipe", element: Swipe, list: true },
    { path: "/carousel", title: "Carousel", element: Carousel, list: true },
    { path: "/photo-gallery", title: "Photo Gallery", element: PhotoGallery, list: true },
    { path: "/mind-puzzle", title: "Mind Puzzle", element: MindPuzzle, list: true },
];
