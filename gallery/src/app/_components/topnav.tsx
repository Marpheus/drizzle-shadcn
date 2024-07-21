"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between border-b bg-gray-800 p-4 text-xl font-semibold text-white">
      <a href="/" className="">
        Gallery
      </a>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
}
