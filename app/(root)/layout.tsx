// import Link from "next/link";
// import Image from "next/image";
// import { ReactNode } from "react";
// import { redirect } from "next/navigation";

// import { isAuthenticated } from "@/lib/actions/auth.action";

// const Layout = async ({ children }: { children: ReactNode }) => {
//   const isUserAuthenticated = await isAuthenticated();
//   if (!isUserAuthenticated) redirect("/sign-in");

//   return (
//     <div className="root-layout">
//       <nav>
//         <Link href="/" className="flex items-center gap-2">
//           <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
//           <h2 className="text-primary-100">PrepWise</h2>
//         </Link>
//       </nav>

//       {children}
//     </div>
//   );
// };

// export default Layout;
// app/(protected)/layout.tsx or wherever you're placing this layout

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  let isUserAuthenticated = false;

  try {
    isUserAuthenticated = await isAuthenticated();
  } catch (error) {
    console.error("Auth check failed:", error);
    // Optionally redirect or show an error page
  }

  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="min-h-screen flex flex-col px-6 py-4 bg-background text-foreground">
      <header className="mb-6">
        <nav className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="PrepWise Logo" width={38} height={32} />
            <h2 className="text-primary-100 text-lg font-semibold">PrepWise</h2>
          </Link>
        </nav>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
