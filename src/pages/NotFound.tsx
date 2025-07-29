import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SEO 
        title="404 - דף לא נמצא | MasterStack Web Solutions"
        description="הדף שחיפשתם לא נמצא. חזרו לעמוד הבית של MasterStack לגילוי פתרונות דיגיטליים מקצועיים."
        keywords="404, דף לא נמצא, MasterStack"
        noindex={true}
        nofollow={true}
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">הדף שחיפשתם לא נמצא</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          חזרה לעמוד הבית
        </a>
      </div>
    </div>
  );
};

export default NotFound;
