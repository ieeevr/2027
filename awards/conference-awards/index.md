---
layout: ieeevr-default
title: "Awards"
---
<script type="text/javascript">
    $(document).ready(function(){
		var email = ""; 
		var domain = "ieeevr.org"; 

        email = "awards2025";  		
		$(".awards").html("<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIcon' style=''></i><i class='emailText'>" + email + "@" + domain + "</a></i></span>");   
        
        $(".awardsSm").html("<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>"); 
	});
</script>


---
layout: ieeevr-default
title: "IEEEVR VGTC Awards"
---


<p class="big_title" style="padding-bottom:0; margin-bottom:0">VGTC </p>

<h1>Nominate now for the 2026 VGTC Virtual and Mixed Reality Awards</h1>

<p>Nominations are now open for the 2026 IEEE VGTC Virtual and Mixed Reality Awards and for new members for the Virtual Reality  Academy.  These awards are presented yearly and are our IEEE Technical Community for Visualization and Graphics's highest recognition  for contributions by members of our community.  There will be awards ceremonies at both IEEE VR 2026 and ISMAR 2026.</p>

<p>Award criteria:  <a href="https://tc.computer.org/vgtc/award-criteria/" target="_blank">https://tc.computer.org/vgtc/award-criteria/</a></p>

<p>Nomination forms:  <a href="https://tc.computer.org/vgtc/awards/vr-award-nominations/" target="_blank">https://tc.computer.org/vgtc/awards/vr-award-nominations/</a></p>

<p>Nomination deadlines for 2026 awards:</p>
<ul>
<li><strong>15 July 2025</strong>         Best Dissertation</li>
<li><strong>1 October 2025</strong>     All other awards and VR Academy</li>
</ul>

<p>
Questions?  Email the Awards Chair at:  <a href="mailto:vgtc-vr-awards@vgtc.org">vgtc-vr-awards@vgtc.org</a></p>
<div style="display:none">
<h1>Conference Awards IEEE VR 2025 <div class="floatRight"><span class="awardsSm"></span></div></h1>

<h2>Awards Chairs</h2>
<ul>
    <li>Kiyoshi Kiyokawa ‒ Nara Institute of Science and Technology, Japan</li>
    <li>Frank Steinicke ‒ Universität Hamburg, Germany</li>
    <li>Stefania Serafin ‒ Aalborg University, Denmark</li>
    <li>Amine Chellali ‒ Université d'Evry Paris-Saclay, France</li>
