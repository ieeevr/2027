---
layout: ieeevr-default
title: "Registration"
subtitle: "IEEE VR 2026"
title_separator: "|"
---
<script type="text/javascript">


	$(function(){
        $('.regi dl dd').hide();
		$('.regi dl.first').addClass('on');
		$('.regi dl.first dd').show();
        $('.regi dl dt').click(function(){
            $(this).parent('dl').toggleClass('on');
            $(this).next('dd').stop().slideToggle();
        });
    });
		





	
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





<!--251217추가-->
  <link rel="stylesheet" href="css.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />


<div id="body_wrap" class="layout">
<div class="body_title_wrap clear">
<h2 class="body_title">Online Registration</h2>
				</div>
					<div class="body_content regi regi">
					<p class="tar">
						<a href="mailto:ieeevr2026@gmail.com" class="link">
						<b>
							<i>
								<u>
									<i class="fa fa-envelope-square"></i> IEEEVR2026@GMAIL.COM
								</u>
							</i>
						</b>
						</a>
							</p>
							
<h3 class="regi_tit">IEEE VR 2026: The 33<sup>rd</sup> IEEE Conference on Virtual Reality and 3D User Interfaces</h3>
<p>March 21-25, 2026 | Daegu, Republic of Korea</p>

<div class="tac mt20 mb50">
	<a href="https://ieeevr2026.org/index.php?GP=regi/regi&ACT=form" class="btn btn-large btn-blue" target="_blank">Online Registration</a>
</div>

<dl class="first">
	<dt><span><i class="fa fa-quora mr10"></i>IEEE VR 2026 Registration</span><i class="material-icons">keyboard_arrow_down</i></dt>
	<dd>
		<p class="taj">We look forward to welcoming you to <b>IEEE VR 2026</b>, an exciting week of exchange on innovative research and advances in VR, AR, XR, and 3D user interfaces. After reviewing the sections below, please use the registration link above to complete your registration for IEEE VR 2026.</p>

		<ul class="lss-dot mb10">
			<li><b>February 15, 2025</b>: Deadline for all authors to register for inclusion of their papers in the conference program and proceedings.</li>
			<li><b>February 15, 2025</b>: Early registration deadline.</li>
			<li><b>Author/Submission Questions</b>: Contact IEEE VR 2026 Program Chairs at <a href="mailto:program2026@ieeevr.org" class="link">program2026@ieeevr.org</a></li>
			<li><b>Visa Information and Registration Questions</b>: Contact IEEE VR 2026 Local Secretariat at <a href="mailto:ieeevr2026@gmail.com" class="link">ieeevr2026@gmail.com</a></li>
		</ul>

		<p><i>Note: All deadlines are at 11:59 PM AOE on the stated date. All registration rates are listed in Korean Won (KRW) and are exempt from VAT.</i></p>
	</dd>
</dl>

<dl>
	<dt><span><i class="fa fa-quora mr10"></i>Important Information for Paper Authors</span><i class="material-icons">keyboard_arrow_down</i></dt>
	<dd>
		<p class="taj">At least one author per accepted contribution published in the IEEE Digital Library (main conference paper/workshop paper/poster/research demo/3DUI contest) must be registered as an <b>AUTHOR</b> to the FULL conference (from Saturday 21 to Wednesday 25) at the rate of full Member/Non-Member registration regardless of whether or not he/she is a student.</p>

		<ul class="lss-dot">
			<li>The registration deadline for authors is <b>February 15th</b>, 2026.</li>
			<li>Author registrations are not refundable and must be processed no later than <b>February 15</b>, 2026 for their work to be included in the conference program and publications.</li>
			<li>Author registration requires a submission ID.</li>
			<li>To register, open the Registration form linked above. Under the Classification section, select “Paper Author”.</li>
			<li>Each author registration is valid for TWO accepted contributions (if applicable).</li>
		</ul>
	</dd>
</dl>

