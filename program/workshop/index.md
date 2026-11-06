---
layout: ieeevr-default
title: "Workshops"
subtitle: "IEEE VR 2027"
title_separator: "|"
published: true
---
<link rel="stylesheet" href="style.css?version=2027-7">
<h1 class="big_title">Workshops</h1>
<section itemprop="text">
  <div class="new_workshop">
    <section class="accordion-wrap">
      <button class="accordion-title day-toggle" type="button" aria-expanded="true" aria-controls="saturday-workshops">
        <span>Day: Saturday, February 27. Locations will be announced soon.</span>
      </button>
      <ul class="accordion-list day-workshops" id="saturday-workshops">
      {% assign workshops = site.data.accepted_workshops | where_exp: "w", "w.Time contains 'Feb 27'" %}
      {% for w in workshops %}
        {% assign organiser = w.Principal_Organizer | strip %}
        {% assign website = w.Workshop_URL | strip %}
        {% assign wtime = w.Time | strip %}
        {% assign wlocation = w.Location | strip %}
        {% if wtime == "" %}{% assign wtime = "TBA" %}{% endif %}
        {% if wlocation == "" %}{% assign wlocation = "TBA" %}{% endif %}
        <li class="accordion-item">
          <button class="accordion-header" type="button" aria-expanded="false">
            <div class="accordion-text">
              <div>{{ w.ACRONYM | strip }}</div>
              <div>{{ w.Workshop_Title | strip }}</div>
              <div>{{ wtime }}</div>
              <div>{{ wlocation }}</div>
            </div>
            <svg class="accordion-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg>
          </button>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              {% if organiser != "" %}
              <dl>
                <dt>Principal Organiser{% if organiser contains " and " %}s{% endif %}</dt>
                <dd>{{ organiser }}</dd>
              </dl>
              {% endif %}
              {% if website != "" %}
              <dl>
                <dt>Website</dt>
                <dd><a href="{{ website }}" target="_blank" rel="noopener noreferrer">{{ website }}</a></dd>
              </dl>
              {% endif %}
            </div>
          </div>
        </li>
      {% endfor %}
      </ul>
    </section>
    <section class="accordion-wrap">
      <button class="accordion-title day-toggle" type="button" aria-expanded="true" aria-controls="sunday-workshops">
        <span>Day: Sunday, February 28. Locations will be announced soon.</span>
      </button>
      <ul class="accordion-list day-workshops" id="sunday-workshops">
      {% assign workshops = site.data.accepted_workshops | where_exp: "w", "w.Time contains 'Feb 28'" %}
      {% for w in workshops %}
        {% assign organiser = w.Principal_Organizer | strip %}
        {% assign website = w.Workshop_URL | strip %}
        {% assign wtime = w.Time | strip %}
        {% assign wlocation = w.Location | strip %}
        {% if wtime == "" %}{% assign wtime = "TBA" %}{% endif %}
        {% if wlocation == "" %}{% assign wlocation = "TBA" %}{% endif %}
        <li class="accordion-item">
          <button class="accordion-header" type="button" aria-expanded="false">
            <div class="accordion-text">
              <div>{{ w.ACRONYM | strip }}</div>
              <div>{{ w.Workshop_Title | strip }}</div>
              <div>{{ wtime }}</div>
              <div>{{ wlocation }}</div>
            </div>
            <svg class="accordion-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg>
          </button>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              {% if organiser != "" %}
              <dl>
                <dt>Principal Organiser{% if organiser contains " and " %}s{% endif %}</dt>
                <dd>{{ organiser }}</dd>
              </dl>
              {% endif %}
              {% if website != "" %}
              <dl>
                <dt>Website</dt>
                <dd><a href="{{ website }}" target="_blank" rel="noopener noreferrer">{{ website }}</a></dd>
              </dl>
              {% endif %}
            </div>
          </div>
        </li>
      {% endfor %}
      </ul>
    </section>
  </div>
</section>
<script src="script.js?version=2027-5" type="text/javascript"></script>