</ul>
<table class="styled-table" style="font-size: 0.9em; ">
    <tr>
        <th colspan="3">Conference Awards - Quick Links</th>
    </tr>
    <tr>
        <td><a href="#papers">Papers</a></td>
        <td>
            {% assign award = site.data.awards | where: "type", "Journal" | where: "award", "Best Paper" %}
            {% if award.size > 0  %}
                <a href="#paper-best">Best Papers</a>
            {% else %}
                &nbsp;
            {% endif %}
        </td>
        <td>        
            {% assign award = site.data.awards | where: "type", "Journal" | where: "award", "Honorable Mention" %}
            {% if award.size > 0  %}
                <a href="#paper-best"><a href="#paper-honorable">Honorable Mentions</a></a>
            {% else %}
                &nbsp;
            {% endif %}
        </td>
    </tr> 
    <tr>
        <td><a href="#poster">Posters</a></td>
        <td>
            {% assign award = site.data.awards | where: "type", "Poster" | where: "award", "Best Poster" %}
            {% if award.size > 0  %}
               <a href="#poster-best">Best Posters</a>
            {% else %}
               &nbsp;
            {% endif %}
        </td>
        <td>
            {% assign award = site.data.awards | where: "type", "Poster" | where: "award", "Honorable Mention" %}
            {% if award.size > 0  %}
               <a href="#poster-honorable">Honorable Mentions</a>
            {% else %}
                &nbsp;
            {% endif %}
        </td>
    </tr>  
    <tr>
        <td><a href="#demo">Research Demos</a></td>  
        <td>        
            {% assign award = site.data.awards | where: "type", "Demo" | where: "award", "Best Demo" %}
            {% if award.size > 0  %}
              <a href="#demo-best">Best Research Demos</a>
            {% else %}
                &nbsp;
            {% endif %}
        </td>
        <td>
            {% assign award = site.data.awards | where: "type", "Demo" | where: "award", "Honorable Mention" %}
            {% if award.size > 0  %}
               <a href="#demo-honorable">Honorable Mentions</a>
            {% else %}
                &nbsp;
            {% endif %}
        </td>
    </tr>
    <tr>
        <td><a href="#3dui">3DUI Contest Demos</a></td>
        <td>          
            {% assign award = site.data.awards | where: "type", "3DUI Contest" | where: "award", "Best 3DUI" %}
            {% if award.size > 0  %}
              <a href="#3dui-best">Best 3DUI Contest Demos</a>
            {% else %}
               &nbsp;
            {% endif %}
        </td>
        <td>               
            {% assign award = site.data.awards | where: "type", "3DUI Contest" | where: "award", "Honorable Mention" %}
            {% if award.size > 0  %}
              <a href="#3dui-honorable">Honorable Mentions</a>
            {% else %}
                &nbsp;
            {% endif %}</td>
    </tr>  
    <tr>
        <td><a href="#DC">Doctoral Consortiums</a></td>
        <td>       
            {% assign award = site.data.awards | where: "type", "DC" | where: "award", "Best DC" %}
            {% if award.size > 0  %}
              <a href="#DC-best">Best Doctoral Consortium</a>  
            {% else %}
                &nbsp;
            {% endif %}
        </td>
        <td>
            {% assign award = site.data.awards | where: "type", "DC" | where: "award", "Honorable Mention" %}
            {% if award.size > 0  %}
              <a href="#DC-honorable">Honorable Mentions</a>
            {% else %}
                &nbsp;
            {% endif %}
        </td>
    </tr>        
    <tr>
        <td><a href="#gallery">XR Gallery</a></td>
        <td>  
            {% assign award = site.data.awards | where: "type", "XR Gallery" | where: "award", "Best Art" %}
            {% if award.size > 0  %}
              <a href="#gallery-presentation-best">Best Exhibit</a>    
            {% else %}
                &nbsp;
            {% endif %}
        </td>
        <td>              
            {% assign award = site.data.awards | where: "type", "XR Gallery" | where: "award", "Honorable Mention" %}
            {% if award.size > 0  %}
              <a href="#gallery-presentation-honorable">Honorable Mentions</a>
            {% else %}
               &nbsp;
            {% endif %}
        </td>
    </tr>  
</table>
<h2 id = "papers">Best Papers & Honorable Mention for Best Papers</h2>

<p>The IEEE VR Best Paper Awards honor exceptional papers published and presented at the IEEE VR conference. During the review process, the program committee chairs will choose approximately 3% of submissions to receive an award. Among these chosen submissions, the separate Conference Awards Selection Committee will select the best submissions to receive a Best Paper Award (ca. 1% of total submissions), while a selection of the remaining submissions receive an Honorable Mention Award. Papers that receive an award will be marked in the program, and authors will receive a certificate at the conference.</p>
{% assign award = site.data.awards | where: "type", "Journal" | where: "award", "Best Paper" %}
{% if award.size > 0  %}
<div>
    <h2 id='paper-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Paper Award" alt="Best Paper Award"> Best Papers</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}     
        {% if item.ptype == 'Journal' %}
            {% assign source = site.data.acceptedpapers %}
            {% assign source2 = site.data.acceptedpaperstvcg %}
        {% endif %}
        {% if item.ptype == 'Conference' %}
            {% assign source = site.data.conferencepapers %}
        {% endif %}
        {% if item.ptype == 'Invited Journal' %}
            {% assign source = site.data.invitedjournalpapers %}
        {% endif %}
        {% for acpaper in source %}
            {% if item.id == acpaper.ids  %} 
                <p class="medLarge" id="paper_{{ acpaper.id }}" style="margin-bottom: 0.3em;">
                    <b>{{ acpaper.title }}</b>
                </p>
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
        {% for acpaper in source2 %}
            {% if item.id == acpaper.ids  %} 
                <p class="medLarge" id="paper_{{ acpaper.id }}" style="margin-bottom: 0.3em;">
                    <b>{{ acpaper.title }}</b>
                </p>
                <div><p class="font_70">
                    {{ acpaper.contactauthor }}
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
    {% endfor %}
</div>

