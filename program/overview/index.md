---
layout: ieeevr-default
title: "Program Overview"
subtitle: "IEEE VR 2025"
title_separator: "|"
---
<link rel="stylesheet" href="{{ '/assets/css/calendar.css' | relative_url }}?version=20250226">
    
<script>
    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

    (function($) {
        $(function() {
            $("#accordion > div").accordion({ header: "h4", heightStyle: "content", active: false, collapsible: true });
        })
    })(jQuery);

   $(document).ready(function(){
        let now = new Date();       
        let start = new Date("March 8, 2025 00:00:00");
        let end = new Date("March 12, 2025 18:00:00");
        let day = days[now.getDay()];

        if (start <= now && now <= end) {             
            switch (day) {
                case "Saturday":                    
                    $( ".preconf" ).show();
                    $('#day1').click();
                case "Sunday":                    
                    $( ".preconf" ).show();
                    $('#day2').click();
                case "Monday":
                    $('#day3').click();
                case "Tuesday":
                    $('#day4').click();
                case "Wednesday":
                    $('#day5').click();
                    break;
                default: 
            }
        } else {            
            $( ".preconf" ).show();
            $('#day1').click();
            $('#day2').click();
            $('#day3').click();
            $('#day4').click();
            $('#day5').click();
        } 
    });   
</script>

<h1 id="schedule-heading">Program Overview</h1>
<p><a href="{{ "/assets/downloads/IEEE_VR_2025.ics" | relative_url }}" download>Click here</a> to download the iCal file with the program of the conference.</p>
<p>
    <table class="program-table">
        <thead>
            <tr>
                <th colspan="4">
                IEEE VR 2025, March 8-12 - Select quick links below to skip to a specific day
                <div class="italic" style="text-align: right; float:right;">Updated: 20 February, 2025 </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="alignCenter" colspan="4">
                    <a href="{{ "/attend/conference-center-map/" | relative_url }}" target="_blank">Conference Center Map</a>
                </td>
            </tr>
           <tr class="preconf" style="display:none">
                <td class="text-nowrap"><a href="#day1">Saturday<br>2025-03-08</a></td>
                <td>
                    * Workshops<br>
                    * Tutorials<br>
                    * Doctoral Consortium
                </td>
                <td class="text-nowrap"><a href="#day2">Sunday<br>2025-03-09</a></td>
                <td>
                    * Workshops<br>
                    * Tutorials<br>
                    * Future Faculty Forum
                </td>
            </tr>
            <tr>
                <td class="text-nowrap"><a href="#day3">Monday<br>2025-03-10</a></td>
                <td>
                    * Opening & Awards<br>
                    * Keynote Speaker<br>
                    * Papers Sessions<br>
                    <div style="text-indent: -.7em; margin-left: .7em;">
                        * Posters & Research Demos & XR Gallery & 3DUI Contest Demos & Exhibits<br>
                    </div>
                    * Welcome Reception
                </td>
                <td class="text-nowrap"><a href="#day4">Tuesday<br>2025-03-11</a></td>
                <td>    
                    * Lightning Keynotes<br>
                    * Papers Sessions<br>                
                    <div style="text-indent: -.7em; margin-left: .7em;">
                        * Posters & Research Demos & XR Gallery & 3DUI Contest Demos & Exhibits<br>
                    </div>
					* Gala Dinner
                </td>
            </tr>
            <tr>
                <td class="text-nowrap"><a href="#day5">Wednesday<br>2025-03-12</a></td>
                <td>
                    * Keynote Speaker<br>
                    * Papers Sessions<br>
                    <div style="text-indent: -.7em; margin-left: .7em;">
                        * Posters & Research Demos & XR Gallery & 3DUI Contest Demos & Exhibits<br>
                    </div>
                    * Closing
                </td>
            </tr>
        </tbody>
    </table>
</p>

<div class="notice--info alignCenter bold" style="font-size: 0.9em !important;">
    Please note that all times are given in Saint-Malo, France local time (UTC+1).
</div>
<div class="clear"></div>
<div id="accordion">
    <div>
        <h4 id="day1">Saturday, 8 March 2025</h4>
        <div class="schedule-sat" aria-labelledby="Saturday, 8 March 2025 - Workshop Schedule"> 
            <p class="time-slot" style="grid-row: time-0745;">7:45</p> 
            <div class="session track-registration" style="grid-column: track-0; grid-row: time-0745 / time-1600;">  
                <div class="rotate_reg">             
                    <span class="session-title">Registration:&nbsp;7:45&#8209;16:00&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>  
