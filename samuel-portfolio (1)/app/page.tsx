export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap nav-inner">
          <a className="nav-name" href="#top">samuel.richard</a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#leadership">Leadership</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero wrap" id="top">
        <p className="hero-eyebrow">Samuel Richard · Lagos, Nigeria · Affiliate &amp; Performance Marketing</p>
        <h1>
          I run the campaigns <span className="accent">and build the pipes.</span>
        </h1>
        <p className="hero-sub">
          Performance marketer with 4 years across paid acquisition and affiliate
          operations — Meta Ads, Taboola native, CPA/CPL economics — and the rare
          ability to build and debug the tracking layer underneath: S2S postbacks,
          RedTrack, Voluum, and network integrations across Everflow, CAKE, Affise
          and TUNE. I&apos;ve even built a working affiliate platform from scratch.
        </p>

        {/* Signature element: a live postback, Samuel's actual specialty */}
        <div className="postback" aria-label="Example server-to-server postback request">
          <span className="dim">$</span> GET https://track.samuelr.dev/postback
          <span className="org">?clickid=</span>{"{clickid}"}
          <span className="org">&amp;payout=</span>{"{payout}"}
          <span className="org">&amp;status=</span>approved
          <br />
          <span className="dim">← 200 OK</span>&nbsp;&nbsp;
          <span className="grn">conversion recorded · attribution intact</span>
          <span className="cursor" aria-hidden="true" />
        </div>

        <div className="hero-ctas">
          <a className="btn primary" href="#work">See the proof</a>
          <a className="btn ghost" href="mailto:samuelrichards1844@gmail.com">Email me</a>
        </div>
      </header>

      <section id="work">
        <div className="wrap">
          <div className="sec-head">
            <h2>Proof of work</h2>
            <span className="path">/case-studies · 3 entries · status: approved</span>
          </div>

          <article className="case">
            <div className="case-top">
              <div>
                <h3>NetTrack — a full affiliate platform, built from scratch</h3>
                <p className="role">Solo build · Turborepo · NestJS · Fastify · Next.js · PostgreSQL · ClickHouse · Redis · BullMQ</p>
              </div>
              <span className="chip ok">In development · ~65% of commercial parity</span>
            </div>
            <p>
              To prove I understand attribution beyond the dashboard, I&apos;m building
              the platform itself: a NestJS API, a dedicated Fastify tracking endpoint,
              a ClickHouse event store for click and conversion data, and Next.js
              portals for affiliates and advertisers — benchmarked feature-by-feature
              against Everflow and CAKE.
            </p>
            <p>
              Offer management, tracking links, postback handling, reporting, and
              affiliate/advertiser modules are working. If your team debates subIDs,
              server-side attribution, or payout logic, I&apos;ve implemented every one
              of those concepts by hand.
            </p>
            <div className="case-meta">
              <div className="kv"><div className="k">Why it matters</div><div className="v">I speak both marketer and engineer</div></div>
              <div className="kv"><div className="k">Event pipeline</div><div className="v">Fastify → Redis/BullMQ → ClickHouse</div></div>
              <div className="kv"><div className="k">Benchmark</div><div className="v">Everflow · CAKE feature sets</div></div>
            </div>
            <div className="case-links">
              <a href="#contact"><span className="todo">[ADD demo video link]</span></a>
              <a href="#contact"><span className="todo">[ADD architecture write-up link]</span></a>
            </div>
          </article>

          <article className="case">
            <div className="case-top">
              <div>
                <h3>Celeray — payments-integrated community rewards app</h3>
                <p className="role">Solo build · Next.js 15 · TypeScript · Supabase · Paystack · Vercel · Claude API</p>
              </div>
              <span className="chip ok">Live product</span>
            </div>
            <p>
              A birthday rewards platform for Nigerian communities with live Paystack
              payment integration, real-time multiplayer games (server-authoritative
              engine over Supabase Realtime — Trivia, WHOT, Chess, Ludo), and AI
              features built on the Claude API with rate limiting and caching.
            </p>
            <p>
              Shipped end to end: product design, contribution and payout workflows,
              roles and permissions, a 12-issue mobile UX audit, and payment-bug
              debugging in production.
            </p>
            <div className="case-meta">
              <div className="kv"><div className="k">Payments</div><div className="v">Live Paystack integration</div></div>
              <div className="kv"><div className="k">Realtime</div><div className="v">Server-authoritative multiplayer</div></div>
              <div className="kv"><div className="k">AI</div><div className="v">Claude API · pgvector · caching</div></div>
            </div>
            <div className="case-links">
              <a href="#contact"><span className="todo">[ADD live URL]</span></a>
              <a href="#contact"><span className="todo">[ADD screenshots]</span></a>
            </div>
          </article>

          <article className="case">
            <div className="case-top">
              <div>
                <h3>TheChoiceQuotes — the full loop: content → traffic → conversion</h3>
                <p className="role">Owner-operator · thechoicequotes.com · Native &amp; affiliate monetization</p>
              </div>
              <span className="chip ok">Live · monetized</span>
            </div>
            <p>
              A personal-finance comparison site I built, write, rank, and monetize
              myself. A 9-article credit-education hub targets a defined &quot;credit
              access gap&quot; audience; traffic comes from SEO and Taboola native
              campaigns; monetization runs through affiliate insurance and credit offers.
            </p>
            <p>
              The unglamorous parts are the point: Apache/.htaccess URL rewriting,
              canonicalization, Search Console indexing debugging, and analytics
              wiring — the complete performance-marketing P&amp;L in miniature.
            </p>
            <div className="case-meta">
              <div className="kv"><div className="k">Content</div><div className="v">9-article credit hub + insurance pillar</div></div>
              <div className="kv"><div className="k">Traffic</div><div className="v">Technical SEO + Taboola native</div></div>
              <div className="kv"><div className="k">Result</div><div className="v"><span className="todo">[ADD traffic/revenue metric]</span></div></div>
            </div>
            <div className="case-links">
              <a href="https://thechoicequotes.com" target="_blank" rel="noopener noreferrer">Visit the site ↗</a>
            </div>
          </article>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <div className="sec-head">
            <h2>Skills, honestly leveled</h2>
            <span className="path">/parameters · self-assessed against real work</span>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Tracking &amp; Attribution</h3>
              <ul>
                <li>S2S tracking &amp; postback URLs <span className="lvl">advanced</span></li>
                <li>RedTrack · Voluum · Skro <span className="lvl">advanced</span></li>
                <li>Everflow · CAKE · Affise · TUNE <span className="lvl">advanced</span></li>
                <li>Conversion debugging <span className="lvl">advanced</span></li>
                <li>Google Analytics <span className="lvl">intermediate</span></li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Paid Media</h3>
              <ul>
                <li>Taboola native advertising <span className="lvl">adv/int</span></li>
                <li>Meta Ads (FB/IG) <span className="lvl">adv/int</span></li>
                <li>CPA / CPL / EPC economics <span className="lvl">advanced</span></li>
                <li>Landing pages &amp; CRO <span className="lvl">intermediate</span></li>
                <li>Creative &amp; audience testing <span className="lvl">intermediate</span></li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Commercial</h3>
              <ul>
                <li>Affiliate partner management <span className="lvl">advanced</span></li>
                <li>Deal negotiation (CPA/RevShare) <span className="lvl">intermediate</span></li>
                <li>Salesforce CRM <span className="lvl">intermediate</span></li>
                <li>Vendor/account management <span className="lvl">intermediate</span></li>
                <li>Excel reporting <span className="lvl">advanced</span></li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Engineering</h3>
              <ul>
                <li>Next.js · TypeScript · React <span className="lvl">intermediate</span></li>
                <li>PostgreSQL · Supabase <span className="lvl">intermediate</span></li>
                <li>NestJS · Fastify · Redis <span className="lvl">intermediate</span></li>
                <li>Payment integration (Paystack) <span className="lvl">intermediate</span></li>
                <li>Technical SEO <span className="lvl">intermediate</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <div className="sec-head">
            <h2>Experience</h2>
            <span className="path">/timeline · 2022 → present</span>
          </div>
          <div className="xp">
            <div className="xp-item">
              <h3>Business Development Manager</h3>
              <p className="where">Digital Concept (Concept Digital Affiliate Network) · Lagos · Jul 2023 — present</p>
              <ul>
                <li>Run paid acquisition across Meta Ads and Taboola for CPA/CPL offers, including a US-targeted insurance vertical — <span className="todo">[ADD monthly spend + CPL result]</span></li>
                <li>Build and maintain S2S tracking, postbacks, and direct-linking across RedTrack, Voluum and Skro for accurate attribution</li>
                <li>Onboard and support international affiliate partners and their technical integrations — <span className="todo">[ADD partner count]</span></li>
                <li>Build landing pages (HTML/CSS/JS) and iterate funnels against traffic-quality data</li>
              </ul>
            </div>
            <div className="xp-item">
              <h3>Vendor Experience Agent (Account Manager)</h3>
              <p className="where">Jumia · Lagos · May 2022 — Jun 2023</p>
              <ul>
                <li>Managed vendor accounts on Africa&apos;s largest e-commerce platform — payments, listings, fulfillment — <span className="todo">[ADD vendor count]</span></li>
                <li>Tracked cases in Salesforce and cut response times — <span className="todo">[ADD % if known]</span></li>
                <li>Produced Excel performance reports supporting management decisions</li>
              </ul>
            </div>
            <div className="xp-item">
              <h3>B.Eng. Electronics Engineering</h3>
              <p className="where">Michael Okpara University of Agriculture, Umuahia · Dec 2022</p>
              <ul>
                <li>AWS Cloud Practitioner coursework (CLF-C02), 2025</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership">
        <div className="wrap">
          <div className="sec-head">
            <h2>Leadership, with real budgets</h2>
            <span className="path">/volunteer-programs · Adventist Youth Ministries, Lagos Mainland Conference</span>
          </div>
          <div className="lead-grid">
            <div className="lead-card">
              <div className="num">₦1.48M</div>
              <div className="what">Funds received &amp; reconciled</div>
              <p>Directed finances for a five-day residential youth bootcamp — full income/expense reporting delivered to conference leadership, variances flagged transparently.</p>
            </div>
            <div className="lead-card">
              <div className="num">176</div>
              <div className="what">Participants registered</div>
              <p>Drills &amp; Drums 2026 bootcamp: logistics, feeding, facilitators, security and daily programming across five days.</p>
            </div>
            <div className="lead-card">
              <div className="num">43 × 12</div>
              <div className="what">Lessons × presenters scheduled</div>
              <p>Designed and scheduled a leadership-training curriculum, allocating 43 lessons across 12 facilitators.</p>
            </div>
            <div className="lead-card">
              <div className="num">131</div>
              <div className="what">Children in district camp program</div>
              <p>Planning and documentation for a district-level camp — registration, safeguarding-minded logistics, and reporting.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="wrap">
          <h2>Hiring for affiliate, performance, or ad-tech roles? Let&apos;s talk.</h2>
          <div className="foot-links">
            <a className="btn primary" href="mailto:samuelrichards1844@gmail.com">samuelrichards1844@gmail.com</a>
            <a
              className="btn ghost"
              href="https://linkedin.com/in/samuel-richard-257418220"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
          <p className="foot-note">
            Designed and built by Samuel Richard with Next.js — deployed on Vercel.
            View source on <span className="todo">[ADD GitHub repo link]</span>.
          </p>
        </div>
      </footer>
    </>
  );
}
