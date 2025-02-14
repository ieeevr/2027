---
layout: ieeevr-default
title: "Papers"
subtitle: "IEEE VR 2024"
title_separator: "|"
---
<h1>Papers</h1>
<div>
    <div>
        <div> 
            {% for day in site.data.days%}
                <table class="styled-table">  
                    <tr>
                        <th colspan="4">Paper presentations : {{ day.day }}</th>
                    </tr>    
                    {% for session in site.data.sessions %}
                        {% if day.day == session.day %}
                            <tr>
                                <td class="medLarge"><a href="#{{ session.id }}">{{ session.session }}&#8209;{{ session.room }}</a></td>
                                <td class="medLarge"><a href="#{{ session.id }}">{{ session.name }}</a></td>
                                {% for room in site.data.rooms %} 
                                    {% if room.session == session.session %}
                                        {% if room.room == session.room %}
                                            <td class="medLarge">{{ room.starttime }}&#8209;{{ room.endtime }}</td>
                                            <td class="medLarge" class="text-nowrap">{{ room.name }}</td>
                                        {% endif %}
                                    {% endif %}
                                {% endfor %}
                            </tr>
                        {% endif %}
                    {% endfor %}
                </table>
            {% endfor %}
        </div>
    <div>
</div>
<div>
    {% for session in site.data.sessions %}
            <h2 id="{{ session.id }}" class="pink" style="padding-top:25px;">Session: {{ session.name }} ({{ session.session }} - {{ session.room }})</h2>
            {% for paper in site.data.papers %}                 
                {% if session.session == paper.session %}
                    {% if paper.room == session.room %}   
                        <p class="medLarge" id="paper_{{ paper.id }}" style="margin-bottom: 0.3em;">
                            <b>{{ paper.title }}</b>
                        </p>
                        {% for acpaper in site.data.acceptedpaperstvcg %}  
                            {% if acpaper.ids == paper.ids  %} 
                                <div>
                                    <p class="font_70">
                                    {{ acpaper.contactauthor }}
                                    </p>
                                </div>
                                {% if acpaper.abstract %}
                                    <div id="{{ acpaper.ids }}" class="wrap-collabsible"> <input id="collapsibleabstract{{ acpaper.ids }}" class="toggle" type="checkbox"> 
                                        <label for="collapsibleabstract{{ acpaper.ids }}" class="lbl-toggle">Abstract</label>
                                        <div class="collapsible-content">
                                            <div class="content-inner">
                                                <p>{{ acpaper.abstract }}</p>
                                            </div>
                                        </div>
                                    </div>   
                                {% endif %}
                            {% endif %}
                        {% endfor %}
                        {% for acpaper in site.data.acceptedpapers %}    
                            {% if acpaper.ids == paper.ids  %} 
                                <div><p class="font_70">
                                {% assign authornames = acpaper.affiliations | split: "," %}
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
                                </p></div>
                                {% if acpaper.abstract %}
                                    <div id="{{ acpaper.ids }}" class="wrap-collabsible"> <input id="collapsibleabstract{{ acpaper.ids }}" class="toggle" type="checkbox"> 
                                        <label for="collapsibleabstract{{ acpaper.ids }}" class="lbl-toggle">Abstract</label>
                                        <div class="collapsible-content">
                                            <div class="content-inner">
                                                <p>{{ acpaper.abstract }}</p>
                                            </div>
                                        </div>
                                    </div>   
                                {% endif %}
                            {% endif %}
                        {% endfor %}
                    {% endif %}
                {% endif %}
            {% endfor %}
    {% endfor %}
</div>