<!-- SATURDAY Morning (Part 1) -->			
            <p class="time-slot" style="grid-row: time-0830;">8:30</p>  
             {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'ANIVAE' %}
                    <div class="session session-w3a track-workshop" style="grid-column: track-1; grid-row: time-0830 / time-1015;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>        
                {% endif %}   
            {% endfor %}                  
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'XR Health' %}
                    <div class="session session-w4a track-workshop" style="grid-column: track-2; grid-row: time-0830 / time-1015;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}    
            {% endfor %}               
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'GenAI-XR' %}
                    <div class="session session-w4a track-workshop" style="grid-column: track-3; grid-row: time-0830 / time-1015;">                    
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}   
            {% endfor %}             
            {% for workshop in site.data.workshops %}   
                {% if workshop.id == 'ENPT-XR' %}
                    <div class="session session-w2a track-workshop" style="grid-column: track-4; grid-row: time-0830 / time-1015;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>         
                {% endif %}     
            {% endfor %} 
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'PerGraVAR' %}
                    <div class="session session-w5a track-workshop" style="grid-column: track-5; grid-row: time-0830 / time-1015;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}     
            {% endfor %}                            
            {% for workshop in site.data.workshops %}    
                {% if workshop.id == 'KELVAR' %}
                    <div class="session session-w6a track-workshop" style="grid-column: track-6; grid-row: time-0830 / time-1015;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}     
            {% endfor %}     
			{% for workshop in site.data.workshops %}    
                {% if workshop.id == 'LocXR' %}
                    <div class="session session-w6a track-workshop" style="grid-column: track-7; grid-row: time-0830 / time-1015;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}     
            {% endfor %}   
            <div class="session session-w1b track-consortium" style="grid-column: track-11; grid-row: time-0830 / time-0845;">                    
                <span class="session-title"><a href="{{ '/program/doctoral-consortium/' | relative_url }}">Doctoral Consortium (DC) Welcome & Introduction</a></span>
                <span class="session-time">8:30-8:45</span>
                <span class="session-time">Room: La Conchée</span>
            </div>
            {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T1' %}
                    <div class="session session-t1a track-tutorials" style="grid-column: track-8; grid-row: time-0830 / time-1015;">                    
                        <span class="session-title">Tutorial<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: Charcot&nbsp;</span>
                    </div>
                {% endif %}   
            {% endfor %}         
            {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T2' %}
                    <div class="session session-t1a track-tutorials" style="grid-column: track-9; grid-row: time-0830 / time-1015;">                    
                        <span class="session-title">Tutorial<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: Vauban&nbsp;1</span>
                    </div>
                {% endif %}   
            {% endfor %}           
            <div class="session session-w1b track-consortium" style="grid-column: track-11; grid-row: time-0845 / time-1015;">                    
                <span class="session-title"><a href="{{ '/program/doctoral-consortium/' | relative_url }}">DC</a> | Presentations 1-6 (10-min talk + 5-min Q&A for each presentation)</span>
                <span class="session-time">8:45-10:15</span>
                <span class="session-time">Room: La Conchée</span>
            </div>              
            <p class="time-slot" style="grid-row: time-1015;">10:15</p>
            <div class="session session-16 track-all" style="grid-column:  track-1-start / track-10-end; grid-row: time-1015 / time-1045;">
                <span class="session-title">Break (Catered): 10:15-10:45&nbsp;&nbsp;</span><br>
                <span class="session-time">Room: Jacques Cartier & Cézembre</span>
            </div>                             
            <div class="session session-w1b track-consortium" style="grid-column: track-11; grid-row: time-1015 / time-1045;">                    
                <span class="session-title"><a href="{{ '/program/doctoral-consortium/' | relative_url }}">DC</a> | Break (Catered) (breakout with mentors)</span>
                <span class="session-time">10:15-10:45</span>
                <span class="session-time">Room: La Conchée</span>
            </div>       
<!-- SATURDAY Morning (Part 2) -->		 
             <p class="time-slot" style="grid-row: time-1045;">10:45</p>                                                           
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'ANIVAE' %}
                    <div class="session session-w4b track-workshop" style="grid-column: track-1; grid-row: time-1045 / time-1230;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}    
            {% endfor %}                
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'XR Health' %}
                    <div class="session session-w1b track-workshop" style="grid-column: track-2; grid-row: time-1045 / time-1230;">                    
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}   
            {% endfor %}           
            {% for workshop in site.data.workshops %}   
                {% if workshop.id == 'GenAI-XR' %}
                    <div class="session session-w2b track-workshop" style="grid-column: track-3; grid-row: time-1045 / time-1230;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>         
                {% endif %}     
            {% endfor %}             
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'ENPT-XR' %}
                    <div class="session session-w5b track-workshop" style="grid-column: track-4; grid-row: time-1045 / time-1230;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}     
            {% endfor %}                            
            {% for workshop in site.data.workshops %}    
                {% if workshop.id == 'PerGraVAR' %}
                    <div class="session session-w6b track-workshop" style="grid-column: track-5; grid-row: time-1045 / time-1230;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}     
            {% endfor %}                                      
            {% for workshop in site.data.workshops %}    
                {% if workshop.id == 'KELVAR' %}
                    <div class="session session-w6b track-workshop" style="grid-column: track-6; grid-row: time-1045 / time-1230;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}     
            {% endfor %}                               
            {% for workshop in site.data.workshops %}    
                {% if workshop.id == 'LocXR' %}
                    <div class="session session-w6b track-workshop" style="grid-column: track-7; grid-row: time-1045 / time-1230;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}     
            {% endfor %} 
             {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T1' %}
                    <div class="session session-t1b track-tutorials" style="grid-column: track-8; grid-row: time-1045 / time-1230;">                    
                        <span class="session-title">Tutorial (cont)<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: Charcot</span>
                    </div>
                {% endif %}   
            {% endfor %}     
             {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T3' %}
                    <div class="session session-t1b track-tutorials" style="grid-column: track-9; grid-row: time-1045 / time-1230;">                    
                        <span class="session-title">Tutorial<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: Vauban&nbsp;1</span>
                    </div>
                {% endif %}   
            {% endfor %}  
             {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T4' %}
                    <div class="session session-t1b track-tutorials" style="grid-column: track-10; grid-row: time-1045 / time-1230;">                    
                        <span class="session-title">Tutorial<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: Vauban&nbsp;2</span>
                    </div>
                {% endif %}   
            {% endfor %}  
            <div class="session session-w1b track-consortium" style="grid-column: track-11; grid-row: time-1045 / time-1230;">                    
                <span class="session-title"><a href="{{ '/program/doctoral-consortium/' | relative_url }}">DC</a> | Presentations 7-13 (10-min talk + 5-min Q&A for each presentation)</span>
                <span class="session-time">10:45-12:30</span>
                <span class="session-time">Room: La Conchée</span>
            </div>  
<!-- SATURDAY Lunch -->		          
            <p class="time-slot" style="grid-row: time-1230;">12:30</p> 
            <div class="session session-lunch track-all" style="grid-column: track-1-start / track-10-end; grid-row: time-1230 / time-1400;">
                <span class="session-title">Lunch (Not Catered): 12:30-14:00</span>
            </div>                                           
            <div class="session session-w1b track-consortium" style="grid-column: track-11; grid-row: time-1230 / time-1400;">                 
                <span class="session-title"><a href="{{ '/program/doctoral-consortium/' | relative_url }}">DC</a> | Lunch (Not Catered) (breakout with mentors)</span><br/>
                <span class="session-time">12:30-14:00</span>
                <span class="session-time">Room: La Conchée</span>
            </div>      
<!-- SATURDAY Afternoon (Part 1) -->		    
            <p class="time-slot" style="grid-row: time-1400;">14:00</p>     
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'ARCHERIX' %}
                    <div class="session session-9a track-workshop" style="grid-column: track-1; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>            
                {% endif %}     
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'MASSXR' %}
                    <div class="session session-10a track-workshop" style="grid-column: track-2; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}     
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'GEMINI' %}
                    <div class="session session-7a track-workshop" style="grid-column: track-3; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>            
                {% endif %}     
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'ReViSI' %}
                    <div class="session session-8a track-workshop" style="grid-column: track-4; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>              
                {% endif %}     
            {% endfor %} 
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'WISP' %}
                    <div class="session session-11a track-workshop" style="grid-column: track-5; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}     
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'NGA' %}
                    <div class="session session-6c track-workshop" style="grid-column: track-6; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}       
            {% endfor %}       
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'IDEATExR' %}
                    <div class="session session-6c track-workshop" style="grid-column: track-7; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}       
            {% endfor %}   
             {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T5' %}
                    <div class="session session-t1b track-tutorials" style="grid-column: track-8; grid-row: time-1400 / time-1545;">                    
                        <span class="session-title">Tutorial<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: Charcot</span>
                    </div>
                {% endif %}   
            {% endfor %}  
             {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T6' %}
                    <div class="session session-t1b track-tutorials" style="grid-column: track-9; grid-row: time-1400 / time-1545;">                    
                        <span class="session-title">Tutorial<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: Vauban&nbsp;1</span>
                    </div>
                {% endif %}   
            {% endfor %}  
             {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T7' %}
                    <div class="session session-t1b track-tutorials" style="grid-column: track-10; grid-row: time-1400 / time-1545;">                    
                        <span class="session-title">Tutorial<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: Vauban&nbsp;2</span>
                    </div>
                {% endif %}   
            {% endfor %}  
            <div class="session session-w1b track-consortium" style="grid-column: track-11; grid-row: time-1400 / time-1545;">                    
                <span class="session-title"><a href="{{ '/program/doctoral-consortium/' | relative_url }}">DC</a> | Presentations 14-20 (10-min talk + 5-min Q&A for each presentation)</span>
                <span class="session-time">14:00-15:45</span>
                <span class="session-time">Room: La Conchée</span>
            </div>         
            <p class="time-slot" style="grid-row: time-1545;">15:45</p>
            <div class="session session-16 track-all" style="grid-column:  track-1-start / track-10-end; grid-row: time-1545 / time-1615;">
                <span class="session-title">Break (Catered): 15:45-16:15&nbsp;&nbsp;</span><br>
                <span class="session-time">Room: Rotondes Jacques Cartier & Cézembre</span>
            </div>                  
            <div class="session session-w1b track-consortium" style="grid-column: track-11; grid-row: time-1545 / time-1615;">                
                <span class="session-title"><a href="{{ '/program/doctoral-consortium/' | relative_url }}">DC</a> | Break (Catered) (breakout with mentors)</span>
                <span class="session-time">15:45-16:15</span>
                <span class="session-time">Room: La Conchée</span>
            </div>          
<!-- SATURDAY Afternoon (Part 2) -->	
            <p class="time-slot" style="grid-row: time-1615;">16:15</p>               
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'ARCHERIX' %}
                    <div class="session session-9b track-workshop" style="grid-column: track-1; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>            
                {% endif %}     
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'MASSXR' %}
                    <div class="session session-10b track-workshop" style="grid-column: track-2; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}     
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'GEMINI' %}
                    <div class="session session-7b track-workshop" style="grid-column: track-3; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>            
                {% endif %}     
            {% endfor %}   
            {% for workshop in site.data.workshops %}
                {% if workshop.id == 'ReViSI' %}
                    <div class="session session-8b track-workshop" style="grid-column: track-4; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>              
                {% endif %}     
            {% endfor %}  
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'WISP' %}
                    <div class="session session-11b track-workshop" style="grid-column: track-5; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}     
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'NGA' %}
                    <div class="session session-6d track-workshop" style="grid-column: track-6; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}       
            {% endfor %}        
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'IDEATExR' %}
                    <div class="session session-6d track-workshop" style="grid-column: track-7; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}       
            {% endfor %}                  
             {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T8' %}
                    <div class="session session-t2a track-tutorials" style="grid-column: track-8; grid-row: time-1615 / time-1800;">                    
                        <span class="session-title">Tutorial<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: Charcot</span>
                    </div>
                {% endif %}   
            {% endfor %}                 
             {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T9' %}
                    <div class="session session-t2a track-tutorials" style="grid-column: track-9; grid-row: time-1615 / time-1800;">                    
                        <span class="session-title">Tutorial<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: Vauban&nbsp;1</span>
                    </div>
                {% endif %}   
            {% endfor %}             
             {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T7' %}
                    <div class="session session-t2a track-tutorials" style="grid-column: track-10; grid-row: time-1615 / time-1800;">                    
                        <span class="session-title">Tutorial (cont)<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: Vauban&nbsp;2</span>
                    </div>
                {% endif %}   
            {% endfor %} 
            <div class="session session-w1b track-consortium" style="grid-column: track-11; grid-row: time-1615 / time-1715;">                    
                <span class="session-title"><a href="{{ '/program/doctoral-consortium/' | relative_url }}">DC</a> | Presentations 21-24 (10-min talk + 5-min Q&A for each presentation)</span>
                <span class="session-time">16:15-17:15</span>
                <span class="session-time">Room: La Conchée</span>
            </div>  
			<p class="time-slot" style="grid-row: time-1800;">18:00</p>
            <div class="session session-w1b track-consortium" style="grid-column: track-11; grid-row: time-1715 / time-1800;">                    
                <span class="session-title"><a href="{{ '/program/doctoral-consortium/' | relative_url }}">DC</a> | Breakout with mentors</span>
                <span class="session-time">17:15-18:00</span>
                <span class="session-time">Room: La Conchée</span>
            </div> 		  	
        </div> 
    </div>
	<div>
        <h4 id="day2">Sunday, 9 March 2025</h4> 
        <div class="schedule-sun" aria-labelledby="Sunday, 9 March 2029 - Workshop Schedule">  
<!-- SUNDAY Morning (Part 1) -->
        <p class="time-slot" style="grid-row: time-0745;">7:45</p> 
            <div class="session track-registration" style="grid-column: track-0; grid-row: time-0745 / time-1600;">  
                <div class="rotate_reg">             
                    <span class="session-title">Registration:&nbsp;7:45&#8209;16:00&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>   
            <p class="time-slot" style="grid-row: time-0830;">8:30</p>                         
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'VR-HSA' %}
                    <div class="session session-w15a track-workshop" style="grid-column: track-1; grid-row: time-0830 / time-1015;"> 
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'XRMemory' %}
                    <div class="session session-w12a track-workshop" style="grid-column: track-2; grid-row: time-0830 / time-1015;">                        
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %} 
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'WSR' %}
                    <div class="session session-w13a track-workshop" style="grid-column: track-3; grid-row: time-0830 / time-1015;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>         
                {% endif %}      
            {% endfor %}  
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'SIC-XR' %}
                    <div class="session session-w16a track-workshop" style="grid-column: track-4; grid-row: time-0830 / time-1015;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %}  
            {% for workshop in site.data.workshops %}   
                {% if workshop.id == 'ReDigiTS' %}
                    <div class="session session-w17a track-workshop" style="grid-column: track-5; grid-row: time-0830 / time-1015;">                   
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %}  
            {% for workshop in site.data.workshops %}   
                {% if workshop.id == 'VHCIE' %}
                    <div class="session session-w17a track-workshop" style="grid-column: track-6; grid-row: time-0830 / time-1015;">                   
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %}  
            {% for workshop in site.data.workshops %}   
                {% if workshop.id == 'NIDIT' %}
                    <div class="session session-w17a track-workshop" style="grid-column: track-7; grid-row: time-0830 / time-1015;">                   
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %}                          
             {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T10' %}
                    <div class="session session-t3a track-tutorials" style="grid-column: track-8; grid-row: time-0830 / time-1015;">                    
                        <span class="session-title">Tutorial<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">8:30-10:15</span>
                        <span class="session-time">Room: Vauban&nbsp;2</span>
                    </div>
                {% endif %}   
            {% endfor %}                  
             <div class="session session-f31 track-f3" style="grid-column: track-9; grid-row: time-0815 / time-0830;">                        
                <span class="session-title"><a href="{{ '/program/future-faculty-forum/' | relative_url }}">Future Faculty Forum (F3)</a></span>
            </div>         
            <div class="session session-f32 track-f3" style="grid-column: track-9; grid-row: time-0830 / time-0845;">                        
                <span class="session-title"><a href="{{ '/program/future-faculty-forum/' | relative_url }}">F3</a> | Welcome & Opening Remarks</span>
                <span class="session-time">8:30-8:45</span>
                <span class="session-time">Room: La Conchée</span>
            </div>                
            <p class="time-slot" style="grid-row: time-0845;">8:45</p>           
            <div class="session session-f33 track-f3" style="grid-column: track-9; grid-row: time-0845 / time-0930;">  
                <span class="session-title"><a href="{{ '/program/future-faculty-forum/' | relative_url }}">F3</a> | Panel 1: Challenges & Opportunities of Interdisc. Research</span>                      
                <span class="session-time">8:45-9:30</span>
                <span class="session-time">Room: La Conchée</span>
            </div>      
			<p class="time-slot" style="grid-row: time-0930;">9:30</p>           
            <div class="session session-f33 track-f3" style="grid-column: track-9; grid-row: time-0930 / time-1015;">  
                <span class="session-title"><a href="{{ '/program/future-faculty-forum/' | relative_url }}">F3</a> | Panel 2: Differences in Universities</span>                      
                <span class="session-time">9:30-10:15</span>
                <span class="session-time">Room: La Conchée</span>
            </div> 			
            <p class="time-slot" style="grid-row: time-1015;">10:15</p>
            <div class="session session-b track-all" style="grid-column:  track-1-start / track-9-end; grid-row: time-1015 / time-1045;">
                <span class="session-title">Break (Catered): 10:15-10:45&nbsp;&nbsp;</span><br>
                <span class="session-time">Room: Rotondes Jacques Cartier & Cézembre</span>
            </div> 
<!-- SUNDAY Morning (Part 2) -->
            <p class="time-slot" style="grid-row: time-1045;">10:45</p>             
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'VR-HSA' %}
                    <div class="session session-w14b track-workshop" style="grid-column: track-1; grid-row: time-1045 / time-1230;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>        
                {% endif %}      
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'XRMemory' %}
                    <div class="session session-w15b track-workshop" style="grid-column: track-2; grid-row: time-1045 / time-1230;"> 
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'WSR' %}
                    <div class="session session-w12b track-workshop" style="grid-column: track-3; grid-row: time-1045 / time-1230;">                        
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %} 
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'SIC-XR' %}
                    <div class="session session-w13b track-workshop" style="grid-column: track-4; grid-row: time-1045 / time-1230;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>         
                {% endif %}      
            {% endfor %}  
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'ReDigiTS' %}
                    <div class="session session-w16b track-workshop" style="grid-column: track-5; grid-row: time-1045 / time-1230;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %}  
            {% for workshop in site.data.workshops %}   
                {% if workshop.id == 'VHCIE' %}
                    <div class="session session-w17b track-workshop" style="grid-column: track-6; grid-row: time-1045 / time-1230;">                   
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %}        
			{% for workshop in site.data.workshops %}   
                {% if workshop.id == 'NIDIT' %}
                    <div class="session session-w17b track-workshop" style="grid-column: track-7; grid-row: time-1045 / time-1230;">                   
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %}   			
            {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T11' %}
                    <div class="session session-t3b track-tutorials" style="grid-column: track-8; grid-row: time-1045 / time-1230;">                    
                        <span class="session-title">Tutorial<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">10:45-12:30</span>
                        <span class="session-time">Room: Vauban&nbsp;2</span>
                    </div>
                {% endif %}   
            {% endfor %}   
            <div class="session session-f34 track-f3" style="grid-column: track-9; grid-row: time-1045 / time-1145;">                        
                <span class="session-title"><a href="{{ '/program/future-faculty-forum/' | relative_url }}">F3</a> | Tutorial: Professor Application Process</span>
                <span class="session-time">10:45-11:45</span>
                <span class="session-time">Room: La Conchée</span>
            </div>      
            <p class="time-slot" style="grid-row: time-1145;">11:45</p>          
            <div class="session session-f35 track-f3" style="grid-column: track-9; grid-row: time-1145 / time-1230;">                        
                <span class="session-title"><a href="{{ '/program/future-faculty-forum/' | relative_url }}">F3</a> | SpeedAdvising</span>
                <span class="session-time">11:45-12:30</span>
                <span class="session-time">Room: La Conchée</span>
            </div>   
            <p class="time-slot" style="grid-row: time-1230;">12:30</p>
            <div class="session session-l track-all" style="grid-column: track-1-start / track-9-end; grid-row: time-1230 / time-1400;">
                <span class="session-title">Lunch (Not Catered): 12:30&#8209;14:00</span>
            </div>   
<!-- SUNDAY Afternoon (Part 1) -->                     
            <p class="time-slot" style="grid-row: time-1400;">14:00</p>             
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'SIVE' %}
                    <div class="session session-10 track-workshop" style="grid-column: track-1; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>            
                {% endif %}      
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'TrainingXR' %}
                    <div class="session session-11 track-workshop" style="grid-column: track-2; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %}               
            {% for workshop in site.data.workshops %} 
                {% if workshop.id == 'XRIOS' %}
                    <div class="session session-8 track-workshop" style="grid-column: track-3; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>            
                {% endif %}      
            {% endfor %}  
            {% for workshop in site.data.workshops %}   
                {% if workshop.id == 'MRSI' %}
                    <div class="session session-9 track-workshop" style="grid-column: track-4; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>              
                {% endif %}      
            {% endfor %}  
            {% for workshop in site.data.workshops %}   
                {% if workshop.id == 'PCIMW' %}
                    <div class="session session-12 track-workshop" style="grid-column: track-5; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'IVL' %}
                    <div class="session session-13 track-workshop" style="grid-column: track-6; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}       
            {% endfor %}         
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'XRaccess' %}
                    <div class="session session-13 track-workshop" style="grid-column: track-7; grid-row: time-1400 / time-1545;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">14:00-15:45</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}       
            {% endfor %}
            {% for tutorial in site.data.tutorials %}  
                {% if tutorial.id == 'T12' %}
                    <div class="session session-t3b track-tutorials" style="grid-column: track-8; grid-row: time-1400 / time-1545;">                    
                        <span class="session-title">Tutorial<br /><a href="{{ '/program/tutorials/' | relative_url }}#{{ tutorial.id }}">{{ tutorial.title }}</a></span><br/>
                        <span class="session-time">14:00-15:30</span>
                        <span class="session-time">Room: Vauban&nbsp;2</span>
                    </div>
                {% endif %}   
            {% endfor %}     
            <div class="session session-20 track-f3" style="grid-column: track-9; grid-row: time-1400 / time-1500;">                        
                <span class="session-title"><a href="{{ '/program/future-faculty-forum/' | relative_url }}">F3</a> | Tutorial: Review and Critique of Application Materials</span>
                <span class="session-time">14:00-15:00</span>
                <span class="session-time">Room: La Conchée</span>
            </div>      
			<div class="session session-20 track-f3" style="grid-column: track-9; grid-row: time-1500 / time-1545;">                        
                <span class="session-title"><a href="{{ '/program/future-faculty-forum/' | relative_url }}">F3</a> | SpeedAdvising</span>
                <span class="session-time">15:00-15:45</span>
                <span class="session-time">Room: La Conchée</span>
            </div> 			
            <p class="time-slot" style="grid-row: time-1545;">15:45</p>
            <div class="session session-16 track-all" style="grid-column: track-1 / track-9; grid-row: time-1545 / time-1615;">
                <span class="session-title">Break (Catered): 15:45-16:15&nbsp;&nbsp;</span><br>
                <span class="session-time">Room: Rotondes Jacques Cartier & Cézembre</span>
            </div>  
