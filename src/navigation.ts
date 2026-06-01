import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Inicio', href: '/' },
    { text: 'Quiénes Somos', href: getPermalink('/about') },
    { text: 'Eventos', href: getBlogPermalink() },
    { text: 'Colabora', href: getPermalink('/colabora') },
    { text: 'Contacto', href: '/#contacto' },
  ],
  actions: [{ text: 'Contacto', href: '/#contacto', variant: 'primary' }],
  showToggleTheme: false,
};

export const footerData = {
  links: [
    {
      title: 'Jurisdicción',
      links: [
        { text: 'Quiénes Somos', href: getPermalink('/about') },
        { text: 'Asambleas y Eventos', href: getBlogPermalink() },
        { text: 'Membresía Nacional', href: '/#contacto' },
      ],
    },
    {
      title: 'Chapters Oficiales',
      links: [
        { text: 'Chapter Río Uruguay', href: 'https://www.wsriouruguay.com' },
        { text: 'Chapter Río Cuareim', href: 'https://www.wsriocuareim.com' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Regularidad', href: '#' },
    { text: 'Unión', href: '#' },
    { text: 'Filantropía', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/widows_sons_uruguay' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/tu_cuenta_gran_capitulo' },
  ],
  footNote: `
    Diseñado por STEB · Gran Capítulo de Widows Sons Uruguay © 2026
  `,
};
