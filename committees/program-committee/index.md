---
layout: ieeevr-default
title: "Program Committee"
subtitle: "IEEE VR 2026"
title_separator: "|"
---
<p style="width:100%; margin: 30px auto; padding: 20px 0; text-align:center; font-size:1rem; border-radius: 30px; background-color: #f3f3f3">This content is currently being updated.</p>
<div style="display:none">
    <!---- vr24a_committee_without_emails.csv had to be saved as CSV UTC-8, the headers had to have spaces removed, and an ID column needed to be created as the first column (otherwise the firstname shows as blank).---->
    <h1> IEEE VR 2025 Reviewers for Papers </h1>
    <h2>Associate Program Chairs</h2>
    <ul>
        {% for member in site.data.vr_program_committee_without_emails %} 
            {%if member.Subcommittee == "Associate Program Chairs"%}<li><strong>{{ member.Familyname }}, {{ member.Firstname }} {%if member.Middleinitial %}{{ member.Middleinitial }} {% endif %}</strong> - <i>{{ member.Affil1Institution }}, {{ member.Affil1Country }}</i></li>{% endif %}
        {% endfor %} 
    </ul>
	<h2>Super Committee</h2>
    <ul>
        {% for member in site.data.vr_program_committee_without_emails %} 
            {%if member.Subcommittee == "Supercommittee"%}<li><strong>{{ member.Familyname }}, {{ member.Firstname }} {%if member.Middleinitial %}{{ member.Middleinitial }} {% endif %}</strong> - <i>{{ member.Affil1Institution }}, {{ member.Affil1Country }}</i></li>{% endif %}
        {% endfor %} 
    </ul>
	<h2>Committee</h2>
    <ul>
        {% for member in site.data.vr_program_committee_without_emails %} 
            {%if member.Subcommittee == "Committee"%}<li><strong>{{ member.Familyname }}, {{ member.Firstname }} {%if member.Middleinitial %}{{ member.Middleinitial }} {% endif %}</strong> - <i>{{ member.Affil1Institution }}, {{ member.Affil1Country }}</i></li>{% endif %}
        {% endfor %} 
    </ul>
</div>
