import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap nav-inner">
          <a className="nav-name" href="#top">Samuel Richard</a>
          <div className="nav-links">
            <a href="#journey">Journey</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#how">How I work</a>
            <a href="#about">About</a>
          </div>
          <a className="nav-cta" href="mailto:samuelrichards1844@gmail.com">Email me</a>
        </div>
      </nav>

      <header className="hero wrap" id="top">
        <div className="hero-grid">
          <div>
            <p className="avail"><span className="dot" aria-hidden="true" />Open to affiliate, performance marketing &amp; ad-tech roles</p>
            <h1>
              I turn paid traffic into <em>profit</em> — and build the systems that prove it.
            </h1>
            <p className="hero-sub">
              Performance marketing and business development professional in Lagos.
              I scale CPA/CPL offers on Taboola and Meta, run the tracking stack
              underneath them — postbacks, attribution, network integrations — and
              when a tool doesn&apos;t exist, I build it myself.
            </p>
            <div className="hero-ctas">
              <a className="btn dark" href="mailto:samuelrichards1844@gmail.com">Get in touch</a>
              <a className="btn light" href="#journey">Read my journey</a>
            </div>
          </div>
          <div className="portrait-frame">
            <Image
              src="/samuel.png"
              alt="Samuel Richard"
              width={800}
              height={1030}
              priority
            />
          </div>
        </div>
      </header>

      <div className="stats">
        <div className="wrap stats-grid">
          <div className="stat"><div className="n">$100k+</div><div className="l">Profit from scaled offers in six months</div></div>
          <div className="stat"><div className="n">4 yrs</div><div className="l">Paid acquisition &amp; partner management</div></div>
          <div className="stat"><div className="n">10+</div><div className="l">Tracking &amp; affiliate platforms mastered</div></div>
          <div className="stat"><div className="n">3</div><div className="l">Products built, shipped &amp; monetized</div></div>
        </div>
      </div>

      <section id="journey">
        <div className="wrap">
          <p className="kicker">The journey</p>
          <h2 className="sec-title">Five chapters, one throughline: own the result end to end.</h2>
          <p className="sec-intro">
            Most careers pick a lane — commercial or technical, media buying or
            engineering. Mine kept refusing to. Every chapter below added a layer,
            and together they explain what I bring into any professional setting.
          </p>

          <div className="journey">
            <article className="chapter">
              <div className="ch-num">01</div>
              <div>
                <h3>Learning operations at scale</h3>
                <p className="ch-where">Jumia · Vendor Experience Agent (Account Manager) · 2022 — 2023</p>
                <p>
                  My first professional chapter was Africa&apos;s largest e-commerce
                  platform, managing vendor relationships where every conversation
                  touched payments, listings, or fulfillment. I learned how large
                  organizations actually run: structured case management in
                  Salesforce, cross-departmental escalation, and Excel reporting
                  that management could act on.
                </p>
                <div className="ch-proof">
                  <span className="proof">Salesforce CRM</span>
                  <span className="proof">Vendor account management</span>
                  <span className="proof">Operational reporting</span>
                  <span className="proof">Cross-team escalation</span>
                </div>
              </div>
            </article>

            <article className="chapter">
              <div className="ch-num">02</div>
              <div>
                <h3>Scaling offers — and the six months that proved it</h3>
                <p className="ch-where">Digital Concept · Business Development Manager · 2023 — present</p>
                <p>
                  At an affiliate network, I moved from supporting campaigns to
                  reshaping how we scale them. I brought new approaches to running
                  CPA/CPL offers on Taboola and Meta Ads — sharper creative and
                  audience testing, landing pages rebuilt by hand, spend
                  reallocated by segment-level data — generating over $100,000 in
                  profit within a six-month span.
                </p>
                <p>
                  The unusual part: I also run the attribution layer myself. S2S
                  postbacks, direct linking, and subID architecture across
                  RedTrack, Voluum and Skro, with network-side operations spanning
                  CAKE, Impact, Affise, Everflow, TUNE and FlexOffers. When a
                  conversion goes missing, I don&apos;t file a ticket — I read the
                  postback log.
                </p>
                <div className="ch-proof">
                  <span className="proof warm">$100k+ profit / 6 months</span>
                  <span className="proof">Taboola &amp; Meta Ads</span>
                  <span className="proof">S2S postbacks</span>
                  <span className="proof">Deal negotiation (CPA/RevShare)</span>
                  <span className="proof">International partner onboarding</span>
                </div>
              </div>
            </article>

            <article className="chapter">
              <div className="ch-num">03</div>
              <div>
                <h3>Owning the whole funnel</h3>
                <p className="ch-where">TheChoiceQuotes.com · Founder &amp; operator</p>
                <p>
                  To prove I could own a P&amp;L end to end, I built one. TheChoiceQuotes
                  is a personal-finance comparison site I developed, write, rank and
                  monetize myself — where I pioneered hosting platform offers
                  directly on the site, leveraging Google search traffic instead of
                  renting every click.
                </p>
                <p>
                  That meant doing the unglamorous work: technical SEO, indexing
                  and canonicalization debugging in Search Console, .htaccess URL
                  rewriting, analytics wiring, and a nine-article credit-education
                  hub aimed at a defined audience gap.
                </p>
                <div className="ch-proof">
                  <span className="proof">Content → traffic → conversion loop</span>
                  <span className="proof">Technical SEO</span>
                  <span className="proof">Native &amp; affiliate monetization</span>
                  <span className="proof">Google search traffic strategy</span>
                </div>
                <p className="ch-link"><a href="https://thechoicequotes.com" target="_blank" rel="noopener noreferrer">Visit thechoicequotes.com ↗</a></p>
              </div>
            </article>

            <article className="chapter">
              <div className="ch-num">04</div>
              <div>
                <h3>Building my own infrastructure</h3>
                <p className="ch-where">Independent product work · Next.js · TypeScript · Supabase · Paystack</p>
                <p>
                  Somewhere along the way, &quot;I wish this tool existed&quot; turned into
                  &quot;I&apos;ll build it.&quot; The most visible result is Celeray, a live
                  community rewards platform with real Paystack payment integration,
                  real-time multiplayer features, and AI-powered functionality — taken
                  from idea to shipped product solo, including production payment
                  debugging.
                </p>
                <p>
                  This chapter is where my product management practice comes from:
                  requirements, user flows, feature prioritization, payment and
                  payout workflow design, and the discipline of shipping — not
                  slideware, working software.
                </p>
                <div className="ch-proof">
                  <span className="proof">Product: idea → live</span>
                  <span className="proof">Payment integration (Paystack)</span>
                  <span className="proof">Real-time systems</span>
                  <span className="proof">AI feature integration</span>
                  <span className="proof">PostgreSQL / Supabase</span>
                </div>
              </div>
            </article>

            <article className="chapter">
              <div className="ch-num">05</div>
              <div>
                <h3>Where the leadership was forged</h3>
                <p className="ch-where">Adventist Youth Ministries · Multi-year leadership roles</p>
                <p>
                  Long before anyone paid me to lead, a large structured
                  organization trusted me to. Through years of progressive
                  leadership responsibility in Adventist Youth Ministries, I
                  learned how organizations really operate: planning and executing
                  programs for 170+ participants, managing multi-million-naira
                  program budgets with full income-and-expense reporting to senior
                  leadership, coordinating teams of volunteer facilitators, and
                  designing training curricula delivered by a dozen presenters.
                </p>
                <p>
                  It taught me the skills no course quite does: accountability with
                  other people&apos;s money, calm logistics under pressure, and how to
                  get a team of volunteers to deliver like professionals.
                </p>
                <div className="ch-proof">
                  <span className="proof">Program planning &amp; execution</span>
                  <span className="proof">Budget management &amp; reporting</span>
                  <span className="proof">Team &amp; volunteer leadership</span>
                  <span className="proof">Training design &amp; delivery</span>
                  <span className="proof">Stakeholder communication</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="capabilities">
        <div className="wrap">
          <p className="kicker">Capabilities</p>
          <h2 className="sec-title">The full toolkit, grouped the way I actually use it.</h2>

          <div className="cap-grid">
            <div className="cap">
              <h3>Tracking &amp; Attribution</h3>
              <p className="cap-note">My deepest specialty — the layer most marketers never touch.</p>
              <div className="tags">
                <span className="tag">S2S tracking</span><span className="tag">Postback URLs</span>
                <span className="tag">Direct linking</span><span className="tag">subID architecture</span>
                <span className="tag">RedTrack</span><span className="tag">Voluum</span>
                <span className="tag">Skro</span><span className="tag">Conversion debugging</span>
                <span className="tag">Google Analytics</span>
              </div>
            </div>
            <div className="cap">
              <h3>Affiliate Network Operations</h3>
              <p className="cap-note">Hands-on across the platforms that run the industry.</p>
              <div className="tags">
                <span className="tag">CAKE</span><span className="tag">Impact</span>
                <span className="tag">Affise</span><span className="tag">Everflow</span>
                <span className="tag">TUNE</span><span className="tag">FlexOffers</span>
                <span className="tag">Offer management</span><span className="tag">Partner recruitment</span>
                <span className="tag">Technical integrations</span>
              </div>
            </div>
            <div className="cap">
              <h3>Paid Media &amp; Growth</h3>
              <p className="cap-note">Where the profit gets made.</p>
              <div className="tags">
                <span className="tag">Taboola</span><span className="tag">Meta Ads</span>
                <span className="tag">Native advertising</span><span className="tag">CPA / CPL / EPC economics</span>
                <span className="tag">Creative &amp; audience testing</span><span className="tag">Landing-page CRO</span>
                <span className="tag">Traffic-quality analysis</span>
              </div>
            </div>
            <div className="cap">
              <h3>Commercial &amp; Relationship</h3>
              <p className="cap-note">Business development with real deal structures behind it.</p>
              <div className="tags">
                <span className="tag">Deal negotiation (CPA/RevShare/Hybrid)</span>
                <span className="tag">Advertiser &amp; publisher management</span>
                <span className="tag">Vendor management</span><span className="tag">Salesforce CRM</span>
                <span className="tag">Advanced Excel</span><span className="tag">Commercial reporting</span>
              </div>
            </div>
            <div className="cap">
              <h3>Engineering &amp; Web</h3>
              <p className="cap-note">Enough to ship — and to speak fluently with any dev team.</p>
              <div className="tags">
                <span className="tag">Next.js</span><span className="tag">TypeScript</span>
                <span className="tag">React</span><span className="tag">PostgreSQL / Supabase</span>
                <span className="tag">Paystack integration</span><span className="tag">HTML / CSS / JS</span>
                <span className="tag">Technical SEO</span><span className="tag">API integration</span>
              </div>
            </div>
            <div className="cap">
              <h3>Program &amp; Project Leadership</h3>
              <p className="cap-note">Planning, budgets, people — proven outside the job title.</p>
              <div className="tags">
                <span className="tag">Program management</span><span className="tag">Budgeting &amp; reconciliation</span>
                <span className="tag">Logistics &amp; scheduling</span><span className="tag">Team leadership</span>
                <span className="tag">Training &amp; facilitation</span><span className="tag">Formal reporting</span>
                <span className="tag">Public speaking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how">
        <div className="wrap">
          <p className="kicker">How I work</p>
          <h2 className="sec-title">What you actually get when you hire me.</h2>
          <div className="hw-grid">
            <div className="hw">
              <h3>Systems thinking</h3>
              <p>I trace problems across the whole chain — click, tracker, network, advertiser — instead of guessing at one link. It&apos;s why broken attribution gets fixed instead of argued about.</p>
            </div>
            <div className="hw">
              <h3>Ownership by default</h3>
              <p>Everything on this page — the campaigns, the site, the products — I took from zero to done. Hand me an outcome, not a task list.</p>
            </div>
            <div className="hw">
              <h3>Numbers you can trust</h3>
              <p>I&apos;ve managed other people&apos;s money with full income-and-expense reporting, and flagged variances instead of hiding them. My reporting holds up under scrutiny.</p>
            </div>
            <div className="hw">
              <h3>Fast, evidenced learning</h3>
              <p>Engineering degree to self-taught full-stack builder to certified-track cloud coursework — I close skill gaps quickly and show the work, not just the certificate.</p>
            </div>
            <div className="hw">
              <h3>Both languages, fluently</h3>
              <p>I can negotiate a RevShare deal in the morning and debug the postback behind it after lunch. Marketers trust my numbers; engineers trust my tickets.</p>
            </div>
            <div className="hw">
              <h3>Clear communication</h3>
              <p>Reports, documentation, training rooms, and stakeholder updates — years of writing and presenting mean nothing I run stays a black box.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <p className="kicker">About</p>
          <h2 className="sec-title">Lagos-based. Globally fluent in performance.</h2>
          <div className="about-grid">
            <div>
              <p>
                I&apos;m Samuel Richard — a performance marketing and business
                development professional with an engineer&apos;s instinct for how
                things work under the hood. Four years across e-commerce
                operations and affiliate networks taught me the commercial side;
                my own projects taught me to build.
              </p>
              <p>
                I&apos;m equally comfortable presenting to a partner, rebuilding a
                landing page, or reading a postback log — and I&apos;m looking for a
                team where that range compounds: affiliate management, performance
                marketing, ad-tech solutions, or technical account management.
              </p>
            </div>
            <ul className="edu">
              <li><span>B.Eng., Electronics Engineering — Michael Okpara University of Agriculture</span><span>2022</span></li>
              <li><span>AWS Cloud Practitioner coursework (CLF-C02)</span><span>2025</span></li>
              <li><span>Business Development Manager — Digital Concept</span><span>2023 — now</span></li>
              <li><span>Vendor Experience Agent — Jumia</span><span>2022 — 23</span></li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="wrap">
          <h2>Let&apos;s make your next quarter <em>measurably</em> better.</h2>
          <div className="foot-links">
            <a className="btn dark" href="mailto:samuelrichards1844@gmail.com">samuelrichards1844@gmail.com</a>
            <a className="btn light" href="https://linkedin.com/in/samuel-richard-257418220" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
          <p className="foot-note">
            Designed and built by Samuel Richard with Next.js ·{" "}
            <a href="https://github.com/Richards28910/portfolio" target="_blank" rel="noopener noreferrer">view source on GitHub</a>
          </p>
        </div>
      </footer>
    </>
  );
}
