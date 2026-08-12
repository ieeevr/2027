---
layout: ieeevr-default
title: "Sponsorship and Exhibition"
title_separator: "|"
description: "Sponsorship and exhibition opportunities for IEEE VR 2027 in Melbourne, Australia."
permalink: /sponsors/call/
published: true
sidebar_widgets: []
---

<style>
  .sponsorship-page,
  .sponsorship-page *,
  .sponsorship-page *::before,
  .sponsorship-page *::after {
    box-sizing: border-box;
  }

  .sponsorship-page {
    --sponsor-navy: #171447;
    --sponsor-purple: #262262;
    --sponsor-blue: #0e76bc;
    --sponsor-sky: #e8f2fb;
    --sponsor-ink: #25233a;
    --sponsor-muted: #656478;
    --sponsor-border: #d9d9e6;
    --sponsor-surface: #f7f7fb;
    color: var(--sponsor-ink);
    margin: 0 auto;
    max-width: 76rem;
    padding: 0 0 2rem;
  }

  .sponsorship-page img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  .sponsorship-page h1,
  .sponsorship-page h2,
  .sponsorship-page h3,
  .sponsorship-page p {
    margin-top: 0;
  }

  .sponsorship-page h2,
  .sponsorship-page h3 {
    border-bottom: 0;
  }

  .sponsorship-hero {
    align-items: end;
    background: var(--sponsor-navy);
    border-radius: 1.15rem;
    display: grid;
    height: clamp(15rem, 25vw, 21rem);
    min-height: 0;
    overflow: hidden;
    position: relative;
  }

  .sponsorship-hero__image,
  .sponsorship-hero__shade {
    height: 100%;
    inset: 0;
    position: absolute;
    width: 100%;
  }

  .sponsorship-hero__image {
    object-fit: cover;
    object-position: center 40%;
  }

  .sponsorship-hero__shade {
    background:
      linear-gradient(180deg, rgba(9, 8, 34, 0.06) 15%, rgba(9, 8, 34, 0.92) 100%),
      linear-gradient(90deg, rgba(9, 8, 34, 0.64) 0%, rgba(9, 8, 34, 0.02) 65%);
  }

  .sponsorship-hero__content {
    color: #fff;
    max-width: 52rem;
    padding: clamp(1.5rem, 4vw, 2.75rem);
    position: relative;
    z-index: 1;
  }

  .sponsorship-hero__eyebrow {
    color: #fff;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
  }

  .sponsorship-page .sponsorship-hero__title {
    color: #fff;
    font-size: clamp(2rem, 4.8vw, 3.75rem);
    letter-spacing: -0.04em;
    line-height: 0.98;
    margin: 0;
    text-wrap: balance;
  }

  .sponsorship-actions {
    background: #fff;
    border: 1px solid var(--sponsor-border);
    border-radius: 0.9rem;
    box-shadow: 0 1rem 2.5rem rgba(23, 20, 71, 0.14);
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: -1.65rem clamp(1rem, 4vw, 3rem) 0;
    padding: 0.9rem;
    position: relative;
    z-index: 2;
  }

  .sponsorship-action {
    align-items: center;
    background: var(--sponsor-purple);
    border: 2px solid var(--sponsor-purple);
    border-radius: 0.65rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 4.8rem;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease;
  }

  .sponsorship-action:visited {
    color: #fff;
  }

  .sponsorship-action:hover {
    background: var(--sponsor-blue);
    border-color: var(--sponsor-blue);
    color: #fff;
    transform: translateY(-2px);
  }

  .sponsorship-action:focus-visible,
  .sponsorship-contact__button:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
  }

  .sponsorship-action--pending {
    background: #fff;
    border-color: var(--sponsor-border);
    color: var(--sponsor-muted);
    cursor: not-allowed;
  }

  .sponsorship-action__label {
    font-size: 0.96rem;
    font-weight: 800;
    letter-spacing: 0.055em;
  }

  .sponsorship-action__note {
    font-size: 0.76rem;
    font-weight: 600;
    margin-top: 0.3rem;
    opacity: 0.82;
  }

  .sponsorship-section {
    margin: 0 auto;
    max-width: 68rem;
    padding: clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 4vw, 2rem) 0;
  }

  .sponsorship-page .sponsorship-section__title {
    color: var(--sponsor-purple);
    font-size: clamp(1.8rem, 4vw, 2.75rem);
    letter-spacing: -0.025em;
    line-height: 1.08;
    margin-bottom: 1.25rem;
    text-wrap: balance;
  }

  .sponsorship-section > p,
  .sponsorship-feature__copy p,
  .sponsorship-contact p {
    font-size: 1.04rem;
    line-height: 1.72;
  }

  .sponsorship-benefits {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 2rem;
  }

  .sponsorship-benefit {
    background: var(--sponsor-surface);
    border: 1px solid var(--sponsor-border);
    border-radius: 0.8rem;
    padding: clamp(1.25rem, 3vw, 1.8rem);
  }

  .sponsorship-benefit:last-child {
    grid-column: 1 / -1;
  }

  .sponsorship-benefit__number {
    align-items: center;
    background: var(--sponsor-purple);
    border-radius: 999px;
    color: #fff;
    display: inline-flex;
    font-size: 0.78rem;
    font-weight: 800;
    height: 2rem;
    justify-content: center;
    margin-bottom: 0.9rem;
    width: 2rem;
  }

  .sponsorship-page .sponsorship-benefit__title {
    color: var(--sponsor-purple);
    font-size: 1.16rem;
    line-height: 1.25;
    margin-bottom: 0.65rem;
  }

  .sponsorship-benefit p {
    font-size: 0.96rem;
    line-height: 1.62;
    margin-bottom: 0;
  }

  .sponsorship-advantage {
    background: var(--sponsor-navy);
    border-radius: 0.9rem;
    color: #fff;
    margin-top: 1rem;
    padding: clamp(1.5rem, 4vw, 2.4rem);
  }

  .sponsorship-page .sponsorship-advantage h3,
  .sponsorship-advantage p {
    color: #fff;
  }

  .sponsorship-page .sponsorship-advantage h3 {
    font-size: 1.35rem;
    margin-bottom: 0.65rem;
  }

  .sponsorship-advantage p {
    line-height: 1.65;
    margin-bottom: 0;
  }

  .sponsorship-feature {
    align-items: stretch;
    display: grid;
    gap: clamp(1.5rem, 4vw, 3rem);
    grid-template-columns: minmax(0, 1.05fr) minmax(18rem, 0.95fr);
  }

  .sponsorship-feature__image {
    border-radius: 0.9rem;
    height: 100%;
    min-height: 25rem;
    object-fit: cover;
  }

  .sponsorship-feature__copy {
    align-self: center;
  }

  .sponsorship-talk {
    background: var(--sponsor-sky);
    border-left: 0.35rem solid var(--sponsor-blue);
    border-radius: 0.25rem 0.8rem 0.8rem 0.25rem;
    padding: clamp(1.5rem, 4vw, 2.4rem);
  }

  .sponsorship-talk p:last-child {
    margin-bottom: 0;
  }

  .sponsorship-contact {
    align-items: center;
    background: var(--sponsor-navy);
    border-radius: 1rem;
    color: #fff;
    display: grid;
    gap: clamp(1.5rem, 4vw, 3rem);
    grid-template-columns: minmax(0, 1.2fr) minmax(16rem, 0.8fr);
    overflow: hidden;
    padding: clamp(1.5rem, 5vw, 3.5rem);
  }

  .sponsorship-contact h2,
  .sponsorship-contact h3,
  .sponsorship-contact p,
  .sponsorship-contact strong,
  .sponsorship-contact a:not(.sponsorship-contact__button) {
    color: #fff;
  }

  .sponsorship-page .sponsorship-contact .sponsorship-section__title {
    color: #fff;
  }

  .sponsorship-contact__details {
    border-top: 1px solid rgba(255, 255, 255, 0.28);
    font-style: normal;
    margin-top: 1.4rem;
    padding-top: 1.4rem;
  }

  .sponsorship-contact__details p {
    line-height: 1.55;
    margin-bottom: 0.85rem;
  }

  .sponsorship-contact__button {
    background: #fff;
    border: 2px solid #fff;
    border-radius: 0.65rem;
    color: var(--sponsor-purple);
    display: inline-block;
    font-weight: 800;
    letter-spacing: 0.055em;
    padding: 0.9rem 1.25rem;
    text-align: center;
    text-decoration: none;
  }

  .sponsorship-contact__button:visited {
    color: var(--sponsor-purple);
  }

  .sponsorship-contact__button:hover {
    background: var(--sponsor-sky);
    border-color: var(--sponsor-sky);
    color: var(--sponsor-purple);
  }

  .sponsorship-contact__image {
    border-radius: 0.75rem;
    height: 100%;
    min-height: 19rem;
    object-fit: cover;
  }

  @media (max-width: 760px) {
    .sponsorship-actions,
    .sponsorship-benefits,
    .sponsorship-feature,
    .sponsorship-contact {
      grid-template-columns: 1fr;
    }

    .sponsorship-actions {
      gap: 0.55rem;
      margin-left: 0.75rem;
      margin-right: 0.75rem;
      padding: 0.65rem;
    }

    .sponsorship-action {
      min-height: 4.25rem;
      padding: 0.7rem;
    }

    .sponsorship-benefit:last-child {
      grid-column: auto;
    }

    .sponsorship-feature__image {
      min-height: 18rem;
      order: -1;
    }

    .sponsorship-contact__image {
      max-height: 23rem;
      min-height: 0;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .sponsorship-hero {
      border-radius: 0.75rem;
      height: 14rem;
      min-height: 0;
    }

    .sponsorship-hero__content {
      padding: 1.25rem;
    }

    .sponsorship-actions {
      margin-top: -0.9rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sponsorship-action {
      transition: none;
    }
  }
</style>

<div class="sponsorship-page">
  <header class="sponsorship-hero">
    <img class="sponsorship-hero__image" src="{{ '/assets/images/sponsors/2027/exhibition-vr.jpg' | relative_url }}" width="1800" height="1200" alt="Two exhibition attendees experiencing virtual reality technology" fetchpriority="high">
    <div class="sponsorship-hero__shade" aria-hidden="true"></div>
    <div class="sponsorship-hero__content">
      <p class="sponsorship-hero__eyebrow">IEEE VR 2027 · Melbourne, Australia</p>
      <h1 class="sponsorship-hero__title">Sponsorship and Exhibition</h1>
    </div>
  </header>

  <nav class="sponsorship-actions" aria-label="Sponsorship and exhibition actions">
    <a class="sponsorship-action" href="{{ '/assets/documents/ieee-vr-2027-sponsorship-exhibition-prospectus.pdf' | relative_url }}" target="_blank" rel="noopener" download>
      <span class="sponsorship-action__label">DOWNLOAD PROSPECTUS</span>
      <span class="sponsorship-action__note">PDF · 2.58 MB</span>
    </a>
    <a class="sponsorship-action" href="https://icmsaust.eventsair.com/ieee-conference-on-virtual-reality-and-3d-user-interfaces-2027/sponsor-application-form/Site/Register" target="_blank" rel="noopener noreferrer">
      <span class="sponsorship-action__label">APPLY NOW</span>
      <span class="sponsorship-action__note">Sponsor Application Form - Contact Details</span>
    </a>
    <span class="sponsorship-action sponsorship-action--pending" aria-disabled="true">
      <span class="sponsorship-action__label">VIEW FLOORPLAN</span>
      <span class="sponsorship-action__note">TBD</span>
    </span>
  </nav>

  <section class="sponsorship-section" aria-labelledby="connect-with-the-global-vr-community">
    <h2 class="sponsorship-section__title" id="connect-with-the-global-vr-community">Connect with the Global VR Community</h2>
    <p>IEEE VR 2027 provides an outstanding opportunity for organisations working across virtual, augmented and mixed reality to connect with an international community at the forefront of immersive technology.</p>
    <p>Taking place in Melbourne, Australia from 27 February to 3 March 2027, IEEE VR brings together leading researchers, practitioners, developers, innovators and industry representatives to share advances, explore emerging technologies and shape the future of virtual experiences.</p>
    <p>Sponsorship and exhibition opportunities are available for organisations looking to showcase their technology, strengthen their profile and engage directly with this highly specialised international community.</p>
  </section>

  <section class="sponsorship-section" aria-labelledby="why-partner-with-ieee-vr-2027">
    <h2 class="sponsorship-section__title" id="why-partner-with-ieee-vr-2027">Why Partner with IEEE VR 2027?</h2>

    <div class="sponsorship-benefits">
      <article class="sponsorship-benefit">
        <span class="sponsorship-benefit__number" aria-hidden="true">1</span>
        <h3 class="sponsorship-benefit__title">Showcase Your Technology and Expertise</h3>
        <p>Position your organisation alongside the latest developments in virtual, augmented and mixed reality and demonstrate your products, technology and capabilities to an engaged specialist audience.</p>
      </article>

      <article class="sponsorship-benefit">
        <span class="sponsorship-benefit__number" aria-hidden="true">2</span>
        <h3 class="sponsorship-benefit__title">Access Leading XR Researchers and Developers</h3>
        <p>Connect directly with researchers, developers, industry leaders and practitioners responsible for advancing XR technologies, conducting cutting-edge research and influencing future technology adoption.</p>
      </article>

      <article class="sponsorship-benefit">
        <span class="sponsorship-benefit__number" aria-hidden="true">3</span>
        <h3 class="sponsorship-benefit__title">Recruit Future Talent and Build Academic Partnerships</h3>
        <p>Engage with postgraduate students, early career researchers and emerging technology leaders from universities and research institutions around the world. Build awareness among future talent, identify recruitment opportunities and develop valuable relationships with the academic community.</p>
      </article>

      <article class="sponsorship-benefit">
        <span class="sponsorship-benefit__number" aria-hidden="true">4</span>
        <h3 class="sponsorship-benefit__title">Influence the Future of Immersive Technology</h3>
        <p>Participate in the conversations shaping future research directions, technology applications and the next generation of virtual, augmented and mixed reality.</p>
      </article>

      <article class="sponsorship-benefit">
        <span class="sponsorship-benefit__number" aria-hidden="true">5</span>
        <h3 class="sponsorship-benefit__title">Strengthen Your Brand</h3>
        <p>Increase your organisation's visibility before, during and beyond IEEE VR 2027 through sponsorship, exhibition and promotional opportunities.</p>
      </article>
    </div>

    <aside class="sponsorship-advantage" aria-labelledby="the-ieee-advantage">
      <h3 id="the-ieee-advantage">The IEEE Advantage</h3>
      <p>Align your organisation with an IEEE-sponsored conference and benefit from the credibility, international reach and professional recognition associated with one of the world's leading technology organisations.</p>
    </aside>
  </section>

  <section class="sponsorship-section sponsorship-feature" aria-labelledby="sponsorship-and-exhibition-opportunities">
    <div class="sponsorship-feature__copy">
      <h2 class="sponsorship-section__title" id="sponsorship-and-exhibition-opportunities">Sponsorship and Exhibition Opportunities</h2>
      <p>The IEEE VR 2027 Sponsorship and Exhibition Prospectus provides a range of opportunities designed to suit different organisational objectives and levels of participation.</p>
      <p>Whether your priority is brand visibility, technology demonstration, recruitment, networking or direct engagement with the IEEE VR community, our team can work with you to identify the opportunities that best support your objectives.</p>
    </div>
    <img class="sponsorship-feature__image" src="{{ '/assets/images/sponsors/2027/exhibition-stand.jpg' | relative_url }}" width="1800" height="1200" alt="Delegates networking around an exhibition stand" loading="lazy">
  </section>

  <section class="sponsorship-section" aria-labelledby="lets-talk">
    <div class="sponsorship-talk">
      <h2 class="sponsorship-section__title" id="lets-talk">Let's Talk</h2>
      <p>Not sure which opportunity is right for your organisation?</p>
      <p>We would be pleased to discuss your objectives and help identify a sponsorship or exhibition opportunity that delivers meaningful value for your organisation.</p>
    </div>
  </section>

  <section class="sponsorship-section" aria-labelledby="partner-with-us">
    <div class="sponsorship-contact">
      <div>
        <h2 class="sponsorship-section__title" id="partner-with-us">Partner with Us</h2>
        <p>For further information or to discuss sponsorship and exhibition opportunities, please contact:</p>

        <address class="sponsorship-contact__details">
          <p>IEEE VR 2027 Sponsorship and Exhibition<br>Sales Contact</p>
          <p><strong>Emma Bowyer</strong><br>IEEE VR 2027 Sponsorship &amp; Exhibition Director</p>
          <p>Tel: <a href="tel:+61292545000">02 9254 5000</a><br>E: <a href="mailto:emmab@icmsaust.com.au">emmab@icmsaust.com.au</a></p>
          <a class="sponsorship-contact__button" href="mailto:emmab@icmsaust.com.au">CONTACT EMMA</a>
        </address>
      </div>
      <img class="sponsorship-contact__image" src="{{ '/assets/images/sponsors/2027/exhibition-vr-bhp.jpg' | relative_url }}" width="1024" height="683" alt="An exhibition delegate trying a virtual reality headset" loading="lazy">
    </div>
  </section>
</div>
