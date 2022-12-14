import {useEffect, useState} from "react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth
    });

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize({
                width: window.innerWidth,
            });
        });

        return () => window.removeEventListener(
            'resize',() => null);
    }, []);

    return windowSize;
};
