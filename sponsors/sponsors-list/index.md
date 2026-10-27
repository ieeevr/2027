---
layout: ieeevr-default
title: "Sponsors"
title_separator: "|"
published: true
---

<style>
  .sponsors-page {
    margin: 0 auto;
    max-width: 76rem;
    padding: 0 0 2rem;
    color: #25233a;
  }

  .sponsors-page h1 {
    color: #171447;
  }

  .sponsor-tier {
    margin: 2.5rem 0;
  }

  .sponsor-tier__title {
    font-size: 1.4rem;
    font-weight: 800;
    color: #171447;
    border-bottom: 2px solid #d9d9e6;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .sponsor-tier__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
  }

  .sponsor-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 1px solid #d9d9e6;
    border-radius: 0.75rem;
    padding: 1.25rem;
    width: 220px;
    height: 140px;
  }

  .sponsor-logo img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
  }

  .sponsor-logo--zoom {
    padding: 0.4rem;
  }
</style>

<section class="sponsors-page" itemprop="text">
  <h1>Sponsors</h1>
  <p>IEEE VR 2027 is grateful to the following organizations for their support.</p>

  {% assign tier_order = "Platinum,Gold,Silver,Bronze" | split: "," %}
  {% for tier in tier_order %}
    {% assign tier_sponsors = site.data.sponsors | where: "Tier", tier %}
    {% if tier_sponsors.size > 0 %}
      <div class="sponsor-tier">
        <h2 class="sponsor-tier__title">{{ tier }}</h2>
        <div class="sponsor-tier__grid">
          {% for s in tier_sponsors %}
            <div class="sponsor-logo{% if s.Name == "University of Melbourne" %} sponsor-logo--zoom{% endif %}">
              {% assign logo_path = "/assets/images/sponsors/2027/" | append: s.Logo | relative_url %}
              {% if s.URL and s.URL != "" %}
                <a href="{{ s.URL }}" target="_blank" rel="noopener noreferrer">
                  <img src="{{ logo_path }}" alt="{{ s.Name }}">
                </a>
              {% else %}
                <img src="{{ logo_path }}" alt="{{ s.Name }}">
              {% endif %}
            </div>
          {% endfor %}
        </div>
      </div>
    {% endif %}
  {% endfor %}
</section>
