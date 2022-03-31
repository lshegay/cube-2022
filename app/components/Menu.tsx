import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import classnames from 'classnames';
import Link from 'next/link';

type MenuProps = HTMLMotionProps<'div'> & {
  items: { url: string; label: string }[];
};

export const Menu = ({ children, className, items, ...props }: MenuProps) => (
  <motion.div
    className={classnames('text-sm absolute z-10 text-neutral-500 right-0', className)}
    {...props}
  >
    <div className="mt-2 bg-white border rounded-xl w-40 pt-4 pb-1 px-5 flex flex-col shadow-md">
      {items.map(({ url, label }) => (
        <Link href={url} key={url}>
          <a className="mb-3 hover:text-black">{label}</a>
        </Link>
      ))}
    </div>
  </motion.div>
);
