---
layout: ieeevr-default
title: "Reviewers"
subtitle: "IEEE VR 2024"
title_separator: "|"
---

<div>
    <h1> IEEE VR 2023 Reviewers for Papers </h1>
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
</div>