{% assign award = site.data.awards | where: "type", "Journal" | where: "award", "Honorable Mention" %}
{% if award.size > 0  %}
<div>
    <h2 id='paper-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Paper Award" alt="Best Paper Award"> Best Papers</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}     
        {% if item.ptype == 'Journal' %}
            {% assign source = site.data.acceptedpapers %}
            {% assign source2 = site.data.acceptedpaperstvcg %}
        {% endif %}
        {% if item.ptype == 'Conference' %}
            {% assign source = site.data.conferencepapers %}
        {% endif %}
        {% if item.ptype == 'Invited Journal' %}
            {% assign source = site.data.invitedjournalpapers %}
        {% endif %}
        {% for acpaper in source %}
            {% if item.id == acpaper.ids  %} 
                <p class="medLarge" id="paper_{{ acpaper.id }}" style="margin-bottom: 0.3em;">
                    <b>{{ acpaper.title }}</b>
                </p>
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
        {% for acpaper in source2 %}
            {% if item.id == acpaper.ids  %} 
                <p class="medLarge" id="paper_{{ acpaper.id }}" style="margin-bottom: 0.3em;">
                    <b>{{ acpaper.title }}</b>
                </p>
                <div><p class="font_70">
                    {{ acpaper.contactauthor }}
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
    {% endfor %}
</div>

<h2 id="poster">Best Posters & Honorable Mention for Best Poster</h2>

<p>The IEEE VR Best Poster Awards honors exceptional posters published and presented at the IEEE VR conference. During the review process, the best poster committee for IEEE VR consists of three distinguished members chosen by the Conference Awards Committee and Poster Chairs, which will select the best posters based on the two-page abstract and the poster presentation during the conference. Posters that receive an award will be marked in the program, and authors will receive a certificate at the conference. </p>
{% assign award = site.data.awards | where: "type", "Poster" | where: "award", "Best Poster" %}
{% if award.size > 0  %}
<div>
    <h2 id='poster-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Poster Award" alt="Best Poster Award"> Best Posters</h2>
</div>
{% endif %}  
<div style="padding-bottom:15px;">
    {% for item in award %}     
        {% assign source = site.data.posters %}
        {% for poster in source %}
            {% if item.id == poster.BoothID  %} 
                <p class="medLarge" id="{{ paper.id }}" style="margin-bottom: 0.3em;">
                    <strong>{{ poster.title }} (Booth ID: {{ poster.BoothID }}) </strong>
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
                    <div id="abstract_{{ poster.VideoLink }}" class="wrap-collabsible" style="margin-top: 0px; padding-top: 0px; margin-bottom: 0px;"> <input id="collapsibleabstract{{ poster.VideoLink }}" class="toggle" type="checkbox"> 
                        <label for="collapsibleabstract{{ poster.VideoLink }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ poster.abstract }}</p>
                            </div>
                        </div>
                    </div>   
                {% endif %}
                {% if poster.VideoLink %}
                <div id="video_{{ poster.VideoLink }}" class="wrap-collabsible" style="margin-top: 0px; padding-top: 0px; margin-bottom: 0px;"> <input id="collapsiblevideo{{ poster.VideoLink }}" class="toggle" type="checkbox"> 
                    <label for="collapsiblevideo{{ poster.VideoLink }}" class="lbl-toggle">Video</label>
                    <div class="collapsible-content">
                        <div class="content-inner">
                            <div class="video-container">
                                <iframe src="https://www.youtube.com/embed/{{ poster.VideoLink }}" loading="lazy" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>                           
                {% endif %}
            {% endif %}
            
        {% endfor %}
    {% endfor %}
</div>

{% assign award = site.data.awards | where: "type", "Poster" | where: "award", "Honorable Mention" %}
{% if award.size > 0  %}
<div>
    <h2 id='poster-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Poster Honorable Mention" alt="Best Poster Honorable Mention"> Best Poster - Honorable Mentions</h2>
