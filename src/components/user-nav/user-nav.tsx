import { Group } from '@mantine/core';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './user-nav.module.css';

const userlinks = [
  { link: '/me/home', label: 'Home' },
  { link: '/me/user', label: 'User' },
];

export function UserNav() {
  const [active, setActive] = useState(userlinks[0].link);

  const navItems = userlinks.map((link) => (
    <NavLink
      to={link.link}
      className={classes.link}
      onClick={() => {
        setActive(link.link);
      }}
      data-active={active === link.link || undefined}
    >
      {link.label}
    </NavLink>

  ));

  return (
    <>
      <Group gap="md" visibleFrom="xs">
          {navItems}
      </Group>
    </>
  );
}
