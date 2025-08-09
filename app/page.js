import PortfolioPage from './components/Portfolio';
// Abhishek
const projects = [
  {
    id: 'reach-up',
    title: 'Reach Up',
    year: 2024,
    tags: ['Unity', 'Gameplay', 'Optimization'],
    desc: "End-to-end development of 'Reach Up' — obstacles, mechanics, optimization for low-end devices.",
    img: '/projects/reach-up.jpg',
    url: '#'
  },
  {
    id: 'vr-golf',
    title: 'VR Golf',
    year: 2023,
    tags: ['Unity', 'VR', 'Input'],
    desc: 'VR Golf with realistic hand gestures and interaction, designed for headsets & controllers.',
    img: '/projects/vr-golf.jpg',
    url: '#'
  },
  {
    id: 'island-thieves',
    title: 'Island of Thieves',
    year: 2024,
    tags: ['3D', 'Rigging', 'Optimization'],
    desc: '3D assets, rigging and full integration into a multiplayer experience.',
    img: '/projects/island-thieves.jpg',
    url: '#'
  },
  {
    id: 'particles-pack',
    title: 'Particle FX Pack',
    year: 2023,
    tags: ['VFX', 'Shaders'],
    desc: 'Custom particle systems and shaders to raise visual fidelity while keeping performance high.',
    img: '/projects/particles.jpg',
    url: '#'
  },
  {
    id: 'top-g',
    title: 'Top-G (Vehicular)',
    year: 2023,
    tags: ['Unity', 'Mechanics', 'UI'],
    desc: 'Worked on car mechanics, ball physics and HUD for a vehicular-soccer project.',
    img: '/projects/top-g.jpg',
    url: '#'
  }
];
export default function Home() {
  return (
    <PortfolioPage />
  );
}
