---
layout: ieeevr-default
title: "XR Gallery"
subtitle: "IEEE VR 2025"
title_separator: "|"
---


<div>
    <h1 id="call-for-art"> XR Gallery </h1>
      <table class="styled-table">
        <tr>
            <th colspan="4">Exhibit : Monday 10th (9:30 AM) to Wednesday 12th (3PM) (Timezone: (Saint-Malo, France UTC+1))</th>
        </tr>                   
        {% assign art = site.data.xrgallery | sort: "id" %}
        {% for gallery in art %}
                <tr>
                    <td class="medLarge"><a href="#{{ gallery.id }}">{{ gallery.id }}</a></td>
                    <td class="medLarge"><a href="#{{ gallery.id }}">{{ gallery.title }}</a></td>
                </tr>
        {% endfor %}
    </table>     
    <div>
        {% for gallery in art %}
            <!-- gallery title matter -->
            <h2 class="padding_top_xsmall" id="{{ gallery.id }}">Exhibit: {{ gallery.title }} </h2> 
            <!-- <p class="small">{{ gallery.day }}, {{ gallery.starttime }}-{{ gallery.endtime }} ({{ gallery.timezone }}), Room: {{ gallery.room }}</p>                -->
            <div>
                {% if gallery.artist %}
                    {% assign authornames = gallery.artist | split: "/" %}
                    <div>
                        <strong>Artists</strong>
                        {% for name in authornames %}               
                            {{ name }}
                        {% endfor %}
                    </div>
                {% endif%}
                {% if gallery.website %}
                    <med><b style="color: black;">Website:</b> <a href="{{ gallery.website }}" target="_blank">{{ gallery.website }}</a></med><br />
                {% endif %}            
                {% if gallery.abstract %}
                    <div >
                        <b>Description :</b> 
                        <p>{{ gallery.abstract }}</p>
                    </div>
                {% endif %}   
                {% if gallery.image %}
		            <img src="{{ "/assets/images/xrgallery/" | append: gallery.image | relative_url }}" alt="Promotionnal picture">
                {% endif %}
                {% if gallery.video %}
                    <div id="{{ gallery.video }}" class="wrap-collabsible"> <input id="collapsible{{ gallery.video }}" class="toggle" type="checkbox"> <label for="collapsible{{ gallery.video }}" class="lbl-toggle">Video</label>
                        <div class="collapsible-content">
                            <div class="video-container">
                                <iframe src="{{gallery.video}}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <!--<div class="video-container">
                        <iframe src="{{gallery.video}}" title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>-->
                {% endif %}        
                {%if gallery.infos %}
                    <strong style="color: red"> {{gallery.infos}}</strong>
                {% endif %}
            </div>         
        {% endfor %}
        <!--<div class="video-container">
                <iframe src="https://www.youtube.com/embed/{{ entry.url-embed }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>-->
