'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
export default function PortfolioPage(){
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(null); // project id

  const tags = ['All','Unity','VR','VFX','3D','Gameplay','UI'];

  const visible = projects.filter(p => {
    if(filter !== 'All' && !p.tags.includes(filter)) return false;
    if(query && !(`${p.title} ${p.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase()))) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white antialiased">
      <header className="fixed inset-x-0 top-4 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="backdrop-blur-sm bg-neutral-900/20 border border-neutral-800 rounded-full py-2 px-4 flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-red-600 to-red-800 grid place-items-center font-bold">AB</div>
              <div className="leading-tight">
                <div className="font-semibold">Abhishek Budhale</div>
                <div className="text-xs text-neutral-400">Technical Artist • Unity & 3D</div>
              </div>
            </div>
            <div className="ml-auto hidden md:flex gap-4 items-center text-sm text-neutral-300">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#experience" className="hover:text-white">Experience</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
            <div className="ml-4 flex items-center gap-2">
              <a href="/Abhishek_Resume.pdf" target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-md border border-neutral-800 hover:bg-neutral-800">Resume</a>
              <a href="#contact" className="text-sm px-3 py-1 rounded-md bg-red-600 hover:bg-red-700">Hire me</a>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <motion.h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight" initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.05}}>
              I build optimized <span className="text-red-500">Unity games</span> & shaders.
            </motion.h1>
            <motion.p className="text-neutral-300 max-w-xl" initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.15}}>
              Technical Artist experienced in Unity, Blender, VFX and performance optimizations. I ship polished gameplay systems and visually compelling realtime graphics while keeping performance top-of-mind.
            </motion.p>
            <div className="flex gap-4 mt-4">
              <a href="#projects" className="inline-flex items-center px-5 py-3 rounded-md bg-red-600 hover:bg-red-700">See my work</a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-md border border-neutral-800">Contact</a>
            </div>

            <div className="mt-6 flex gap-6 text-sm text-neutral-400">
              <div>
                <div className="text-xs uppercase">Location</div>
                <div>Pune, India</div>
              </div>
              <div>
                <div className="text-xs uppercase">Email</div>
                <div><a className="text-neutral-200" href="mailto:abhishekbudhale3@gmail.com">abhishekbudhale3@gmail.com</a></div>
              </div>
            </div>

            <div className="mt-6 flex gap-3 items-center text-sm">
              <div className="text-neutral-400">Selected:</div>
              <div className="flex gap-3">
                <span className="px-3 py-1 rounded-full bg-neutral-800 text-xs">Unity</span>
                <span className="px-3 py-1 rounded-full bg-neutral-800 text-xs">Shaders</span>
                <span className="px-3 py-1 rounded-full bg-neutral-800 text-xs">VFX</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div className="w-full h-[380px] rounded-2xl overflow-hidden border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6"
              initial={{scale:0.98,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:0.2}}>
              <div className="flex h-full items-center justify-center">
                {/* Placeholder: replace with Image component pointing to a hero render */}
                <div className="w-full h-full rounded-xl bg-gradient-to-r from-neutral-800 to-neutral-900 flex items-center justify-center">
                  <div className="text-neutral-500">Hero artwork / 3D render goes here</div>
                </div>
              </div>
            </motion.div>

            <div className="absolute -bottom-6 left-6 w-[340px] rounded-xl bg-[#0d0d0d] border border-neutral-800 p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-red-600 to-red-800 grid place-items-center font-bold">AB</div>
                <div>
                  <div className="font-semibold">Abhishek Budhale</div>
                  <div className="text-xs text-neutral-400">Technical Artist • Unity / VFX</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-neutral-300">I specialize in performance-focused visuals, shader authoring and end-to-end game systems. I collaborate with design and engineering teams to deliver stable, optimized builds.</div>
            </div>
          </div>
        </section>

        {/* ABOUT + EXPERIENCE */}
        <section id="about" className="mt-20 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.h2 className="text-2xl font-semibold" initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.05}}>About me</motion.h2>
            <motion.p className="text-neutral-300 max-w-2xl" initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.12}}>
              Versatile and detail-oriented Technical Artist and Game Developer with hands-on experience building slot and 3D games, optimizing assets and authoring shaders. I handle everything from modelling and rigging in Blender to shipping polished gameplay systems in Unity.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800">
                <div className="text-xs text-neutral-400">Tools</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm">Unity</span>
                  <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm">Blender</span>
                  <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm">C#</span>
                  <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm">Shaders</span>
                  <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm">After Effects</span>
                </div>
              </div>

              <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800">
                <div className="text-xs text-neutral-400">Highlights</div>
                <ul className="mt-2 text-sm text-neutral-300 list-disc ml-5">
                  <li>Published 8+ games on Zimension</li>
                  <li>Delivered multiple slot titles at Zvky</li>
                  <li>Built VR interactions & motion-capture pipelines</li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800">
              <div className="text-xs text-neutral-400">Education</div>
              <div className="mt-2 text-sm">
                <div className="font-medium">BBA - Computer Application</div>
                <div className="text-neutral-400 text-sm">Indira College of Commerce and Science, Pune — 2019-2022</div>
              </div>
            </div>

            <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800">
              <div className="text-xs text-neutral-400">Contact</div>
              <div className="mt-3 text-sm">
                <div>Email: <a className="text-neutral-200" href="mailto:abhishekbudhale3@gmail.com">abhishekbudhale3@gmail.com</a></div>
                <div className="mt-1">Phone: <a className="text-neutral-200" href="tel:+919657755981">+91 96577 55981</a></div>
                <div className="mt-2"><a className="text-neutral-200" href="https://www.linkedin.com/in/abhishek-budhale-870910217" target="_blank" rel="noreferrer">linkedin.com/in/abhishek-budhale</a></div>
              </div>
            </div>
          </aside>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-20">
          <motion.h2 className="text-2xl font-semibold" initial={{y:10,opacity:0}} animate={{y:0,opacity:1}}>Selected projects</motion.h2>

          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              {tags.map(t => (
                <button key={t} onClick={() => setFilter(t)} className={`text-sm px-3 py-1 rounded-full ${filter===t? 'bg-red-600':'bg-neutral-800'} text-white`}>{t}</button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects..." className="bg-neutral-900 border border-neutral-800 rounded-md px-3 py-2 text-sm" />
            </div>
          </div>

          <motion.div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}>
            {visible.map(p => (
              <motion.article key={p.id} layout onClick={() => setActive(p)} whileHover={{y:-6}} className="cursor-pointer bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
                <div className="relative h-48 bg-neutral-800">
                  {/* replace with next/image for production and real images */}
                  <Image src={p.img} alt={p.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{p.title}</h3>
                      <div className="text-xs text-neutral-400">{p.tags.join(' • ')} • {p.year}</div>
                    </div>
                    <div className="text-sm text-neutral-400">→</div>
                  </div>
                  <p className="mt-3 text-sm text-neutral-300">{p.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-20">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="mt-6 space-y-4">
            <ExperienceItem company="Zvky Design Studio" role="Technical Artist" date="Jan 2023 — Present">
              Delivered 5 slot games for international markets, focused on optimization, particles and shader work.
            </ExperienceItem>
            <ExperienceItem company="Zimension 3D Technologies" role="Game Designer & Developer" date="Oct 2023 — Dec 2024">
              Built 8 games end-to-end, creating 3D assets, rigging and publishing across platforms.
            </ExperienceItem>
            <ExperienceItem company="Fabwelt Studios" role="Game Developer" date="Mar 2023 — Aug 2023">
              Worked on Top-G vehicular soccer mechanics and UI design.
            </ExperienceItem>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-20">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-800">
              <p className="text-neutral-300">If you’d like to work together — email me or send a quick message below. I reply quickly for relevant opportunities.</p>
              <div className="mt-4 text-sm text-neutral-400">
                <div>Email: <a className="text-neutral-200" href="mailto:abhishekbudhale3@gmail.com">abhishekbudhale3@gmail.com</a></div>
                <div className="mt-1">Phone: <a className="text-neutral-200" href="tel:+919657755981">+91 96577 55981</a></div>
              </div>
            </div>

            <form onSubmit={(e)=>{ e.preventDefault(); const form = e.target; const subject = encodeURIComponent('Portfolio contact from ' + form.name.value); const body = encodeURIComponent(`Name: ${form.name.value}\nEmail: ${form.email.value}\n\n${form.message.value}`); window.location.href = `mailto:abhishekbudhale3@gmail.com?subject=${subject}&body=${body}` }} className="p-6 bg-neutral-900 rounded-2xl border border-neutral-800">
              <div className="grid gap-3">
                <input name="name" placeholder="Your name" required className="px-3 py-2 bg-transparent border border-neutral-800 rounded-md" />
                <input name="email" type="email" placeholder="Your email" required className="px-3 py-2 bg-transparent border border-neutral-800 rounded-md" />
                <textarea name="message" placeholder="Message" rows={6} required className="px-3 py-2 bg-transparent border border-neutral-800 rounded-md"></textarea>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-red-600 rounded-md">Send message</button>
                  <a href="/Abhishek_Resume.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 border border-neutral-800 rounded-md">Download resume</a>
                </div>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-20 text-sm text-neutral-500 pb-12">
          © {new Date().getFullYear()} Abhishek Budhale — Technical Artist & Game Developer
        </footer>
      </main>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {active && (
          <motion.aside initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6">
            <motion.div initial={{y:30}} animate={{y:0}} exit={{y:30}} transition={{type:'spring'}} className="max-w-4xl w-full bg-[#0c0c0c] rounded-2xl border border-neutral-800 overflow-hidden">
              <div className="relative h-72 sm:h-96">
                <Image src={active.img} alt={active.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{active.title}</h3>
                    <div className="text-xs text-neutral-400">{active.tags.join(' • ')} • {active.year}</div>
                  </div>
                  <div className="text-sm text-neutral-400 cursor-pointer" onClick={()=>setActive(null)}>Close</div>
                </div>
                <p className="mt-4 text-neutral-300">{active.desc}</p>
                <div className="mt-4 flex gap-3">
                  <a href={active.url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-red-600 rounded-md">Open</a>
                  <a href="/Abhishek_Resume.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 border border-neutral-800 rounded-md">Resume</a>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
function ExperienceItem({company,role,date,children}){
  return (
    <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{company}</div>
          <div className="text-xs text-neutral-400">{role}</div>
        </div>
        <div className="text-xs text-neutral-500">{date}</div>
      </div>
      <div className="mt-3 text-sm text-neutral-300">{children}</div>
    </div>
  );
}