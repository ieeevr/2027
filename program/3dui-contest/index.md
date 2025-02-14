---
layout: ieeevr-default
title: "3DUI Contest Demos"
subtitle: "IEEE VR 2025"
title_separator: "|"
---
<h1>3DUI Contest Demos</h1>
<h2>Topic : United for Planet Earth: Promoting Environmental Sustainability in Collaborative Virtual Environments </h2>
<div>
    <table class="styled-table">
        <tr>
            <th colspan="2">3DUI Contest Demos</th>
        </tr>
        {% assign i = 0 %}
        {% for entry in site.data.3dui %}
            {% assign i = i | plus:1 %}
            <tr>
                <td>
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
                </td>
                <td class="medLarge"><a href="#{{ entry.num }}" title="{{ entry.title }}">{{ entry.title }}</a></td>
            </tr>
        {% endfor %}
    </table>
</div>
<h2>Schedule</h2>
<p>
    <table class="program-table">
        <thead>
            <tr>
                <th colspan="4">3DUI&nbsp;Contest&nbsp;Schedule (Timezone: Saint-Malo, France UTC+1)</th>
            </tr>
        </thead>
        <tbody>           
            <tr>
                <td style="width:25%">3DUI&nbsp;Contest Fast&nbsp;Forward</td>
                <td style="width:25%">Monday,&nbsp;10&nbsp;March</td>                
                <td style="width:25%">15:15&#8209;16:15</td>            
            </tr>
             <tr>
                <td>3DUI&nbsp;Contest Booths&nbsp;Open</td>
                <td>Monday,&nbsp;10&nbsp;March</td>                
                <td>16:15&#8209;17:00</td>       
            </tr>            
             <tr>
                <td>3DUI&nbsp;Contest Booths&nbsp;Open</td>
                <td>Tuesday,&nbsp;11&nbsp;March</td>                
                <td>9:30&#8209;10:00, 13:15&#8209;14:00, 15:15&#8209;17:15</td>       
            </tr>
            <tr>
                <td>3DUI&nbsp;Contest Booths&nbsp;Open</td>
                <td>Wednesday,&nbsp;12&nbsp;March</td>                
                <td>9:30&#8209;10:00, 13:15&#8209;14:00</td>       
            </tr>
            <tr>
                <td>Awards</td>
                <td>Thursday,&nbsp;12&nbsp;March</td>                
                <td>17:15&#8209;18:15</td>        
            </tr>
        </tbody>
    </table>
</p>
<h2>Entries</h2>
<div>
    {% assign j = 0 %}
    {% for entry in site.data.3dui %}
        <!--{% assign j = j | plus:1 %}
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
        {% endfor %} -->
        <p class="medLarge" id="{{ entry.num }}" style="margin-bottom: 0.3em;">
            <strong>{{ entry.title }} (ID:&nbsp;{{ entry.num }})</strong>
        </p>
        <p class="font_70" >   
            {% assign authornames = entry.affiliations | split: "," %}
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
        {% if entry.num %}
            <div class="video-container">
            {% assign video_path = "/assets/videos/3dui/vr25d-sub" | append: entry.num | append: "-cam-i26.mp4?autoplay=1" %}
                <iframe src="{{ video_path | relative_url }}" frameborder="0"  sandbox=""></iframe>
            </div>
        {% endif %}
        {% if j == i %}
        {% else %}
            <hr style="margin: 25px 0 25px 0;">
        {% endif %}
    {% endfor %}
</div>
