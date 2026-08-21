import Image from "next/image";

const skillGroups: [string, string[]][] = [
  ["Paid Media", ["Taboola", "Meta Ads", "native", "CPA/CPL"]],
  ["Tracking & Attribution", ["S2S postbacks", "RedTrack", "Voluum", "Skro"]],
  ["Affiliate Platforms", ["CAKE", "Impact", "Affise", "Everflow", "TUNE", "FlexOffers"]],
  ["Build", ["Next.js", "TypeScript", "PostgreSQL/Supabase", "technical SEO", "Salesforce", "advanced Excel"]],
];

const chapters = [
  { number: "01", date: "2023 -> now", title: "Scaling offers at Digital Concept", text: "I brought new approaches to scaling CPA/CPL offers across Taboola and Facebook (Meta) Ads. Creative and audience testing, landing-page iteration, and disciplined spend reallocation generated over $100,000 USD in profit within a six-month span.", proof: ["Run the attribution layer myself: S2S postbacks, RedTrack, Voluum and Skro", "Operate across CAKE, Impact, Affise, Everflow, TUNE and FlexOffers", "Connect acquisition decisions to clean conversion and payout data"] },
  { number: "02", date: "Owner-operator", title: "Building and monetizing TheChoiceQuotes", text: "I built the personal-finance comparison site myself and pioneered hosting platform offers directly on the site, leveraging Google search traffic. It is the full loop of content, technical SEO and affiliate monetization.", proof: ["Own the content and affiliate monetization workflow", "Handle indexing, canonicalization and .htaccess implementation", "Visit thechoicequotes.com"] },
  { number: "03", date: "Idea -> shipped", title: "Product & software journey", text: "I built my own infrastructure to understand products from the inside. Most visibly, Celeray is a live payments-integrated community rewards app, showing I can take a product from idea to shipped, including payment debugging in production.", proof: ["Next.js, TypeScript, Supabase and Paystack", "Real-time features and AI integrations", "Shipped product workflows, permissions and payment debugging"] },
  { number: "04", date: "Professional formation", title: "Where leadership was forged", text: "Multi-year leadership roles in a large structured organization taught me how organizations actually operate: program planning and execution, budgeting, coordination and formal reporting to senior leadership.", proof: ["Program planning and execution for 170+ participants", "Budgeting and financial reporting across multi-million-naira programs", "Coordinated volunteer and facilitator teams"] },
];

export default function Home() {
  return (
    <main className="canvas" id="top">
      <nav className="nav wrap">
        <a className="brand" href="#top">Samuel Richard</a>
        <div className="nav-links"><a href="#work">Work</a><a href="#journey">Journey</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <a className="button button-dark nav-cta" href="mailto:samuelrichards1844@gmail.com">Email Me</a>
      </nav>

      <header className="hero wrap">
        <div className="availability"><span /> Open to affiliate, performance marketing &amp; ad-tech roles</div>
        <div className="portrait-frame"><Image src="/samuel.png" alt="Samuel Richard" fill priority sizes="(max-width: 700px) 92vw, 560px" /></div>
        <div className="hero-copy"><h1>Samuel turns paid traffic into profit <em>- and builds the systems that prove it.</em></h1><div className="hero-intro"><p>Performance marketing and business development professional in Lagos with 4 years across paid acquisition, affiliate operations and tracking infrastructure.</p><a className="button button-dark" href="mailto:samuelrichards1844@gmail.com">Email Me <span>-&gt;</span></a></div></div>
      </header>

      <section className="section work-section" id="work"><div className="wrap"><div className="section-label">Selected work <span>01</span></div><div className="work-feature"><div><p className="eyebrow">The full loop</p><h2>From the first click to the final payout.</h2></div><p>Paid acquisition only works when the infrastructure underneath can tell the truth. I work comfortably at both ends: making the offer compelling and making the attribution reliable.</p></div></div></section>

      <section className="section journey-section" id="journey"><div className="wrap"><div className="section-label">The journey <span>02</span></div><div className="chapters">{chapters.map((chapter) => <article className="chapter" key={chapter.number}><div className="chapter-number">{chapter.number}</div><div className="chapter-body"><p className="eyebrow">{chapter.date}</p><h2>{chapter.title}</h2><p className="chapter-text">{chapter.text}</p><ul>{chapter.proof.map((item, index) => <li key={item}><span>-&gt;</span>{index === 2 && chapter.number === "02" ? <a href="https://thechoicequotes.com" target="_blank" rel="noopener noreferrer">{item} ↗</a> : item}</li>)}</ul></div></article>)}</div></div></section>

      <section className="section skills-section" id="skills"><div className="wrap"><div className="section-label">What I work with <span>03</span></div><div className="skills-list">{skillGroups.map(([title, skills]) => <div className="skill-row" key={title}><h3>{title}</h3><div className="tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section className="section about-section" id="about"><div className="wrap about-grid"><div className="section-label">A little more <span>04</span></div><div><h2>Lagos-based, commercially minded, technically curious.</h2><p>I&apos;m a Lagos-based B.Eng. Electronics Engineering graduate with a business development background at Digital Concept and previously Jumia. I&apos;m equally at home negotiating a CPA deal and debugging the postback behind it.</p></div></div></section>

      <footer className="section footer" id="contact"><div className="wrap"><p className="eyebrow">Have a role in mind?</p><h2>Let&apos;s make something<br /><em>measurable.</em></h2><div className="footer-links"><a className="button button-dark" href="mailto:samuelrichards1844@gmail.com">Email Me <span>-&gt;</span></a><a className="text-link" href="https://linkedin.com/in/samuel-richard-257418220" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div><p className="footer-note">Designed and built by Samuel Richard with Next.js · <a href="https://github.com/Richards28910/portfolio" target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a></p></div></footer>
    </main>
  );
}