<!-- SUNDAY Afternoon (Part 2) -->  
            <p class="time-slot" style="grid-row: time-1615;">16:15</p>              
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'SIVE' %}
                    <div class="session session-10 track-workshop" style="grid-column: track-1; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>            
                {% endif %}      
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'TrainingXR' %}
                    <div class="session session-11 track-workshop" style="grid-column: track-2; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %}  
            {% for workshop in site.data.workshops %} 
                {% if workshop.id == 'XRIOS' %}
                    <div class="session session-8 track-workshop" style="grid-column: track-3; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>            
                {% endif %}      
            {% endfor %}  
            {% for workshop in site.data.workshops %}   
                {% if workshop.id == 'MRSI' %}
                    <div class="session session-12 track-workshop" style="grid-column: track-4; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}      
            {% endfor %}   
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'PCIMW' %}
                    <div class="session session-13 track-workshop" style="grid-column: track-5; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}       
            {% endfor %}       
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'IVL' %}
                    <div class="session session-13 track-workshop" style="grid-column: track-6; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}       
            {% endfor %} 
            {% for workshop in site.data.workshops %}  
                {% if workshop.id == 'XRaccess' %}
                    <div class="session session-13 track-workshop" style="grid-column: track-7; grid-row: time-1615 / time-1800;">
                        <span class="session-title">Workshop (cont)<br/><a href="{{ '/program/workshop/' | relative_url }}#{{ workshop.id }}">{{ workshop.title }} ({{ workshop.id }})</a></span><br/>
                        <span class="session-time">16:15-18:00</span>
                        <span class="session-time">Room: {{ workshop.room }}</span>
                    </div>
                {% endif %}       
            {% endfor %}                 
            <div class="session session-t3b track-gallery" style="grid-column: track-8; grid-row: time-1600 / time-1800;">                    
                <span class="session-title"><br /><a href="{{ '/program/xrgallery/' | relative_url }}">XR Gallery Round-table</a></span><br/>
                <span class="session-time">16:00-18:00</span>
                <span class="session-time">Room: Vauban 2</span>
            </div>
            <div class="session session-22 track-f3" style="grid-column: track-9; grid-row: time-1615 / time-1700;">                        
                <span class="session-title"><a href="{{ '/program/future-faculty-forum/' | relative_url }}">F3</a> | Panel 3: Lab Formation and Management </span>
                <span class="session-time">16:15-17:00</span>
                <span class="session-time">Room: La Conchée</span>
            </div>                      
            <p class="time-slot" style="grid-row: time-1700;">17:00</p>   
            <div class="session session-23 track-f3" style="grid-column: track-9; grid-row: time-1700 / time-1745;">                        
                <span class="session-title"><a href="{{ '/program/future-faculty-forum/' | relative_url }}">F3</a> | Closing Remarks / Speed Advising</span>
                <span class="session-time">17:00-17:45</span>
                <span class="session-time">Room: La Conchée</span>
            </div>             
            <p class="time-slot" style="grid-row: time-1745;">17:45</p>   
            <p class="time-slot" style="grid-row: time-1800;">18:00</p>  
			<div class="session track-XRgallery" style="grid-column: track-10; grid-row: time-0800 / time-1800;">  
                <div class="rotate_reg">             
                    <span class="session-title">XR Gallery:&nbsp;8:00&#8209;18:00&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>   
        </div> 
    </div> 
