import {LogLevel} from '@revideo/core';
import clsx from 'clsx';
import type {ComponentChildren, Ref} from 'preact';
import styles from './Tabs.module.scss';

export interface BadgeInterface {
  level?: LogLevel;
  children?: ComponentChildren;
  badgeRef?: Ref<HTMLDivElement>;
}

export function Badge({
  children,
  badgeRef,
  level = LogLevel.Error,
}: BadgeInterface) {
  return (
    <div ref={badgeRef} className={clsx(styles.badge, styles[level])}>
      {children}
    </div>
  );
}