<dl>
	<dt><span><i class="fa fa-quora mr10"></i>What is Included for Each Type of Registration?</span><i class="material-icons">keyboard_arrow_down</i></dt>
	<dd>
		<b>Full Conference (Saturday to Wednesday)</b>
		<ul class="lss-dot mb30">
			<li>Access to all the Workshops and Tutorials (Saturday–Sunday)</li>
			<li>Access to all the conference sessions (Monday - Wednesday)</li>
			<li>Access to the welcome reception (Monday evening)</li>
			<li>Access to the gala dinner (Tuesday evening)</li>
			<li>Access to the conference proceedings</li>
			<li>Access to the Discord server (chat)</li>
		</ul>

		<b>Conference only (Monday to Wednesday)</b>
		<ul class="lss-dot mb30">
			<li>Access to all the conference sessions (Monday - Wednesday)</li>
			<li>Access to the welcome reception (Monday evening)</li>
			<li>Access to the gala dinner (Tuesday evening)</li>
			<li>Access to the conference proceedings</li>
			<li>Access to the Discord server (chat)</li>
		</ul>

		<b>Workshops & Tutorials only (Saturday to Sunday)</b>
		<ul class="lss-dot mb30">
			<li>Access to all the Workshops and Tutorials (Saturday–Sunday)</li>
			<li>Access to the conference proceedings</li>
			<li>Access to the Discord server (chat)</li>
		</ul>

		<b>Additional tickets</b>
		<ul class="lss-dot">
			<li>Welcome reception on Monday evening</li>
			<li>Gala dinner on Tuesday evening</li>
		</ul>
	</dd>
</dl>

<dl>
	<dt><span><i class="fa fa-quora mr10"></i>Registration Process and Fees</span><i class="material-icons">keyboard_arrow_down</i></dt>
	<dd>
		<h3>Registration Process</h3>
		<ol class="regi_stepGuide mb50">
			<li>
				<span class="step">Step 1</span>
				<img src="https://ieeevr2026.org/img/2026/sub/step_icon01.png" alt="" />
				<p>Create an Account</p>
			</li>
			<li>
				<span class="step">Step 2</span>
				<img src="https://ieeevr2026.org/img/2026/sub/step_icon02.png" alt="" />
				<p>Choose Registration Options</p>
			</li>
			<li>
				<span class="step">Step 3</span>
				<img src="https://ieeevr2026.org/img/2026/sub/step_icon03.png" alt="" />
				<p>Review Summary & Payment</p>
			</li>
			<li>
				<span class="step">Step 4</span>
				<img src="https://ieeevr2026.org/img/2026/sub/step_icon04.png" alt="" />
				<p>Confirm Receipt</p>
			</li>
		</ol>

		<h3>Registration Fee</h3>
		<h4>Early Registration <small class="red">until February 15th, 2026 (AoE)</small></h4>

		<div class="respon_table mb30">
			<table class="tbs tac">
				<colgroup>
					<col width="30%">
					<col width="23.333333333333%" span="3">
				</colgroup>
				<thead>
					<tr>
						<th>Registration Categories</th>
						<th>Full Conference</th>
						<th>Conference Only <br />(Mon-Wed.)</th>
						<th>Workshops & Tutorials <br />(Sat-Sun)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>IEEE Member</th>
						<td>KRW 1,500,000</td>
						<td>KRW 1,200,000</td>
						<td>KRW 800,000</td>
					</tr>
					<tr>
						<th>Non-Member</th>
						<td>KRW 1,800,000</td>
						<td>KRW 1,440,000</td>
<!-- 						<td>KRW 580,000</td> -->
						<td>KRW 960,000</td>
<!-- 						<td>KRW 580,000</td> -->
					</tr>
					<tr>
						<th>IEEE Student Member</th>
						<td>KRW 1,050,000</td>
						<td>KRW 840,000</td>
<!-- 						<td>KRW 335,000</td> -->
						<td>KRW 560,000</td>
<!-- 						<td>KRW 335,000</td> -->
					</tr>
					<tr>
						<th>Student Non-Member</th>
						<td>KRW 1,260,000</td>
						<td>KRW 1,008,000</td>
<!-- 						<td>KRW 403,000</td> -->
						<td>KRW 672,000</td>
<!-- 						<td>KRW 403,000</td> -->
					</tr>
					<tr>
						<th>IEEE Life Member <span class="red">*</span></th>
						<td>KRW 825,000</td>
						<td>-</td>
<!-- 						<td>-</td> -->
						<td>-</td>
<!-- 						<td>-</td> -->
					</tr>
				</tbody>
			</table>
		</div>

		<h4>Late / Onsite Registration <small class="red">from February 16th, 2026 (AoE)</small></h4>

		<div class="respon_table">
			<table class="tbs tac">
				<colgroup>
					<col width="30%">
					<col width="23.333333333333%" span="3">
				</colgroup>
				<thead>
					<tr>
						<th>Registration Categories</th>
						<th>Full Conference</th>
						<th>Conference Only <br />(Mon-Wed.)</th>