<!-- MONDAY Morning (Part 1) -->
    <div>
        <h4 id="day3">Monday, 10 March 2025</h4>
        <div class="schedule-mon" aria-labelledby="Monday, 10 March 2025 - Main Conference">  
            <p class="time-slot" style="grid-row: time-0745;">7:45</p> 
            <div class="session track-registration" style="grid-column: track-0; grid-row: time-0745 / time-1830;"> 
                <div class="rotate_reg">             
                    <span class="session-title">Registration:&nbsp;7:45&#8209;18:30&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>
            <p class="time-slot" style="grid-row: time-0830;">8:30</p>
            <div class="session track-main" style="grid-column: track-1-start / track-4-end; grid-row: time-0830 / time-0930;">
                <span class="session-title">Opening & Awards</span>
                <span class="session-time">8:30-9:30</span>
                <span class="session-time">Room: Chateaubriand</span>
            </div>            
            <p class="time-slot" style="grid-row: time-0930;">9:30</p>
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-0930 / time-0945;">
                <span class="session-title">Cushion Break (Not Catered): 9:30-9:45</span>
            </div> 
            <p class="time-slot" style="grid-row: time-0945;">9:45</p>
            <div class="session track-keynote" style="grid-column: track-1-start / track-4-end; grid-row: time-0945 / time-1045;">
                <span class="session-title">Keynote Speaker<br/><a href="{{ '/program/keynote-speakers/' | relative_url }}#keynote-george">George Drettakis</a></span>                
                <span class="session-title"><a href="{{ '/program/keynote-speakers/' | relative_url }}#keynote-george">The 3D Gaussian Splatting Adventure: Past, Present and Future</a></span>
                <span class="session-time">9:45-10:45</span>   
                <span class="session-time">Room: Chateaubriand</span>             
            </div> 
            <p class="time-slot" style="grid-row: time-1045;">10:45</p>  
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-1045 / time-1115;">
                <span class="session-title">Break (Catered): 10:45-11:15&nbsp;&nbsp;</span><br>
                <span class="session-time">Room: Rotondes Grand large, Surcouf & Cézembre</span>
            </div>             
            <div class="session track-pd3dui" style="grid-column: track-5; grid-row: time-1045 / time-1115;">
                <span class="session-title"><a href="{{ '/program/posters/' | relative_url }}">Posters</a></span>
                <span class="session-time">10:45-11:15</span>
                <span class="session-time">Room: Grand large</span>
            </div>    
			<div class="session track-pd3dui" style="grid-column: track-6-start / track-7; grid-row: time-1045 / time-1115;">
                <span class="session-title"><a href="{{ '/program/xrgallery/' | relative_url }}">XR Gallery Exhibitions</a></span>
                <span class="session-time">10:45-11:15</span>
                <span class="session-time">Room: Bouvet, Charcot</span>
            </div>                      
            <p class="time-slot" style="grid-row: time-1115;">11:15</p>
            {% for session in site.data.sessions %}  
                {% if session.id == '0' %}
                <div class="session track-papers" style="grid-column: track-1; grid-row: time-1115 / time-1215;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#0">Session 1-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">11:15-12:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}   
			{% for session in site.data.sessions %}  
                {% if session.id == '1' %}
                <div class="session track-papers" style="grid-column: track-2; grid-row: time-1115 / time-1215;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#1">Session 1-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">11:15-12:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
			{% for session in site.data.sessions %}  
                {% if session.id == '2' %}
                <div class="session track-papers" style="grid-column: track-3; grid-row: time-1115 / time-1215;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#2">Session 1-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">11:15-12:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
			{% for session in site.data.sessions %}  
                {% if session.id == '3' %}
                <div class="session track-papers" style="grid-column: track-4; grid-row: time-1115 / time-1215;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#3">Session 1-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">11:15-12:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
            <p class="time-slot" style="grid-row: time-1215;">12:15</p>
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-1215 / time-1400;">
                <span class="session-title">Lunch (Not Catered): 12:15-14:00</span>
            </div>  
            <p class="time-slot" style="grid-row: time-1400;">14:00</p>
            <div class="session track-pd3dui" style="grid-column: track-5; grid-row: time-1315 / time-1400;">
                <span class="session-title"><a href="{{ '/program/posters/' | relative_url }}">Posters</a></span>
                <span class="session-time">13:15-14:00</span>
                <span class="session-time">Room: Grand large</span>
            </div>     
            <p class="time-slot" style="grid-row: time-1315;">13:15</p>                   
			<div class="session track-pd3dui" style="grid-column: track-7; grid-row: time-1315 / time-1400;">
                <span class="session-title"><a href="{{ '/program/xrgallery/' | relative_url }}">XR Gallery Exhibitions</a></span>
                <span class="session-time">13:15-14:00</span>
                <span class="session-time">Room: Bouvet, Charcot</span>
            </div>  
			{% for session in site.data.sessions %}  
                {% if session.id == '4' %}
                <div class="session track-papers" style="grid-column: track-1; grid-row: time-1400 / time-1500;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#4">Session 2-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">14:00-15:00</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}  			
            {% for session in site.data.sessions %}  
                {% if session.id == '5' %}
                <div class="session track-papers" style="grid-column: track-2; grid-row: time-1400 / time-1500;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#5">Session 2-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">14:00-15:00</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 
			{% for session in site.data.sessions %}  
                {% if session.id == '6' %}
                <div class="session track-papers" style="grid-column: track-3; grid-row: time-1400 / time-1500;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#6">Session 2-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">14:00-15:00</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 
			{% for session in site.data.sessions %}  
                {% if session.id == '7' %}
                <div class="session track-papers" style="grid-column: track-4; grid-row: time-1400 / time-1500;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#7">Session 2-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">14:00-15:00</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 
            <p class="time-slot" style="grid-row: time-1500;">15:00</p>
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-1500 / time-1515;">
                <span class="session-title">Stretch Break (Not Catered): 15:00-15:15</span>
            </div>    
            <p class="time-slot" style="grid-row: time-1515;">15:15</p>
            {% for session in site.data.sessions %}  
                {% if session.id == '8' %}
                <div class="session track-papers" style="grid-column: track-2; grid-row: time-1515 / time-1615;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#8">Session 3-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">15:15-16:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}    
			{% for session in site.data.sessions %}  
                {% if session.id == '9' %}
                <div class="session track-papers" style="grid-column: track-4; grid-row: time-1515 / time-1615;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#9">Session 3-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">15:15-16:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 		
			<div class="session track-pd3dui" style="padding-bottom: 10px; grid-column: track-1-start; grid-row: time-1515 / time-1615;">
                <span class="session-title">Fast forward session: <a href="{{ '/program/demos/' | relative_url }}">Research Demos</a>, <a href="{{ '/program/3dui-contest/' | relative_url }}">3DUI Contest Demos</a> & <a href="{{ '/program/xrgallery/' | relative_url }}">XR Gallery</a></span>
                <span class="session-time">15:15-16:15</span>
                <span class="session-time">Room: Chateaubriand</span>
            </div>			
			<p class="time-slot" style="grid-row: time-1615;">16:15</p>
            <div class="session track-all" style="grid-column: track-2-start / track-4-end; grid-row: time-1615 / time-1715;">
                <span class="session-title">Break (Catered): 16:15-17:15&nbsp;&nbsp;<br></span>
                <span class="session-time">Room: Rotondes Grand large, Surcouf & Cézembre</span>
            </div> 
			<div class="session track-pd3dui" style="grid-column: track-5; grid-row: time-1615 / time-1715;">
                <span class="session-title"><a href="{{ '/program/posters/' | relative_url }}">Posters</a></span>
                <span class="session-time">16:15-17:15</span>
                <span class="session-time">Room: Grand large</span>
            </div>     
			<div class="session track-pd3dui" style="grid-column: track-6; grid-row: time-1615 / time-1715;">
                <span class="session-title"><a href="{{ '/program/3dui-contest/' | relative_url }}">Demos / 3DUI Exhibitions</a></span>
                <span class="session-time">16:15-17:15</span>
                <span class="session-time">Room: Surcouf, Cézembre, Vauban</span>
            </div>                  
			<div class="session track-pd3dui" style="grid-column: track-7; grid-row: time-1615 / time-1715;">
                <span class="session-title"><a href="{{ '/program/xrgallery/' | relative_url }}">XR Gallery Exhibitions</a></span>
                <span class="session-time">16:15-17:15</span>
                <span class="session-time">Room: Bouvet, Charcot</span>
            </div>
            <p class="time-slot" style="grid-row: time-1730;">17:30</p> 
			<div class="session track-gallery" style="grid-column: track-1; grid-row: time-1730 / time-2030;">
                <span class="session-title">Art performance - <a href="{{ '/program/xrgallery/' | relative_url }}#PO1103">ReVerie</a></span>
                <span class="session-time">17:30-20:30</span>
                <span class="session-time">Room: Chateaubriand</span>
            </div>  
            {% for session in site.data.sessions %}  
                {% if session.id == '10' %}
                <div class="session track-papers" style="grid-column: track-2; grid-row: time-1715 / time-1815;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#10">Session 4-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">17:15-18:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
			{% for session in site.data.sessions %}  
                {% if session.id == '11' %}
                <div class="session track-papers" style="grid-column: track-3; grid-row: time-1715 / time-1815;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#11">Session 4-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">17:15-18:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
			{% for session in site.data.sessions %}  
                {% if session.id == '12' %}
                <div class="session track-papers" style="grid-column: track-4; grid-row: time-1715 / time-1815;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#12">Session 4-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">17:15-18:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
            <p class="time-slot" style="grid-row: time-1815;">18:15</p> 
            <p class="time-slot" style="grid-row: time-1830;">18:30</p> 
			<div class="session track-main" style="grid-column: track-2-start / track-4-end; grid-row: time-1830 / time-2030;">
                <span class="session-title">Welcome reception</span>
                <span class="session-time">18:30-20:30</span>
                <span class="session-time">Room: Jacques Cartier, Grand large</span>
            </div>      
            <p class="time-slot" style="grid-row: time-2030;">20:30</p> 
        </div> 
    </div>
