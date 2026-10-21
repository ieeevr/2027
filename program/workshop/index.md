---
layout: ieeevr-default
title: "Workshops"
subtitle: "IEEE VR 2027"
title_separator: "|"
published: true
---
<link rel="stylesheet" href="style.css?version=2027-2">
<h1 class="big_title">Workshops</h1>
<section itemprop="text">
  <div class="new_workshop">
    <section class="accordion-wrap">
      <h2 class="accordion-title">Workshop times and locations will be announced soon.</h2>
      <ul class="accordion-list">
        {% assign workshops = site.data.accepted_workshops | sort_natural: "ACRONYM" %}
        {% for w in workshops %}
        {% assign organiser = w.Principal_Organizer | strip %}
        {% assign website = w.Workshop_URL | strip %}
        {% assign wtime = w.Time | strip %}
        {% assign wlocation = w.Location | strip %}
        {% if wtime == "" %}{% assign wtime = "TBA" %}{% endif %}
        {% if wlocation == "" %}{% assign wlocation = "TBA" %}{% endif %}
        <li class="accordion-item">
          <button class="accordion-header">
            <div class="accordion-text">
              <div>{{ w.ACRONYM | strip }}</div>
              <div>{{ w.Workshop_Title | strip }}</div>
              <div>{{ wtime }}</div>
              <div>{{ wlocation }}</div>
            </div>
            <svg class="accordion-icon" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
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
<script src="script.js" type="text/javascript"></script>
