---
layout: ieeevr-default
title: "Reviewers"
subtitle: "IEEE VR 2025"
title_separator: "|"
---

<div>
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
