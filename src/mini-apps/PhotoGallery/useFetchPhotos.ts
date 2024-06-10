import { useCallback, useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { Basic } from "unsplash-js/dist/methods/photos/types";

const unsplash = createApi({
    accessKey: import.meta.env.REACT_APP_UNSPLASH_API_KEY,
});
export const useFetchPhotos = (page: number) => {
    const [photos, setPhotos] = useState<Basic[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPhotos = useCallback(async () => {
        const { response } = await unsplash.photos.list({ page, perPage: 10 });
        const data = response?.results ?? [];
        setPhotos((prev) => [...new Set([...prev, ...data])]);
        setLoading(false);
    }, [page]);

    useEffect(() => {
        fetchPhotos();
    }, [page, fetchPhotos]);

    return { photos, loading };
};
