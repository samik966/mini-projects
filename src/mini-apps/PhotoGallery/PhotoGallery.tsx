import { useCallback, useEffect, useRef, useState } from "react";
import PhotoCard from "./PhotoCard";
import style from "./PhotoGallery.module.css";
import { useFetchPhotos } from "./useFetchPhotos";
const options = { root: null, threshold: 0, rootMargin: "0px" };

const PhotoGallery = () => {
    const [page, setPage] = useState(1);
    const { photos, loading } = useFetchPhotos(page);
    const loadingBottomRef = useRef(null);
    const loadingStyle = loading ? { display: "flex" } : { display: "none" };

    const handleInfiniteScroll = useCallback((entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
            setPage((page) => page + 1);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleInfiniteScroll, options);
        if (loadingBottomRef.current) {
            observer.observe(loadingBottomRef.current);
        }
    }, [handleInfiniteScroll]);

    return (
        <div className={style.galleryContainer}>
            <div className={style.gallery}>
                {photos.map((photo) => (
                    <PhotoCard key={photo.id} image={photo.urls} alt={photo.alt_description} />
                ))}
            </div>
            <div style={loadingStyle} className={style.loading}>
                <span>Loading...</span>
            </div>
            <div ref={loadingBottomRef} style={{ height: 50 }} />
        </div>
    );
};

export default PhotoGallery;
