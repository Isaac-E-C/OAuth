import type { Therapy } from './Therapy';

export const therapies: Therapy[] = [
  {
    name: 'Physical Therapy',
    specialty: 'Recovery',
    description: 'Movement sessions focused on strength, mobility, and pain reduction.',
    duration: 45,
    price: 35,
    image: 'linear-gradient(135deg, #1976d2, #12a37f)',
  },
  {
    name: 'Speech Therapy',
    specialty: 'Communication',
    description: 'Guided support for pronunciation, fluency, and expressive language goals.',
    duration: 50,
    price: 40,
    image: 'linear-gradient(135deg, #1565c0, #7c3aed)',
  },
  {
    name: 'Occupational Therapy',
    specialty: 'Daily Care',
    description: 'Practical exercises to improve independence in daily activities.',
    duration: 60,
    price: 45,
    image: 'linear-gradient(135deg, #0f766e, #f59e0b)',
  },
  {
    name: 'Psychological Support',
    specialty: 'Wellness',
    description: 'Private sessions for emotional wellbeing and personal development.',
    duration: 45,
    price: 38,
    image: 'linear-gradient(135deg, #2563eb, #db2777)',
  },
];
