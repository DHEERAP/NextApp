import React from "react";
import Link from "next/link";

interface HoveredLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function HoveredLink({ href, children, className }: HoveredLinkProps) {
  return (
    <Link href={href} className={`hover:underline ${className}`}>
      {children}
    </Link>
  );
}
