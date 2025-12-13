export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const AUTHORS: Author[] = [
  {
    id: 'water-raptor-team',
    name: 'Water Raptor Field Team',
    role: 'Operators & Project Leads',
    bio: 'Amphibious operators and project leads documenting harvesting, dredging, shoreline work, and maintenance operations in the field.',
    initials: 'WR',
  },
  {
    id: 'lake-management-desk',
    name: 'Lake Management Desk',
    role: 'Planning & Water Quality',
    bio: 'Planning, monitoring, and water-quality support team translating field data into practical maintenance programs.',
    initials: 'LM',
  },
];

export function getAuthorById(id: string): Author | undefined {
  return AUTHORS.find((author) => author.id === id);
}

