---
layout: ieeevr-default
title: "Registration"
subtitle: "IEEE VR 2024"
title_separator: "|"
---
<script type="text/javascript">
	(function($) {
		$(function() {
			$("#accordion > div").accordion({ header: "h4", heightStyle: "content", active: false, collapsible: true });
		})
	})(jQuery);

    $(document).ready(function(){
		var email = ""; 
		var domain = "ieeevr.org"; 
		var domain_ieee = "computer.org"; 

		$('#item-1').click(); 
		
		email = "program2024"; 		
		$(".program").html("<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>");   
	
	    email = "general2024"; 		
		$(".general").html("<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>");  
		
	    email = "registration+VR"; 		
		$(".registration").html("<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain_ieee + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain_ieee + "</a></i></span>");          

		email = "register2024"; 		
		register.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";  

	});

	function openRegistration(type)
	{
		if (type == 'Member'){
			alert('A window is about to open which will take you to an IEEE Sign in page.  After you sign in with your IEEE credentials, you will then be re-directed to the CVENT.COM Registration page.');
			var newWind = window.open("https://cvent.me/OwvY8x?RefId=Member", 'Member Registration','titlebar=yes,toolbar=no,scrollbars=yes,width=700,height=700').focus
		}
		else{
			alert('A window is about to open which take you to the CVENT.COM Registration page.');
			var newWind = window.open("https://cvent.me/924x3y?RefId=Non-Member", 'Non-Member Registration','scrollbars=yes,width=700,height=700').focus
		}
			
	}
</script>

<h1 id="registration">Registration  <div class="floatRight"><span id="register"></span></div></h1>
<p>
	<strong style="color: black">IEEE VR 2024: The 31<sup>st</sup> IEEE Conference on Virtual Reality and 3D User Interfaces</strong><br /> 
	March 16-21, 2024 | Orlando, Florida USA
</p>

<p class="alignCenter">
	<a href="javascript:openRegistration('Member')" class="btn registration_button">IEEE Member Registration</a>
	<a href="javascript:openRegistration('Non-Member')" class="btn registration_button">IEEE Non-Member Registration</a>		
</p>
<p>
    Registration payments for this conference will be handled through <b>CVENT.com</b>. Should you need to modify your registration in any way, please keep the email confirmation they send or visit their main page for this event: <a href="https://cvent.me/Bb9qmW" target="_new">https://cvent.me/Bb9qmW</a>
</p>

<div id="accordion">
<div>
	<h4 id="item-1">IEEE VR 2024 Registration</h4>	
	<div>		
		<p>We are looking forward to you joining us for this special week of workshops, tutorials and presentations of innovative research and advances in VR and 3D interfaces. After reviewing the sections below, use the buttons above to register for IEEE VR 2024.</p>
		<ul>
			<li><b>14 February, 2024</b>: Deadline for paper authors to register and for work to be included in conference program and publications.</li>
			<li><b>14 February, 2024</b>: Early registration ends.</li>		
			<li><b>Author/Submission Questions</b>: Contact IEEE VR 2024 Program Chairs at <span class="program"></span>.</li>	
			<li><b>Visa Information Contact</b>: Contact Carolina Cruz-Neira and Gregory Welch at <span class="general"></span>.</li>
			<li><b>Conference Registration Services</b>: Contact Registration Services at <span class="registration"></span>.</li>	
		</ul>
		<p class="italic">
			Note: All deadlines are at 11:59 PM AOE on the stated date and all rates listed are in USD.			
		</p>
	</div>
</div>
<div>
	<h4>Important Information for Paper Authors</h4>
	<div>
		<p>
			At least one author per paper must be registered as an <b>AUTHOR</b> at the full Member/Non-Member registration rate, regardless of whether or not they are students.
		</p>
		<ul>
			<li>The registration deadline for authors is <span class="bold">14 February, 2024.</span></li>
			<li>Author registrations are <span class="bold">not refundable</span> and must be processed no later than <span class="bold">February 14, 2024</span> for their work to be included in the conference program and publications.</li>		
			<li>Registration requires a paper ID.</li>
			<li>To register, open the CVENT Registration using one of the buttons above.  Under the Registration Options section, select the fee under <span class="bold">Full Conference Registration (Saturday–Thursday) – PAPER AUTHORS ONLY</span>.</li>
			<li>Each author registration is valid for <span class="bold">FOUR</span> papers.</li>		
			<li>For questions regarding paper submissions, please contact IEEE VR 2024 Program Chairs at <span class="program"></span>.</li>
		</ul>
	</div>
</div>
<div>
	<h4>What is Included for Each Type of Registration?</h4>
	<div>
		<p>
			<span class="bold">Full Conference (Saturday-Thursday)</span>
			<ul>
				<li>Access to the Workshops & Tutorials (Saturday–Sunday)</li>
				<li>Main Conference (Monday–Thursday)</li>
				<li>Exhibitor Reception (Monday night)</li>
				<li>VR Banquet (Wednesday night)</li>
			</ul>
		</p>
		<p>
			<span class="bold">Main Conference (Monday – Thursday)</span>
			<ul>
				<li>Main Conference (Monday–Thursday)</li>
				<li>Exhibitor Reception (Monday night)</li>
				<li>VR Banquet (Wednesday night)</li>
			</ul>
		</p>
		<p>
			<span class="bold">Main Conference One-Day Only</span>
			<ul>
				<li>Access to the Technical Sessions and Breaks for one day only.</li>
				<li>Depending on the chosen day it could include Exhibits, Research Demonstrations, Panels, and Posters.</li>
				<li>Tickets to any social events must be purchased separately during the registration.</li>
			</ul>
		</p>
		<p>
			<span class="bold">Workshops & Tutorials (Saturday–Sunday)</span>
			<ul>
				<li>Access to the Workshops & Tutorials (Saturday–Sunday)</li>
			</ul>
		</p>
		<p>
			<span class="bold">Workshops & Tutorials One-Day Only</span>
			<ul>
				<li>Access to the Workshops & Tutorials on either Saturday or Sunday.</li>
			</ul>
		</p>
		<p>
			<span class="bold">Additional Tickets</span>
			<ul>
				<li>Reception on Monday night, March 18th</li>
				<li>Banquet on Wednesday night, March 20th</li>
			</ul>
		</p>
	</div>
</div>
<div>	
	<h4>Fees: Early Registration Ending 14 February, 2024</h4>
	<div>
		<table class="registration-table">
			<tr>
				<th>Registration Categories</th>
				<th>Full Conference</th>				
				<th>Main Conference Only<br>(Mon-Thurs)</th>				
				<th>Main Conference<br>One Day</th>				
				<th>Workshops&nbsp;& Tutorials<br>(Sat-Sun)</th>				
				<th>Workshops&nbsp;& Tutorials<br>One Day</th>
			</tr>
			<tr>
				<td>IEEE Member</td>
				<td>$1,075</td>
				<td>$840</td>
				<td>$350</td>
				<td>$600</td>
				<td>$450</td>
			</tr>
			<tr>
				<td>Non-Member</td>
				<td>$1,290</td>
				<td>$1,010</td>
				<td>$420</td>
				<td>$720</td>
				<td>$540</td>
			</tr>
			<tr>
				<td>IEEE Student Member</td>
				<td>$755</td>
				<td>$590</td>
				<td>$245</td>
				<td>$420</td>
				<td>$315</td>
			</tr>
			<tr>
				<td>Student Non-Member</td>
				<td>$910</td>
				<td>$710</td>
				<td>$295</td>
				<td>$505</td>
				<td>$380</td>
			</tr>
			<tr>
				<td><a href="https://www.ieee.org/communities/life-members/index.html" target="_blank">IEEE Life Member</a><sup>*</sup></td>
				<td>$595</td>
				<td>N/A</td>
				<td>N/A</td>
				<td>N/A</td>
				<td>N/A</td>
			</tr>
		</table>
		<p class="tiny_print italic">* Verified life members will recieve a discount for the <b>Full Conference</b> as an author or attendee. If you are a life member and would like to register for one of the other options, please select <b>IEEE Member</b> in the CVENT.COM Registrant Information page under Select Your Member Type instead of <b>Life Member</b>.</p>
	</div>
</div>
<div>
	<h4>Fees: Registration After 14 February 2024</h4>
	<div>
		<table class="registration-table">
			<tr>
				<th>Registration Categories</th>
				<th>Full Conference</th>				
				<th>Main Conference Only<br>(Mon-Thurs)</th>				
				<th>Main Conference<br>One Day</th>				
				<th>Workshops&nbsp;& Tutorials<br>(Sat-Sun)</th>				
				<th>Workshops&nbsp;& Tutorials<br>One Day</th>
			</tr>
			<tr>
				<td>IEEE Member</td>
				<td>$1,300</td>
				<td>$1,010</td>
				<td>$420</td>
				<td>$720</td>
				<td>$540</td>
			</tr>
			<tr>
				<td>Non-Member</td>
				<td>$1,560</td>
				<td>$1,215</td>
				<td>$505</td>
				<td>$865</td>
				<td>$650</td>
			</tr>
			<tr>
				<td>IEEE Student Member</td>
				<td>$910</td>
				<td>$710</td>
				<td>$295</td>
				<td>$505</td>
				<td>$380</td>
			</tr>
			<tr>
				<td>Student Non-Member</td>
				<td>$1,095</td>
				<td>$855</td>
				<td>$355</td>
				<td>$610</td>
				<td>$460</td>
			</tr>
			<tr>
				<td><a href="https://www.ieee.org/communities/life-members/index.html" target="_blank">IEEE Life Member</a><sup>*</sup></td>
				<td>$715</td>
				<td>N/A</td>
				<td>N/A</td>
				<td>N/A</td>
				<td>N/A</td>
			</tr>
		</table>		
		<p class="tiny_print italic">* Verified life members will recieve a discount for the <b>Full Conference</b> as an author or attendee. If you are a life member and would like to register for one of the other options, please select <b>IEEE Member</b> in the CVENT.COM Registrant Information page under Select Your Member Type instead of <b>Life Member</b>.</p>
	</div>
</div>
<div>
	<h4>Fees: Workshops Onsite Registration</h4>
	<div>
		<table class="registration-table">
			<tr>
				<th class="valignBottom alignCenter">Registration Categories</th>
				<th class="valignBottom alignCenter">Workshops&nbsp;& Tutorials<br>(Sat-Sun)</th>				
				<th class="valignBottom alignCenter">Workshops&nbsp;& Tutorials<br>One Day</th>
			</tr>
			<tr>
				<td>IEEE Member</td>
				<td>$790</td>
				<td>$595</td>
			</tr>
			<tr>
				<td>Non-Member</td>
				<td>$950</td>
				<td>$715</td>
			</tr>
			<tr>
				<td>IEEE Student Member</td>
				<td>$555</td>
				<td>$420</td>
			</tr>
			<tr>
				<td>Student Non-Member</td>
				<td>$670</td>
				<td>$505</td>
			</tr>
			<tr>
				<td><a href="https://www.ieee.org/communities/life-members/index.html" target="_blank">IEEE Life Member</a><sup>*</sup></td>
				<td>N/A</td>
				<td>N/A</td>
			</tr>
		</table>	
		<p class="tiny_print italic">* Verified life members will recieve a discount for the <b>Full Conference</b> as an author or attendee. If you are a life member and would like to register for one of the other options, please select <b>IEEE Member</b> in the CVENT.COM Registrant Information page under Select Your Member Type instead of <b>Life Member</b>.</p>
	</div>
</div>
<div>
	<h4>Fees: Additional Reception/Banquet Tickets</h4>
	<div>
		<p>If you need to purchase additional tickets for the reception or banquet, the prices are:</p>
		<ul>
			<li><b>Reception on Monday night, 18 March 2024</b>: $65</li>
			<li><b>Banquet on Wednesday night, 20 March 2024</b>: $120</li>		
		</ul>
	</div>
</div>
<div>
	<h4>Visa Invitation Letters</h4>
	<div>
		<p>
			During the registration process you will be offered the opportunity to request a visa invitation letter. If you do, one will be automatically generated when your registration is complete, using your name, organization, and address.  <span class="warning">Please note that if you request a visa letter, your registration cannot be cancelled.</span> Requests for letters containing additional information, such as date of birth or passport information (number, date of issue, expiration date, place of issue), may be e-mailed to: Carolina Cruz-Neira and Gregory Welch at <span class="general"></span>. 
		</p>
	</div>	
</div>
<div>
	<h4>Cancellation Policy</h4>
	<div>
		<p>
			All refund/cancellation requests must be received in writing to <span class="registration"></span> by <b>15 February 2024 11:59 PM AoE Time</b>. There will be an administrative fee of US$150 for cancelled registrations and US$150 deducted for One-Day/Workshop/Tutorial registrations from each cancellation.
		</p>
		<p>
			Note:
			<ul>
				<li>Author registrations are non-refundable.</li>
				<li>Registrations where a Visa invitation was requested cannot be cancelled.</li>
			</ul>
		</p>
	</div>
</div>
</div>