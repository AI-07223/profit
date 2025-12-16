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
    logoUrl: '/images/logos/Lotus365_logo.jpg',
    adminId: 'ADMIN_L365',
    password: 'Pass@123',
    link: 'https://lotus365.in',
    themeColor: 'from-orange-600 to-red-600',
  },
  {
    id: 'fairplay',
    name: 'Fairplay',
    logoUrl: '/images/logos/Fairplay_logo.jpg',
    adminId: 'ADMIN_FP',
    password: 'Pass@123',
    link: 'https://fairplay.club',
    themeColor: 'from-green-600 to-emerald-800',
  },
  {
    id: 'bet365',
    name: 'Bet365',
    logoUrl: '/images/logos/Bet365_logo.jpg',
    adminId: 'ADMIN_B365',
    password: 'Pass@123',
    link: 'https://bet365.com',
    themeColor: 'from-green-500 to-green-700',
  },
  {
    id: 'gold365',
    name: 'Gold365',
    logoUrl: '/images/logos/Gold365_logo.jpg',
    adminId: 'ADMIN_G365',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-yellow-500 to-yellow-700',
  },
  {
    id: 'lazer247',
    name: 'Lazer247',
    logoUrl: '/images/logos/Lazer247_logo.jpg',
    adminId: 'ADMIN_LZ',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'tigerexch',
    name: 'Tigerexch',
    logoUrl: '/images/logos/Tigerexch_logo.jpg',
    adminId: 'ADMIN_TGR',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-orange-400 to-orange-600',
  },
  {
    id: 'd247',
    name: 'D247',
    logoUrl: '/images/logos/D247_logo.jpg',
    adminId: 'ADMIN_D247',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-purple-600 to-purple-800',
  },
  {
    id: 'allpanel',
    name: 'AllPanel',
    logoUrl: '/images/logos/AllPanel_logo.jpg',
    adminId: 'ADMIN_AP',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-gray-700 to-gray-900',
  },
  {
    id: 'reddyanna',
    name: 'Reddyanna',
    logoUrl: '/images/logos/Reddyanna_logo.jpg',
    adminId: 'ADMIN_RA',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-red-700 to-red-900',
  },
  {
    id: 'diamondexch',
    name: 'Diamondexch',
    logoUrl: '/images/logos/Diamondexch_logo.jpg',
    adminId: 'ADMIN_DIA',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-blue-400 to-blue-600',
  },
  {
    id: 'skyexch',
    name: 'Skyexch',
    logoUrl: '/images/logos/Skyexch_logo.jpg',
    adminId: 'ADMIN_SKY',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-sky-500 to-sky-700',
  },
  {
    id: 'world777',
    name: 'World777',
    logoUrl: '/images/logos/World777_logo.jpg',
    adminId: 'ADMIN_W777',
    password: 'Pass@123',
    link: '#',
    themeColor: 'from-blue-800 to-indigo-900',
  },
];
