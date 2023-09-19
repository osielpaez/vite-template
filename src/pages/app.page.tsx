import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, ScrollArea, Text, Avatar, Image, Badge, Divider, NavLink } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { IconCalendar, IconSettings, IconLogout, IconSwitchHorizontal, IconUsers, IconBulb, IconUser, IconCheckbox } from '@tabler/icons-react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../public/raise-group.png';
import classes from './app.page.module.css';
import { UserNav } from '../components/user-nav/user-nav';

const applinks = [
    { icon: IconUser, label: 'Me', link: '/my/home' },
    { icon: IconBulb, label: 'Activity', notifications: 3, link: '/my/activity' },
    { icon: IconCheckbox, label: 'Tasks', notifications: 4, link: '/my/tasks' },
    { icon: IconCalendar, label: 'Schedule', link: '/my/schedule' },
    { divider: true },
    { icon: IconUsers, label: 'Personel', link: '/my/personel' },
    { icon: IconUsers, label: 'Clients', link: '/my/clients' },
    { divider: true },
    { icon: IconSettings, label: 'Settings' },
    { icon: IconSwitchHorizontal, label: 'Switch Account' },
    { icon: IconLogout, label: 'Logoff' },
];

export function AppplicationShell() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const appLinks = applinks.map((item, index) => {
    if (item.divider) return <Divider mb={5} mt={5} />;

    return <NavLink
      key={item.label}
      label={item.label}
      active={item.link ? item.link.indexOf(location.pathname) > -1 : undefined}
      leftSection={<item.icon size="1.3rem" stroke={1.5} />}
      rightSection={item.notifications && (
            <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
              {item.notifications}
            </Badge>
          )}
      onClick={() => {
        if (item.link) navigate(item.link);
        setActive(index);
      }}
    />;
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header withBorder={false}>
        <Group h="100%" px="md" justify="space-between">
            <Group justify="flex-start">
                <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                <Avatar radius="xl" />
                <Text>Osiel Paez</Text>
            </Group>
            <UserNav />
            <Group justify="flex-end">
              <Image
                h={25}
                w="auto"
                fit="contain"
                src={logo}
              />
              <Text tt="uppercase" size="xs">Raise Group</Text>
            </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section mt={5} mb={5} component={ScrollArea}>
          <div className={classes.mainLinks}>{appLinks}</div>
        </AppShell.Section>
        <AppShell.Section grow mt={5} mb={5} />
        <Divider />
        <AppShell.Section mt={10}>
            <Group justify="space-between">
                <MantineLogo size={15} />
                <Text size="xs">ver. 1.0.0</Text>
            </Group>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
