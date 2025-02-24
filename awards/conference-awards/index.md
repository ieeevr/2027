---
layout: ieeevr-default
title: "Conference Awards"
subtitle: "IEEE VR 2024"
title_separator: "|"
---
<script type="text/javascript">
    $(document).ready(function(){
		var email = ""; 
		var domain = "ieeevr.org"; 

        email = "awards2024";  		
		$(".awards").html("<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIcon' style=''></i><i class='emailText'>" + email + "@" + domain + "</a></i></span>");   
        
        $(".awardsSm").html("<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>"); 
	});
</script>
<h1>Conference Awards Committee IEEE VR 2024 <div class="floatRight"><span class="awardsSm"></span></div></h1>

<h2>Conference Awards Chairs</h2>
<ul>
    <li>Frank Steinicke ‒ Universität Hamburg, Germany</li>
    <li>Shi-Min Hu ‒ Tsinghua University, China</li>
    <li>Kiyoshi Kiyokawa ‒ Nara Institute of Science and Technology, Japan</li>
    <li>Luciana Nedel ‒ Federal University of Rio Grande do Sul, Brazil</li>
    <li>Missie Smith ‒ Meta Reality Labs, USA</li>
</ul>
 <div class="ieeevrmsgbox">
    <div class = "ieeevrmsgboxInsideNoColor">            
        <div class= "bold alignCenter paddingBottomxSmall">
            Congratulations to the IEEE VR 2024 Award Winners!
        </div>
    </div>
</div>
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
        <td><a href="#posters">Posters</a></td>
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
        <td><a href="#demos">Research Demos</a></td>  
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
        <td><a href="#dc">Doctoral Consortiums</a></td>
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
        <td><a href="#paper-presentation">Paper Presentations</a></td>
        <td>  
            {% assign award = site.data.awards | where: "type", "Presentation" | where: "award", "Best Presentation" %}
            {% if award.size > 0  %}
              <a href="#paper-presentation-best">Best Paper Presentations</a>    
            {% else %}
                &nbsp;
            {% endif %}
        </td>
        <td>              
            {% assign award = site.data.awards | where: "type", "Presentation" | where: "award", "Honorable Mention" %}
            {% if award.size > 0  %}
              <a href="#paper-presentation-honorable">Honorable Mentions</a>
            {% else %}
               &nbsp;
            {% endif %}
        </td>
    </tr>  
</table>
<h2 id="papers">Best Papers & Honorable Mentions</h2>

<p>The IEEE VR Best Paper Awards honor exceptional papers published and presented at the IEEE VR conference. During the review process, the program committee chairs will choose approximately 3% of submissions to receive an award. Among these chosen submissions, the separate Conference Awards Selection Committee will select the best submissions to receive a Best Paper Award (ca. 1% of total submissions), while a selection of the remaining submissions receive an Honorable Mention Award. Papers that receive an award will be marked in the program and authors will receive a certificate at the conference.</p>

{% assign award = site.data.awards | where: "type", "Journal" | where: "award", "Best Paper" %}
{% if award.size > 0  %}
<div>
    <h2 id='paper-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Paper Award" alt="Best Paper Award"> Best Papers</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}     
        {% if item.ptype == 'Journal' %}
            {% assign source = site.data.journalpapers %}
        {% endif %}
        {% if item.ptype == 'Conference' %}
            {% assign source = site.data.conferencepapers %}
        {% endif %}
        {% if item.ptype == 'Invited Journal' %}
            {% assign source = site.data.invitedjournalpapers %}
        {% endif %}
        {% for j in source %}
            {% if j.id == item.id %}
                {% assign authornames = j.authors | split: ";" %}
                <p class="medLarge" id="{{ j.id }}" style="margin-bottom: 0.3em;">
                    <strong>{{ j.Title }} ({{ item.ptype }}:&nbsp;{{ j.id }})</strong>
                </p>
                <p class="font_70" >
                    {% assign authornames = j.authors | split: ";" %}
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
                {% if j.abstract %}
                    <div id="J{{ j.id }}" class="wrap-collabsible"> <input id="collapsibleJ{{ j.id }}" class="toggle" type="checkbox"> <label for="collapsibleJ{{ j.id }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ j.abstract }}</p>
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
    <h2 id='paper-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Paper Honorable Mention" alt="Best Paper Honorable Mention"> Best Papers - Honorable Mentions</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}
        {% if item.ptype == 'Journal' %}
            {% assign source = site.data.journalpapers %}
        {% endif %}
        {% if item.ptype == 'Conference' %}
            {% assign source = site.data.conferencepapers %}
        {% endif %}
        {% if item.ptype == 'Invited Journal' %}
            {% assign source = site.data.invitedjournalpapers %}
        {% endif %}
        {% for j in source %}
            {% if j.id == item.id %}
                {% assign authornames = j.authors | split: ";" %}
                <p class="medLarge" id="{{ j.id }}" style="margin-bottom: 0.3em;">
                    <strong>{{ j.Title }} ({{ item.ptype }}:&nbsp;{{ j.id }})</strong>
                </p>
                <p class="font_70" >
                    {% assign authornames = j.authors | split: ";" %}
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
                {% if j.abstract %}
                    <div id="J{{ j.id }}" class="wrap-collabsible"> <input id="collapsibleJ{{ j.id }}" class="toggle" type="checkbox"> <label for="collapsibleJ{{ j.id }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ j.abstract }}</p>
                            </div>
                        </div>
                    </div>
                {% endif %}
            {% endif %}
        {% endfor %}  
    {% endfor %}