</div>
{% endif %}   
<div style="padding-bottom:15px;">
    {% for item in award %}     
        {% assign source = site.data.posters %}
        {% for poster in source %}
            {% if item.id == poster.BoothID  %} 
                <p class="medLarge" id="{{ paper.id }}" style="margin-bottom: 0.3em;">
                    <strong>{{ poster.title }} (Booth ID: {{ poster.BoothID }}) </strong>
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
                    <div id="abstract_{{ poster.VideoLink }}" class="wrap-collabsible" style="margin-top: 0px; padding-top: 0px; margin-bottom: 0px;"> <input id="collapsibleabstract{{ poster.VideoLink }}" class="toggle" type="checkbox"> 
                        <label for="collapsibleabstract{{ poster.VideoLink }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ poster.abstract }}</p>
                            </div>
                        </div>
                    </div>   
                {% endif %}
                {% if poster.VideoLink %}
                <div id="video_{{ poster.VideoLink }}" class="wrap-collabsible" style="margin-top: 0px; padding-top: 0px; margin-bottom: 0px;"> <input id="collapsiblevideo{{ poster.VideoLink }}" class="toggle" type="checkbox"> 
                    <label for="collapsiblevideo{{ poster.VideoLink }}" class="lbl-toggle">Video</label>
                    <div class="collapsible-content">
                        <div class="content-inner">
                            <div class="video-container">
                                <iframe src="https://www.youtube.com/embed/{{ poster.VideoLink }}" loading="lazy" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>                           
                {% endif %}
            {% endif %}
            
        {% endfor %}
    {% endfor %}
</div>
<h2 id="demo">Best Demo & Honorable Mention for Best Demo</h2>

<p>The IEEE VR Best Demo Awards honors exceptional research demos published and presented at the IEEE VR conference. The IEEE VR Demo Chairs rank the accepted demos and recommend approximately 10% of all demos for an award. The best demo committee for IEEE VR consists of three distinguished members chosen by the Conference Awards Committee Chairs and the Demo Chairs. This committee selects one of the demos for the Best Demo Award and one for the Honorable Mention Award. The corresponding authors will receive a certificate at the conference.  </p>

{% assign award = site.data.awards | where: "type", "Demo" | where: "award", "Best Demo" %}
{% if award.size > 0  %}
<div>
    <h2 id='demo-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Research Demo Award" alt="Best Research Demo Award"> Best Research Demo</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">  
    {% for item in award %}    
        {% for demo in site.data.demos %}
            {% if demo.id == item.id %}
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
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>

{% assign award = site.data.awards | where: "type", "Demo" | where: "award", "Honorable Mention" %}
{% if award.size > 0  %}
<div>
    <h2 id='demo-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Research Demo Honorable Mention" alt="Best Research Demo Honorable Mention"> Best Research Demo - Honorable Mention</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}    
        {% for demo in site.data.demos %}
            {% if demo.id == item.id %}
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
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>


<h2 id="3dui">Best 3DUI Contest & Honorable Mention</h2>

<p>The IEEE VR Best 3DUI Contest Submission Awards honors exceptional 3DUI contest submissions published and presented at the IEEE VR conference. The 3DUI contest chairs select one of the submissions for the Best 3DUI Contest Submission Award and one for the Honorable Mention Award. The final decision is based on a combination of the reviews’ scores, scores from experts testing the contest submission during the conference, and the audience scores. The winning team with the highest score will be awarded. Authors will receive a certificate at the conference.</p>

{% assign award = site.data.awards | where: "type", "3DUI Contest" | where: "award", "Best 3DUI" %}
{% if award.size > 0  %}
<div>
    <h2 id='3dui-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best 3DUI Contest Demo Award" alt="Best 3DUI Contest Demo Award"> Best 3DUI Contest Demo</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}  
        {% for entry in site.data.3dui %}
            {% if entry.id == item.id %}  
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
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>
{% assign award = site.data.awards | where: "type", "3DUI Contest" | where: "award", "Honorable Mention" %}
{% if award.size > 0  %}
<div>
    <h2 id='3dui-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best 3DUI Contest Demo Honorable Mention" alt="Best 3DUI Contest Demo Honorable Mention"> Best 3DUI Contest Demo - Honorable Mention</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for source in award %}
        {% for entry in site.data.3dui %}
            {% if source.id == entry.id %}  
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
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>

<h2 id="DC">Best DC Paper & Honorable Mention for Best DC Paper</h2>

<p>The IEEE VR Best Doctoral Consortium (DC) Paper Awards honors exceptional DC papers published and presented at the IEEE VR conference. The best DC paper committee consists of three distinguished members chosen by the Conference Awards Committee Chairs and the DC chairs. The DC chairs recommend 20% of all DC papers for such an award. The best DC committee selects one of these DC papers for Best DC Paper Award and one to receive an Honorable Mention Award. DC papers that receive an award will be marked in the program, and authors will receive a certificate at the conference. </p>

