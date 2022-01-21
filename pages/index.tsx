import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import HomePage from "../components/HomePage";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  // using loading state to show/hide loader
  if (loading) {
    return (
      <main className="w-full h-screen bg-slate-50 dark:bg-gray-950">
        <Loader />
      </main>
    );
  } else {
    return (
      <main className="w-full h-screen bg-slate-50 dark:bg-gray-950">
        <HomePage />
      </main>
    );
  }
}
