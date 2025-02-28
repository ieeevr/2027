---
layout: ieeevr-default
title: "Doctoral Consortium"
subtitle: "IEEE VR 2024"
title_separator: "|"
---


<h1>Doctoral Consortium</h1>
<div>
    <p>
        The Doctoral Consortium will be held on 8 March 2025 (Saturday) in “La Conchée” room. All times below are given in local time of France (UTC+1).
    </p>
    <p>
        Here are the key information for the presenters and mentors:
        <ul>
            <li>Each presentation includes a 10-minute talk + 5-minute Q&A.</li>
            <li>All presenters and mentors need to be present at the scheduled session and are encouraged to attend as much of the doctoral consortium as possible.</li>
            <li>After each session, the mentors and students can use the Break/Lunch time for further breakout discussions and mentoring.</li>
            <li>Because some mentors cannot attend the conference in person, we recommend that the students take the initiative to reach out to allocated mentors and arrange a separate online meeting for mentoring.</li>
            <li>The venue for the DC track is: “La Conchée” room.</li>
            <li>The presentation and mentoring at the DC mark the start of collaborations and we strongly recommend that the presenters and mentors hold periodical meetings to deepen the collaborations.</li>
            <li>In the following schedule, the student is mentionned first followed by the associated mentors.</li>
        </ul>
    </p>
</div>
<div>
    <table class="styled-table font_80">
        <tr>
            <th colspan="2">Schedule - 8 March 2025, Saturday</th>
        </tr>
        <tr>
            <td>08:30 - 08:45</td>
            <td>
                Welcome & Introduction
            </td>
        </tr>
        <tr>
            <td>08:45 - 10:15</td>
            <td>
                <strong>Presentations 1-6 (10-min talk + 5-min Q&A for each presentation)</strong><br/>
                Agata Szymańska - Victoria Interrante (will meet later) / Nilufar Baghaei (online)<br/>
                Elena Lopez-Contreras - Joe Gabbard / Frank Guan<br/>
                Frederick Vickery - Dieter Schmalstieg / Benjamin Lok (online)<br/>
                Kristof Timmerman - Jean-Marie Normand (will meet later) / António Coelho (online)<br/>
                Guanlin Li - Tobias Langlotz / Andrea Stevenson Won (online)<br/>
                Haopeng Wang - Joe Gabbard / Thomas Pietrzak (will meet later)
            </td>
        </tr>
        <tr>
            <td >10:15 - 10:45</td>
            <td>
                Break (breakout with mentors)
            </td>
        </tr>
        <tr>
            <td >10:45 - 12:30</td>
            <td>
                <strong>Presentations 7-13 (10-min talk + 5-min Q&A for each presentation)</strong><br/>
                Marc Soler Bages - Indira Thouvenin / Teng Han (online)<br/>
                Zhongyuan Yu - Shohei Mori / Stefanie Zollmann<br/>
                Eva Di Noia - Léa Pillette / Indira Thouvenin<br/>
                Jacob Rubinstein - Shohei Mori / Stefanie Zollmann<br/>
                Carlos-Andres Lievano-Taborda - Yue Liu (pending visa) / Benjamin Lok (online)<br/>
                Ilan Vol - Frank Guan / Léa Pillette<br/>
				Marta Goyena - Katja Zibrek (if busy, will meet later) / Andrea Stevenson Won (online)
            </td>
        </tr>
        <tr>
            <td>12:30 - 14:00</td>
            <td>
               Lunch
            </td>
        </tr>
        <tr>
            <td>14:00 - 15:45</td>            
            <td>
                <strong>Presentations 14-20 (10-min talk + 5-min Q&A for each presentation)</strong><br/>
                Yuke Pi - Dieter Schmalstieg / Steve Feiner<br/>
                Xiang Li - Steve Feiner / Tobias Langlotz<br/>
                Manel Boukli Hacene - Claudio Pacchierotti / Teng Han (online)<br/>
                Mohammad Ghazanfari - Claudio Pacchierotti / Jean-Pierre Jessel (online)<br/>
                Tristan Lannuzel - Jean-Marie Normand (will meet later) / Jean-Pierre Jessel (online)<br/>
                Matteo Bosco - Tobias Höllerer / Katja Zibrek (if busy, will meet later)<br/>
                Giuseppina Pinky Kathlea Diatmiko - Grace Ahn / Thomas Pietrzak (will meet later)
            </td>
        </tr>
        <tr>
            <td >15:45 - 16:15</td>
            <td>
                Break (breakout with mentors)
            </td>
        </tr>
        <tr>
            <td>16:15 - 17:15</td>
            <td>
                <strong>Presentations 21-24 (10-min talk + 5-min Q&A for each presentation)</strong><br/>
                Ana Rita Rebelo - Anthony Steed / Evan Suma (will meet later)<br/>
                Daniel Rupp - Doug Bowman / Victoria Interrante (will meet later)<br/>
                Hock Siang Lee - Anthony Steed / Evan Suma (will meet later)<br/>
                Samantha Monk - Grace Ahn / Nilufar Baghaei (online)<br/>
            </td>
        </tr>
        <tr>
            <td >17:15 - 18:00</td>
            <td>
                Breakout with mentors
            </td>
        </tr>
    </table>    
</div>
<div>
    <h2 id="P3" class="pink" style="padding-top:25px;">Accepted Students</h2>
    {% assign sorted_dc = site.data.dc | sort: "num" %}
    {% for dc in sorted_dc %}
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
    {% endfor %}
</div>