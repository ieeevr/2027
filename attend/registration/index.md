---
layout: ieeevr-default
title: "Registration"
subtitle: "IEEE VR 2025"
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
		
		email = "program2025"; 		
		$(".program").html("<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>");   
	
	    email = "general2025"; 		
		$(".general").html("<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>");  
		
	    email = "registration+VR"; 		
		$(".registration").html("<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain_ieee + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain_ieee + "</a></i></span>");          

		email = "register2025"; 		
		register.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";  

	});

	function openRegistration(type)
	{
		if (type == 'Member'){
			alert('A window is about to open which will take you to an IEEE Sign in page.  After you sign in with your IEEE credentials, you will then be re-directed to the CVENT.COM Registration page.');
			var newWind = window.open("https://cvent.me/OwvY8x?RefId=Member", 'Member Registration','titlebar=yes,toolbar=no,scrollbars=yes,width=700,height=700').focus
		}
		else{
			alert('A window is about to open which take you to the VERTCOM.COM Registration page.');
			var newWind = window.open("https://cvent.me/924x3y?RefId=Non-Member", 'Non-Member Registration','scrollbars=yes,width=700,height=700').focus
		}
			
	}
</script>

<h1 id="registration">Registration  <div class="floatRight"><span id="register"></span></div></h1>
<p>
	<strong style="color: black">IEEE VR 2024: The 32<sup>nd</sup> IEEE Conference on Virtual Reality and 3D User Interfaces </strong>
	<br>
	March 8-12, 2025 | Saint-Malo, France
	<br>
</p>

<p class="alignCenter">
	<a href="javascript:openRegistration('Member')" class="btn registration_button">IEEE Member Registration</a>
	<a href="javascript:openRegistration('Non-Member')" class="btn registration_button">IEEE Non-Member Registration</a>		
</p>
<p>
    Registration payments for this conference will be handled through <b>VERTCOM</b>. Please keep your email confirmation to modify your registration.
</p>

<div id="accordion">
<div>
	<h4 id="item-1">IEEE VR 2025 Registration</h4>	
	<div>		
		<p>We are looking forward to welcoming you at the IEEE VR 2025 conference, for this very special week of exchanges about innovative research and advances in VR, AR, XR and 3D user interfaces. 
		After reviewing the sections below, please use the buttons above to register to IEEE VR 2025.</p>
		<ul>
			<li><b>5 February, 2025</b>: Deadline for all authors to register and for scientific works to be included in the conference program and publications.</li>
			<li><b>5 February, 2025</b>: Early registration ends.</li>	
			<li><b>Visa Information Contact</b>: Contact <a target="_blank" href="mailto:edith.blin@inria.fr">visa2025@ieeevr.org</a>.</li>
			<li><b>Conference Registration Services</b>: Contact <a target="_blank" href="mailto:colloque@agence-vert.com">colloque@agence-vert.com</a>.</li>	
		</ul>
		<p class="italic">
			Note: All deadlines are at 11:59 PM AOE on the stated date and all rates listed are in Euros (exempted of VAT).			
		</p>
	</div>
</div>
<div>
	<h4>Important Information for Paper Authors</h4>
	<div>
		<p>
			At least one author per accepted <b>contribution</b>  published in the IEEE Digital Library (main conference paper/workshop paper/poster/research demo/3DUI contest) must be registered as an <b>AUTHOR</b> to the <span class="bold">FULL conference</span> (from Saturday 8 to Wednesday 12) at the rate of <span class="bold">full Member/Non-Member registration</span> regardless of whether or not he/she is a student.
		</p>
		<ul>
			<li>The registration deadline for authors is <span class="bold">5 February, 2025.</span></li>
			<li>Author registrations are <span class="bold">not refundable</span> and must be processed no later than <span class="bold">February 5, 2025</span> for their work to be included in the conference program and publications.</li>		
			<li>Author registration requires a submission track and submission ID.</li>
			<li>To register, open the Registration form using one of the buttons above. Under the REGISTRATION ITEMS  section, select  “Author registration”.</li>
			<li>Each author registration is valid for <span class="bold">TWO</span> accepted contributions (if applicable).</li>	
		</ul>
	</div>
</div>
<div>
	<h4>What is Included for Each Type of Registration?</h4>
	<div>
		<p>
			<span class="bold">Full Conference (Saturday to Wednesday)</span>
			<ul>
				<li>Access to all the Workshops and Tutorials (Saturday–Sunday)</li>
				<li>Access to all the conference sessions (Monday - Wednesday)</li>
				<li>Access to the welcome reception (Monday evening)</li>
				<li>Access to the gala dinner (Tuesday evening)</li>
				<li>Access to the Discord server (chat)</li>
				<li>Access to the conference proceedings</li>
			</ul>
		</p>
		<p>
			<span class="bold">Conference only (Monday to Wednesday)</span>
			<ul>
				<li>Access to all the conference sessions (Monday - Wednesday)</li>
				<li>Access to the welcome reception (Monday evening)</li>
				<li>Access to the gala dinner (Tuesday evening)</li>
				<li>Access to the Discord server (chat)</li>
				<li>Access to the conference proceedings</li>
			</ul>
		</p>
		<p>
			<span class="bold">Conference One-day only (Monday or Tuesday or Wednesday)</span>
			<ul>
				<li>Access to all the conference sessions of that day</li>
				<li>Access to the Discord server (chat)</li>
				<li>Access to the conference proceedings</li>
			</ul>
		</p>
		<p>
			<span class="bold">Workshops & Tutorials only (Saturday to Sunday)</span>
			<ul>
				<li>Access to all the Workshops and Tutorials (Saturday–Sunday)</li>
				<li>Access to the Discord server (chat)</li>
				<li>Access to the conference proceedings</li>
			</ul>
		</p>
		<p>
			<span class="bold">Workshops & Tutorials One-day only (Saturday or Sunday)</span>
			<ul>
				<li>Access to all the Workshops and Tutorials of that day</li>
				<li>Access to the Discord server (chat)</li>
				<li>Access to the conference proceedings</li>
			</ul>
		</p>
		<p>
			<span class="bold">Virtual attendance (Monday to Wednesday)</span>
			<ul>
				<li>Access to the live streaming of plenary sessions (opening, keynotes, panels, closing)</li>
				<li>Access to the Discord server (chat)</li>
				<li>Access to the video presentations</li>
				<li>Access to the conference proceedings</li>
			</ul>
		</p>
		<p>
			<span class="bold">Additionnal tickets</span>
			<ul>
				<li>Welcome reception on Monday evening</li>
				<li>Gala dinner on Tuesday evening</li>
			</ul>
		</p>
	</div>
