---
layout: ieeevr-default
title: "Tutorials"
subtitle: "IEEE VR 2024"
title_separator: "|"
---

<p style="width:100%; margin: 30px auto; padding: 20px 0; text-align:center; font-size:1rem; border-radius: 30px; background-color: #f3f3f3">This content is currently being updated.</p>
<div style="display:none">
    <div>
    <table class="styled-table">
        <tr>
             <th colspan="4">Tutorials (Timezone: Saint-Malo France UTC+1)</th>
        </tr>
        {% for tutorial in site.data.tutorials %}
            <tr>
                <td class="medLarge"><a href="#{{ tutorial.id }}">{{ tutorial.title }}</a></td>
                <td class="medLarge" class="text-nowrap">{{ tutorial.day }}</td>
                <td class="medLarge" class="text-nowrap">{{ tutorial.starttime }}&#8209;{{ tutorial.endtime }}</td>                
                <td class="medLarge" class="text-nowrap">{{ tutorial.room }}</td>
            </tr>
        {% endfor %}
    </table>
</div>
<div>
    {% for tutorial in site.data.tutorials %}
        <div>
            <h2 id="{{ tutorial.id }}">{{ tutorial.name }}: {{ tutorial.title}}</h2>
            <p>
                {{ tutorial.day }}, {{ tutorial.starttime }}-{{ tutorial.endtime }} ({{ tutorial.timezone }}) Room: {{ tutorial.room }}
            </p>
            <p>
                <strong>Organizers</strong>
            </p>
            <p>
                {% assign authornames = tutorial.authorsfull | split: "|" %}
                {% for name in authornames %}
                    <span class='bold'>{{ name }} </span><br />
                {% endfor %}
            </p>
            {% if tutorial.summary  %}
                <strong>Summary</strong>
                {% assign sum = tutorial.summary | split: "|" %}
                {% for para in sum %}
                    <p>
                        {{ para }} 
                    </p>
                {% endfor %}
            {% endif %}
            {% assign techl = tutorial.techlevel | split: "|" %}
            {% if tutorial.techlevel %}
                <strong>Technical Level</strong>
                {% for parat in techl %}
                    <p>
                        {{ parat }} 
                    </p>
                {% endfor %}
            {% endif %}
            {% assign aud= tutorial.audience | split: "|" %}
            {% if tutorial.audience %}
                <strong>Intended Audience</strong>
                {% for paraa in aud %}
                    <p>
                        {{ paraa }} 
                    </p>
                {% endfor %}
            {% endif %}
            {% assign v= tutorial.value | split: "|" %}
            {% if tutorial.value %}
                <strong>Value</strong>
                {% for parav in v %}
                    <p>
                        {{ parav }} 
                    </p>
                {% endfor %}
            {% endif %}
        </div>
    {% endfor %}
</div>
</div>