<!-- 						<th>Conference <br>One-Day</th> -->
						<th>Workshops & Tutorials <br />(Sat-Sun)</th>
<!-- 						<th>Workshops & Tutorials One-Day</th> -->
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>IEEE Member</th>
						<td>KRW 1,800,000</td>
						<td>KRW 1,440,000</td>
<!-- 						<td>KRW 580,000</td> -->
						<td>KRW 960,000</td>
<!-- 						<td>KRW 580,000</td> -->
					</tr>
					<tr>
						<th>Non-Member</th>
						<td>KRW 2,160,000</td>
						<td>KRW 1,728,000</td>
<!-- 						<td>KRW 696,000</td> -->
						<td>KRW 1,152,000</td>
<!-- 						<td>KRW 696,000</td> -->
					</tr>
					<tr>
						<th>IEEE Student Member</th>
						<td>KRW 1,260,000</td>
						<td>KRW 1,008,000</td>
<!-- 						<td>KRW 403,000</td> -->
						<td>KRW 672,000</td>
<!-- 						<td>KRW 403,000</td> -->
					</tr>
					<tr>
						<th>Student Non-Member</th>
						<td>KRW 1,512,000</td>
						<td>KRW 1,209,600</td>
<!-- 						<td>KRW 483,600</td> -->
						<td>KRW 806,400</td>
<!-- 						<td>KRW 483,600</td> -->
					</tr>
					<tr>
						<th>IEEE Life Member <span class="red">*</span></th>
						<td>KRW 990,000</td>
						<td>-</td>
<!-- 						<td>-</td> -->
						<td>-</td>
<!-- 						<td>-</td> -->
					</tr>
				</tbody>
			</table>
		</div>
		<p class="mt10 mb20"><span class="red">*</span>Verified IEEE Life Members are eligible for a discount on the Full Conference registration, either as an author or an attendee. Please note that the Life Member discount applies only to the Full Conference registration.</p>

		<h4>Additional tickets</h4>
		<ul class="lss-dot">
			<li>Welcome Reception — Monday evening, March 23, 2025: KRW 70,000</li>
			<li>Gala Dinner — Tuesday evening, March 25, 2025: KRW 150,000</li>
		</ul>
	</dd>
</dl>

<dl>
	<dt><span><i class="fa fa-quora mr10"></i>Visa Invitation Letters</span><i class="material-icons">keyboard_arrow_down</i></dt>
	<dd>
		<p class="taj">
			<u><b>Important</b>: If you request a visa invitation letter, your registration cannot be cancelled.</u><br /><br>
			During registration, you will have the option to request a visa invitation letter. If selected, it will be automatically generated upon completion of your registration, using the name, organization, address, passport number, and planned arrival and departure dates in the Republic of Korea that you provide. <br /><br>
			If you require additional information on the letter (e.g., date of birth or passport details such as number, date of issue, expiration date, and place of issue), please email <a href="mailto:ieeevr2026@gmail.com" class="link">ieeevr2026@gmail.com</a> <br /><br>
			<b>For journal and conference paper authors:</b><br>
			If you need to begin the visa process before the final notification, we encourage the presenting author to register for the conference before the final notification date (January 23, 2025) so that we can issue the visa invitation letter. In this exceptional case, the registered author may request a refund only if the final notification results in a rejection.
			<br><br>
			For all other situations, we strongly encourage authors to register immediately after receiving the final notification. Visa invitation letters will be issued as soon as possible. In any case, we advise authors to anticipate potential delays in the visa application process.
		</p>
	</dd>
</dl>

<dl>
	<dt><span><i class="fa fa-quora mr10"></i>Cancellation Policy</span><i class="material-icons">keyboard_arrow_down</i></dt>
	<dd>
		<ul class="lss-dot mb30">
			<li>All refund/cancellation requests must be received in writing to <a href="mailto:ieeevr2026@gmail.com" class="link">ieeevr2026@gmail.com</a> by <b>February 28, 2026 11:59 PM AoE.</b></li>
			<li>Registration cancelled until February 28 will be refunded 80% of the registration fees.</li>
			<li>Registration cancelled from March 1 will not be eligible for a refund.</li>
		</ul>

		<b>Notes:</b>
		<ul class="lss-dot">
			<li>Author registrations are non-refundable.</li>
			<li>Registrations for which a visa invitation letter has been issued are non-refundable (with one exception applicable only to journal and conference paper authors; see above).</li>
		</ul>
	</dd>
</dl>






<!--//251217추가-->



