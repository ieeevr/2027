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
    <div class = "ieeevrmsgboxInsideNoColor small_emphasize">            
        <div class= "bold alignCenter paddingBottomxSmall">
            Congratulations to the Best Paper Winners and Honorable Mentions!<br />
            The other award winners will be announced during the week of the conference.
        </div>
    </div>
</div>
<table class="styled-table" style="font-size: 0.9em; ">
    <tr>
        <th colspan="3">Conference Awards - Quick Links</th>
    </tr>
    <tr>
        <td><a href="#papers">Paper</a></td>
        <td><a href="#paper-best">Best Papers</a></td>
        <td><a href="#paper-honorable">Honorable Mentions</a></td>
    </tr> 
    <tr>
        <td><a href="#posters">Poster</a></td>
        <td>Best Posters</td>
        <td>Honorable Mentions</td>
        <!--
       <td><a href="#poster-best">Best Poster</a></td>
        <td><a href="#poster-honorable">Honorable Mentions</a></td>-->
    </tr>  
    <tr>
        <td><a href="#demos">Research Demo</a></td>        
        <td>Best Research Demos</td>
        <td>Honorable Mentions</td>
        <!--
        <td><a href="#demo-best">Best Research Demos</a></td>
        <td><a href="#demo-honorable">Honorable Mentions</a></td>-->
    </tr>
    <tr>
        <td><a href="#3dui">3DUI Contest Demo</a></td>
        <td>Best 3DUI Contest Demos</td>
        <td>Honorable Mentions</td>
        <!--<td><a href="#3dui-best">Best 3DUI Contest Demos</a></td>
        <td><a href="#3dui-honorable">Honorable Mentions</a></td>-->
    </tr>  
    <tr>
        <td><a href="#dc">Doctoral Consortium</a></td>
        <td>Best Doctoral Consortiums</td>
        <td>Honorable Mentions</td>
        <!--<td><a href="#DC-best">Best Doctoral Consortiums</a></td>
        <td><a href="#DC-honorable">Honorable Mentions</a></td>-->
    </tr>      
    <tr>
        <td><a href="#paper-presentation">Paper Presentation</a></td>
        <td>Best Paper Presentations</td>
        <td>Honorable Mentions</td>
        <!--<td><a href="#paper-presentation-best">Best Paper Presentations</a></td>
        <td><a href="#paper-presentation-honorable">Honorable Mentions</a></td>-->
    </tr>  
</table>
<h2 id="papers">Best Papers & Honorable Mentions</h2>

<p>The IEEE VR Best Paper Awards honor exceptional papers published and presented at the IEEE VR conference. During the review process, the program committee chairs will choose approximately 3% of submissions to receive an award. Among these chosen submissions, the separate Conference Awards Selection Committee will select the best submissions to receive a Best Paper Award (ca. 1% of total submissions), while a selection of the remaining submissions receive an Honorable Mention Award. Papers that receive an award will be marked in the program, and authors will receive a certificate at the conference.</p>

<h2 id='paper-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Paper Award" alt="Best Paper Award"> Best Papers</h2>
<div>
    {% for item in site.data.awards %}
        {% if item.type == 'Journal' %}  
            {% if item.award == 'Best Paper' %}      
                {% if item.ptype == 'Journal' %}
                    {% assign source = site.data.journalpapers %}
                {% endif %}
                {% if item.ptype == 'Conference' %}
                    {% assign source = site.data.conferencepapers %}
                {% endif %}
                {% for j in source %}
                    {% if j.id == item.id %}
                        {% assign authornames = j.authors | split: ";" %}
                        <p id="{{ j.id }}">
                            <strong>{{ j.Title }} ({{ item.ptype }}: {{ j.id }})</strong><br/>
                            <span class="font_90">
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
                            </span>
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
         {% endif %}
        {% endif %}     
    {% endfor %}
</div>

<h2 id='paper-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Paper Honorable Mention" alt="Best Paper Honorable Mention"> Best Papers - Honorable Mentions</h2>
<div>
    {% for item in site.data.awards %}
        {% if item.type == 'Journal' %}  
            {% if item.award == 'Honorable Mention' %}      
                {% if item.ptype == 'Journal' %}
                    {% assign source = site.data.journalpapers %}
                {% endif %}
                {% if item.ptype == 'Conference' %}
                    {% assign source = site.data.conferencepapers %}
                {% endif %}
                {% for j in source %}
                    {% if j.id == item.id %}
                        {% assign authornames = j.authors | split: ";" %}
                        <p id="{{ j.id }}">
                            <strong>{{ j.Title }} ({{ item.ptype }}: {{ j.id }})</strong><br/>
                            <span class="font_90">
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
                            </span>
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
         {% endif %}
        {% endif %}     
    {% endfor %}
</div>

<h2 id="posters">Best Posters & Honorable Mentions</h2>

