import { AiOutlineDashboard } from 'react-icons/ai';
import { FaCashRegister } from 'react-icons/fa';
import { BiChevronDownCircle, BiChevronUpCircle } from 'react-icons/bi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

import { MenuItem } from '../../models/MenuItem';

let keyMenu = 0;

export const MenuData: MenuItem[] = [
  {
    key: (keyMenu += 1),
    title: 'Dasboard',
    path: '/',
    icon: AiOutlineDashboard,
  },
  {
    key: (keyMenu += 1),
    title: 'Cadastros Essenciais',
    path: '#',
    icon: FaCashRegister,
    iconOpened: BiChevronDownCircle,
    iconClosed: BiChevronUpCircle,
    submenu: [
      {
        key: (keyMenu += 1),
        title: 'Produtos',
        path: '/cad_essencial/produtos',
      },
      {
        key: (keyMenu += 1),
        title: 'Entidades',
        path: '/cad_essencial/entidades',
      },
    ],
  },
  {
    key: (keyMenu += 1),
    title: 'Cadastros Financeiros',
    path: '#',
    icon: RiMoneyDollarCircleLine,
    iconOpened: BiChevronDownCircle,
    iconClosed: BiChevronUpCircle,
    submenu: [
      {
        key: (keyMenu += 1),
        title: 'Condição de Pagamento',
        path: '/cad_financeiro/condpgto',
      },
      {
        key: (keyMenu += 1),
        title: 'Despesas',
        path: '/cad_financeiro/despesas',
      },
    ],
  },
];
