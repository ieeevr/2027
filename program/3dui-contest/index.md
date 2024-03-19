---
layout: ieeevr-default
title: "3DUI Contest Demos"
subtitle: "IEEE VR 2024"
title_separator: "|"
---
<h1>3DUI Contest Demos</h1>
  
<div>
    <table class="styled-table">
        <tr>
            <th>3DUI Contest Demos</th>
        </tr>
        {% assign i = 0 %}
        {% for entry in site.data.contest3dui %}
            {% assign i = i | plus:1 %}
            <tr>
                <td class="medLarge"><a href="#{{ entry.id }}" title="{{ entry.title }}">{{ entry.title }}</a></td>
            </tr>
        {% endfor %}
    </table>
</div>
<h2>Schedule</h2>
<p>
    <table class="program-table">
        <thead>
            <tr>
                <th colspan="4">3DUI&nbsp;Contest&nbsp;Schedule (Timezone: Orlando, Florida USA UTC-4)</th>
            </tr>
        </thead>
        <tbody>           
            <tr>
                <td style="width:25%">3DUI&nbsp;Contest Fast&nbsp;Forward</td>
                <td style="width:25%">Monday,&nbsp;18&nbsp;March</td>                
                <td style="width:25%">13:00&#8209;13:30</td>             
                <td style="width:25%">Fantasia Ballroom&nbsp;H</td>
            </tr>
             <tr>
                <td>3DUI&nbsp;Contest Booths&nbsp;Open</td>
                <td>Monday,&nbsp;18&nbsp;March</td>                
                <td>9:45&#8209;10:00, 13:00&#8209;13:30, 15:00&#8209;15:30, 17:00&#8209;19:00</td>       
                <td>Sorcerer's&nbsp;Apprentice Ballroom</td>  
            </tr>            
             <tr>
                <td>3DUI&nbsp;Contest Booths&nbsp;Open</td>
                <td>Tuesday,&nbsp;19&nbsp;March</td>                
                <td>9:45&#8209;10:00, 13:00&#8209;13:30, 15:00&#8209;15:30, 17:00&#8209;17:30</td>       
                <td>Sorcerer's&nbsp;Apprentice Ballroom</td>  
            </tr>
            <tr>
                <td>3DUI&nbsp;Contest Booths&nbsp;Open</td>
                <td>Wednesday,&nbsp;20&nbsp;March</td>                
                <td>9:45&#8209;10:00, 13:00&#8209;13:30, 15:00&#8209;15:30, 17:00&#8209;17:30</td>       
                <td>Sorcerer's&nbsp;Apprentice Ballroom</td>  
            </tr>
            <tr>
                <td>Awards</td>
                <td>Thursday,&nbsp;21&nbsp;March</td>                
                <td>15:30&#8209;17:00</td>       
                <td>Fantasia Ballroom&nbsp;H</td>  
            </tr>
        </tbody>
    </table>
</p>
<h2>Entries</h2>
<div>
    {% assign j = 0 %}
    {% for entry in site.data.contest3dui %}
        {% assign j = j | plus:1 %}
        {% for a in site.data.awards %}  
            {% if a.type == '3DUI Contest' %}
                {% if a.id == entry.id %}
                    {% if a.award == 'Best 3DUI' %}
                        <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#3dui-best"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best 3DUI Demo Award" alt="Best 3DUI Demo Award"></a></div>
                    {% endif %}                                                    
                    {% if a.award == "Honorable Mention" %}
                        <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#3dui-honorable"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best 3DUI Demo Honorable Mention" alt="Best 3DUI Demo Honorable Mention"></a></div>
                    {% endif %}
                {% endif %}
            {% endif %}
        {% endfor %}  
        <p id="{{ entry.id }}">
            <strong>{{ entry.title }} (ID:&nbsp;{{ entry.id }})</strong><br/>
            <span class="font_90">
                {% assign authornames = entry.authors | split: ";" %}
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
            </span>
        </p>
        {% if entry.url-embed %}
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/{{ entry.url-embed }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        {% endif %}
        {% if j == i %}
        {% else %}
            <hr style="margin: 25px 0 25px 0;">
        {% endif %}
    {% endfor %}
</div>
