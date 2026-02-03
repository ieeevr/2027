---
layout: ieeevr-default
title: "XR/VR Standardization Committee"
subtitle: "IEEE VR 2026"
title_separator: "|"
---

<!-- IEEE VR 2026 Standardization Committee Section -->
<!-- Modern, visually appealing design with panel information -->

<style>
    .std-committee-section {
        padding: 60px 0;
        background: linear-gradient(135deg, #00D4AA 0%, #1e2875 100%);
        position: relative;
    }
    
    .std-committee-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.95);
    }
    
    .std-committee-content {
        position: relative;
        z-index: 1;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    .std-committee-section h2 {
        color: #2d3748;
        margin-bottom: 15px;
        font-size: 2.5em;
        font-weight: 700;
        text-align: center;
        background: linear-gradient(135deg, #00D4AA 0%, #1e2875 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .std-conference-subtitle {
        text-align: center;
        color: #00D4AA;
        font-size: 1.3em;
        font-weight: 600;
        margin-bottom: 40px;
        letter-spacing: 1px;
    }
    
    .std-committee-section h3 {
        color: #2d3748;
        margin-top: 60px;
        margin-bottom: 30px;
        font-size: 1.8em;
        font-weight: 700;
        padding-bottom: 15px;
        border-bottom: 3px solid #00D4AA;
    }
    
    .std-committee-email {
        text-align: center;
        margin: 30px 0 40px 0;
        font-size: 1.2em;
    }
    
    .std-email-link {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 15px 30px;
        background: linear-gradient(135deg, #00D4AA 0%, #1e2875 100%);
        color: white;
        text-decoration: none;
        border-radius: 50px;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }
    
    .std-email-link:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }
    
    .std-email-icon {
        width: 24px;
        height: 24px;
    }
    
    .std-intro {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        padding: 30px;
        border-radius: 15px;
        border-left: 5px solid #00D4AA;
        margin-bottom: 50px;
        line-height: 1.8;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    }
    
    .std-intro p {
        color: #4a5568;
        font-size: 1.05em;
        margin: 0;
    }
    
    /* Panel Section */
    .std-panel-section {
        background: linear-gradient(135deg, #00D4AA 0%, #1e2875 100%);
        padding: 40px;
        border-radius: 15px;
        margin: 50px 0;
        color: white;
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    }
    
    .std-panel-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 25px;
    }
    
    .std-panel-icon {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
    }
    
    .std-panel-section h4 {
        margin: 0;
        font-size: 1.8em;
        font-weight: 700;
    }
    
    .std-panel-title {
        font-size: 1.3em;
        font-weight: 600;
        margin: 20px 0;
        line-height: 1.5;
        background: rgba(255, 255, 255, 0.15);
        padding: 20px;
        border-radius: 10px;
    }
    
    .std-panel-description {
        font-size: 1.05em;
        line-height: 1.8;
        margin: 20px 0;
    }
    
    .std-panel-topics {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin: 30px 0;
    }
    
    .std-topic-card {
        background: rgba(255, 255, 255, 0.15);
        padding: 20px;
        border-radius: 10px;
        backdrop-filter: blur(10px);
    }
    
    .std-topic-card h5 {
        margin: 0 0 10px 0;
        font-size: 1.2em;
        font-weight: 600;
    }
    
    .std-topic-card p {
        margin: 0;
        font-size: 0.95em;
        line-height: 1.6;
        opacity: 0.95;
    }
    
    .std-member-grid {
        display: grid;
        gap: 30px;
        margin: 30px auto 50px auto;
        justify-content: center;
    }
    
    .std-member-grid.std-chairs-grid {
        grid-template-columns: repeat(4, 1fr);
        max-width: 1200px;
    }
    
    .std-member-grid.std-members-grid {
        grid-template-columns: repeat(5, 1fr);
        max-width: 1400px;
    }
    
    .std-member-grid.std-advisors-grid {
        grid-template-columns: repeat(2, 1fr);
        max-width: 700px;
    }
    
    .std-member-card-simple {
        background: white;
        border-radius: 15px;
        padding: 30px 20px;
        text-align: center;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        border-top: 4px solid #1e2875;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .std-member-card-simple:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(30, 40, 117, 0.2);
    }
    
    .std-member-photo {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
        margin: 0 auto 20px;
        display: block;
        border: 4px solid #00D4AA;
        background: linear-gradient(135deg, #00D4AA 0%, #1e2875 100%);
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }
    
    .std-member-name {
        font-weight: 700;
        font-size: 1.15em;
        color: #2d3748;
        margin: 15px 0 8px 0;
    }
    
    .std-member-affiliation {
        color: #718096;
        font-size: 0.95em;
        font-style: italic;
        margin-bottom: 15px;
        line-height: 1.5;
    }
    
    /* Biography Toggle Button */
    .std-bio-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-top: 15px;
        padding: 10px 20px;
        background: linear-gradient(135deg, #00D4AA 0%, #1e2875 100%);
        color: white;
        border: none;
        border-radius: 25px;
        font-size: 0.9em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0, 212, 170, 0.3);
    }
    
    .std-bio-toggle:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 212, 170, 0.4);
    }
    
    .std-bio-arrow {
        transition: transform 0.3s ease;
        font-size: 0.8em;
    }
    
    .std-bio-arrow.rotated {
        transform: rotate(180deg);
    }
    
    /* Biography Content */
    .std-member-bio {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease, padding 0.4s ease, margin 0.4s ease;
        text-align: justify;
        font-size: 0.7em;
        color: #4a5568;
        line-height: 1.7;
        padding: 0 15px;
    }
    
    .std-member-bio.expanded {
        max-height: 500px;
        margin-top: 15px;
        padding: 15px;
        border-top: 2px solid #e2e8f0;
    }
    
    @media (max-width: 1400px) {
        .std-member-grid.std-members-grid {
            grid-template-columns: repeat(3, 1fr);
            max-width: 900px;
        }
    }
    
    @media (max-width: 1200px) {
        .std-member-grid.std-chairs-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 700px;
        }
    }
    
    @media (max-width: 768px) {
        .std-member-grid.std-chairs-grid,
        .std-member-grid.std-members-grid,
        .std-member-grid.std-advisors-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
        }
        
        .std-committee-section h2 {
            font-size: 2em;
        }
        
        .std-panel-topics {
            grid-template-columns: 1fr;
        }
    }
