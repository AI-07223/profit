export interface DemoSite {
  id: string;
  name: string;
  logoUrl?: string; // Optional: if empty, UI should show styled name
  adminId: string;
  password: string;
  link: string;
  themeColor: string; // To add variety to the cards
}

export const demoSites: DemoSite[] = [
  {
    id: 'lotus365',
    name: 'Lotus365',
    logoUrl: 'https://logo.clearbit.com/lotus365.in',
    adminId: 'ADMIN_L365',
    password: 'Pass@123',
    link: 'https://lotus365.in',
    themeColor: 'from-orange-600 to-red-600',
  },
  {
    id: 'fairplay',
    name: 'Fairplay',
    logoUrl: 'https://logo.clearbit.com/fairplay.club',
    adminId: 'ADMIN_FP',
    password: 'Pass@123',
    link: 'https://fairplay.club',
    themeColor: 'from-green-600 to-emerald-800',
  },
  {
    id: 'bet365',
    name: 'Bet365',
    logoUrl: 'https://logo.clearbit.com/bet365.com',
    adminId: 'ADMIN_B365',
    password: 'Pass@123',
    link: 'https://bet365.com',
    themeColor: 'from-green-500 to-green-700',
  },
  {
    id: 'gold365',
    name: 'Gold365',
    logoUrl: '', // Often hard to find, letting fallback handle it or user update
    adminId: 'ADMIN_G365',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-yellow-500 to-yellow-700',
  },
  {
    id: 'lazer247',
    name: 'Lazer247',
    logoUrl: '',
    adminId: 'ADMIN_LZ',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'tigerexch',
    name: 'Tigerexch',
    logoUrl: '',
    adminId: 'ADMIN_TGR',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-orange-400 to-orange-600',
  },
  {
    id: 'd247',
    name: 'D247',
    logoUrl: '',
    adminId: 'ADMIN_D247',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-purple-600 to-purple-800',
  },
  {
    id: 'allpanel',
    name: 'AllPanel',
    logoUrl: '',
    adminId: 'ADMIN_AP',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-gray-700 to-gray-900',
  },
  {
    id: 'reddyanna',
    name: 'Reddyanna',
    logoUrl: '',
    adminId: 'ADMIN_RA',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-red-700 to-red-900',
  },
  {
    id: 'diamondexch',
    name: 'Diamondexch',
    logoUrl: '',
    adminId: 'ADMIN_DIA',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-blue-400 to-blue-600',
  },
  {
    id: 'skyexch',
    name: 'Skyexch',
    logoUrl: 'https://logo.clearbit.com/skyexchange.com',
    adminId: 'ADMIN_SKY',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-sky-500 to-sky-700',
  },
  {
    id: 'world777',
    name: 'World777',
    logoUrl: 'https://logo.clearbit.com/world777.com',
    adminId: 'ADMIN_W777',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-blue-800 to-indigo-900',
  },
];