</div>

<h2 id="posters">Best Posters & Honorable Mentions</h2>

<p>The IEEE VR Best Poster Awards honors exceptional posters published and presented at the IEEE VR conference. During the review process, the best poster committee for IEEE VR consists of three distinguished members chosen by the Conference Awards Committee and Poster Chairs, which will select the best posters. Posters that receive an award will be marked in the program and authors will receive a certificate at the conference. </p>

{% assign award = site.data.awards | where: "type", "Poster" | where: "award", "Best Poster" %}
{% if award.size > 0  %}
<div>
    <h2 id='poster-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Poster Award" alt="Best Poster Award"> Best Posters</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}
        {% if item.ptype == 'Monday' %}
            {% assign source = site.data.mondayPosters %}
        {% endif %}                
        {% if item.ptype == 'Tuesday' %}
            {% assign source = site.data.tuesdayPosters %}
        {% endif %}
        {% if item.ptype == 'Wednesday' %}
            {% assign source = site.data.wednesdayPosters %}
        {% endif %}
        {% for j in source %}
            {% if j.id == item.id %}
                <p class="medLarge" id="{{ j.id }}" style="margin-bottom: 0.3em;">
                    <strong>{{ j.title }} (ID:&nbsp;{{ j.id }})</strong>
                </p>
                <p class="font_70" >
                    {% assign authornames = j.authors | split: ";" %}
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
                {% if j.abstract %}
                    <div id="P{{ j.id }}" class="wrap-collabsible"> <input id="collapsibleP{{ j.id }}" class="toggle" type="checkbox"> <label for="collapsibleP{{ j.id }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ j.abstract }}</p>
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
        {% if item.ptype == 'Monday' %}
            {% assign source = site.data.mondayPosters %}
        {% endif %}                
        {% if item.ptype == 'Tuesday' %}
            {% assign source = site.data.tuesdayPosters %}
        {% endif %}
        {% if item.ptype == 'Wednesday' %}
            {% assign source = site.data.wednesdayPosters %}
        {% endif %}
        {% for j in source %}
            {% if j.id == item.id %}
                <p class="medLarge" id="{{ j.id }}" style="margin-bottom: 0.3em;">
                    <strong>{{ j.title }} (ID:&nbsp;{{ j.id }})</strong>
                </p>
                <p class="font_70" >
                    {% assign authornames = j.authors | split: ";" %}
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
                {% if j.abstract %}
                    <div id="P{{ j.id }}" class="wrap-collabsible"> <input id="collapsibleP{{ j.id }}" class="toggle" type="checkbox"> <label for="collapsibleP{{ j.id }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ j.abstract }}</p>
                            </div>
                        </div>
                    </div>
                    {% endif %}
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>

<h2 id="demos">Best Research Demos & Honorable Mentions</h2>
<p>The IEEE VR Best Research Demo Awards honors exceptional research demos published and presented at the IEEE VR conference. The IEEE VR Research Demonstration Chairs rank the accepted demos and recommend approximately 10% of all demos for an award. The best research demo committee for IEEE VR consists of three distinguished members chosen by the Conference Awards Committee Chairs and the Research Demonstration Chairs. This committee selects one of the demos for the Best Research Demo Award and one for the Honorable Mention Award. The corresponding authors will receive a certificate at the conference. </p>

