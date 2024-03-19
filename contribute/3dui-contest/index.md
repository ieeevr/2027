---
layout: ieeevr-default
title: "3DUI Contest"
subtitle: "IEEE VR 2024"
title_separator: "|"
---

<script type="text/javascript">
    $(document).ready(function(){
		var email = ""; 
		var domain = "ieeevr.org"; 

	    email = "contest2024"; 		
		$(".contestSm").html("<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>");   
        
        $(".contest").html("<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIcon' style=''></i><i class='emailText'>" + email + "@" + domain + "</a></i></span>");              
	});
</script>
<div>
    <h1 id="cfp-3dui-contest">Call for 3DUI Contest Entries<div class="floatRight"><span class="contestSm"></span></div></h1>
    <p>
        <strong style="color: black">IEEE VR 2024: The 31<sup>st</sup> IEEE Conference on Virtual Reality and 3D User Interfaces</strong><br />
            March 16-21, 2024 | Orlando, Florida USA
    </p>
    <p>
        Contest Registrations can be made via email to  <span class="contest"></span>, final submissions can be made through the Online System: <a href="https://new.precisionconference.com/vr">https://new.precisionconference.com/vr</a>.
    </p>

    <h2 id="important-dates"> Important Dates - All deadlines are Anywhere on Earth (AoE)</h2>
    <ul>
        <li><strong>Contest registration</strong> (project title and team members) - December 23, 2023</li>
        <li><strong>Submission</strong> of two-page abstract and video - January 19, 2024</li>
        <li><strong>Notification</strong> of which entries are accepted - January 31, 2024</li>
        <li><strong>Camera-ready</strong> version - February 9, 2024</li>
    </ul>

    <h2 id="Overview">Overview</h2>
    <p>
        This year, the IEEE VR 2024 will hold the 15th annual 3DUI Contest. It is open to anyone interested in 3D User Interfaces (3DUIs) and Virtual Reality, from researchers to students, enthusiasts, and professionals. The purpose of the contest is to stimulate innovative and creative solutions to challenging 3DUI problems. The theme of this year is “Developing Next-Gen Calculators Using 3D User Interfaces”. Participants need to create and submit an original 3DUI project. This may include XR(VR/AR/MR)-driven 3DUI systems that IEEE VR attendants can run with their own devices. You have to create an environment that will allow people to visualize and interact with the chosen topic areas. The challenge for this year is for the contestant to implement a novel 3DUI (e.g., 3D manipulation, head pointing, gaze selection, etc.) to understand and solve mathematical problems with the emphases on usability, ease of understanding, fun and impact on learning for the proposed application (for example, see: <a href="https://www.youtube.com/watch?v=FVEs4ctwkcY">https://www.youtube.com/watch?v=FVEs4ctwkcY</a>). Contestants may include user evaluations but we do not make it a strong constraint.
    </p>

    <p>We expect the following functionalities:
        <ul>
            <li>It should provide a 3D interface to help users understand (and ultimately solve) mathematical problems (e.g., equations, geometrical problems, analytical problems, graphical resolutions, etc.), thereby stimulating a desire to learn more. This approach ultimately aims to make XR an indispensable technology for STEM education. For example, through your 3D interface, users can employ a range of 3D gestures to draw equations or geometrical shapes. However, we strongly encourage going beyond the limitations of the traditional interaction design to explore innovative 3D interfaces. We expect projects to address at least one analytical or one geometrical math problem that you are free to choose.</li>
            <li>The project should present novel 3DUI techniques and focus on a technical contribution, <span class="bold underline">not</span> on the resolution of the math problems itself (i.e., it is not required that the calculation be true or go until completion)</li>            
            <li>The simulation can be XR-driven, thus not only pure VR simulations are welcome</li>
            <li>One or multiple potential users should be able to interact in the 3D environment</li>
            <li>The simulation could be played standalone, or collaboratively (e.g., involving two users).</li>
            <li>Teams should provide a downloadable program for IEEE VR attendants to test</li>
            <li>Optionally, the project could include an evaluation or the reporting of performance metrics</li>
            <li>Optionally, the project could include an integration with a math package of the choice</li>            
        </ul>
    </p>
    <p>
        Submissions will be evaluated through the following criterias:
        <ol>
            <li>Efficiency and convenience of user operations</li>
            <li>Complexity of the mathematical operations</li>
            <li>Novelty of the design</li>
            <li>Enjoyment and engagement (fun)</li>
        </ol>
        Selected contestants will be required to provide a software demonstration of their solutions using OpenXR standard and are compatible with consumer mixed reality hardware.
    </p>

    <h2 id="eligibility">Eligibility</h2>
    <p>
        The 3DUI Contest is open to anyone interested in 3DUIs — researchers, students, hobbyists, professionals, or anyone else. Requirements for the selection and presentation are specified below.
    </p>

    <h2 id="rules">Rules</h2>
    <p>
        The submitted solutions have to fulfill the following rules to be considered for acceptance and presentation during IEEE VR 2024: 
        <ul>
            <li>Submissions have to present a 3DUI solution:
                <ul>
                    <li>Which covers the topics of <span class="bold">"Developing Next-Gen Calculators Using 3D User Interfaces"</span> more features or unlisted features are encouraged. It will be considered in the evaluation phase.</li>
                    <li>Describe which of the 3DUI techniques has/have been extended.</li>
                    <li>Projects must be submitted with a video (between 3 and 5 minutes) and compiled version.</li>
                    <li>Must be compatible with OpenXR standard (<a href = "https://www.khronos.org/openxr">https://www.khronos.org/openxr</a>)</li>
                </ul>
            </li>
            <li>The developed 3DUI should
                <ul>
                    <li>… be innovative and technically sound,</li>
                    <li>… provide high usability,</li>
                    <li>… be aesthetically pleasing, and</li>
                    <li>… be enjoyable and thought-provoking.</li>
                </ul>
            </li>
        </ul>
    </p>

    <h2 id="teams">Teams</h2>
    <p>
        Teams of up to <span class="bold">ten people</span> may submit solutions.
    </p>
    
    <h2 id="paper">Paper</h2>
    <p>
    Teams must submit a short paper of two pages, with a description of the solution, details about the software developed, a brief description of the closest related work and how your system is novel, and a description of how you iterated upon the design. If your submission is accepted, this paper will be included in the IEEE VR Conference proceedings as a two-page extended abstract describing the contest solution, and therefore must be formatted using the IEEE Computer Society format as specified for VR conference papers.
    </p>

    <h2 id="video">Video</h2>
    <p>
    Teams will also submit a video that presents the solution to the public, including an explanation of the equipment, software, and interaction techniques used to solve the problem. If your submission is accepted, the video will be made publicly available. Videos should have a length of <span class="bold">approximately 4 minutes</span> and should include the title along with the names and affiliations of the contestants. The submitted file should be a high-quality compressed video with a size of no more than 300 MB and submitted via the submission system or a link to an unlisted youtube video/alike.
    </p>

    <h2 id="demonstration">Demonstration</h2>
    <p>
    If your submission is accepted, you will participate in a demo session at the conference, where you will showcase your work to the IEEE VR community. Since this year's contest will be judged at IEEE VR, we will invite various judges from the community to judge your solution. The judging criteria are novelty, usability, fun, and the relevance of the topic. We will further offer on-site judging for all conference attendees. Contestants are expected to have their set-up prepared for demoing their individual solutions, please note that at least one author of each accepted work should be on-site during the 3DUI session as part of IEEE VR.
    </p> 
    <p>
    The final score will be the combination of the expert judges’ scores plus the audience scores. The winning team with the highest score will be awarded.
    </p>

    <h2>Contest Registration - due December 23, 2023</h2>
    <p>
    Teams should register their project title, a contact email, and the team members upfront via email to <span class="contest"></span>.
    </p>
    
    <h2>Abstract and Video Submission - due January 19, 2024</h2>
    <p>
    Teams should submit their abstract paper and a high-quality video through the online submission system: <a href="https://new.precisionconference.com/vr">https://new.precisionconference.com/vr</a>
    </p>
    <p>
    Submissions must be in English and must be prepared in the IEEE Computer Society VGTC format (<a href="https://tc.computer.org/vgtc/publications/conference/">https://tc.computer.org/vgtc/publications/conference/</a>) and submitted as PDF. We highly encourage authors to use the LaTeX template (<a href="https://www.cspaul.com/vgtc/vgtc_conference_latex.zip">https://www.cspaul.com/vgtc/vgtc_conference_latex.zip</a>). Authors who choose to use the Word template need to ensure that their PDF submission matches the format.
    </p>

    <h2 id="contacts">Contacts <div class="floatRight"><span class="contestSm"></span></div></h2>	
    <p>
    Feel free to contact us if you have any further questions. Call updates will be posted on this webpage.
    </p>
    <p>
        3DUI Contest Chairs:
        <ul>   
            <li><span class="bold">Jean-Rémy Chardonnet</span>, <i>Arts et Metiers Institute of Technology, France</i></li>            
            <li><span class="bold">Eike Langbehn</span>, <i>HAW Hamburg, Germany</i></li>            
            <li><span class="bold">BoYu Gao</span>, <i>Jinan University, China</i></li>
            <li><span class="bold">Thammathip Piumsomboon</span>, <i>University of Canterbury, New Zealand</i></li>
        </ul>
    </p>
</div>