<!-- TUESDAY Morning (Part 1) -->
    <div>
        <h4 id="day4">Tuesday, 11 March 2025</h4>
        <div class="schedule-tue" aria-labelledby="Tuesday, 19 March 2025 - Main Conference">   
            <p class="time-slot" style="grid-row: time-0745;">7:45</p> 
            <div class="session track-registration" style="grid-column: track-0; grid-row: time-0745 / time-1600;">            
                <div class="rotate_reg">             
                    <span class="session-title">Registration:&nbsp;7:45&#8209;16:00&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>  
            </div> 
            <p class="time-slot" style="grid-row: time-0830;">8:30</p>
            {% for session in site.data.sessions %}  
                {% if session.id == '13' %}
                <div class="session track-papers" style="grid-column: track-1; grid-row: time-0830 / time-0930;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#13">Session 5-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">08:30-09:30</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}   			
			{% for session in site.data.sessions %}  
                {% if session.id == '14' %}
                <div class="session track-papers" style="grid-column: track-2; grid-row: time-0830 / time-0930;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#14">Session 5-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">08:30-09:30</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}  
			{% for session in site.data.sessions %}  
                {% if session.id == '15' %}
                <div class="session track-papers" style="grid-column: track-3; grid-row: time-0830 / time-0930;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#15">Session 5-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">08:30-09:30</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}  
			{% for session in site.data.sessions %}  
                {% if session.id == '16' %}
                <div class="session track-papers" style="grid-column: track-4; grid-row: time-0830 / time-0930;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#16">Session 5-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">08:30-09:30</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}  
            <p class="time-slot" style="grid-row: time-0930;">9:30</p> 
			<div class="session track-pd3dui" style="grid-column: track-5; grid-row: time-0930 / time-1000;">
                <span class="session-title"><a href="{{ '/program/posters/' | relative_url }}">Posters</a></span>
                <span class="session-time">09:30-10:00</span>
                <span class="session-time">Room: Grand large</span>
            </div>     
			<div class="session track-pd3dui" style="grid-column: track-6; grid-row: time-0930 / time-1000;">
                <span class="session-title"><a href="{{ '/program/3dui-contest/' | relative_url }}">Demos / 3DUI Exhibitions</a></span>
                <span class="session-time">09:30-10:00</span>
                <span class="session-time">Room: Surcouf, Céz, Vauban</span>
            </div>                  
			<div class="session track-pd3dui" style="grid-column: track-7; grid-row: time-0930 / time-1000;">
                <span class="session-title"><a href="{{ '/program/xrgallery/' | relative_url }}">XR Gallery Exhibitions</a></span>
                <span class="session-time">09:30-10:00</span>
                <span class="session-time">Room: Bouvet, Charcot</span>
            </div> 
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-0930 / time-1000;">
                <span class="session-title">Break (Catered): 9:30-10:00&nbsp;&nbsp;</span><br>
                <span class="session-time">Room: Rotondes Grand large, Surcouf & Cézembre</span>
            </div> 