{% assign award = site.data.awards | where: "type", "Demo" | where: "award", "Best Demo" %}
{% if award.size > 0  %}
<div>
    <h2 id='demo-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Research Demo Award" alt="Best Research Demo Award"> Best Research Demo</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}
        {% for j in site.data.demos %}
            {% if j.id == item.id %} 
                <p class="medLarge" id="{{ j.id }}" style="margin-bottom: 0.3em;">
                    <strong><a href="{{ "/program/demos" | relative_url }}#{{ j.id }}">{{ j.title }} (ID:&nbsp;{{ j.id }})</a></strong>
                </p>
                <p class="font_70" >
                    {% assign authornames = j.authors | split: ";" %}
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
                {% if j.abstract %}
                    <div id="D{{ j.id }}" class="wrap-collabsible"> <input id="collapsibleD{{ j.id }}" class="toggle" type="checkbox"> <label for="collapsibleD{{ j.id }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ j.abstract }}</p>
                            </div>
                        </div>
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
        {% for j in site.data.demos %}
            {% if j.id == item.id %}
                <p class="medLarge" id="{{ j.id }}" style="margin-bottom: 0.3em;">
                    <strong><a href="{{ "/program/demos" | relative_url }}#{{ j.id }}">{{ j.title }} (ID:&nbsp;{{ j.id }})</a></strong>
                </p>
                <p class="font_70" >
                    {% assign authornames = j.authors | split: ";" %}
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
                    {% if j.abstract %}
                    <div id="D{{ j.id }}" class="wrap-collabsible"> <input id="collapsibleD{{ j.id }}" class="toggle" type="checkbox"> <label for="collapsibleD{{ j.id }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ j.abstract }}</p>
                            </div>
                        </div>
                    </div>                        
                {% endif %}
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>

<h2 id="dui">Best 3DUI Contest Demos & Honorable Mentions</h2>
<p>The IEEE VR Best 3DUI Contest Submission Awards honors exceptional 3DUI contest submissions published and presented at the IEEE VR conference. The 3DUI contest chairs select one of the submissions for the Best 3DUI Contest Submission Award and one for the Honorable Mention Award. The final decision is based on a combination of the reviews’ scores, scores from experts testing the contest submission during the conference, and the audience scores. The winning team with the highest score will be awarded. Authors will receive a certificate at the conference.</p>

{% assign award = site.data.awards | where: "type", "3DUI Contest" | where: "award", "Best 3DUI" %}
{% if award.size > 0  %}
<div>
    <h2 id='3dui-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best 3DUI Contest Demo Award" alt="Best 3DUI Contest Demo Award"> Best 3DUI Contest Demo</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}
        {% for j in site.data.contest3dui %}
            {% if j.id == item.id %}  
                <p class="medLarge" id="{{ j.id }}" style="margin-bottom: 0.3em;">
                    <strong><a href="{{ "/program/3dui-contest" | relative_url }}#{{ j.id }}">{{ j.title }} (ID:&nbsp;{{ j.id }})</a></strong>
                </p>
                <p class="font_70" >
                    {% assign authornames = j.authors | split: ";" %}
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
    {% for item in award %}
        {% for j in site.data.contest3dui %}
            {% if j.id == item.id %}  
                <p class="medLarge" id="{{ j.id }}" style="margin-bottom: 0.3em;">
                    <strong><a href="{{ "/program/3dui-contest" | relative_url }}#{{ j.id }}">{{ j.title }} (ID:&nbsp;{{ j.id }})</a></strong>
                </p>
                <p class="font_70" >
                    {% assign authornames = j.authors | split: ";" %}
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
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>

<h2 id="dc">Best Doctoral Consortium Paper</h2>
<p>The IEEE VR Best Doctoral Consortium (DC) Paper Awards honors exceptional DC papers published and presented at the IEEE VR conference. The best DC paper committee consists of three distinguished members chosen by the Conference Awards Committee Chairs and the DC chairs. The DC chairs recommend 20% of all DC papers for such an award. The best DC committee selects one of these DC papers for Best DC Paper Award. The DC paper that receives the award will be marked in the program and the author will receive a certificate at the conference. </p>

{% assign award = site.data.awards | where: "type", "DC" | where: "award", "Best DC" %}
{% if award.size > 0  %}
<div>
    <h2 id='DC-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Doctoral Consortium Award" alt="Best Doctoral Consortium Award"> Best Doctoral Consortium Paper</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">  
    {% for item in award %}
        {% for j in site.data.dc %}
            {% if j.id == item.id %}  
                <p class="medLarge" id="{{ j.id }}" style="margin-bottom: 0.3em;">
                    <strong>{{ j.title }} (ID:&nbsp;{{ j.id }})</strong>
                </p>
                <p class="font_70" >
                    <span class="bold">Author:</span> <span class="">{{ j.author | strip }}</span>, <i>{{ j.affiliation | strip }}</i><br />
                    <span class="bold">Mentor:</span> <span class="">{{ j.mentor | strip }}</span>
                </p>
                {% if j.abstract %}
                    <div id="D{{ j.id }}" class="wrap-collabsible"> <input id="collapsibleD{{ j.id }}" class="toggle" type="checkbox"> <label for="collapsibleD{{ j.id }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ j.abstract }}</p>
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
        {% for j in site.data.dc %}
            {% if j.id == item.id %}  
                <p class="medLarge" id="{{ j.id }}" style="margin-bottom: 0.3em;">
                    <strong>{{ j.title }} (ID:&nbsp;{{ j.id }})</strong>
                </p>
                <p class="font_70" >
                    <span class="bold">Author:</span> <span class="">{{ j.author | strip }}</span>, <i>{{ j.affiliation | strip }}</i><br />
                    <span class="bold">Mentor:</span> <span class="">{{ j.mentor | strip }}</span>
                </p>
                    {% if j.abstract %}
                    <div id="D{{ j.id }}" class="wrap-collabsible"> <input id="collapsibleD{{ j.id }}" class="toggle" type="checkbox"> <label for="collapsibleD{{ j.id }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ j.abstract }}</p>
                            </div>
                        </div>
                    </div>                        
                {% endif %}
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>

