---
layout: ieeevr-default
title: "Reviewers"
subtitle: "IEEE VR 2026"
title_separator: "|"
---
<p style="width:100%; margin: 30px auto; padding: 20px 0; text-align:center; font-size:1rem; border-radius: 30px; background-color: #f3f3f3">This content is currently being updated.</p>
<div style="display:none">
    <h1> IEEE VR 2025 Reviewers for Papers </h1>
    <table class="styled-table valignTop small">
        <colgroup>
        <col span="1" style="width: 33.3%;">
        <col span="1" style="width: 33.3%;">
        <col span="1" style="width: 33.3%;">
        </colgroup>
        {% tablerow reviewer in site.data.reviewers cols:3 %}
            <strong>{{ reviewer.name }}</strong>{%if reviewer.affiliation %} - <i>{{ reviewer.affiliation }}</i>{% endif %}
        {% endtablerow %}
    </table>    
    <h1> IEEE VR 2025 Reviewers for Posters </h1>
    <table class="styled-table valignTop small">
        <colgroup>
        <col span="1" style="width: 33.3%;">
        <col span="1" style="width: 33.3%;">
        <col span="1" style="width: 33.3%;">
        </colgroup>
        {% tablerow reviewer in site.data.reviewersPosters cols:3 %}
            <strong>{{ reviewer.Familyname }}, {{ reviewer.Firstname }} </strong> - <i>{{ reviewer.Lab }} {{ reviewer.Institution }}, {{ reviewer.Country }}</i>
        {% endtablerow %}
    </table>
</div>
