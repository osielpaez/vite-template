import { Group } from '@mantine/core';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './user-nav.module.css';

const userlinks = [
  { link: '/my/home', label: 'Home' },
  { link: '/my/schedule', label: 'Schedule' },
  { link: '/my/activity', label: 'Activity' },
  { link: '/my/tasks', label: 'Tasks' },
  { link: '/my/personel', label: 'Personel' },
  { link: '/my/clients', label: 'Clients' },
];

export function UserNav() {
  const [active, setActive] = useState(0);
  const location = useLocation();
  
  const navItems = userlinks.map((item, index) => (
    <NavLink
      key={item.label}
      to={item.link}
      className={classes.link}
      onClick={() => {
        setActive(index);
      }}
      data-active={item.link.indexOf(location.pathname) > -1 || undefined}
    >
      {item.label}
    </NavLink>

    // <a
    //   key=
    //   href=
    //   className={classes.link}
    //   data-active={active === link.link || undefined}
    //   onClick={(event) => {
    //     event.preventDefault();
    //     setActive(link.link);
    //   }}
    // >
    //   {link.label}
    // </a>
  ));

  return (
    <>
      <Group gap="md" visibleFrom="xs">
          {navItems}
      </Group>
    </>
  );
}