<h2 id="paper-presentation">Best Paper Presentations & Honorable Mentions</h2>
<p>The IEEE VR Best Presentation Awards honor excellent, interesting, and stimulating presentations of research papers at the IEEE VR conference. During the conference, the audience can give a vote for each presentation that they think deserves an award. Approximately 3% of presentations with the highest number of votes receive an award. Among these selected presentations, the top 1% regarding the number of votes, will receive a Best Presentation Award, while the remaining presentations receive an Honorable Mention Award.</p>

{% assign award = site.data.awards | where: "type", "Presentation" | where: "award", "Best Presentation" %}
{% if award.size > 0  %}
<div>
    <h2 id='paper-presentation-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best-star.png" | relative_url }}" title="Best Paper Presentation Award" alt="Best Paper Presentation Award"> Best Paper Presentations</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}
        {% if item.ptype == 'Journal' %}
            {% assign source = site.data.journalpapers %}
        {% endif %}
        {% if item.ptype == 'Conference' %}
            {% assign source = site.data.conferencepapers %}
        {% endif %}
        {% if item.ptype == 'Invited Journal' %}
            {% assign source = site.data.invitedjournalpapers %}
        {% endif %}
        {% for j in source %}
            {% if j.id == item.id %} 
                <p class="medLarge" id="{{ j.id }}" style="margin-bottom: 0.3em;">
                    <strong>{{ j.Title }} (ID:&nbsp;{{ j.id }})</strong>
                </p>
                <p class="font_70" >
                    {% assign authornames = j.authors | split: ";" %}
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
                {% if j.abstract %}
                    <div id="Presentation_{{ j.id }}" class="wrap-collabsible"> <input id="collapsiblePresentation_{{ j.id }}" class="toggle" type="checkbox"> 
                        <label for="collapsiblePresentation_{{ j.id }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ j.abstract }}</p>
                            </div>
                        </div>
                    </div>
                {% endif %}
            {% endif %}
        {% endfor %}  
    {% endfor %}
</div>

{% assign award = site.data.awards | where: "type", "Presentation" | where: "award", "Honorable Mention" %}
{% if award.size > 0  %}
<div>
    <h2 id='paper-presentation-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm2.png" | relative_url }}" title="Best Paper Presentation Honorable Mention" alt="Best Paper Presentation Honorable Mention"> Best Paper Presentation - Honorable Mentions</h2>
</div>
{% endif %}    
<div style="padding-bottom:15px;">
    {% for item in award %}
        {% if item.ptype == 'Journal' %}
            {% assign source = site.data.journalpapers %}
        {% endif %}
        {% if item.ptype == 'Conference' %}
            {% assign source = site.data.conferencepapers %}
        {% endif %}
        {% if item.ptype == 'Invited Journal' %}
            {% assign source = site.data.invitedjournalpapers %}
        {% endif %}
        {% for j in source %}
            {% if j.id == item.id %}
                <p class="medLarge" id="{{ j.id }}" style="margin-bottom: 0.3em;">
                    <strong>{{ j.Title }} (ID:&nbsp;{{ j.id }})</strong>
                </p>
                <p class="font_70" >
                    {% assign authornames = j.authors | split: ";" %}
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
                {% if j.abstract %}
                    <div id="Presentation_{{ j.id }}" class="wrap-collabsible"> <input id="collapsiblePresentation_{{ j.id }}" class="toggle" type="checkbox"> 
                        <label for="collapsiblePresentation_{{ j.id }}" class="lbl-toggle">Abstract</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>{{ j.abstract }}</p>
                            </div>
                        </div>
                    </div>
                {% endif %}
            {% endif %}
        {% endfor %}  
    {% endfor %}
</div>