<!-- TUESDAY Morning (Part 2) -->
            <p class="time-slot" style="grid-row: time-1000;">10:00</p> 
			<div class="session track-keynote" style="grid-column: track-1-start / track-4-end; grid-row: time-1000 / time-1030;">
                <span class="session-title">Lightning Keynote<br/><a href="{{ '/program/keynote-speakers/' | relative_url }}#keynote-mavi">Mavi Sanchez-Vives</a> - <a href="{{ '/program/keynote-speakers/' | relative_url }}#keynote-mavi">Virtual Reality for Pain Relief</a></span>
                <span class="session-time">10:00-10:30</span>   
                <span class="session-time">Room: Chateaubriand</span>             
            </div>
			<div class="session track-keynote" style="grid-column: track-1-start / track-4-end; grid-row: time-1030 / time-1100;">
                <span class="session-title">Lightning Keynote<br/><a href="{{ '/program/keynote-speakers/' | relative_url }}#keynote-maria">Maria Roussou</a> - <a href="{{ '/program/keynote-speakers/' | relative_url }}#keynote-maria">Reflecting on 25+ Years of Immersive Public Experiences</a></span>
                <span class="session-time">10:30-11:00</span>   
                <span class="session-time">Room: Chateaubriand</span>             
            </div>
            <p class="time-slot" style="grid-row: time-1100;">11:00</p>  
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-1100 / time-1115;">
                <span class="session-title">Stretch Break (Not Catered): 11:00-11:15</span>
            </div>  
            <p class="time-slot" style="grid-row: time-1115;">11:15</p>  
			{% for session in site.data.sessions %}  
                {% if session.id == '17' %}
                <div class="session track-papers" style="grid-column: track-1; grid-row: time-1115 / time-1215;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#17">Session 6-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">11:15-12:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}   	
			{% for session in site.data.sessions %}  
                {% if session.id == '18' %}
                <div class="session track-papers" style="grid-column: track-2; grid-row: time-1115 / time-1215;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#18">Session 6-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">11:15-12:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 
			{% for session in site.data.sessions %}  
                {% if session.id == '19' %}
                <div class="session track-papers" style="grid-column: track-3; grid-row: time-1115 / time-1215;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#19">Session 6-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">11:15-12:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}   		
			{% for session in site.data.sessions %}  
                {% if session.id == '20' %}
                <div class="session track-papers" style="grid-column: track-4; grid-row: time-1115 / time-1215;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#20">Session 6-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">11:15-12:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 
