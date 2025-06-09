---
layout: ieeevr-default
title: "Conference Committee"
subtitle: "IEEE VR 2026"
title_separator: "|"
---
<style>
.sponsor_section {
    display: none;
}
.confsponsors-type {
    display: none;
}

.floatRight{
    font-size: 0.7em;
    color: #df7603;
    font-weight: bold;
    text-transform: uppercase;
}
#sponsors .conf-icon {
  display: none !important;
}
</style>
<script type="text/javascript">
	$(document).ready(function(){
		var email = ""; 
		var domain = "ieeevr.org"; 

		email = "general2026"; 		
		general.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "program2025"; 
		program.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "contest2025"; 
		contest.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";

		email = "awards2025"; 
		awards.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "doctoralconsortium2025"; 
		doctoralconsortium.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "deia2025"; 
		diversity.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
	
		email = "exhibitssponsors2025"; 
		exhibitssponsors.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";

		email = "finance2025"; 
		finance.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "localarrangements2025";
		localarrangements.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "posters2025"; 
		posters.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "publications2025"; 
		publications.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "publicity2025"; 
		publicity.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "researchdemos2025"; 
		researchdemos.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "studentvolunteers2025"; 
		studentvolunteers.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "tutorials2025"; 
		tutorials.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";

		email = "web2025";		
		web.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "workshops2025"; 		
		workshops.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "labtour2025"; 		
		labtour.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";

		email = "eira2025"; 		
		environment.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";		
		
		email = "socialevents2025"; 		
		socialevents.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "art2025"; 		
		art.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";
		
		email = "onlineexperience2025"; 		
		onlineexperience.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";

		email = "xrfuturefaculty2025"; 		
		xrfuturefaculty.innerHTML  = "<span class='text-nowrap'><a href=javascript:location='" + "mail" + "to:" + email + "@" + domain + "'><i class='fas fa-fw fa-envelope-square emailIconSm' style=''></i><i class='emailTextSm'>" + email + "@" + domain + "</a></i></span>";		

	});
</script>


<h1>Conference Committee</h1>
<div>
  <h2>General Chairs
    <div class="floatRight"><span id="general"></span></div>
  </h2>
  <ul>
    <li><span class="bold">Gerard J. Kim</span> – <i>Korea University, South Korea</i></li>
    <li><span class="bold">JungHyun Han</span> – <i>Korea University, South Korea</i></li>
    <li><span class="bold">Soon Ki Jung</span> – <i>Kyungpook National University, South Korea</i></li>
  </ul>
</div>
<div>
  <h2>Honorary Chairs
    <div class="floatRight"><span id="honorary">wohn@kaist.ac.kr </span></div>
  </h2>
  <ul>
    <li><span class="bold">Kwangyun Wohn</span> – <i>KAIST, South Korea</i></li>
    <li><span class="bold">Chanmo Park</span> – <i>POSTECH, South Korea</i></li>
    <li><span class="bold">Hajine Kimn</span> – <i>Ajou University, South Korea</i></li>
    <li><span class="bold">Anatole Lecuyer</span> – <i>Inria, France</i></li>
    <li><span class="bold">Ferran Argelaguet</span> – <i>Inria, France</i></li>
    <li><span class="bold">Anne Helene Olivier</span> – <i>Univ Rennes 2, France</i></li>
  </ul>
</div>
<div>
  <h2>Program Chairs
    <div class="floatRight"><span id="program">yuta.itoh@iii.u-tokyo.ac.jp </span></div>
  </h2>
  <ul>
    <li><span class="bold">Yuta Itoh</span> – <i>University of Tokyo, Japan</i></li>
    <li><span class="bold">Bobby Bodenheimer</span> – <i>Vanderbilt University, USA</i></li>
    <li><span class="bold">Rick Skarbez</span> – <i>La Trobe University, Australia</i></li>
    <li><span class="bold">Lonni Besançon</span> – <i>Linköping University, Sweden</i></li>
    <li><span class="bold">Daisuke Iwai</span> – <i>University of Osaka, Japan</i></li>
  </ul>
</div>
<div>
  <h2>Finance Chairs
    <div class="floatRight"><span id="art">myungho@pusan.ac.kr</span></div>
  </h2>
  <ul>
    <li><span class="bold">Myongho Lee</span> – <i>Pusan National University, South Korea</i></li>
    <li><span class="bold">Youngwon Kim</span> – <i>Kumho National Institute of Technology, South Korea</i></li>
  </ul>
</div>
<div>
  <h2>Exhibits and Sponsors Chairs
    <div class="floatRight"><span id="environment">siamiz_hkang@korea.ac.kr </span></div>
  </h2>
  <ul>
    <li><span class="bold">Hyeongyeop Kang</span> – <i>Korea University, South Korea</i></li>
    <li><span class="bold">Kitahara, Itaru</span> – <i>University of Tsukuba, Japan</i></li>
    <li><span class="bold">Issac Cho</span> – <i>Utah State University, USA</i></li>
    <li><span class="bold">Gabriel Zachmann</span> – <i>University of Bremen, Germany</i></li>
  </ul>
