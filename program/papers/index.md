---
layout: ieeevr-default
title: "Papers"
subtitle: "IEEE VR 2024"
title_separator: "|"
---
<h1>Papers</h1>
<div>
    {% for day in site.data.days %}
        <div>
            <div>
                <table class="styled-table">
                    <tr>
                        <th colspan="4">{{ day.day }} (Timezone: {{ day.timezone }})</th>
                    </tr>
                    {% for session in site.data.sessions %}
                        {% if session.day == day.day %}
                            <tr>
                                <td class="medLarge"><a href="#{{ session.id }}">{{ session.id }}</a></td>
                                <td class="medLarge"><a href="#{{ session.id }}">{{ session.name }}</a></td>
                                <td class="medLarge">{{ session.starttime }}&#8209;{{ session.endtime }}</td>
                                <td class="medLarge" class="text-nowrap">{{ session.room }}</td>
                            </tr>
                        {% endif %}
                    {% endfor %}
                </table>
            </div>
        <div>
    {% endfor %} 
</div>
<div>
    {% for day in site.data.days %}
        {% for session in site.data.sessions %}
            {% if session.day == day.day %}
                <h2 id="{{ session.id }}" class="pink" style="padding-top:25px;">Session: {{ session.name }} ({{ session.id }})</h2>
                <p class="small">
                    <span class="bold">Date & Time:</span> {{ session.day }}, {{ session.starttime }}-{{ session.endtime }} ({{ session.timezone }})<br />
                    <span class="bold">Room:</span> {{ session.room }}
                    {% if session.sessionchair %}
                        <br /><span class="bold">Session Chair:</span> {{ session.sessionchair }}
                    {% endif %}
                </p>
                {% for paper in site.data.papers %}                 
                    {% if session.id == paper.session %}                            
                        {% if paper.type == 'Journal' %}
                            {% assign source = site.data.journalpapers %}
                        {% endif %}
                        {% if paper.type == 'Conference' %}
                            {% assign source = site.data.conferencepapers %}
                        {% endif %}
                        {% if paper.type == 'Invited Journal' %}
                            {% assign source = site.data.invitedjournalpapers %}
                        {% endif %}
                        {% for p in source %}
                            {% if p.id == paper.id %}                                        
                                {% for a in site.data.awards %}  
                                    {% if a.type == paper.type %}
                                        {% if a.id == paper.id %}
                                            {% if a.award == "Best Paper" %}
                                                <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#paper-best"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Paper Award" alt="Best Paper Award"></a></div>
                                            {% endif %}                                                    
                                            {% if a.award == "Honorable Mention" %}
                                                <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#paper-honorable"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Paper Honorable Mention" alt="Best Paper Honorable Mention"></a></div>
                                            {% endif %}
                                        {% endif %}
                                    {% endif %}
                                    {% if a.type == 'Presentation' %}
                                        {% if a.id == paper.id %}
                                            {% if a.award == "Best Presentation" %}
                                                <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#presentation-best"><img src= "{{ "/assets/images/awards/best-star.png" | relative_url }}" title="Best Presentation Award" alt="Best Presentation Award"></a></div>
                                            {% endif %}                                                    
                                            {% if a.award == "Honorable Mention" %}
                                                <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#presentation-honorable"><img src= "{{ "/assets/images/awards/hm2.png" | relative_url }}" title="Best Presentation Honorable Mention" alt="Best Presentation Honorable Mention"></a></div>
                                            {% endif %}
                                        {% endif %}
                                    {% endif %}
                                {% endfor %}
                                <p class="medLarge" id="{{ paper.id }}" style="margin-bottom: 0.3em;">
                                    <strong>{{ paper.title }} ({{ paper.type }}: {{ paper.id }})</strong>
                                </p>
                                <p class="font_70" >
                                    {% assign authornames = p.authors | split: ";" %}
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
                                {% if p.abstract %}
                                    <div id="{{ paper.id }}" class="wrap-collabsible"> <input id="collapsible{{ paper.id }}" class="toggle" type="checkbox"> 
                                        <label for="collapsible{{ paper.id }}" class="lbl-toggle">Abstract</label>
                                        <div class="collapsible-content">
                                            <div class="content-inner">
                                                <p>{{ p.abstract }}</p>
                                            </div>
                                        </div>
                                    </div>                                                                     
                                {% endif %}
                            {% endif %}
                        {% endfor %}
                    {% endif %}
                {% endfor %}
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>
