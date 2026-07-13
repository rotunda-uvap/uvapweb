// The mega-menu, defined once. The Gatsby site had this markup duplicated in
// full for mobile and desktop; both variants now render from this list.
export interface NavLink {
  label: string;
  href: string;
}
export interface NavColumn {
  heading: string;
  links: NavLink[];
}

export const navColumns: NavColumn[] = [
  {
    heading: 'About',
    links: [
      { label: 'About UVA Press', href: '/about/' },
      { label: 'Latest News and Events', href: '/publicity/' },
      { label: 'Contact Us', href: '/staff-list/' },
      { label: 'Rights and Permissions', href: '/permissions/' },
      { label: 'Career & Internships', href: '/career/' },
      { label: 'Support UVA Press', href: '/support/' },
    ],
  },
  {
    heading: 'All Products',
    links: [
      { label: 'Search', href: '/book-search/' },
      { label: 'Browse A-Z', href: '/books/#AZ' },
      { label: 'New Releases', href: '/recent-books/' },
      { label: 'Browse by Series', href: '/books/#series' },
      { label: 'Browse by Subject', href: '/books/#subjects' },
      { label: 'Award Winners', href: '/books/#awardwinners' },
      { label: 'Seasonal Catalog', href: '/catalog/' },
      { label: 'Conference Exhibits', href: '/exhibits/' },
      { label: 'Review Copy Requests', href: '/publicity/#review' },
      { label: 'Order Books', href: '/order/' },
      { label: 'Open Access', href: 'https://open.upress.virginia.edu/' },
    ],
  },
  {
    heading: 'For Authors',
    links: [
      { label: 'Prospective Authors', href: '/prospective/' },
      { label: 'Current Authors', href: '/authors/' },
    ],
  },
  {
    heading: 'For Instructors',
    links: [
      { label: 'Instructor Resource Hub', href: '/instructors/' },
      {
        label: 'Desk/Exam Copy Requests',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSdM83xFI63YLUWkuv7zEko9cMBD-9csrbizC_VH7U7Mmmr5sg/viewform',
      },
      { label: 'Browse by Series', href: '/books/#series' },
      { label: 'Browse by Subject', href: '/books/#subjects' },
      { label: 'Rotunda Digital Collections', href: '/rotunda/' },
      { label: 'Open Access Resources', href: 'https://open.upress.virginia.edu/' },
    ],
  },
  {
    heading: 'Rotunda Digital',
    links: [
      { label: 'About Rotunda', href: '/rotunda/' },
      { label: 'Rotunda Contacts', href: '/rotunda/#contacts' },
      { label: 'Customer Entrance', href: 'https://rotunda.upress.virginia.edu/entrance.xqy' },
      { label: 'American Documentary History Collection', href: '/series/ADHC/' },
      { label: 'Literature & Culture Collection', href: '/series/LCC/' },
    ],
  },
];