<div style="display:none">
<h1 id="registration">Registration  <div class="floatRight"><span id="register"></span></div></h1>
<p>
	<strong style="color: black">IEEE VR 2025: The 32<sup>nd</sup> IEEE Conference on Virtual Reality and 3D User Interfaces </strong>
	<br>
	March 8-12, 2025 | Saint-Malo, France
	<br>
</p>

<!--<p class="alignCenter">
	<a href="javascript:openRegistration('Member')" class="btn registration_button">IEEE Member Registration</a>
	<a href="javascript:openRegistration('Non-Member')" class="btn registration_button">IEEE Non-Member Registration</a>		
</p>-->
<div class="ieeevrmsgbox bold alignCenter">
        <div class = "ieeevrmsgboxInside med">
		   The registration is now open! Please click <strong><a target="_blank" href="https://v4.event-vert.org/en/ieeevr2025/">here</a></strong> to register.<br/>
		   Please read the terms and conditions provided hereafter.
        </div>
</div>
<p>
    Registration payments for this conference are handled through <b>VERTCOM</b> (Conference Registration Service). Please keep your email confirmation to modify your registration.
</p>

<div id="accordion">
<div>
	<h4 id="item-1">IEEE VR 2025 Registration</h4>	
	<div>		
		<p>We are looking forward to welcoming you at the IEEE VR 2025 conference, for this very special week of exchanges about innovative research and advances in VR, AR, XR and 3D user interfaces. 
		After reviewing the sections below, please use the link above to register to IEEE VR 2025.</p>
		<ul>
			<li><b>February 5th, 2025</b>: Deadline for all authors to register and for scientific works to be included in the conference program and publications.</li>
			<li><b>February 5th, 2025</b>: Early registration ends.</li>	
			<li><b>Visa Information Contact</b>: Contact <a target="_blank" href="mailto:visa2025@ieeevr.org ">visa2025@ieeevr.org</a>.</li>
			<li><b>Conference Registration Services</b>: Contact <a target="_blank" href="mailto:register2025@ieeevr.org">register2025@ieeevr.org</a>.</li>	
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
			<li>The registration deadline for authors is <span class="bold">February 5th, 2025.</span></li>
			<li>Author registrations are <span class="bold">not refundable</span> and must be processed no later than <span class="bold">February 5, 2025</span> for their work to be included in the conference program and publications.</li>		
			<li>Author registration requires a submission track and submission ID.</li>
			<li>To register, open the Registration form using the link above. Under the REGISTRATION ITEMS  section, select  “Author registration”.</li>
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
	<h4>Fees: Early Registration until February 5th, 2025 (AoE) Euros (€)</h4>
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
	<h4>Fees: Late Registration from February 6th, 2025 (AoE) Euros (€)</h4>
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
	<h4>Additional Tickets</h4>
	<div>
		<p>
		If you need to purchase additional tickets for the reception or banquet, the prices are:
			<ul>
				<li><b>Welcome reception on Monday night, 10 March 2025: 40 € (Euros)</b></li>
				<li><b>Gala dinner on Tuesday night, 11 March 2025: 130 € (Euros) </b></li>
			</ul>
		</p>
	</div>
</div>
<div>
	<h4>Visa Invitation Letters</h4>
	<div>
		<p>
			During the registration process you will be offered the opportunity to request a visa invitation letter. If you do so, one will be automatically generated when your registration is complete, using your name, organization, and address + accepted papier title. <span class="bold">Please note that if you request a visa invitation letter, your registration cannot be cancelled.</span> Requests for letters containing additional information, such as date of birth or passport information (number, date of issue, expiration date, place of issue), may be e-mailed to: <a target="_blank" href="mailto:visa2025@ieeevr.org ">visa2025@ieeevr.org</a>. 
		</p>
		<p>
		<span class="bold">For journal and conference papers authors</span>: If you need to start the visa process before the final notification, we encourage the presenting author to register to the conference before the final notification (January 9th, 2025) so we can issue the invitation letter. Exceptionally, the registered author could request a refund if the final notification has a negative outcome (paper rejected).
		</p>
		<p>For the other situations, we strongly encourage authors to register right after the final notification is provided. We will deliver the visa invitation letters as soon as possible. In any case, we encourage authors to anticipate potential delays during the visa process.
		</p>
	</div>	
