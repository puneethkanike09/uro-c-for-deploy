import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="auth-layout">Loading...</div>}>
      <LoginClient />
    </Suspense>
  );
}
