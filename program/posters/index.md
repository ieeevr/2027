---
layout: ieeevr-default
title: "Posters"
subtitle: "IEEE VR 2024"
title_separator: "|"
---

<h1>Posters</h1>
<div>
    <table class="styled-table">
        <tr>
            <th colspan="3">Posters (Timezone: Orlando, Florida USA UTC-4)</th>
        </tr>
        <tr>
            <td class="medLarge"><a href="#P1">Monday Posters</a></td>
            <td class="medLarge">Sorcerer's Apprentice Ballroom</td>
            <td class="medLarge">Talk with the authors: 9:45&#8209;10:15, 13:00&#8209;13:30, 15:00&#8209;15:30, 17:00&#8209;17:30</td>
        </tr>
        <tr>
            <td class="medLarge"><a href="#P2">Tuesday Posters</a></td>
            <td class="medLarge">Sorcerer's Apprentice Ballroom</td>
            <td class="medLarge">Talk with the authors: 9:45&#8209;10:15, 13:00&#8209;13:30, 15:00&#8209;15:30, 17:00&#8209;17:30</td>
        </tr>
        <tr>
            <td class="medLarge"><a href="#P3">Wednesday Posters</a></td>
            <td class="medLarge">Sorcerer's Apprentice Ballroom</td>
            <td class="medLarge">Talk with the authors: 9:45&#8209;10:15, 13:00&#8209;13:30, 15:00&#8209;15:30, 17:00&#8209;17:30</td>
        </tr>
    </table>
</div>

<div>    
    <h2 id="P1" class="pink" style="padding-top:25px;">Monday Posters</h2>  
    <p class="small">Talk with the authors: 9:45&#8209;10:15, 13:00&#8209;13:30, 15:00&#8209;15:30, 17:00&#8209;17:30, Room: Sorcerer's Apprentice Ballroom</p>  
    {% for poster in site.data.mondayPosters %}
        <div style="margin-left: 25px;">
            {% for a in site.data.awards %}  
                {% if a.type == 'Poster' %}
                    {% if a.id == poster.id %}
                        {% if a.award == 'Best Poster' %}
                            <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#poster-best"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Poster Award" alt="Best Poster Award"></a></div>
                        {% endif %}                                                    
                        {% if a.award == "Honorable Mention" %}
                            <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#poster-honorable"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Poster Honorable Mention" alt="Best Poster Honorable Mention"></a></div>
                        {% endif %}
                    {% endif %}
                {% endif %}
            {% endfor %}            
            <p class="medLarge" id="{{ poster.id }}" style="margin-bottom: 0.3em;">
                <strong>{{ poster.title }} (ID:&nbsp;{{ poster.id }})</strong>
            </p>
            <p class="font_70" >
                {% assign authornames = poster.authors | split: ";" %}
                {% for name in authornames %}
                    {% assign barename = name | split: ":" %}
                    {% for n in barename %}
                        {% if n == barename.last %}
                            <i>{{ n | strip }}{% if name == authornames.last %}{% else %};{% endif %}</i>
                        {% else %}                            
                            <span class="bold">{{ n | strip }},</span>
                        {% endif %}
                    {% endfor %} 
                {% endfor %}
            </p>
            {% if poster.abstract %}
                <div id="{{ poster.id }}" class="wrap-collabsible"> <input id="collapsibleabstract{{ poster.id }}" class="toggle" type="checkbox"> 
                    <label for="collapsibleabstract{{ poster.id }}" class="lbl-toggle">Abstract</label>
                    <div class="collapsible-content">
                        <div class="content-inner">
                            <p>{{ poster.abstract }}</p>
                        </div>
                    </div>
                </div>   
            {% endif %}
        </div>
    {% endfor %}