</div>
<div>
	<h4>Cancellation Policy</h4>
	<div>
		<p>
			All refund/cancellation requests must be received in writing to  <a target="_blank" href="mailto:register2025@ieeevr.org">register2025@ieeevr.org</a> by February 16th, 2025 11:59 PM AoE Time.
		</p>
		<p>
			Registration cancelled until February 16th will be refunded 80% of the registration fees. Registration cancelled from February 17th will not be eligible for a refund.
		</p><p>
			Note:
			<ul>
				<li>Author registrations are non-refundable.</li>
				<li>Registrations for which a Visa invitation letter was obtained are no-refundable (one exception applies only for journal and conference papers authors – see above).</li>
			</ul>
		</p>
	</div>
</div>
<div>
	<h4 id="faq">FAQ - Frequently Asked Questions</h4>
	<div>
	<ol>
		<li style="color: #F5725E:"><strong>When do I need to select the “Author Registration” option?</strong><br/>
			In case you are the author of a conference paper/journal paper/invited TVCG paper/workshop paper published in the digital library/poster/research demo/3DUI contest and that no other author is registered yet. Such author registration is needed and mandatory to make sure that your publication is finally accepted in the conference program and/or proceedings.
			</li> 
		<li style="color: #F5725E:"><strong>How many papers/publications can be validated by one Author Registration?</strong><br/>
			Each registered author can validate <b>only two</b> conference paper/journal paper/invited TVCG paper/workshop paper published in the digital library/poster/research demo/3DUI contest.
			For example, if you have 1 conference paper, 1 TVCG invited paper and 1 demo, you need 2 " Author Registration". To do so, the most convenient way is that a co-author of a paper/publication makes the second registration. </li>
		<li style="color: #F5725E:"><strong>Can an author register as a "General Participant", while they actually present a paper?</strong><br/>
			Yes. As long as the paper has one author registered as " Author Registration" to validate the paper, another registered participant can present the paper.</li>
		<li style="color: #F5725E:"><strong>Can I benefit from a Student discount with an Author registration ?</strong><br/>
			No, if you register as an Author, you are not eligible for the Student discount. However, you can still benefit from the IEEE Member discount.</li>
		<li style="color: #F5725E:"><strong>I am invited to present a paper previously published on TVCG. What category should I register as?</strong><br/>
			You should use the same category as "Author Registration".</li>
		<li style="color: #F5725E:"><strong>What number should I provide to register as an invited TVCG paper author?</strong><br/>
		You should indicate your full Paper DOI, eg: 10.1109/TVCG.20nn.ddddddd (as listed on TVCG).</li>
		<li style="color: #F5725E:"><strong>What is an Invited TVCG paper?</strong><br/>
		Invited TVCG papers are those manuscripts previously published in IEEE TVCG journal and invited for an oral presentation at the conference. Not to be confused with IEEE VR 2025 Journal Papers published in the special issue.</li>
		<li style="color: #F5725E:"><strong>As a paper/publication author, how can I get a VISA invitation letter? </strong><br/>
	During your registration you should indicate your need for a VISA invitation letter and provide the requested information in the registration form. Once your registration is made and your payment is accepted your visa invitation letter can be obtained very rapidly in an automatic way. If you do not receive it in the following couple of days, or if you need this letter very fast after your registration, or in case of any other related issue you can send an email to : <a target="_blank" href="mailto:visa2025@ieeevr.org">visa2025@ieeevr.org</a>
		</li>
		<li style="color: #F5725E:"><strong>As a Doctoral Consortium presenter, do I need an Author Registration?</strong><br/>
	No. You do not need an Author Registration as a Doctoral Consortium presenter. If, in addition to your DC presentation, you have a conference paper/journal paper/invited TVCG paper/workshop paper published in the digital library/poster/research demo/3DUI contest, then you need an author registration.
		</li>
		<li style="color: #F5725E:"><strong>Can I make multiple registrations? </strong><br/>
	No, you can only register once.
		</li>
		<li style="color: #F5725E:"><strong>I am a Student Volunteer and I benefit from a complimentary registration but I am also the author of a paper. Which registration type should I select?</strong><br/>
Each paper requires an Author registration so either one of your co-author can take the Author registration for this paper, or you still need to select the Author registration for yourself.
		</li>
		<li style="color: #F5725E:"><strong>I benefit from a complimentary registration for a workshop/tutorial, but I would like to attend the entire conference. Which registration type should I select? </strong><br/>
		You must select the Conference-Only registration, and then let us know when your payment has been accepted. Then, we will manually upgrade your registration to a Full-Conference registration.		</li>
	</ol>
	If you have further questions, please contact <a target="_blank" href="mailto:register2025[at]ieeevr.org">register2025[at]ieeevr.org</a>.
</div>
</div>
</div>
