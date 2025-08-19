document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.accordion-item.active');
            
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            item.classList.toggle('active');
        });
    });
    
    if (accordionItems.length > 0) {
        accordionItems[0].classList.add('active');
    }
    
    const courseData = {
        title: "From Zero to Hero: Mastering After Effects SFX and AI Techniques",
        subtitle: "Transform your video editing skills with cutting-edge SFX and AI integration techniques",
        stats: [
            { number: "50+", label: "Lessons" },
            { number: "10+", label: "Hours" },
            { number: "Beginner", label: "Level" }
        ],
        features: [
            {
                icon: "details.jpg",
                title: "After Effects Mastery",
                description: "From basics to advanced techniques in Adobe After Effects"
            },
            {
                icon: "details.jpg",
                title: "Special Effects",
                description: "Create stunning visual effects for your videos"
            },
            {
                icon: "details.jpg",
                title: "AI Integration",
                description: "Leverage AI tools to enhance your workflow"
            },
            {
                icon: "details.jpg",
                title: "Real Projects",
                description: "Hands-on projects to build your portfolio"
            }
        ],
        curriculum: [
            {
                title: "Module 1: After Effects Fundamentals",
                lessons: [
                    "Introduction to After Effects Interface",
                    "Compositions and Layers",
                    "Keyframe Animation Basics",
                    "Working with Effects and Presets",
                    "Rendering Your First Project"
                ]
            },
            {
                title: "Module 2: Advanced Animation Techniques",
                lessons: [
                    "Graph Editor Mastery",
                    "Expressions for Smart Animation",
                    "3D Space and Camera Animation",
                    "Motion Tracking and Stabilization"
                ]
            },
            {
                title: "Module 3: Visual Effects Creation",
                lessons: [
                    "Particle Systems and Simulations",
                    "Lighting and Shadow Effects",
                    "Green Screen Keying",
                    "Advanced Compositing Techniques"
                ]
            }
        ],
        instructor: {
            name: "Akash Kumar",
            title: "Professional Motion Designer & Educator",
            bio: "With over 10 years of experience in motion graphics and visual effects, Akash has worked with major brands and studios worldwide. His passion for teaching has helped thousands of students master After Effects and launch successful careers in the industry.",
            image: "igl.png",
            social: [
                { platform: "youtube", url: "#" },
                { platform: "instagram", url: "#" },
                { platform: "linkedin", url: "#" }
            ]
        },
        testimonials: [
            {
                rating: 5,
                text: "This course completely transformed my After Effects skills. The AI integration techniques alone were worth the price!",
                author: "Akash K.",
                role: "Motion Designer",
                image: "igl.png"
            },
            {
                rating: 5,
                text: "The best After Effects course I've taken. The instructor explains complex concepts in a way that's easy to understand.",
                author: "Sarah M.",
                role: "Video Editor",
                image: "igl.png"
            }
        ],
        pricing: [
            {
                name: "Basic",
                price: "₹999",
                features: [
                    "Full Course Access",
                    "Downloadable Resources",
                    "Certificate of Completion"
                ],
                featured: false
            },
            {
                name: "Pro",
                price: "₹1,999",
                features: [
                    "Everything in Basic",
                    "Project Feedback",
                    "Private Community Access",
                    "Bonus AI Tools Pack"
                ],
                featured: true
            }
        ]
    };

    function loadCourseData() {
        document.querySelector('.hero h1').textContent = courseData.title;
        document.querySelector('.hero .subtitle').textContent = courseData.subtitle;
        
        const statsContainer = document.querySelector('.hero-stats');
        statsContainer.innerHTML = '';
        courseData.stats.forEach(stat => {
            statsContainer.innerHTML += `
                <div class="stat-item">
                    <span class="stat-number">${stat.number}</span>
                    <span class="stat-label">${stat.label}</span>
                </div>
            `;
        });
        
        const featuresContainer = document.querySelector('.details-grid');
        featuresContainer.innerHTML = '';
        courseData.features.forEach(feature => {
            featuresContainer.innerHTML += `
                <div class="detail-card">
                    <div class="detail-icon">
                        <img src="${feature.icon}" alt="${feature.title}">
                    </div>
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                </div>
            `;
        });
        
        const curriculumContainer = document.querySelector('.accordion');
        curriculumContainer.innerHTML = '';
        courseData.curriculum.forEach(module => {
            curriculumContainer.innerHTML += `
                <div class="accordion-item">
                    <button class="accordion-header">
                        <span>${module.title}</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="accordion-content">
                        <ul>
                            ${module.lessons.map(lesson => `<li>${lesson}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        });
        
        const instructor = courseData.instructor;
        document.querySelector('.instructor-image img').src = instructor.image;
        document.querySelector('.instructor-info h3').textContent = instructor.name;
        document.querySelector('.instructor-title').textContent = instructor.title;
        document.querySelector('.instructor-bio').textContent = instructor.bio;
        
        const socialContainer = document.querySelector('.instructor-social');
        socialContainer.innerHTML = '';
        instructor.social.forEach(social => {
            socialContainer.innerHTML += `
                <a href="${social.url}"><i class="fab fa-${social.platform}"></i></a>
            `;
        });
        
        const testimonialsContainer = document.querySelector('.testimonials-grid');
        testimonialsContainer.innerHTML = '';
        courseData.testimonials.forEach(testimonial => {
            let stars = '';
            for (let i = 0; i < testimonial.rating; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            testimonialsContainer.innerHTML += `
                <div class="testimonial-card">
                    <div class="testimonial-rating">
                        ${stars}
                    </div>
                    <p class="testimonial-text">
                        "${testimonial.text}"
                    </p>
                    <div class="testimonial-author">
                        <img src="${testimonial.image}" alt="${testimonial.author}">
                        <div>
                            <h4>${testimonial.author}</h4>
                            <p>${testimonial.role}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        
        const pricingContainer = document.querySelector('.pricing-cards');
        pricingContainer.innerHTML = '';
        courseData.pricing.forEach(plan => {
            pricingContainer.innerHTML += `
                <div class="pricing-card ${plan.featured ? 'featured' : ''}">
                    ${plan.featured ? '<div class="featured-badge">Most Popular</div>' : ''}
                    <h3>${plan.name}</h3>
                    <div class="price">${plan.price}</div>
                    <ul class="features">
                        ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <button class="btn btn-primary">Enroll Now</button>
                </div>
            `;
        });
    }
    
    loadCourseData();
    
    document.querySelectorAll('.enroll-button, .btn-primary').forEach(button => {
        button.addEventListener('click', function() {
            const pricingSection = document.querySelector('#pricing');
            if (pricingSection) {
                window.scrollTo({
                    top: pricingSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you soon.');
            form.reset();
        });
    });
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.detail-card, .testimonial-card, .pricing-card, .instructor-profile');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    document.querySelectorAll('.detail-card, .testimonial-card, .pricing-card, .instructor-profile').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    animateOnScroll();
    
    window.addEventListener('scroll', animateOnScroll);
    
    function updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            const now = new Date();
            const offerEnd = new Date();
            offerEnd.setDate(offerEnd.getDate() + 2); 
            
            const diff = offerEnd - now;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `
                <span>${days}d</span> :
                <span>${hours}h</span> :
                <span>${minutes}m</span> :
                <span>${seconds}s</span>
            `;
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
});