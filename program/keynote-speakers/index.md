---
layout: ieeevr-default
title: "Keynote Speakers"
subtitle: "IEEE VR 2026"
title_separator: "|"
---



<!--article class="kspeaker-card" role="article"> <img class="kspeaker-photo" src="/assets/images/k_sp_01.png" >
  <div class="kspeaker-meta">
    <h2>Dr. Mar Gonzalez-Franco</h2>
    <div class="role">Research Manager, BIRD Lab, Google AR & VR</div>
    <div class="divider" aria-hidden="true"></div>
    <p>Dr. Mar Gonzalez-Franco is a distinguished Computer Scientist and Neuroscientist
      renowned for her work exploring the intersection of human and artificial
      intelligence. She currently leads the Blended Intelligence Research and Devices
      (BIRD) lab at Google AR & VR, where she focuses on augmenting human
      capabilities by blending innate intelligence with AI through immersive experiences.
      Her team has led the research for input and interactions to the new XR OS,
      Android XR, that recently launched with the Samsung Galaxy XR as the first
      XRAI OS. The work of the team on setting up the guidelines for inputs on XR
      Operating Systems was recently recognized with the SIGCHI Special Recognition
      in 2025.</p>
    <p>Previously, as a Principal Researcher at Microsoft Research, Dr. Gonzalez-Franco
      led the release of multiple Avatar libraries for research and the development of
      Avatars and Together Mode in Microsoft Teams, a feature recognized as one of
      Time Magazine's "Best Inventions of 2022." A pioneer in immersive AI and
      AR/VR, she holds over 40 patents and has authored more than 100 academic
      publications.</p>
  </div>
</article>



<article class="kspeaker-card" role="article"> <img class="kspeaker-photo" src="/assets/images/k_sp_02.png" >
  <div class="kspeaker-meta">
    <h2>Dr. Albert "Skip" Rizzo</h2>
    <div class="role">Director for Medical Virtual Reality, USC Institute for Creative Technologies
Research Professor, USC Davis School of Gerontology and USC Keck School of
Medicine Department of Psychiatry & Behavioral Sciences</div>
    <div class="divider" aria-hidden="true"></div>
    <p>Dr. Albert "Skip" Rizzo is a distinguished Clinical Psychologist and research
professor renowned for his work exploring the intersection of immersive
technologies and clinical healthcare. He currently leads the Medical Virtual Reality
(MedVR) lab at the USC Institute for Creative Technologies (ICT), where he
focuses on the design, development, and clinical application of VR for
psychological assessment, treatment, and rehabilitation.</p>
<p>Previously, as a key visionary in digital therapeutics, Dr. Rizzo led the
conceptualization and development of BraveMind, a groundbreaking Virtual
Reality Exposure Therapy system. This platform is recognized worldwide for its
transformative impact on treating Post-Traumatic Stress Disorder (PTSD) in military
service members. A pioneer in clinical VR and digital mental health, he has
authored hundreds of academic publications, holds several patents, and continues
to shape the future of immersive healthcare.</p>
  </div>
</article-->




<p style="width:100%; margin: 30px auto; padding: 20px 0; text-align:center; font-size:1rem; border-radius: 30px; background-color: #f3f3f3; display:none">This content is currently being updated.</p>



  
<div style="display:none">
    <h1>Keynote Speakers</h1>

    <table class="styled-table" style="display:none">
        <tr>
            <th colspan="3">Speakers</th>
        </tr>
        {% for keynote in site.data.keynotes %}
        <tr>
            <td><a href="#{{ keynote.id }}"><img src="{{ keynote.thumbnail }}" alt="Photo of {{ keynote.name }}"></a></td>
            <td><a href="#{{ keynote.id }}">{{ keynote.name }}</a></td>
            <td style="font-size: 0.875em;">{{ keynote.day }}, {{ keynote.start }} - {{ keynote.end }} ({{ keynote.timezone }})<br>Room: {{ keynote.room }}</td>
        </tr>
        {% endfor %}
    </table>
</div>
{% for keynote in site.data.keynotes %}
<br />
<div id="{{ keynote.id }}" style="display:none">
    <center><strong><big>{{ keynote.name }}</big></strong></center>
    <center>{{ keynote.affiliation }}</center>
    <br />
    <center><img src="{{ keynote.photo }}" alt="Photo of {{ keynote.name }}" width="50%"></center>
    <br />
    <center><big><strong>{{ keynote.title }}</strong></big></center>
    <center><small>{{ keynote.day }}, {{ keynote.start }} - {{ keynote.end }} ({{ keynote.timezone }})<br>Room: {{ keynote.room }}</small></center>
    {% if keynote.chair %}
    <center><small>Session Chair: <b style="font-family: 'Courier New', monospace; color: black;">{{ keynote.chair }}</b></small></center>
    {% endif %}    
    <p>
        <strong>Abstract</strong><br />
        {{ keynote.abstract }}
    </p>
    <p>
        <strong>Bio</strong><br />
        {{ keynote.bio }}
    </p>
    <hr>
</div>
{% endfor %}