<!-- TUESDAY Afternoon (Part 1) -->			
			<p class="time-slot" style="grid-row: time-1215;">12:15</p>
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-1215 / time-1400;">
                <span class="session-title">Lunch (Not Catered): 12:15-14:00</span>
            </div>  
            <p class="time-slot" style="grid-row: time-1400;">14:00</p>
            <div class="session track-pd3dui" style="grid-column: track-5; grid-row: time-1315 / time-1400;">
                <span class="session-title"><a href="{{ '/program/posters/' | relative_url }}">Posters</a></span>
                <span class="session-time">13:15-14:00</span>
                <span class="session-time">Room: Grand large</span>
            </div>     
			<div class="session track-pd3dui" style="grid-column: track-6; grid-row: time-1315 / time-1400;">
                <span class="session-title"><a href="{{ '/program/3dui-contest/' | relative_url }}">Demos / 3DUI Exhibitions</a></span>
                <span class="session-time">13:15-14:00</span>
                <span class="session-time">Room: Surcouf, Cézembre, Vauban</span>
            </div>  
            <p class="time-slot" style="grid-row: time-1315;">13:15</p>                   
			<div class="session track-pd3dui" style="grid-column: track-7; grid-row: time-1315 / time-1400;">
                <span class="session-title"><a href="{{ '/program/xrgallery/' | relative_url }}">XR Gallery Exhibitions</a></span>
                <span class="session-time">13:15-14:00</span>
                <span class="session-time">Room: Bouvet, Charcot</span>
            </div> 
			{% for session in site.data.sessions %}  
                {% if session.id == '21' %}
                <div class="session track-papers" style="grid-column: track-1; grid-row: time-1400 / time-1500;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#21">Session 7-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">14:00-15:00</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}  			
            {% for session in site.data.sessions %}  
                {% if session.id == '22' %}
                <div class="session track-papers" style="grid-column: track-2; grid-row: time-1400 / time-1500;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#22">Session 7-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">14:00-15:00</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 
			{% for session in site.data.sessions %}  
                {% if session.id == '23' %}
                <div class="session track-papers" style="grid-column: track-3; grid-row: time-1400 / time-1500;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#23">Session 7-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">14:00-15:00</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 
			{% for session in site.data.sessions %}  
                {% if session.id == '24' %}
                <div class="session track-papers" style="grid-column: track-4; grid-row: time-1400 / time-1500;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#24">Session 7-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">14:00-15:00</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 
<!-- TUESDAY Afternoon (Part 2) -->		
			<p class="time-slot" style="grid-row: time-1500;">15:00</p>
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-1500 / time-1515;">
                <span class="session-title">Stretch Break (Not Catered): 15:00-15:15</span>
            </div>    
            <p class="time-slot" style="grid-row: time-1515;">15:15</p>
			{% for session in site.data.sessions %}  
                {% if session.id == '25' %}
                <div class="session track-papers" style="grid-column: track-2; grid-row: time-1515 / time-1615;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#25">Session 8-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">15:15-16:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
			{% for session in site.data.sessions %}  
                {% if session.id == '26' %}
                <div class="session track-papers" style="grid-column: track-4; grid-row: time-1515 / time-1615;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#26">Session 8-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">15:15-16:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
			<div class="session track-main" style="grid-column: track-1; grid-row: time-1515 / time-1615;">
                <span class="session-title"><a href="{{ '/program/panels/' | relative_url }}">Panel - How to adapt our Research Practices in times of Ecological Crisis?</a></span>
                <span class="session-time">15:15-16:15</span>
                <span class="session-time">Room: Chateaubriand</span>
            </div>  
			<p class="time-slot" style="grid-row: time-1615;">16:15</p>
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-1615 / time-1715;">
                <span class="session-title">Break (Catered): 16:15-17:15</span><br>
                <span class="session-time">Room: Rotondes Grand large, Surcouf & Cézembre</span>
            </div> 
			<div class="session track-pd3dui" style="grid-column: track-5; grid-row: time-1615 / time-1715;">
                <span class="session-title"><a href="{{ '/program/posters/' | relative_url }}">Posters</a></span>
                <span class="session-time">16:15-17:15</span>
                <span class="session-time">Room: Grand large</span>
            </div>     
			<div class="session track-pd3dui" style="grid-column: track-6; grid-row: time-1615 / time-1715;">
                <span class="session-title"><a href="{{ '/program/3dui-contest/' | relative_url }}">Demos / 3DUI Exhibitions</a></span>
                <span class="session-time">16:15-17:15</span>
                <span class="session-time">Room: Surcouf, Cézembre, Vauban</span>
            </div>                 
			<div class="session track-pd3dui" style="grid-column: track-7; grid-row: time-1615 / time-1715;">
                <span class="session-title"><a href="{{ '/program/xrgallery/' | relative_url }}">XR Gallery Exhibitions</a></span>
                <span class="session-time">16:15-17:15</span>
                <span class="session-time">Room: Bouvet, Charcot</span>
            </div>
            <p class="time-slot" style="grid-row: time-1715;">17:15</p>   
			{% for session in site.data.sessions %}  
                {% if session.id == '27' %}
                <div class="session track-papers" style="grid-column: track-1; grid-row: time-1715 / time-1815;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#27">Session 9-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">17:15-18:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
			{% for session in site.data.sessions %}  
                {% if session.id == '28' %}
                <div class="session track-papers" style="grid-column: track-2; grid-row: time-1715 / time-1815;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#28">Session 9-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">17:15-18:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
			{% for session in site.data.sessions %}  
                {% if session.id == '29' %}
                <div class="session track-papers" style="grid-column: track-3; grid-row: time-1715 / time-1815;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#29">Session 9-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">17:15-18:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
			{% for session in site.data.sessions %}  
                {% if session.id == '30' %}
                <div class="session track-papers" style="grid-column: track-4; grid-row: time-1715 / time-1815;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#30">Session 9-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">17:15-18:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
            <p class="time-slot" style="grid-row: time-1815;">18:15</p>   
            <p class="time-slot" style="grid-row: time-1900;">19:00</p>   
			<div class="session track-main" style="grid-column: track-1-start / track-4-end; grid-row: time-1900 / time-2300;">
                <span class="session-title">Gala Dinner</span>
                <span class="session-time">19:00-23:00</span>
                <span class="session-time">Quai Saint Malo</span>
            </div>      
            <p class="time-slot" style="grid-row: time-2300;">23:00</p> 
			<div class="session track-main" style="grid-column: track-1-start / track-4-end; grid-row: time-2300 / time-2400;">
                <span class="session-title">After</span>
                <span class="session-time">23:00-1:00</span>
            </div>   
            <p class="time-slot" style="grid-row: time-2400;">1:00</p> 
        </div> 
    </div>
    <div>
        <h4 id="day5">Wednesday, 12 March 2025</h4>
        <div class="schedule-wed" aria-labelledby="Wednesday, 12 March 2025 - Main Conference">   
<!-- WEDNESDAY Morning (Part 1) -->
            <p class="time-slot" style="grid-row: time-0745;">7:45</p> 
            <div class="session track-registration" style="grid-column: track-0; grid-row: time-0745 / time-1600;">            
                <div class="rotate_reg">             
                    <span class="session-title">Registration:&nbsp;7:45&#8209;16:00&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>  
            </div> 
            <p class="time-slot" style="grid-row: time-0830;">8:30</p>
            {% for session in site.data.sessions %}  
                {% if session.id == '31' %}
                <div class="session track-papers" style="grid-column: track-1; grid-row: time-0830 / time-0930;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#31">Session 10-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">08:30-09:30</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}   			
			{% for session in site.data.sessions %}  
                {% if session.id == '32' %}
                <div class="session track-papers" style="grid-column: track-2; grid-row: time-0830 / time-0930;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#32">Session 10-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">08:30-09:30</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}  
			{% for session in site.data.sessions %}  
                {% if session.id == '33' %}
                <div class="session track-papers" style="grid-column: track-3; grid-row: time-0830 / time-0930;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#33">Session 10-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">08:30-09:30</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}  
			{% for session in site.data.sessions %}  
                {% if session.id == '34' %}
                <div class="session track-papers" style="grid-column: track-4; grid-row: time-0830 / time-0930;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#34">Session 10-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">08:30-09:30</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}  
			<div class="session track-pd3dui" style="grid-column: track-5; grid-row: time-0930 / time-1000;">
                <span class="session-title"><a href="{{ '/program/posters/' | relative_url }}">Posters</a></span>
                <span class="session-time">09:30-10:00</span>
                <span class="session-time">Room: Grand large</span>
            </div>     
			<div class="session track-pd3dui" style="grid-column: track-6; grid-row: time-0930 / time-1000;">
                <span class="session-title"><a href="{{ '/program/3dui-contest/' | relative_url }}">Demos / 3DUI Exhibitions</a></span>
                <span class="session-time">09:30-10:00</span>
                <span class="session-time">Room: Surcouf, Céz, Vauban</span>
            </div>                  
			<div class="session track-pd3dui" style="grid-column: track-7; grid-row: time-0930 / time-1000;">
                <span class="session-title"><a href="{{ '/program/xrgallery/' | relative_url }}">XR Gallery Exhibitions</a></span>
                <span class="session-time">09:30-10:00</span>
                <span class="session-time">Room: Bouvet, Charcot</span>
            </div>
