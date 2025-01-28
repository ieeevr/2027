---
layout: ieeevr-default
title: "Workshops"
subtitle: "IEEE VR 2025"
title_separator: "|"
---

<div>
    <h1 id="call-for-workshop-papers"> Workshops </h1>
      {% for day in site.data.workshopdays %}
        <div>
            <div>
                <table class="styled-table">
                    <tr>
                        <th colspan="4">Day: {{ day.day }} (Timezone: {{ day.timezone }})</th>
                    </tr>                   
                    {% assign ws = site.data.workshops | sort: "id" %}
                    {% for workshop in ws %}
                        {% if workshop.day == day.day %}
                            <tr>
                                <td class="medLarge"><a href="#{{ workshop.id }}">{{ workshop.id }}</a></td>
                                <td class="medLarge"><a href="#{{ workshop.id }}">{{ workshop.title }}</a></td>
                                <td class="medLarge" class="text-nowrap">{{ workshop.starttime }}-{{ workshop.endtime }}</td>
                                <td class="medLarge" class="text-nowrap">{{ workshop.room }}</td>
                            </tr>
                        {% endif %}
                    {% endfor %}
                </table>
            </div>
        <div>
    {% endfor %}       
    <div>
        {% for workshop in ws %}
            <h2 class="padding_top_xsmall" id="{{ workshop.id }}">Workshop: {{ workshop.title }} ({{ workshop.id }})</h2> 
            <p class="small">{{ workshop.day }}, {{ workshop.starttime }}-{{ workshop.endtime }} ({{ workshop.timezone }}), Room: {{ workshop.room }}</p>                
            <div class="padding_left_medium">
                {% if workshop.url %}
                    <med><b style="color: black;">Website:</b> <a href="{{ workshop.url }}" target="_blank">{{ workshop.url }}</a></med><br />
                {% endif %}
                {% if workshop.discordurl %}
                    <med><b style="color: black;">Discord URL:</b> <a href="{{ workshop.discordurl }}" target="_blank">{{ workshop.discordurl }}</a></med><br />
                {% endif %}
                {% if workshop.slideurl %}
                    <med><b style="color: black;">Slides:</b> <a href="{{ workshop.slideurl }}" target="_blank">{{ workshop.slideurl }}</a></med><br />
                {% endif %}
                {% if workshop.organiser %}
                    <med><b style="color: black;">Principal Organiser:</b> {{ workshop.organiser }}</med><br />
                {% endif %}
                {% if workshop.videourl %}
                    <div class="video-container">
                        <iframe src="{{workshop.videourl}}" title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                {% endif %}                
                {% if workshop.abstract %}
                    <div id="{{ workshop.id }}" class="wrap-collabsible"> <input id="collapsible{{ workshop.id }}" class="toggle" type="checkbox"> <label for="collapsible{{ workshop.id }}" class="lbl-toggle">Workshop Description</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ workshop.abstract }}</p>
                            </div>
                        </div>
                    </div>
                {% endif %}                      
                {% if workshop.agenda %}
                    <div class="content-inner">
                        <p><a href="https://ieeevr.org/2025/assets/{{ workshop.agenda }}" target="_blank">Agenda</a></p>
                    </div>
                {% endif %}
                            
                <!-- Only show the 'workshop papers' toggle if there's actually something to show -->
                {% assign papers_in_session = false %}
                {% for paper in site.data.workshoppapers %}
                    {% if workshop.id == paper.workshop %}
                        {% assign papers_in_session = true %}
                    {% endif %}
                {% endfor %}

                <!-- Show a hideable list of all papers in this workshop -->
                {% if papers_in_session == true %}
                    <div id="{{ workshop.id }}2" class="wrap-collabsible"> 
                        <input id="collapsible{{ workshop.id }}2" class="toggle" type="checkbox"> 
                        <label for="collapsible{{ workshop.id }}2" class="lbl-toggle">Workshop Papers</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                {% for paper in site.data.workshoppapers %}
                                    {% if workshop.id == paper.workshop %}
                                        <h4 id="{{ paper.id }}">{{ paper.title }}</h4>
                                        {% if paper.authors %}
                                            <p><i>{{ paper.authors }}</i></p>
                                        {% else %}
                                            <p><i>Author information coming soon</i></p>
                                        {% endif %}
                                        {% if paper.url %}
                                            <p><med>URL: <a href="{{ paper.url }}" target="_blank">{{ paper.url }}</a></med></p>
                                        {% endif %}
                                        {% if paper.abstract %}
                                            <div id="{{ paper.id }}" class="wrap-collabsible"> <input id="collapsible{{ paper.id }}" class="toggle" type="checkbox"> <label for="collapsible{{ paper.id }}" class="lbl-toggle">Abstract</label>
                                                <div class="collapsible-content">
                                                    <div class="content-inner">
                                                        <p>{{ paper.abstract }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        {% endif %}
                                    {% endif %}
                                {% endfor %}
                            </div>
                        </div>
                    </div>
                {% endif %}  
                </div>         
        {% endfor %}
