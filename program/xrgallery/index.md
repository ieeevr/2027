---
layout: ieeevr-default
title: "XR Gallery"
subtitle: "IEEE VR 2025"
title_separator: "|"
---


<div>
    <h1 id="call-for-art"> XR Gallery </h1>
	<div class="ieeevrmsgbox bold alignCenter">
        <div class = "ieeevrmsgboxInside med">
			<!--<img src="/2025/assets/images/program/overview.png" alt="Program overview. It is separated into three main parts: 1. Pre-conference event, 2. Conference, 3.Post-conference event">-->
           Ars Electronica will be on site to identify works that can be proposed to the curatorial team to be reviewed for invitation to the Ars Electronica festival.
        </div>
    </div>
      <table class="styled-table">
        <tr>
            <th colspan="4">Exhibit : Monday 10th (10:45 AM) to Wednesday 12th (3PM) (Timezone: (Saint-Malo, France UTC+1))</th>
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
    <h2> Introduction </h2>
    <p>We are delighted to invite you to the first edition of the XR Gallery at IEEEVR 2025. Our aim is to foster creative thought and discussion between artists and researchers while providing an exciting art exhibition and live performances during the conference. </p>
    <p>
        The XR Gallery will have four main events:
        <ul>
            <li>Round-table - Edges of Reality: Bridging the gap between scientific research and immersive arts, designed to spark creative dialogue between artists and researchers <b>16:00 - 17:30 Room : Vauban 2</b> </li>
            <li>Exhibition - Artist will showcase stationary art pieces throughout the main conference</li>
            <li>Performances - Interactive art performances which will be scheduled at specific times during the conference </li>
            <li>Exhibit at the Welcome reception - The audience will be invited to a special showcasing of the art project “ReVerie” in the Amphitheatre during the conference’s welcome reception.  </li>
        </ul>
    </p>
	<p>The XR  Gallery would like to express its warmest gratitude to the University of Rennes 2 staff (CREA and Master of Digital Art) for the loan of equipments.</p>
    </div>
    <div>
    <h2> Round-table : 16:00 - 17:30 Vauban 2</h2>
    <p><b>Title: </b> <i>Edges of Reality: Bridging the gap between scientific research and immersive arts - XR Gallery Workshop </i></p>
    <p><b>Organiser: </b> XR Gallery Committee </p>
    <p>Emerging immersive technologies offer immense creative possibilities while also posing significant challenges by blurring the lines between fact and fiction, truth and fabrication. As our perception of reality undergoes an unprecedented transformation, we need new, creative ways to cope and reflect on these changes. </p>
    <p>
    As a kickstart to this year's IEEEVR XR Gallery, the researchers will have the opportunity to meet and discuss with artists who will exhibit at the gallery throughout the conference. A brief presentation of authors will be followed by a discussion panel aimed at fostering a creative exchange between artists and researchers on the questions of authenticity and truthfulness of digital experiences. By bridging the gap between the XR research and the art world, we hope to inspire innovative perspectives and cultivate a deeper understanding of the complex relationship between technology and reality.
    </p>
    </div>   
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