<p>The IEEE VR Best Poster Awards honors exceptional posters published and presented at the IEEE VR conference. During the review process, the best poster committee for IEEE VR consists of three distinguished members chosen by the Conference Awards Committee and Poster Chairs, which will select the best posters. Posters that receive an award will be marked in the program, and authors will receive a certificate at the conference. </p>
<!---
<h2 id='poster-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Poster Award" alt="Best Poster Award"> Best Poster</h2>
<div>
    {% for item in site.data.awards %}
        {% if item.type == 'Poster' %}
            {% if item.award == 'Best Poster' %}
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
                        <p id="{{ j.id }}">
                            <strong>{{ j.title }} (ID:&nbsp;{{ j.id }})</strong><br/>
                            <span class="font_90">
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
                            </span>
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
            {% endif %}
        {% endif %}
    {% endfor %}
</div>
<h2 id='poster-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Poster Honorable Mention" alt="Best Poster Honorable Mention"> Best Poster - Honorable Mention</h2>
<div>
    {% for item in site.data.awards %}
        {% if item.type == 'Poster' %}
            {% if item.award == 'Honorable Mention' %}
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
                        <p id="{{ j.id }}">
                            <strong>{{ j.title }} (ID:&nbsp;{{ j.id }})</strong><br/>
                            <span class="font_90">
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
                            </span>
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
            {% endif %}
        {% endif %}
    {% endfor %}
</div>
--->
<h2 id="demos">Best Research Demos & Honorable Mentions</h2>
<p>The IEEE VR Best Research Demo Awards honors exceptional research demos published and presented at the IEEE VR conference. The IEEE VR Research Demonstration Chairs rank the accepted demos and recommend approximately 10% of all demos for an award. The best research demo committee for IEEE VR consists of three distinguished members chosen by the Conference Awards Committee Chairs and the Research Demonstration Chairs. This committee selects one of the demos for the Best Research Demo Award and one for the Honorable Mention Award. The corresponding authors will receive a certificate at the conference. </p>
<!---
<h2 id='demo-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Research Demo Award" alt="Best Research Demo Award"> Best Research Demo</h2>
<div>
    {% for item in site.data.awards %}
        {% if item.type == 'Demo' %}
            {% if item.award == 'Best Demo' %}
                {% for j in site.data.demos %}
                    {% if j.id == item.id %}                   
                        <p id="{{ j.id }}">
                            <strong>{{ j.title }} (ID:&nbsp;{{ j.id }})</strong><br/>
                            <span class="font_90">
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
                            </span>
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
            {% endif %}
        {% endif %}
    {% endfor %}
</div>
<h2 id='demo-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Research Demo Honorable Mention" alt="Best Research Demo Honorable Mention"> Best Research Demo - Honorable Mention</h2>
<div>
    {% for item in site.data.awards %}
        {% if item.type == 'Demo' %}
            {% if item.award == 'Honorable Mention' %}
                {% for j in site.data.demos %}
                    {% if j.id == item.id %}                                      
                        <p id="{{ j.id }}">
                            <strong>{{ j.title }} (ID:&nbsp;{{ j.id }})</strong><br/>
                            <span class="font_90">
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
                            </span>
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
            {% endif %}
        {% endif %}
    {% endfor %}
</div>
--->
<h2 id="dui">Best 3DUI Contest Demos & Honorable Mentions</h2>
<p>The IEEE VR Best 3DUI Contest Submission Awards honors exceptional 3DUI contest submissions published and presented at the IEEE VR conference. The 3DUI contest chairs select one of the submissions for the Best 3DUI Contest Submission Award and one for the Honorable Mention Award. The final decision is based on a combination of the reviews’ scores, scores from experts testing the contest submission during the conference, and the audience scores. The winning team with the highest score will be awarded. Authors will receive a certificate at the conference.</p>
<!---
<h2 id='3dui-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best 3DUI Contest Demo Award" alt="Best Paper Award"> Best 3DUI Contest Demo</h2>
<div style="padding-bottom:15px;">
    {% for item in site.data.awards %}
        {% if item.type == '3DUI Contest' %}
            {% if item.award == 'Best 3DUI' %}
                {% for j in site.data.contest3dui %}
                    {% if j.id == item.id %}                                   
                        <p id="{{ j.id }}">
                            <strong>{{ j.title }} (ID:&nbsp;{{ j.id }})</strong><br/>
                            <span class="font_90">
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
                            </span>
                        </p>
                    {% endif %}
                {% endfor %}
            {% endif %}
        {% endif %}    
    {% endfor %}
</div>
<h2 id='3dui-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best 3DUI Contest Demo Honorable Mention" alt="Best 3DUI Contest Demo Honorable Mention"> Best 3DUI Contest Demo - Honorable Mention</h2>
<div style="padding-bottom:15px;">
    {% for item in site.data.awards %}
        {% if item.type == '3DUI Contest' %}
            {% if item.award == 'Honorable Mention' %}
                {% for j in site.data.contest3dui %}
                    {% if j.id == item.id %}                                   
                        <p id="{{ j.id }}">
                            <strong>{{ j.title }} (ID:&nbsp;{{ j.id }})</strong><br/>
                            <span class="font_90">
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
                            </span>
                        </p>
                    {% endif %}
                {% endfor %}
            {% endif %}
        {% endif %}    
    {% endfor %}
