---
layout: ieeevr-default
title: "Conference Committee"
title_separator: "|"
published: true
---

<div class="committee-page" markdown="1">

# Conference Committee

{% assign sections_list = site.data.organizing_committee | map: "section" | uniq %}
{% for section_name in sections_list %}
  {% if section_name != "" %}
    {% include committee-section.html section=section_name %}
  {% endif %}
{% endfor %}

</div>
