---
layout: ieeevr-default
title: "Keynote Speakers"
subtitle: "IEEE VR 2026"
title_separator: "|"
---

<style>
  .ks-container { width: 100%; margin-top: 20px; }
  .ks-list-item { display: flex; align-items: center; padding: 20px; border-bottom: 1px solid #eee; gap: 20px; flex-wrap: wrap; }
  .ks-thumb { width: 180px; height: 180px; border-radius: 20%; object-fit: cover; }
  .ks-info { flex: 1; min-width: 250px; }
  .ks-info h2 { margin: 0; font-size: 1.25rem; }
  .ks-info .affiliation { color: #666; font-size: 0.7rem; margin: 5px 0; }
  .ks-info .talk-title { font-weight: bold; color: #006699; font-size: 0.9rem; }
  .ks-more-btn { padding: 5px 15px; background: #00589b; color: #fff; border: none; border-radius: 5px; cursor: pointer; transition: 0.3s; font-size: 0.7rem; }
  .ks-more-btn:hover { background: #003d6b; }

  .ks-modal { display: none; position: fixed; z-index: 9999; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); overflow: hidden; }
  .ks-modal-content { position: relative; background: #fff; margin: 3% auto; padding: 0; width: 90%; max-width: 900px; max-height: 85vh; border-radius: 12px; display: flex; flex-direction: column; }
  .ks-modal-header-bar { padding: 15px 25px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; background: #fff; border-radius: 12px 12px 0 0; z-index: 10; }
  .ks-close { font-size: 32px; font-weight: bold; cursor: pointer; color: #aaa; line-height: 1; }
  .ks-close:hover { color: #000; }
  
  .ks-modal-scroll-area { padding: 30px; overflow-y: auto; flex: 1; }
  .ks-modal-profile { text-align: center; margin-bottom: 30px; }
  .ks-modal-photo { width: 200px; height: 200px; border-radius: 20%; object-fit: cover; margin-bottom: 15px; border: 4px solid #f8f9fa; }
  .ks-modal-name { font-size: 1.8rem; margin: 0; color: #333; }
  .ks-modal-affil { color: #666; font-size: 1.1rem; margin: 8px 0; }
  .ks-modal-talk { font-size: 1.3rem; font-weight: bold; color: #00589b; margin-top: 15px; line-height: 1.3; }

  .ks-section-title { font-size: 1.2rem; font-weight: bold; color: #00589b; border-bottom: 2px solid #00589b; padding-bottom: 5px; margin: 35px 0 15px; text-transform: uppercase; }
  .ks-text-content { font-size: 0.7rem; line-height: 1.3; color: #444; text-align: justify; }
  .page__content h2 { color: #000 !important; }
  .page__content p {
    margin: 0.3em auto 1rem;
    text-align: center;
}
  @media (max-width: 600px) {
    .ks-list-item { flex-direction: column; text-align: center; }
    .ks-info { min-width: 100%; }
    .ks-modal-content { margin: 5% auto; height: 90vh; }
  }
</style>

<h1 id="resources">Keynote Speakers</h1>

<div class="ks-container">
  <div class="ks-list-item">
    <img src="{{ '/assets/images/k_sp_01.png' | relative_url }}" class="ks-thumb" alt="Dr. Mar Gonzalez-Franco">
    <div class="ks-info">
      <h2>Dr. Mar Gonzalez-Franco</h2>
      <div class="affiliation">Research Manager, BIRD Lab, Google AR & VR</div>
      <div class="talk-title">Towards Human–AI Symbiosis with XR</div>
    </div>
    <button class="ks-more-btn" onclick="openKsModal('modal1')">More</button>
  </div>

  <div class="ks-list-item">
    <img src="{{ '/assets/images/k_sp_02.png' | relative_url }}" class="ks-thumb" alt="Dr. Albert “Skip” Rizzo">
    <div class="ks-info">
      <h2>Dr. Albert “Skip” Rizzo</h2>
      <div class="affiliation">Director for Medical Virtual Reality, USC Institute for Creative Technologies<br/>
Research Professor, USC Davis School of Gerontology and USC Keck School of Medicine Department of Psychiatry & Behavioral Science
</div>
      <div class="talk-title">Clinical Virtual Reality: A Brief Review of the Future</div>
    </div>
    <button class="ks-more-btn" onclick="openKsModal('modal2')">More</button>
  </div>
</div>

<div id="modal1" class="ks-modal">
  <div class="ks-modal-content">
    <div class="ks-modal-header-bar">
      <span style="font-weight: bold; color: #666;">Speaker Detail</span>
      <span class="ks-close" onclick="closeKsModal('modal1')">&times;</span>
    </div>
    <div class="ks-modal-scroll-area">
      <div class="ks-modal-profile">
        <img src="{{ '/assets/images/k_sp_01.png' | relative_url }}" class="ks-modal-photo">
        <h2 class="ks-modal-name">Dr. Mar Gonzalez-Franco</h2>
        <p class="ks-modal-affil">Research Manager, BIRD Lab, Google AR & VR</p>
        <div class="ks-modal-talk">Towards Human–AI Symbiosis with XR</div>
      </div>
      
      <div class="ks-section-title">Abstract</div>
      <div class="ks-text-content">
        Until now, humans have acted as the primary decision-makers directing machine behavior. But as AI becomes more autonomous, the relationship between humans and machines is shifting toward cooperation. In this keynote, Gonzalez-Franco envisions a future where extended reality (XR) technologies enable more natural, immersive, and interactive connections with AI systems — creating new pathways for communication, intent, and shared intelligence.
      </div>
      
      <div class="ks-section-title">Biography</div>
      <div class="ks-text-content">
     Dr. Mar Gonzalez-Franco is a distinguished Computer Scientist and Neuroscientist renowned for her work exploring the intersection of human and artificial intelligence. She currently leads the Blended Intelligence Research and Devices (BIRD) lab at Google AR & VR, where she focuses on augmenting human capabilities by blending innate intelligence with AI through immersive experiences. Her team has led the research for input and interactions to the new XR OS, Android XR, that recently launched with the Samsung Galaxy XR as the first XRAI OS. The work of the team on setting up the guidelines for inputs on XR Operating Systems was recently recognized with the SIGCHI Special Recognition in 2025.
Previously, as a Principal Researcher at Microsoft Research, Dr. Gonzalez-Franco led the release of multiple Avatar libraries for research and the development of Avatars and Together Mode in Microsoft Teams, a feature recognized as one of Time Magazine's "Best Inventions of 2022." A pioneer in immersive AI and AR/VR, she holds over 40 patents and has authored more than 100 academic publications.
  </div>
    </div>
  </div>
</div>

<div id="modal2" class="ks-modal">
  <div class="ks-modal-content">
    <div class="ks-modal-header-bar">
      <span style="font-weight: bold; color: #666;">Speaker Detail</span>
      <span class="ks-close" onclick="closeKsModal('modal2')">&times;</span>
    </div>
    <div class="ks-modal-scroll-area">
      <div class="ks-modal-profile">
        <img src="{{ '/assets/images/k_sp_02.png' | relative_url }}" class="ks-modal-photo">
        <h2 class="ks-modal-name">Dr. Albert “Skip” Rizzo</h2>
        <p class="ks-modal-affil">Director for Medical Virtual Reality, USC Institute for Creative Technologies<br/>
          Research Professor, USC Davis School of Gerontology and USC Keck School of Medicine Department of Psychiatry & Behavioral Science
</p>
        <div class="ks-modal-talk">Clinical Virtual Reality: A Brief Review of the Future</div>
      </div>
      
      <div class="ks-section-title">Abstract</div>
      <div class="ks-text-content">
      Since the mid 1990s, Clinical Virtual Reality (VR) has evolved from an experimental novelty into a maturing clinical tool with an expanding evidence base across behavioral health, neurorehabilitation, and functional restoration. This use of VR simulation technology has produced encouraging results when applied to address the cognitive, psychological, motor, and emotional impairments seen across a wide range of clinical health conditions. This presentation will provide a model for clinical processes that provides a framework for understanding the trajectory of Clinical VR over the last 30 years as a tool in the assessment and treatment of anxiety disorders, PTSD, pain management, autism, ADHD, and in the rehabilitation of stroke, brain injury, and other neurologically-based conditions. Time permitting, the presentation will also include some discussion of the advances in Virtual Human (VH) and Conversational AI technology for clinical training, healthcare coaching, and clinical interviewing. While science never sleeps and much R&D is still needed to advance this area, the current state of the literature is positive and technological advances have reduced the costs and complexity of delivering this type of care in everyday practice. I will argue (with research findings, patient testimonials, and clinical implementation use cases) that Clinical VR/VH applications are poised to become essential assets in the future of healthcare research and practice, with growing influence and adoption across a spectrum of patient populations. This trend will be amplified with the integration of AI into the VR system design, development, and evaluation process, along with multimodal sensing to drive bi-directional interaction and stimulus delivery based on user state.
      </div>
      
      <div class="ks-section-title">Biography</div>
      <div class="ks-text-content">
       Albert “Skip” Rizzo is a Clinical and Neuro- Psychologist, and Director of the University of Southern California Institute for Creative Technologies Medical VR Lab. He is also a research professor in both the USC Dept. of Psychiatry and in the School of Gerontology. Skip conducts research on the design, development and evaluation of VR systems targeting the areas of clinical assessment, treatment and rehabilitation. In the psychological domain, he has directed the development/implementation of the Virtual Iraq/Afghanistan VR exposure therapy system for combat-related PTSD and is involved in translating these simulation assets for PTSD assessment and prevention (stress resilience). His cognitive work has addressed the use of VR applications to test and train cognitive functioning. In the motor domain, he develops VR game-based applications to promote rehabilitation in persons with CNS dysfunction (e.g., stroke and TBI). He is also involved in the creation of artificially intelligent virtual human patients for clinical training and for creating online virtual human healthcare guides for breaking down barriers to care in psychological health and TBI. In 2010, he received the American Psychological Association Award for Outstanding Contributions to the Practice of Trauma Psychology for his R&D work on VR exposure therapy for PTS and in 2015 he received the Society for Brain Mapping and Therapeutics “Pioneer in Medicine” award. He also received the 2019 American Psychological Association Society for Military Psychology Presidential Citation for his trauma work and was recently awarded the 2020 International Society for Traumatic Stress Studies Innovation Award and 2023 IEEE Computer Society VR Lifetime Achievement Award. In his spare time, he plays rugby, listens to music, rides his motorcycle and thinks about new ways that VR can have a positive impact on clinical care by dragging the field of psychology, kickin’ and screamin’, into the 21st century. <br/><br/>

       To view some videos on his work, please visit this YouTube channel: <br/>
<a href="https://www.youtube.com/user/AlbertSkipRizzo/videos?view_as=subscriber" target="_blank">https://www.youtube.com/user/AlbertSkipRizzo/videos?view_as=subscriber</a>

      </div>
    </div>
  </div>
</div>

<script>
  function openKsModal(id) {
    document.getElementById(id).style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeKsModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";
  }

  window.onclick = function(event) {
    if (event.target.className === 'ks-modal') {
      event.target.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
</script>