</div>
<div>
  <h2>On-line Experience Chairs
    <div class="floatRight"><span id="onlineexperience">Seungwon.Kim@chonnam.ac.kr </span></div>
  </h2>
  <ul>
    <li><span class="bold">Seungwon Kim</span> – <i>Jeonnam National University, South Korea</i></li>
    <li><span class="bold">Walczak, Krzysztof</span> – <i>Poznań University of Economics and Business, Poland</i></li>
    <li><span class="bold">Isayas, Adhanom</span> – <i>Texas State University, USA</i></li>
  </ul>
</div>
<div>
  <h2>Poster Chairs
    <div class="floatRight"><span id="contest">Gun.Lee@unisa.edu.au </span></div>
  </h2>
  <ul>
    <li><span class="bold">Gun Lee</span> – <i>University of South Australia, Australia</i></li>
    <li><span class="bold">Andrea Bonsch</span> – <i>RWTH Aachen University, Germany</i></li>
    <li><span class="bold">Justine Saint Aubert</span> – <i>IRISA, France</i></li>
    <li><span class="bold">Pablo Figueroa</span> – <i>Universidad di los Angdes, Colombia</i></li>
    <li><span class="bold">Mohammed Safayet Arefin</span> – <i>Colorado State Univ., USA</i></li>
  </ul>
</div>
<div>
  <h2>Publication Chairs
    <div class="floatRight"><span id="awards">sangho@kaist.ac.kr</span></div>
  </h2>
  <ul>
    <li><span class="bold">Sangho Yoon</span> – <i>KAIST, South Korea</i></li>
    <li><span class="bold">Chen Jian</span> – <i>Ohio State University, USA</i></li>
    <li><span class="bold">Chris Mousas</span> – <i>Purdue University, USA</i></li>
  </ul>
</div>
<div>
  <h2>Awards Chairs
    <div class="floatRight"><span id="doctoralconsortium">wallraven@korea.ac.kr</span></div>
  </h2>
  <ul>
    <li><span class="bold">Chirs Wallravan</span> – <i>Korea University, South Korea</i></li>
    <li><span class="bold">Henning Pohl</span> – <i>Aalborg University, Denmark</i></li>
    <li><span class="bold">Sadagic Amela</span> – <i>NPS, USA</i></li>
  </ul>
</div>
<div>
  <h2>XR Gallery
    <div class="floatRight"><span id="diversity">Yue.Li@xjtlu.edu.cn 
</span></div>
  </h2>
  <ul>
    <li><span class="bold">Yue Li</span> – <i>Xi’an Jiaotong-Liverpool University, China</i></li>
    <li><span class="bold">Jean Remy Chardonnet</span> – <i>Arts et Métiers Institute of Technology, France</i></li>
    <li><span class="bold">Hyeongsuk Kim</span> – <i>Konkuk Univ., South Korea</i></li>
    <li><span class="bold">Henry Duh</span> – <i>HK Polytech, Hong Kong</i></li>
    <li><span class="bold">Haining Liang</span> – <i>HKUST-GZ, China</i></li>
    <li><span class="bold">Georges Gagnere</span> – <i>Univ Paris 8, France</i></li>
  </ul>
</div>
<div>
  <h2>Demo
    <div class="floatRight"><span id="exhibitssponsors">Yue.Li@xjtlu.edu.cn </span></div>
  </h2>
  <ul>
    <li><span class="bold">Uijong Ju</span> – <i>Kyunghee University, South Korea</i></li>
    <li><span class="bold">Daniel Zielasko</span> – <i>Univ. of Trier, Germany</i></li>
    <li><span class="bold">Elham "Ellie" Ebrahimi</span> – <i>UNC Wilmington, USA</i></li>
    <li><span class="bold">Unyeon Yang</span> – <i>ETRI Korea, South Korea</i></li>
  </ul>
</div>
<div>
  <h2>Student Volunteers Chairs
    <div class="floatRight"><span id="finance">hji@kist.re.kr </span></div>
  </h2>
  <ul>
    <li><span class="bold">Jane Hwang</span> – <i>KIST, South Korea</i></li>
    <li><span class="bold">Desai, Kevin</span> – <i>University of Texas at San Antonio, USA</i></li>
    <li><span class="bold">Hanseob Kim</span> – <i>Konyang University, South Korea</i></li>
  </ul>
</div>
<div>
  <h2>Workshop Chairs
    <div class="floatRight"><span id="localarrangements">dongsikjo@ulsan.ac.kr </span></div>
  </h2>
  <ul>
    <li><span class="bold">Donsik Jo</span> – <i>Ulsan University, South Korea</i></li>
    <li><span class="bold">Dirk Reiners</span> – <i>UCF, USA</i></li>
    <li><span class="bold">Pierre Bourdin</span> – <i>U of Oberta de Catalyuna, Spain</i></li>
    <li><span class="bold">Hyeongil Nam</span> – <i>University of Calgary, Canada</i></li>
  </ul>
