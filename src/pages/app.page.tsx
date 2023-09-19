import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton, ScrollArea, Text, Avatar, Image, Tabs, UnstyledButton, Badge, Divider } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { IconSettings, IconLogout, IconSwitchHorizontal, IconUsers, IconBulb, IconUser, IconCheckbox, IconList, IconSearch, IconPlus } from '@tabler/icons-react';
import { Outlet } from 'react-router-dom';
import logo from '../public/raise-group.png';
import classes from './app.page.module.css';
import { UserNav } from '../components/user-nav/user-nav';

const applinks = [
    { icon: IconUser, label: 'Me' },
    { icon: IconBulb, label: 'Activity', notifications: 3 },
    { icon: IconCheckbox, label: 'Tasks', notifications: 4 },
];

const syslinks = [
    { icon: IconSettings, label: 'Settings' },
    { icon: IconSwitchHorizontal, label: 'Switch Account' },
    { icon: IconLogout, label: 'Logoff' },
];

const links = [
    { icon: IconUsers, label: 'Contacts' },
];

export function AppplicationShell() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const appLinks = applinks.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={22} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={22} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const systemlinks = syslinks.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={22} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

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
        <AppShell.Section>
            <div className={classes.mainLinks}>{appLinks}</div>
        </AppShell.Section>
        <Divider pt={10} pb={10} />
        <AppShell.Section grow my="md" component={ScrollArea}>
            <div className={classes.mainLinks}>{mainLinks}</div>
            {Array(60)
            .fill(0)
            .map((_, index) => (
                <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </AppShell.Section>
        <Divider mt="10" mb="10" />
        <AppShell.Section pb="md">
            <div className={classes.mainLinks}>{systemlinks}</div>
        </AppShell.Section>
        <AppShell.Section>
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
