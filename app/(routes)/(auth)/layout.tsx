import { Logo } from "@/components/Shared/Logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <div className="h-full relative">
        <div className="bg-black h-full min-h-screen absolute w-full -z-10">
          <div className="bg-[url('/login-bg.jpg')] h-full opacity-40 bg-no-repeat bg-cover" />
        </div>
        <div className="px-8 py-5 max-w-7xl mx-auto">
          <Logo />
        </div>
        <div className="h-full w-full max-w-md mx-auto">
          <div className="bg-black/70 px-14 py-16">{children}</div>
        </div>
      </div>
    </div>
  );
}
