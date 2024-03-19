---
layout: ieeevr-default
title: "Doctoral Consortium"
subtitle: "IEEE VR 2024"
title_separator: "|"
---


<h1>Doctoral Consortium</h1>
<div>
    <p>
        The Doctoral Consortium will be held on 16 March 2024 (Saturday) in the Sorcerer's Apprentice Ballroom. All times below are given in local time of Orlando, Florida USA EDT (UTC-4). 
    </p>
    <p>
        Here are the key information for the presenters and mentors:
        <ul>
            <li>Each presentation includes a 10-minute talk + 5-minute Q&A.</li>
            <li>All presenters and mentors need to be present at the scheduled session and are encouraged to attend as much of the doctoral consortium as possible. </li>
            <li>After each session, the mentors and students can use the Break/Lunch time for further breakout discussions and mentoring. </li>
            <li>Some students may have a pair of mentors. Because some mentors cannot attend the conference in person, we recommend that the students take the initiative to reach out to allocated mentors and arrange a separate online meeting for mentoring. </li>
            <li>The venue for the DC track is: Sorcerer's Apprentice, 2. </li>
            <li>The final mentor allocation will be released soon. </li>
            <li>The presentation and mentoring at the DC mark the start of collaborations and we strongly recommend that the presenters and mentors hold periodical meetings to deepen the collaborations. </li>
        </ul>
    </p>
</div>
<div>
    <table class="styled-table font_80">
        <tr>
            <th colspan="2">Schedule - 16 March 2024, Saturday</th>
        </tr>
        <tr>
            <td>08:20 - 08:30 am</td>
            <td>
                Welcome
            </td>
        </tr>
        <tr>
            <td>08:30 - 10:00 am</td>
            <td>
                <strong>Presentations 1-6 (10-min talk + 5-min Q&A for each presentation)</strong><br/>
                Jinwook Kim - Jan Springer<br/>
                Hyeongil Nam - Jens Grubert<br/>
                Siamak Ahmadzadeh Bazzaz - Jan Springer<br/>
                Muhammad Twaha Ibrahim - Jan Springer<br/>
                Xueqi Wang - Frank Guan<br/>
                Jiachen Liang - Frank Guan
            </td>
        </tr>
        <tr>
            <td >10:00 - 10:30 am</td>
            <td>
                Break (breakout with mentors)
            </td>
        </tr>
        <tr>
            <td >10:30 - 12:00 am</td>
            <td>
                <strong>Presentations 7-12 (10-min talk + 5-min Q&A for each presentation)</strong><br/>
                Seoyoung Kang - Bruce Thomas<br/>
                Assem Kroma - Bruce Thomas<br/>
                Kristen Grinyer - Bruce Thomas<br/>
                Rachel Masters - Jens Grubert<br/>
                Sunday Ubur - Shohei Mori<br/>
                Dahlia Musa - Shohei Mori
            </td>
        </tr>
        <tr>
            <td>12:00 - 1:30 pm</td>
            <td>
               Lunch
            </td>
        </tr>
        <tr>
            <td>13:30 - 15:30 pm</td>            
            <td>
                <strong>Presentations 13-20 (10-min talk + 5-min Q&A for each presentation)</strong><br/>
                Dong Woo Yoo - Guillaume Moreau<br/>
                Brett Benda - Steve Feiner<br/>
                Seonji Kim - Dieter Schmalstieg<br/>
                Hail Song - Jason Orlosky<br/>
                Dongyun Han - Steve Feiner<br/>
                Jennifer Cremer - Dieter Schmalstieg<br/>
                Elham Mohammadrezaei - Guillaume Moreau<br/>
                Nikitha Donekal Chandrashekar - Guillaume Moreau
            </td>
        </tr>
        <tr>
            <td >15:30 - 16:00 pm</td>
            <td>
                Break (breakout with mentors)
            </td>
        </tr>
        <tr>
            <td>16:00 - 17:00 pm</td>
            <td>
                <strong>Presentations 21-24 (10-min talk + 5-min Q&A for each presentation)</strong><br/>
                Danah Omary - Isaac Cho<br/>
                Jingyi Zhang - Frank Guan<br/>
                Tomáš Nováček - Isaac Cho<br/>
                Ryan Canales - Isaac Cho<br/>
            </td>
        </tr>
        <tr>
            <td >17:00 - 17:30 pm</td>
            <td>
                Breakout with mentors
            </td>
        </tr>
    </table>    
</div>
<div>
    <h2 id="P3" class="pink" style="padding-top:25px;">Accepted Students</h2>
    {% for dc in site.data.dc %}
            {% for a in site.data.awards %}  
                {% if a.type == 'DC' %}
                    {% if a.id == dc.id %}
                        {% if a.award == "Best DC" %}
                            <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#dc-best"><img src= "{{ "/assets/images/awards/best.png" | relative_url }}" title="Best Doctoral Consortium Consortium Paper" alt="Best Doctoral Consortium Paper"></a></div>
                        {% endif %}                                                    
                        {% if a.award == "Honorable Mention" %}
                            <div class="align-left"><a href="{{ "/awards/conference-awards" | relative_url }}#dc-honorable"><img src= "{{ "/assets/images/awards/hm.png" | relative_url }}" title="Best Doctoral Consortium Paper Honorable Mention" alt="Best Doctoral Consortium Paper Honorable Mention"></a></div>
                        {% endif %}
                    {% endif %}
                {% endif %}
            {% endfor %}
            <p class="medLarge" id="{{ dc.id }}" style="margin-bottom: 0.3em;">
                <strong>{{ dc.title }} (ID:&nbsp;{{ dc.id }})</strong>
            </p>
            <p class="clear font_75" >
                <span class="bold">Author:</span> <span class="">{{ dc.author | strip }}</span>, <i>{{ dc.affiliation | strip }}</i><br />
                <span class="bold">Mentor:</span> <span class="">{{ dc.mentor | strip }}</span>
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
    {% endfor %}
</div>