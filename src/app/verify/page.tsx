import { Suspense } from "react";
import VerifyClient from "./VerifyClient";

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="auth-layout">Loading...</div>}>
      <VerifyClient />
    </Suspense>
  );
}