{% assign award = site.data.awards | where: "type", "DC" | where: "award", "Best DC" %}
{% if award.size > 0  %}
<div>
    <h2 id='DC-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Doctoral Consortium Award" alt="Best Doctoral Consortium Award"> Best Doctoral Consortium Paper</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">  
    {% for item in award %}
        {% for dc in site.data.dc %}
            {% if dc.id == item.id %}  
                <p class="medLarge" id="{{ dc.id }}" style="margin-bottom: 0.3em;">
                    <strong>{{ dc.title }} </strong>
                </p>
                <p class="clear font_75" >
                    <span class="bold">Author:</span> <span class="">{{ dc.name | strip }}</span>, <i>{{ dc.affiliation | strip }}</i><br />
                    <!--<span class="bold">Mentor:</span> <span class="">{{ dc.mentor | strip }}</span>-->
                </p>
                {% if dc.abstract %}
                    <div id="{{ dc.id }}" class="wrap-collabsible"> <input id="collapsibleabstract{{ dc.id }}" class="toggle" type="checkbox"> 
                        <label for="collapsibleabstract{{ dc.id }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ dc.abstract }}</p>
                            </div>
                        </div>
                    </div>   
                {% endif %}               
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>

{% assign award = site.data.awards | where: "type", "DC" | where: "award", "Honorable Mention" %}
{% if award.size > 0  %}
<div>
    <h2 id='DC-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best DC Paper Honorable Mention" alt="Best DC Paper Honorable Mention"> Best Doctoral Consortium Paper - Honorable Mention</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}
        {% for dc in site.data.dc %}
            {% if dc.id == item.id %}  
                <p class="medLarge" id="{{ dc.id }}" style="margin-bottom: 0.3em;">
                    <strong>{{ dc.title }} </strong>
                </p>
                <p class="clear font_75" >
                    <span class="bold">Author:</span> <span class="">{{ dc.name | strip }}</span>, <i>{{ dc.affiliation | strip }}</i><br />
                    <!--<span class="bold">Mentor:</span> <span class="">{{ dc.mentor | strip }}</span>-->
                </p>
                {% if dc.abstract %}
                    <div id="{{ dc.id }}" class="wrap-collabsible"> <input id="collapsibleabstract{{ dc.id }}" class="toggle" type="checkbox"> 
                        <label for="collapsibleabstract{{ dc.id }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ dc.abstract }}</p>
                            </div>
                        </div>
                    </div>   
                {% endif %}               
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>


<h2 id="gallery">Best XR Gallery exhibits</h2>
<p>The IEEE VR Best XR Gallery Awards honor exceptional art projects published and exhibited at the IEEE VR conference. The award committee this year constitutes of members of Ars Electronica, who will carefully consider every project in terms of its novelty, impact and technical mastery. Two awards will be administered, one honorable mention and the best XR Gallery award.  Papers that receive an award will be marked in the program, and authors will receive a certificate at the conference.</p>
{% assign award = site.data.awards | where: "type", "XR Gallery" | where: "award", "Best Art" %}
{% if award.size > 0  %}
<div>
    <h2 id='gallery-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Art" alt="Best Art"> Best XR Gallery Exhibit</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}
        {% for gallery in site.data.xrgallery %}
            {% if gallery.id == item.id %}  
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
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>
{% assign award = site.data.awards | where: "type", "XR Gallery" | where: "award", "Honorable Mention" %}
{% if award.size > 0  %}
<div>
    <h2 id='gallery-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Art Honorable Mention" alt="Best Art Honorable Mention"> Best XR Gallery - Honorable Mention</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}
        {% for gallery in site.data.xrgallery %}
            {% if gallery.id == item.id %}  
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
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>

<!--<p>The IEEE VR Best Presentation Awards honor excellent, interesting, and stimulating presentations of research papers at the IEEE VR conference. During the conference, the audience can give a vote for each presentation that they think deserves an award. Approximately 3% of presentations with the highest number of votes receive an award. Among these selected presentations, the top 1% regarding the number of votes, will receive a Best Presentation Award, while the remaining presentations receive an Honorable Mention Award.</p>-->

<!--<h2>Best Paper Presentation</h2>

<p>The IEEE VR Best Presentation Awards honor excellent, interesting, and stimulating presentations of research papers at the IEEE VR conference. During the conference, the audience can give a vote for each presentation that they think deserves an award. Approximately 3% of presentations with the highest number of votes receive an award. Among these selected presentations, the top 1% regarding the number of votes, will receive a Best Presentation Award, while the remaining presentations receive an Honorable Mention Award.</p>-->
</div>

