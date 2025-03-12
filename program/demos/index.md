---
layout: ieeevr-default
title: "Research Demos"
subtitle: "IEEE VR 2025"
title_separator: "|"
---

<!--<div>
    <table class="styled-table">
        <tr>
            <th colspan="2">Research Demos</th>
        </tr>        
        {% assign i = 0 %}
        {% for demo in site.data.demos %}
            {% assign i = i | plus:1 %}
            <tr>
                <td>
                    {% for a in site.data.awards %}  
                        {% if a.type == 'Demo' %}
                            {% if a.id == demo.demoid %}
                                {% if a.award == 'Best Demo' %}
                                    <a href="{{ "/awards/conference-awards" | relative_url }}#demo-best"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Research Demo Award" alt="Best Research Demo Award"></a>
                                {% endif %}                                                    
                                {% if a.award == "Honorable Mention" %}
                                    <a href="{{ "/awards/conference-awards" | relative_url }}#demo-honorable"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Research Demo Honorable Mention" alt="Best Research Demo Honorable Mention"></a>
                                {% endif %}
                            {% endif %}
                        {% endif %}
                    {% endfor %}
                </td>
                <td class="medLarge"><a href="#{{ demo.demoid }}">{{ demo.title }} (ID:&nbsp;{{ demo.demoid }})</a></td>
            </tr>
        {% endfor %}
    </table>
</div>-->
<h2>Research Demos</h2>
<p>
    <table class="program-table">
        <thead>
            <tr>
                <th colspan="4">Research&nbsp;Demos&nbsp;Schedule (Timezone: Saint-Malo, France UTC+1)</th>
            </tr>
        </thead>
        <tbody> 
            {% for demodays in site.data.scheduleDemo %}
             <tr>
                <td> {{ demodays.name }}</td>
                <td> {{ demodays.day }}</td>
                <td> {{ demodays.sessions }}</td>
                {% if demodays.hall%} <td> Hall: {{ demodays.hall }}</td> {%else%} <td></td>{%endif%}
            </tr>     
            {% endfor %}       
        </tbody>
    </table>
</p>
<div>
    {% assign j = 0 %}
    {% for demo in site.data.demos %}
        {% assign j = j | plus:1 %}
        {% for a in site.data.awards %}  
            {% if a.type == 'Demo' %}
                {% if a.id == demo.demoid %}
                    {% if a.award == 'Best Demo' %}
                        <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#demo-best"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Research Demo Award" alt="Best Research Demo Award"></a></div>
                    {% endif %}                                                    
                    {% if a.award == "Honorable Mention" %}
                        <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#demo-honorable"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Research Demo Honorable Mention" alt="Best Research Demo Honorable Mention"></a></div>
                    {% endif %}
                {% endif %}
            {% endif %}
        {% endfor %}
        <p class="medLarge" id="{{ demo.title }}" style="margin-bottom: 0.3em;">
            <strong>{{ demo.title }} </strong><!--(ID:{{ demo.demoid }})-->
        </p>
        <p>
        Hall: {{ demo.hall}}, Booth ID : {{demo.booth}}
        </p>
        <p class="font_70" >                
            {% if demo.author1first %}                         
                <span class="bold">{{ demo.author1first }} {{demo.author1last }},</span> <i> {{ demo.author1institution}}</i>
            {% endif %}                
            {% if demo.author2first %}                         
                ;<span class="bold"> {{ demo.author2first }} {{ demo.author2last }},</span> <i> {{ demo.author2institution}}</i>
            {% endif %}           
            {% if demo.author3first %}                         
                ;<span class="bold"> {{ demo.author3first }} {{ demo.author3last }},</span> <i> {{ demo.author3institution}}</i>
            {% endif %}           
            {% if demo.author4first %}                         
                ;<span class="bold"> {{ demo.author4first }} {{ demo.author4last }},</span> <i> {{ demo.author4institution}}</i>
            {% endif %}           
            {% if demo.author5first %}                         
                ;<span class="bold"> {{ demo.author5first }} {{ demo.author5last }},</span> <i> {{ demo.author5institution}}</i>
            {% endif %}           
            {% if demo.author6first %}                         
                ;<span class="bold"> {{ demo.author6first }} {{ demo.author6last }},</span> <i> {{ demo.author6institution}}</i>
            {% endif %}           
            {% if demo.author7first %}                         
                ;<span class="bold"> {{ demo.author7first }} {{ demo.author7last }},</span> <i> {{ demo.author7institution}}</i>
            {% endif %}           
            {% if demo.author8first %}                         
                ;<span class="bold"> {{ demo.author8first }} {{ demo.author8last }},</span> <i> {{ demo.author8institution}}</i>
            {% endif %}           
            {% if demo.author9first %}                         
                ;<span class="bold"> {{ demo.author9first }} {{ demo.author9last }},</span> <i> {{ demo.author9institution}}</i>
            {% endif %}           
            {% if demo.author10first %}                         
                ;<span class="bold"> {{ demo.author10first }} {{ demo.author10last }},</span> <i> {{ demo.author10institution}}</i>
            {% endif %}           
            {% if demo.author11first %}                         
                ;<span class="bold"> {{ demo.author11first }} {{ demo.author11last }},</span> <i> {{ demo.author11institution}}</i>
            {% endif %}        
            {% if demo.author12first %}                         
                ;<span class="bold"> {{ demo.author12first }} {{ demo.author12last }},</span> <i> {{ demo.author12institution}}</i>
            {% endif %}  
        </p>
        {% if demo.abstract %}
            <div id="{{ demo.title }}" class="wrap-collabsible"> <input id="collapsible{{ demo.title }}" class="toggle" type="checkbox"> <label for="collapsible{{ demo.title }}" class="lbl-toggle">Abstract</label>
                <div class="collapsible-content">
                    <div class="content-inner">
                        <p>{{ demo.abstract }}</p>
                    </div>
                </div>
            </div>
        {% endif %}
        {% if demo.urlvimeo %}
            <div class="video-container">
                <iframe src="{{ demo.urlvimeo }}" loading="lazy" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>                     
        {% else %}
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/{{ demo.url }}" loading="lazy" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>     
        {% endif %}     
        {% if j == i %}
        {% else %}
            <hr style="margin: 25px 0 25px 0;">
        {% endif %}                       
    {% endfor %}
</div>


