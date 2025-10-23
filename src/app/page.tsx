"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginPage from "@/components/LoginPage";
import { useAuthStore } from "@/store/authStore";

export default function Home() {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  return <LoginPage />;
}