</style>

<div class="std-committee-section" id="standardization-committee">
    <div class="std-committee-content">
        <img src="images/logo.png" alt="XRStand Logo" style="position: fixed; top: 0px; left: -140px; width: 500px; height: 180px;">
        <h2>XR/VR Standardization Committee</h2>
        <div class="std-conference-subtitle">IEEE VR 2026 · Daegu, Korea</div>
        <!-- <img src="images/logo.png" alt="IEEE VR 2026 Logo" style="display: block; margin: 0 auto 40px; max-width: 200px; opacity: 0.9;"> -->
        
        <div class="std-committee-email">
            <a href="mailto:xrstandards2026@ieeevr.org" class="std-email-link">
                <svg class="std-email-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                xrstandards2026@ieeevr.org
            </a>
        </div>
        
        <div class="std-intro">
            <p>The IEEE VR 2026 Standardization Committee strengthens connections between academia, industry, and Standards Developing Organizations (SDOs), communicating perspectives and insights from the research community to advance standardization efforts in Virtual Reality, Augmented Reality, and Mixed Reality technologies. Building on the foundation established at ISMAR 2024 (<a href="https://www.youtube.com/watch?v=xDF59FpiB_s" style="color: #1e2875; text-decoration: underline;">Learn More</a>) and 2025 (<a href="https://www.youtube.com/watch?v=6TGDVTBICNc" style="color: #1e2875; text-decoration: underline;">Learn More</a>), this committee focuses on standardization efforts in Virtual Reality, Augmented Reality, and Mixed Reality technologies.</p>
            
            <p style="margin-top: 20px; padding: 20px; background: white; border-radius: 10px; border-left: 5px solid #00D4AA; font-weight: 600; font-size: 1.1em;">
                📋 <strong>For more information about upcoming activities, please check:</strong> <span style="color: #1e2875;">TBD</span>
            </p>
        </div>

        <!-- Activities Section -->
        <div class="std-panel-section">
            <div class="std-panel-header">
                <div class="std-panel-icon">🎯</div>
                <h4>IEEE VR 2026 Activities</h4>
            </div>
            
            <div class="std-panel-description">
                <p>The Standardization Committee is organizing activities at IEEE VR 2026 to promote standardization efforts in the XR/VR community. These activities will bring together researchers, industry leaders, and standardization experts to discuss critical challenges and opportunities in Virtual Reality, Augmented Reality, and Mixed Reality standardization.</p>
                <p style="margin-top: 15px;">We aim to facilitate meaningful dialogue on topics including interoperability, reproducibility, terminology harmonization, and bridging the gap between academic research and industry standards development. More details will be announced soon.</p>
            </div>
            
            <div class="std-panel-topics">
                <div class="std-topic-card">
                    <h5>🔄 Interoperability & Standards</h5>
                    <p>Exploring frameworks for cross-platform compatibility and industry-wide adoption of XR/VR technologies.</p>
                </div>
                
                <div class="std-topic-card">
                    <h5>🔬 Research & Practice</h5>
                    <p>Discussing reproducibility, methodology documentation, and best practices for XR/VR research.</p>
                </div>
                
                <div class="std-topic-card">
                    <h5>🏭 Academic-Industry Collaboration</h5>
                    <p>Strengthening connections between research communities and Standards Developing Organizations.</p>
                </div>
                
                <div class="std-topic-card">
                    <h5>🎯 Future Directions</h5>
                    <p>Identifying priority areas for standardization efforts in the evolving XR/VR landscape.</p>
                </div>
            </div>
        </div>

    <h3>Committee Chairs</h3>
    <div class="std-member-grid std-chairs-grid">
        <div class="std-member-card-simple">
            <img src="images/Yahya%20Hmaiti.jpg" alt="Yahya Hmaiti" class="std-member-photo">
            <div class="std-member-name">Yahya (Yohan) Hmaiti</div>
            <div class="std-member-affiliation">University of Central Florida, USA</div>
            <button class="std-bio-toggle" onclick="toggleBio(this)">
                <span>Show Biography</span>
                <span class="std-bio-arrow">▼</span>
            </button>
            <div class="std-member-bio">
                Yahya is a Ph.D. student in Computer Science at the University of Central Florida and a member of the Interactive Systems and User Experience (ISUE) Lab, advised by Dr. Joseph J. LaViola Jr. His research focuses on security and privacy, human-computer interaction in immersive environments, encompassing 3D user interfaces, virtual avatars, collaborative XR systems, and the application of machine learning within VR contexts. Yohan's current work explores new methods to improve privacy preference profiling, user-centred privacy and security, and the utilization of intelligent conversational virtual agents and natural language processing to enhance interaction in virtual environments.
            </div>
        </div>

        <div class="std-member-card-simple">
            <img src="images/jenshuo.jpg" alt="Jen-Shuo Liu" class="std-member-photo">
            <div class="std-member-name">Jen-Shuo Liu</div>
            <div class="std-member-affiliation">Columbia University, USA</div>
            <button class="std-bio-toggle" onclick="toggleBio(this)">
                <span>Show Biography</span>
                <span class="std-bio-arrow">▼</span>
            </button>
            <div class="std-member-bio">
                Jen-Shuo Liu is an AR/VR researcher and engineer focused on visual computing and HCI. He designs perception-based interfaces for teleoperation and maintenance while developing algorithms for HDR and immersive video processing. He holds a Ph.D. from Columbia University, where he focused on AR/VR precueing systems. His research is published in venues including IEEE TVCG, TIP, and ISMAR. An active community contributor, Jen-Shuo serves on the CHI Late-Breaking Work Program Committee, and as both the Publicity & Communications Chair and Pitch-Your-Lab Chair for IEEE ISMAR.
            </div>
        </div>

        <div class="std-member-card-simple">
            <img src="images/SeonjiKim.jpg" alt="Seonji Kim" class="std-member-photo">
            <div class="std-member-name">Seonji Kim</div>
            <div class="std-member-affiliation">KAIST, South Korea</div>
            <button class="std-bio-toggle" onclick="toggleBio(this)">
                <span>Show Biography</span>
                <span class="std-bio-arrow">▼</span>
            </button>
            <div class="std-member-bio">
                Seonji Kim is a Ph.D. student in the Graduate School of Culture Technology (GSCT) at KAIST, Daejeon, Korea, and a member of the Ubiquitous Virtual Reality (UVR) Lab, advised by Prof. Woontack Woo. Her research interests include ubiquitous virtual reality, augmented reality, remote collaboration, and spatial computing. She received her M.S. degree in GSCT from KAIST, Korea, in 2023 and her B.S. degree in Computer Science and Engineering from Sungkyunkwan University, Korea, in 2021. You can contact her at seonji.kim@kaist.ac.kr.
            </div>
        </div>
        
        <div class="std-member-card-simple">
            <img src="images/Ryosuke%20Ichikari.jpg" alt="Ryosuke Ichikari" class="std-member-photo">
            <div class="std-member-name">Ryosuke Ichikari</div>
            <div class="std-member-affiliation">AIST, Japan</div>
            <button class="std-bio-toggle" onclick="toggleBio(this)">
                <span>Show Biography</span>
                <span class="std-bio-arrow">▼</span>
            </button>
            <div class="std-member-bio">
                Ryosuke Ichikari received his Ph.D. in engineering from Ritsumeikan University in 2010. After working at Ritsumeikan University, University of Southern California, he joined National Institute of Advanced Industrial Science and Technology (AIST). Currently, he is a research group leader at Research Institute on Human and Societal Augmentation, AIST. His research interest includes virtual/augmented/mixed reality and indoor positioning, and service engineering.
            </div>
        </div>
    </div>

    <h3>Committee Members</h3>
    <div class="std-member-grid std-members-grid">
        <div class="std-member-card-simple">
            <img src="images/abolghasem.jpg" alt="Abolghasem Sadeghi-Niaraki" class="std-member-photo">
            <div class="std-member-name">Abolghasem Sadeghi-Niaraki</div>
            <div class="std-member-affiliation">Sejong University, South Korea</div>
        </div>
        
        <div class="std-member-card-simple">
            <img src="images/mykola.png" alt="Mykola Maslych" class="std-member-photo">
            <div class="std-member-name">Mykola Maslych</div>
            <div class="std-member-affiliation">University of Central Florida, USA</div>
        </div>
        
        <div class="std-member-card-simple">
            <img src="images/jeanbotev.png" alt="Jean Botev" class="std-member-photo">
            <div class="std-member-name">Jean Botev</div>
            <div class="std-member-affiliation">University of Luxembourg, Luxembourg</div>
        </div>
        
        <div class="std-member-card-simple">
            <img src="images/SeoYoungKang.jpg" alt="Seoyoung Kang" class="std-member-photo">
            <div class="std-member-name">Seoyoung Kang</div>
            <div class="std-member-affiliation">KAIST, South Korea</div>
        </div>
        
        <div class="std-member-card-simple">
            <img src="images/DooyoungKim.jpg" alt="Dooyoung Kim" class="std-member-photo">
            <div class="std-member-name">Dooyoung Kim</div>
            <div class="std-member-affiliation">KAIST, South Korea</div>
        </div>
    </div>

    <h3>Committee Advisors</h3>
    <div class="std-member-grid std-advisors-grid">
        <div class="std-member-card-simple">
            <img src="images/Takeshi%20Kurata.jpg" alt="Takeshi Kurata" class="std-member-photo">
            <div class="std-member-name">Takeshi Kurata</div>
            <div class="std-member-affiliation">AIST, Japan</div>
        </div>
        
        <div class="std-member-card-simple">
            <img src="images/Christine%20Perey.jpeg" alt="Christine Perey" class="std-member-photo">
            <div class="std-member-name">Christine Perey</div>
            <div class="std-member-affiliation">Spime Wrangler, Switzerland</div>
        </div>
    </div>
    
    </div><!-- Close std-committee-content -->
</div><!-- Close std-committee-section -->

<script>
function toggleBio(button) {
    const bioDiv = button.nextElementSibling;
    const arrow = button.querySelector('.std-bio-arrow');
    const text = button.querySelector('span:first-child');
    
    if (bioDiv.classList.contains('expanded')) {
        bioDiv.classList.remove('expanded');
        arrow.classList.remove('rotated');
        text.textContent = 'Show Biography';
    } else {
        bioDiv.classList.add('expanded');
        arrow.classList.add('rotated');
        text.textContent = 'Hide Biography';
    }
}
</script>

