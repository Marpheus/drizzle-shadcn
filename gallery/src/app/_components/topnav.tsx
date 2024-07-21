import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "~/app/_components/simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b p-4 text-xl font-semibold text-white">
      <a href="/" className="">
        Gallery
      </a>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
}
