import CustomLoading from "@/components/CustomLoading";
import StartPage from "@/components/landing-page/Start";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export default function Home() {
    return (
        <Suspense fallback={<CustomLoading />}>
            <main>
                <Navbar />
                <StartPage />
            </main>
        </Suspense>
    );
}