</div>
<div>
  <h2>3D UI Contest Chairs
    <div class="floatRight"><span id="posters">pcy8201@postech.ac.kr</span></div>
  </h2>
  <ul>
    <li><span class="bold">Chaeyong Park</span> – <i>Korea University, South Korea</i></li>
    <li><span class="bold">Kopper Regis</span> – <i>UNC Greensboro, USA</i></li>
    <li><span class="bold">Mania Katerina</span> – <i>TU Crete, Greece</i></li>
    <li><span class="bold">Tim Weissker</span> – <i>RWTG Aachen Uni, Germany</i></li>
  </ul>
</div>
<div>
  <h2>Diversity / Environment Chairs
    <div class="floatRight"><span id="publications">jeon@khu.ac.kr </span></div>
  </h2>
  <ul>
    <li><span class="bold">Seokhee Jeon</span> – <i>Kyunghee University, South Korea</i></li>
    <li><span class="bold">Heo, Seongkook</span> – <i>Univ of Virginia, USA</i></li>
    <li><span class="bold">Manuela Chessa</span> – <i>University of Genoa, Italy</i></li>
    <li><span class="bold">Ludovic Hoyet</span> – <i>Centre Inria de l'Université de Rennes, France</i></li>
    <li><span class="bold">Marc Macé</span> – <i>Centre Inria de l'Université de Rennes, France</i></li>
  </ul>
</div>
<div>
  <h2>Tutorial
    <div class="floatRight"><span id="publicity">kangsoo.kim@ucalgary.ca </span></div>
  </h2>
  <ul>
    <li><span class="bold">Kangsoo Kim</span> – <i>University of Calgary, Canada</i></li>
    <li><span class="bold">Jung Sung Chul</span> – <i>Kennesaw State University, USA</i></li>
    <li><span class="bold">Piumsomboon, Thammathip</span> – <i>University of Canterbury, New Zealand</i></li>
  </ul>
</div>
<div>
  <h2>Web Chairs / Publicity
    <div class="floatRight"><span id="researchdemos">H.Kim@soton.ac.uk </span></div>
  </h2>
  <ul>
    <li><span class="bold">Hansung Kim</span> – <i>University of Southampton, United Kingdom</i></li>
    <li><span class="bold">Gao Yang</span> – <i>Beihang University, China</i></li>
    <li><span class="bold">Nels Numan</span> – <i>UCL, United Kingdom</i></li>
  </ul>
</div>
<div>
  <h2>Panel
    <div class="floatRight"><span id="socialevents">yoo@byoo.org </span></div>
  </h2>
  <ul>
    <li><span class="bold">Byunghyun Yoo</span> – <i>KIST, South Korea</i></li>
  </ul>
</div>
<div>
  <h2>XR Faculty
    <div class="floatRight"><span id="studentvolunteers">jeongmi@kaist.ac.kr </span></div>
  </h2>
  <ul>
    <li><span class="bold">Jeongmi Lee</span> – <i>KAIST, South Korea</i></li>
    <li><span class="bold">Lee Lisle</span> – <i>VT, USA</i></li>
    <li><span class="bold">Daniel Pires de Sa Medeiros</span> – <i>Telecom Paris, France</i></li>
    <li><span class="bold">Niall Williams</span> – <i>NYU, USA</i></li>
    <li><span class="bold">Cassidy Nelson</span> – <i>Ohio U, USA</i></li>
    <li><span class="bold">Matthew Gottsacker</span> – <i>UCF, USA</i></li>
    <li><span class="bold">Jeanne Hecquard</span> – <i>Inria, France</i></li>
    <li><span class="bold">Radha Kumaran</span> – <i>UCSB, USA</i></li>
  </ul>
</div>
<div>
  <h2>Doctoral Consortium
    <div class="floatRight"><span id="tutorials">goodsoon96@gmail.com </span></div>
  </h2>
  <ul>
    <li><span class="bold">Yongsoon Choi</span> – <i>Sogang University, South Korea</i></li>
    <li><span class="bold">Edgar Rojas-Munoz</span> – <i>TAMU, USA</i></li>
    <li><span class="bold">Iana Podkosova</span> – <i>TU Wien, Austria</i></li>
  </ul>
</div>
<div>
  <h2>Social Events / Local Arrangement Chairs
    <div class="floatRight"><span id="web">sunghoonim@dgist.ac.kr </span></div>
  </h2>
  <ul>
    <li><span class="bold">Sunghoon Ihm</span> – <i>DGIST, South Korea</i></li>
    <li><span class="bold">Gyeorae Yoon</span> – <i>KNU, South Korea</i></li>
  </ul>
</div>
