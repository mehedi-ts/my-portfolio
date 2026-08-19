"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/features/projects/validation/projectSchema";
import { Input } from "@/components/admin/form/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [globalError, setGlobalError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setGlobalError("");
    
    try {
      const { data: authData, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: "/dashboard",
        rememberMe: data.rememberMe || false
      });

      if (error) {
        setGlobalError(error.message || "Invalid email or password.");
        return;
      }
      
      router.push("/dashboard");
    } catch (err) {
      setGlobalError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-main p-4 font-sans relative overflow-hidden">
      {/* Background glow effects matching portfolio style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-md glass-panel p-8 relative z-10">
        <div className="mb-8 text-center">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
            <span className="font-signature text-2xl">M</span>
          </div>
          <h1 className="text-2xl font-bold text-text-main tracking-tight">Welcome back</h1>
          <p className="text-sm text-text-muted mt-2">Sign in to your admin dashboard</p>
        </div>

        {globalError && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-500 text-center">
            {globalError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Email Address"
            type="email"
            placeholder="admin@example.com"
            error={errors.email?.message}
            {...register("email")}
          />
          
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            error={errors.password?.message}
            {...register("password")}
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-text-muted cursor-pointer hover:text-text-main transition-colors">
              <input
                type="checkbox"
                className="rounded border-border-main text-primary focus:ring-primary bg-bg-main"
                {...register("rememberMe")}
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-primary hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-10 bg-primary hover:bg-primary/90 text-white font-medium rounded-md flex items-center justify-center transition-colors disabled:opacity-70"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-text-muted">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary hover:underline font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
