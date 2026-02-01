"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export default function EmailCollectionPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);

    toast.success("Thanks for joining!", {
      description: "We'll keep you updated on our progress.",
    });
    setEmail("");
  };

  return (
    <div className="container relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center pt-20">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Join the Waitlist
          </h1>
          <p className="text-lg text-muted-foreground">
            Be the first to know when we launch new features and updates.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
        <p className="px-8 text-center text-sm text-muted-foreground">
          By joining, you agree to our{" "}
          <a
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
