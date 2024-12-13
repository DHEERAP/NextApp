// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// const transition = {
//   type: "spring",
//   mass: 0.5,
//   damping: 11.5,
//   stiffness: 100,
//   restDelta: 0.001,
//   restSpeed: 0.001,
// };

// export const MenuItem = ({
//   setActive,
//   active,
//   item,
//   children,
// }: {
//   setActive: (item: string) => void;
//   active: string | null;
//   item: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div onMouseEnter={() => setActive(item)} className="relative ">
//       <motion.p
//         transition={{ duration: 0.3 }}
//         className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
//       >
//         {item}
//       </motion.p>
//       {active !== null && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85, y: 10 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={transition}
//         >
//           {active === item && (
//             <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
//               <motion.div
//                 transition={transition}
//                 layoutId="active" // layoutId ensures smooth animation
//                 className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
//               >
//                 <motion.div
//                   layout // layout ensures smooth animation
//                   className="w-max h-full p-4"
//                 >
//                   {children}
//                 </motion.div>
//               </motion.div>
//             </div>
//           )}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export const Menu = ({
//   setActive,
//   children,
// }: {
//   setActive: (item: string | null) => void;
//   children: React.ReactNode;
// }) => {
//   return (
//     <nav
//       onMouseLeave={() => setActive(null)} // resets the state
//       className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
//     >
//       {children}
//     </nav>
//   );
// };

// export const ProductItem = ({
//   title,
//   description,
//   href,
//   src,
// }: {
//   title: string;
//   description: string;
//   href: string;
//   src: string;
// }) => {
//   return (
//     <Link href={href} className="flex space-x-2">
//       <Image
//         src={src}
//         width={140}
//         height={70}
//         alt={title}
//         className="flex-shrink-0 rounded-md shadow-2xl"
//       />
//       <div>
//         <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
//           {title}
//         </h4>
//         <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
//           {description}
//         </p>
//       </div>
//     </Link>
//   );
// };

// export const HoveredLink = ({ children, ...rest }: any) => {
//   return (
//     <Link
//       {...rest}
//       className="text-neutral-700 dark:text-neutral-200 hover:text-black "
//     >
//       {children}
//     </Link>
//   );
// };

















"use client";
import { motion, MotionProps } from "framer-motion";
import React from "react";
import Link from "next/link"; // Import Link correctly from Next.js
import Image from "next/image";

// Type definitions for motion components
type MotionDivProps = MotionProps & React.HTMLProps<HTMLDivElement>;
type MotionPProps = MotionProps & React.HTMLProps<HTMLParagraphElement>;

// Explicitly typed motion components
const MotionDiv = motion.div as React.FC<MotionDivProps>;
const MotionP = motion.p as React.FC<MotionPProps>;

// Transition configuration for motion components
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// MenuItem component for displaying menu items
interface MenuItemProps {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <MotionP
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </MotionP>
      {active !== null && (
        <MotionDiv
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children &&  (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <MotionDiv
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <MotionDiv layout className="w-max h-full p-4">
                  {children}
                </MotionDiv>
              </MotionDiv>
            </div>
          )}
        </MotionDiv>
      )}
    </div>
  );
};

// Menu component for the whole menu structure
interface MenuProps {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6"
    >
      {children}
    </nav>
  );
};

// ProductItem component for displaying product items
interface ProductItemProps {
  title: string;
  description: string;
  href: string;
  src: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

// HoveredLink component for custom links with hover effect
interface HoveredLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export const HoveredLink: React.FC<HoveredLinkProps> = ({ children, href, ...rest }) => {
  return (
    <Link href={href} passHref>
      {/* Apply className directly to the anchor element */}
      <a className="text-neutral-700 dark:text-neutral-200 hover:text-black" {...rest}>
        {children}
      </a>
    </Link>
  );
};
