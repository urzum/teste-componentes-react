import { IconBaseProps } from 'react-icons';

export interface MenuItem {
  key: number;
  title: string;
  path: string;
  icon?: React.ComponentType<IconBaseProps>;
  iconOpened?: React.ComponentType<IconBaseProps>;
  iconClosed?: React.ComponentType<IconBaseProps>;
  submenu?: MenuItem[];
}