<!-- WEDNESDAY Morning (Part 2) -->
            <p class="time-slot" style="grid-row: time-0930;">9:30</p>  
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-0930 / time-1000;">
                <span class="session-title">Break (Catered): 9:30-10:00&nbsp;&nbsp;</span><br>
                <span class="session-time">Room: Rotondes Grand large, Surcouf & Cézembre</span>
            </div> 
			<div class="session track-keynote" style="grid-column: track-1-start / track-4-end; grid-row: time-1000 / time-1100;">
                <span class="session-title">Keynote Speaker<br/><a href="{{ '/program/keynote-speakers/' | relative_url }}#keynote-stefania">Stefania Serafin</a></span>                
                <span class="session-title"><a href="{{ '/program/keynote-speakers/' | relative_url }}#keynote-stefania">Sound is All Around Us: Immersive Audio in the Age of Extended Reality</a></span>
                <span class="session-time">10:00-11:00</span>   
                <span class="session-time">Room: Chateaubriand</span>             
            </div> 
            <p class="time-slot" style="grid-row: time-1100;">11:00</p>  
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-1100 / time-1115;">
                <span class="session-title">Stretch Break (Not Catered): 11:00-11:15</span>
            </div>  
            <p class="time-slot" style="grid-row: time-1115;">11:15</p>  
			{% for session in site.data.sessions %}  
                {% if session.id == '35' %}
                <div class="session track-papers" style="grid-column: track-1; grid-row: time-1115 / time-1215;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#35">Session 11-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">11:15-12:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}   	
			{% for session in site.data.sessions %}  
                {% if session.id == '36' %}
                <div class="session track-papers" style="grid-column: track-2; grid-row: time-1115 / time-1215;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#36">Session 11-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">11:15-12:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 
			{% for session in site.data.sessions %}  
                {% if session.id == '37' %}
                <div class="session track-papers" style="grid-column: track-3; grid-row: time-1115 / time-1215;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#37">Session 11-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">11:15-12:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}   		
			{% for session in site.data.sessions %}  
                {% if session.id == '38' %}
                <div class="session track-papers" style="grid-column: track-4; grid-row: time-1115 / time-1215;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#38">Session 11-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">11:15-12:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 
<!-- WEDNESDAY Afternoon (Part 1) -->			
			<p class="time-slot" style="grid-row: time-1215;">12:15</p>
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-1215 / time-1400;">
                <span class="session-title">Lunch (Not Catered): 12:15-14:00</span>
            </div>  
            <p class="time-slot" style="grid-row: time-1400;">14:00</p>
            <div class="session track-pd3dui" style="grid-column: track-5; grid-row: time-1315 / time-1400;">
                <span class="session-title"><a href="{{ '/program/posters/' | relative_url }}">Posters</a></span>
                <span class="session-time">13:15-14:00</span>
                <span class="session-time">Room: Grand large</span>
            </div>     
			<div class="session track-pd3dui" style="grid-column: track-6; grid-row: time-1315 / time-1400;">
                <span class="session-title"><a href="{{ '/program/3dui-contest/' | relative_url }}">Demos / 3DUI Exhibitions</a></span>
                <span class="session-time">13:15-14:00</span>
                <span class="session-time">Room: Surcouf, Cézembre, Vauban</span>
            </div>  
            <p class="time-slot" style="grid-row: time-1315;">13:15</p>                   
			<div class="session track-pd3dui" style="grid-column: track-7; grid-row: time-1315 / time-1400;">
                <span class="session-title"><a href="{{ '/program/xrgallery/' | relative_url }}">XR Gallery Exhibitions</a></span>
                <span class="session-time">13:15-14:00</span>
                <span class="session-time">Room: Bouvet, Charcot</span>
            </div> 
			{% for session in site.data.sessions %}  
                {% if session.id == '39' %}
                <div class="session track-papers" style="grid-column: track-1; grid-row: time-1400 / time-1500;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#39">Session 12-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">14:00-15:00</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}  			
            {% for session in site.data.sessions %}  
                {% if session.id == '40' %}
                <div class="session track-papers" style="grid-column: track-2; grid-row: time-1400 / time-1500;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#40">Session 12-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">14:00-15:00</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 
			{% for session in site.data.sessions %}  
                {% if session.id == '41' %}
                <div class="session track-papers" style="grid-column: track-3; grid-row: time-1400 / time-1500;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#41">Session 12-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">14:00-15:00</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 
			{% for session in site.data.sessions %}  
                {% if session.id == '42' %}
                <div class="session track-papers" style="grid-column: track-4; grid-row: time-1400 / time-1500;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#42">Session 12-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">14:00-15:00</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %} 
<!-- WEDNESDAY Afternoon (Part 2) -->		
			<p class="time-slot" style="grid-row: time-1500;">15:00</p>
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-1500 / time-1515;">
                <span class="session-title">Stretch Break (Not Catered): 15:00-15:15</span>
            </div>    
            <p class="time-slot" style="grid-row: time-1515;">15:15</p>
			{% for session in site.data.sessions %}  
                {% if session.id == '43' %}
                <div class="session track-papers" style="grid-column: track-2; grid-row: time-1515 / time-1615;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#43">Session 13-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">15:15-16:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
			{% for session in site.data.sessions %}  
                {% if session.id == '44' %}
                <div class="session track-papers" style="grid-column: track-4; grid-row: time-1515 / time-1615;">
                    <span class="session-title"><a href="{{ '/program/papers/' | relative_url }}#44">Session 13-{{ session.letter }}<br>{{ session.name }}</a></span>
                    <span class="session-time">15:15-16:15</span>
                    <span class="session-time">Room: {{ session.room }}</span>
                </div>  
                {% endif %}   
            {% endfor %}
			<div class="session track-main" style="grid-column: track-1; grid-row: time-1515 / time-1615;">
                <span class="session-title"><a href="{{ '/program/panels/' | relative_url }}#panel-XR">Panel - Where will extended reality and AI take us?</a></span>
                <span class="session-time">15:15-16:15</span>
                <span class="session-time">Room: Chateaubriand</span>
            </div>  
			<p class="time-slot" style="grid-row: time-1615;">16:15</p>
            <div class="session track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-1615 / time-1715;">
                <span class="session-title">Break (Catered): 16:15-17:15&nbsp;&nbsp;</span><br>
                <span class="session-time">Room: Rotondes Grand large, Surcouf & Cézembre</span>
            </div> 
			<div class="session track-pd3dui" style="grid-column: track-5; grid-row: time-1615 / time-1715;">
                <span class="session-title"><a href="{{ '/program/posters/' | relative_url }}">Posters</a></span>
                <span class="session-time">16:15-17:15</span>
                <span class="session-time">Room: Grand large</span>
            </div>     
            <p class="time-slot" style="grid-row: time-1715;">17:15</p>   
			<div class="session track-main" style="grid-column: track-1-start / track-4-end; grid-row: time-1715 / time-1815;">
                <span class="session-title">Closing Ceremony & Awards</span>
                <span class="session-time">17:15-18:15</span>
                <span class="session-time">Room: Chateaubriand</span>
            </div>      
            <p class="time-slot" style="grid-row: time-1815;">18:15</p>   
        </div> 
    </div>
</div>