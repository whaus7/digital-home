import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showLink?: boolean;
}

export default function Logo({ className = "", showLink = true }: LogoProps) {
  const logoContent = (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Image
        src="/DW-Logo.webp"
        alt="Digital Home Technologies Logo"
        width={44}
        height={44}
        className="h-11 w-auto"
      />
      <div className="flex flex-col">
        <span
          className="text-white font-libre-baskerville text-lg font-semibold leading-tight"
          style={{
            fontFamily: "var(--font-libre-baskerville)",
            letterSpacing: "0.2em",
          }}
        >
          DIGITAL HOME
        </span>
        <span
          className="text-gray-300 font-montserrat text-xs font-medium tracking-widest"
          style={{
            fontFamily: "var(--font-montserrat)",
            letterSpacing: "0.77em",
          }}
        >
          TECHNOLOGIES
        </span>
      </div>
    </div>
  );

  if (showLink) {
    return <Link href="/">{logoContent}</Link>;
  }

  return logoContent;
}
