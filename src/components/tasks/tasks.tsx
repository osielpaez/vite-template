import { NavLink, Badge } from '@mantine/core';
import { useState } from 'react';
import { IconCheckbox } from '@tabler/icons-react';
import classes from './tasks.module.css';

export function TasksNav(index:number) {
  const [active, setActive] = useState(0);

  return (
    <>
      <NavLink
        label="Tasks"
        active={index === active}
        leftSection={<IconCheckbox size="1.3rem" stroke={1.5} />}
        rightSection={(
              <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
                3
              </Badge>
            )}
        onClick={() => setActive(index)}
      />
    </>
  );
}
