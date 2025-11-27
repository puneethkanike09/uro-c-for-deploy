import { Suspense } from "react";
import DiscussionsClient from "./DiscussionsClient";

export default function DiscussionsPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto py-8 px-4">
          <div className="flex items-center justify-center min-h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">Loading discussions...</p>
            </div>
          </div>
        </div>
      }
    >
      <DiscussionsClient />
    </Suspense>
  );
}