</div>
<div>	
	<h4>Fees: Early Registration Ending February 5th, 2025 (AoE)</h4>
	<div>
		<table class="registration-table">
			<tr>
				<th>Registration Categories</th>
				<th>Full Conference</th>				
				<th>Conference Only<br>(Mon-Thurs)</th>				
				<th>Conference <br>One-day Only</th>				
				<th>Workshops&nbsp;& Tutorials<br>(Sat-Sun)</th>				
				<th>Workshops&nbsp;& Tutorials<br>One Day</th>			
				<th>Virtual registration</th>
			</tr>
			<tr>
				<td>IEEE Member</td>
				<td>990€</td>
				<td>775€</td>
				<td>260€</td>
				<td>550€</td>
				<td>275€</td>
				<td>130€</td>
			</tr>
			<tr>
				<td>Non-Member</td>
				<td>1190€</td>
				<td>930€</td>
				<td>310€</td>
				<td>660€</td>
				<td>330€</td>
				<td>160€</td>
			</tr>
			<tr>
				<td>IEEE Student Member</td>
				<td>695€</td>
				<td>545€</td>
				<td>185€</td>
				<td>385€</td>
				<td>195€</td>
				<td>50€</td>
			</tr>
			<tr>
				<td>Student Non-Member</td>
				<td>835€</td>
				<td>655€</td>
				<td>220€</td>
				<td>465€</td>
				<td>235€</td>
				<td>60€</td>
			</tr>
		</table>
		
	</div>
</div>
<div>
	<h4>Fees: Registration After 14 February 2025</h4>
	<div>
		<table class="registration-table">
			<tr>
				<th>Registration Categories</th>
				<th>Full Conference</th>				
				<th>Conference Only<br>(Mon-Thurs)</th>				
				<th>Conference <br>One-day Only</th>				
				<th>Workshops&nbsp;& Tutorials<br>(Sat-Sun)</th>				
				<th>Workshops&nbsp;& Tutorials<br>One Day</th>			
				<th>Virtual registration</th>
			</tr>
			<tr>
				<td>IEEE Member</td>
				<td>1200€</td>
				<td>930€</td>
				<td>310€</td>
				<td>660€</td>
				<td>330€</td>
				<td>160€</td>
			</tr>
			<tr>
				<td>Non-Member</td>
				<td>1440€</td>
				<td>1120€</td>
				<td>375€</td>
				<td>795€</td>
				<td>395€</td>
				<td>195€</td>
			</tr>
			<tr>
				<td>IEEE Student Member</td>
				<td>840€</td>
				<td>655€</td>
				<td>220€</td>
				<td>465€</td>
				<td>235€</td>
				<td>60€</td>
			</tr>
			<tr>
				<td>Student Non-Member</td>
				<td>1010€</td>
				<td>790€</td>
				<td>265€</td>
				<td>560€</td>
				<td>280€</td>
				<td>75€</td>
			</tr>
		</table>		
	</div>
</div>

<div>
	<h4>Visa Invitation Letters</h4>
	<div>
		<p>
			During the registration process you will be offered the opportunity to request a visa invitation letter. If you do so, one will be automatically generated when your registration is complete, using your name, organization, and address + accepted papier title. <span class="bold">Please note that if you request a visa invitation letter, your registration cannot be cancelled.</span> Requests for letters containing additional information, such as date of birth or passport information (number, date of issue, expiration date, place of issue), may be e-mailed to: <a target="_blank" href="mailto:edith.blin@inria.fr">visa2025@ieeevr.org</a>. 
		</p>
		<p>
		<span class="bold">For presenting authors</span>: If you need to start the visa process before the final notification, we encourage the presenting author to register to the conference before the final notification so we can issue the invitation letter. Exceptionally, the registered author could request a refund if the final notification has a negative outcome (paper rejected).
		</p>
		<p>For the other situations, we strongly encourage authors to register right after the final notification is provided. We will deliver the visa invitation letters as soon as possible. In any case, we encourage authors to anticipate potential delays during the visa process.
		</p>
	</div>	
</div>
<div>
	<h4>Cancellation Policy</h4>
	<div>
		<p>
			All refund/cancellation requests must be received in writing to  <a target="_blank" href="mailto:colloque@agence-vert.com">colloque@agence-vert.com</a> by February 6, 2025 11:59 PM AoE Time.
		</p>
		<p>
			Registration cancelled until February 16th will be refunded 80% of the registration fees. Registration cancelled from February 17th will not be eligible for a refund.
		</p><p>
			Note:
			<ul>
				<li>Author registrations are non-refundable.</li>
				<li>Registrations where a Visa invitation was requested cannot be cancelled.</li>
			</ul>
		</p>
	</div>
</div>
</div>