</div>
<div>
    <h2 id="P2" class="pink" style="padding-top:25px;">Tuesday Posters</h2>
    <p class="small">Talk with the authors: 9:45&#8209;10:15, 13:00&#8209;13:30, 15:00&#8209;15:30, 17:00&#8209;17:30, Room: Sorcerer's Apprentice Ballroom</p>  
    {% for poster in site.data.tuesdayPosters %}
        <div style="margin-left: 25px;">
            {% for a in site.data.awards %}  
                {% if a.type == 'Poster' %}
                    {% if a.id == poster.id %}
                        {% if a.award == 'Best Poster' %}
                            <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#poster-best"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Poster Award" alt="Best Poster Award"></a></div>
                        {% endif %}                                                    
                        {% if a.award == "Honorable Mention" %}
                            <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#poster-honorable"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Poster Honorable Mention" alt="Best Poster Honorable Mention"></a></div>
                        {% endif %}
                    {% endif %}
                {% endif %}
            {% endfor %}            
            <p class="medLarge" id="{{ poster.id }}" style="margin-bottom: 0.3em;">
                <strong>{{ poster.title }} (ID:&nbsp;{{ poster.id }})</strong>
            </p>
            <p class="font_70" >
                {% assign authornames = poster.authors | split: ";" %}
                {% for name in authornames %}
                    {% assign barename = name | split: ":" %}
                    {% for n in barename %}
                        {% if n == barename.last %}
                            <i>{{ n | strip }}{% if name == authornames.last %}{% else %};{% endif %}</i>
                        {% else %}                            
                            <span class="bold">{{ n | strip }},</span>
                        {% endif %}
                    {% endfor %} 
                {% endfor %}
            </p>
            {% if poster.abstract %}
                <div id="{{ poster.id }}" class="wrap-collabsible"> <input id="collapsibleabstract{{ poster.id }}" class="toggle" type="checkbox"> 
                    <label for="collapsibleabstract{{ poster.id }}" class="lbl-toggle">Abstract</label>
                    <div class="collapsible-content">
                        <div class="content-inner">
                            <p>{{ poster.abstract }}</p>
                        </div>
                    </div>
                </div>   
            {% endif %}
        </div>
    {% endfor %}
</div>
<div>
    <h2 id="P3" class="pink" style="padding-top:25px;">Wednesday Posters</h2>
    <p class="small">Talk with the authors: 9:45&#8209;10:15, 13:00&#8209;13:30, 15:00&#8209;15:30, 17:00&#8209;17:30, Room: Sorcerer's Apprentice Ballroom</p>  
    {% for poster in site.data.wednesdayPosters %}
        <div style="margin-left: 25px;">
            {% for a in site.data.awards %}  
                {% if a.type == 'Poster' %}
                    {% if a.id == poster.id %}
                        {% if a.award == 'Best Poster' %}
                            <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#poster-best"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Poster Award" alt="Best Poster Award"></a></div>
                        {% endif %}                                                    
                        {% if a.award == "Honorable Mention" %}
                            <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#poster-honorable"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Poster Honorable Mention" alt="Best Poster Honorable Mention"></a></div>
                        {% endif %}
                    {% endif %}
                {% endif %}
            {% endfor %}            
            <p class="medLarge" id="{{ poster.id }}" style="margin-bottom: 0.3em;">
                <strong>{{ poster.title }} (ID:&nbsp;{{ poster.id }})</strong>
            </p>
            <p class="font_70" >
                {% assign authornames = poster.authors | split: ";" %}
                {% for name in authornames %}
                    {% assign barename = name | split: ":" %}
                    {% for n in barename %}
                        {% if n == barename.last %}
                            <i>{{ n | strip }}{% if name == authornames.last %}{% else %};{% endif %}</i>
                        {% else %}                            
                            <span class="bold">{{ n | strip }},</span>
                        {% endif %}
                    {% endfor %} 
                {% endfor %}
            </p>
            {% if poster.abstract %}
                <div id="{{ poster.id }}" class="wrap-collabsible"> <input id="collapsibleabstract{{ poster.id }}" class="toggle" type="checkbox"> 
                    <label for="collapsibleabstract{{ poster.id }}" class="lbl-toggle">Abstract</label>
                    <div class="collapsible-content">
                        <div class="content-inner">
                            <p>{{ poster.abstract }}</p>
                        </div>
                    </div>
                </div>   
            {% endif %}
        </div>
    {% endfor %}
</div>