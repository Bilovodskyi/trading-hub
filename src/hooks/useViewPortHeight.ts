import { useState, useLayoutEffect } from "react";

export function useViewportHeight() {
    const [height, setHeight] = useState<number>(
        typeof window !== "undefined" ? window.innerHeight : 0
    );

    useLayoutEffect(() => {
        const updateHeight = () => setHeight(window.innerHeight);

        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return height;
}
