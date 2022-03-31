import React, { useMemo, useState } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/solid';
import Container from '@/layouts/Container';
import Logo from '@/brands/Logo';
import { User } from '@/types';
import { config } from '@/config';
import Button, { ButtonLink } from './Button';
import { Menu } from './Menu';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  user?: User;
  navigation: {
    url: string;
    label: string;
  }[];
  mainButton?: JSX.Element;
};

const Header = ({ navigation, className, user, mainButton, ...props }: Props) => {
  const navElements = useMemo(() => navigation.map(({ url, label }) => (
    <ButtonLink className="mr-2 cursor-pointer" key={url}>
      {label}
    </ButtonLink>
  )), [navigation]);

  const navMobileElements = useMemo(() => navigation.map(({ url, label }) => (
    <ButtonLink
      className="block w-full text-center text-lg py-4
      border-t border-neutral-100 bg-white"
      key={url}
    >
      {label}
    </ButtonLink>
  )), [navigation]);

  const [menu, setMenu] = useState(false);

  return (
    <div
      className={classnames(`py-4 px-8 border border-neutral-100
    bg-white shadow-neutral-300`, className)}
      {...props}
    >
      <Container>
        <div className="flex items-center">
          <Link href="/education">
            <a><Logo className="mr-5 cursor-pointer hover:text-neutral-700" /></a>
          </Link>
          <div className="hidden sm:flex flex-grow justify-end text-sm">
            {navElements}
          </div>
          {user && (
            <div className="group relative hidden sm:block ml-6 cursor-pointer">
              <div className="w-10 h-10 bg-neutral-100 border rounded-full" />
              <Menu
                className="invisible group-hover:visible"
                items={config.user}
              />
            </div>
          )}
          {mainButton}
          <div className="flex sm:hidden flex-grow justify-end">
            <Button onClick={() => setMenu(!menu)}><MenuIcon className="h-6" /></Button>
          </div>
        </div>
      </Container>
      <div className={classnames('menu py-4', { hidden: !menu })}>
        {navMobileElements}
      </div>
    </div>
  );
};

export default Header;