</div>
--->
<h2 id="dc">Best DC Papers & Honorable Mentions</h2>
<p>The IEEE VR Best Doctoral Consortium (DC) Paper Awards honors exceptional DC papers published and presented at the IEEE VR conference. The best DC paper committee consists of three distinguished members chosen by the Conference Awards Committee Chairs and the DC chairs. The DC chairs recommend 20% of all DC papers for such an award. The best DC committee selects one of these DC papers for Best DC Paper Award and one to receive an Honorable Mention Award. DC papers that receive an award will be marked in the program, and authors will receive a certificate at the conference. </p>
<!---
<h2 id='DC-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Doctoral Consortium Award" alt="Best Doctoral Consortium Award"> Best Doctoral Consortium</h2>
<div>
    {% for item in site.data.awards %}
        {% if item.type == 'DC' %}
            {% if item.award == 'Best DC' %}
                {% for j in site.data.dc %}
                    {% if j.id == item.id %}                                      
                        <p id="{{ j.id }}">
                            <strong>{{ j.title }} (ID:&nbsp;{{ j.id }})</strong><br/>
                            <span class="font_90">
                                <span class="bold">Author:</span> <span class="">{{ j.author | strip }}</span>, <i>{{ j.affiliation | strip }}</i><br />
                                <span class="bold">Mentor:</span> <span class="">{{ j.mentor | strip }}</span>
                            </span>
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
            {% endif %}
        {% endif %}
    {% endfor %}
</div>
<h2 id='DC-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best DC Paper Honorable Mention" alt="Best DC Paper Honorable Mention"> Best Doctoral Consortium - Honorable Mention</h2>
<div>
    {% for item in site.data.awards %}
        {% if item.type == 'DC' %}
            {% if item.award == 'Honorable Mention' %}
                {% for j in site.data.dc %}
                    {% if j.id == item.id %}                                      
                        <p id="{{ j.id }}">
                            <strong>{{ j.title }} (ID:&nbsp;{{ j.id }})</strong><br/>
                            <span class="font_90">
                                <span class="bold">Author:</span> <span class="">{{ j.author | strip }}</span>, <i>{{ j.affiliation | strip }}</i><br />
                                <span class="bold">Mentor:</span> <span class="">{{ j.mentor | strip }}</span>
                            </span>
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
            {% endif %}
        {% endif %}
    {% endfor %}
</div>
--->
<h2 id="paper-presentation">Best Paper Presentations & Honorable Mentions</h2>
<p>The IEEE VR Best Presentation Awards honor excellent, interesting, and stimulating presentations of research papers at the IEEE VR conference. During the conference, the audience can give a vote for each presentation that they think deserves an award. Approximately 3% of presentations with the highest number of votes receive an award. Among these selected presentations, the top 1% regarding the number of votes, will receive a Best Presentation Award, while the remaining presentations receive an Honorable Mention Award.</p>
<!---
<h2 id='paper-presentation-best' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/best-star.png" | relative_url }}" title="Best Paper Presentation Award" alt="Best Paper Presentation Award"> Best Paper Presentation</h2>
<div>
    {% for item in site.data.awards %}
        {% if item.type == 'Presentation' %}
            {% if item.ptype == 'Journal' %}
                {% assign source = site.data.journalpapers %}
            {% endif %}
            {% if item.ptype == 'Conference' %}
               {% assign source = site.data.conferencepapers %}
            {% endif %}
            {% if item.award == 'Best Presentation' %}
                {% for j in source %}
                    {% if j.id == item.id %}
                        {% assign authornames = j.authors | split: ";" %}
                        <p id="{{ j.id }}">
                            <strong>{{ j.Title }} (ID:&nbsp;{{ j.id }})</strong><br/>
                            <span class="font_90">
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
                            </span>
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
            {% endif %}
        {% endif %}        
    {% endfor %}
</div>
<h2 id='paper-presentation-honorable' style="text-align: center; color: #00aeef;"><img src= "{{ "/assets/images/awards/hm2.png" | relative_url }}" title="Best Paper Presentation Honorable Mention" alt="Best Paper Presentation Honorable Mention"> Best Paper Presentation - Honorable Mention</h2>
<div>
    {% for item in site.data.awards %}
        {% if item.type == 'Presentation' %}
            {% if item.ptype == 'Journal' %}
                {% assign source = site.data.journalpapers %}
            {% endif %}
            {% if item.ptype == 'Conference' %}
               {% assign source = site.data.conferencepapers %}
            {% endif %}
            {% if item.award == 'Honorable Mention' %}
                {% for j in source %}
                    {% if j.id == item.id %}
                        {% assign authornames = j.authors | split: ";" %}
                        <p id="{{ j.id }}">
                            <strong>{{ j.Title }} (ID:&nbsp;{{ j.id }})</strong><br/>
                            <span class="font_90">
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
                            </span>
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
            {% endif %}
        {% endif %}        
    {% endfor %}
</div> 
--->

