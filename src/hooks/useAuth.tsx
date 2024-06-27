"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TOKEN } from "@/utils";

export const useAuth = () => {
  const [token, setToken] = useState<string>(TOKEN);
  const router = useRouter();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [router, token]);

  return token;
};
