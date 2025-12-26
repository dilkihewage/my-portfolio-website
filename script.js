const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');



function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrolly > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'bg-opacity-50',  'shadow-sm');
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white', 'bg-opacity-50',  'shadow-sm');
    }
});

// Add loading state
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.createElement('div');
    loader.className = 'loading-spinner';
    document.body.appendChild(loader);

    setTimeout(() => {
        loader.remove();
        document.body.style.opacity = 1;
    }, 1000);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-item').forEach((el) => {
    observer.observe(el);
});

// Theme toggle
const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
};

// Initialize theme from localStorage
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Enhanced projects data
const projectsData = [
    {
        title: "Academic Scheduler",
        description: "A web platform to manage academic timetables, lecturers, and student course schedules efficiently.",
        image: "assets/images/academic.jpeg",
        technologies: ["MERN Stack", "Node.js", "MongoDB"],
        sourceCode: "https://github.com/Dill1027/Academic-Scheduler.git"
    },
    {
        title: "Dye Craft - Social Media & Learning Platform",
        description: "An all-in-one platform combining community features with creative dye craft tutorials.",
        image: "assets/images/skill.jpeg",
        technologies: ["React.js", "Spring Boot", "MongoDB","Tailwind CSS"],
        sourceCode: "https://github.com/Dill1027/Dry_Craft.git"
    },
    {
        title: "Supplier Management System",
        description: "A system to manage supplier data, inventory, and procurement workflow.",
        image: "assets/images/supplier1.jpeg",
        technologies: ["MERN Stack", "Bootstrap"],
        sourceCode: "https://github.com/dilkihewage/Supplier_Management_System.git"
    },
    {
        title: "Blogging system about MERN Stack",
        description: "A blogging platform for sharing and discussing MERN Stack development topics with authentication and commenting",
        image: "assets/images/MERN.jpeg",
        technologies: ["MERN Stack"],
        sourceCode: "https://github.com/dilkihewage/Full-Stack-React-Website.git"
    },
    {
        title: "My Portfolio",
        description: "A responsive portfolio showcasing my projects, skills, and contact details.",
        image: "assets/images/porfolio.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        sourceCode: "https://github.com/dilkihewage/my-portfolio-website.git"
    },
    {
        title: "Train Ticket Reservation System",
        description: "A system for booking train tickets with seat selection and fare calculation.",
        image: "assets/images/train.png",
        technologies: ["Java","MySQL"],
        sourceCode: "https://github.com/dilkihewage/train-ticket-reservation-system.git"
    },
    {
        title: "Campsite Management System",
        description: "Manage campsite bookings, tent availability, and customer details easily.",
        image: "assets/images/camp.jpeg",
        technologies: ["MERN Stack", "Bootstrap"],
        sourceCode: "https://github.com/dilkihewage/Campsite-Management-System.git"
    },
    {
        title: "Plant Selling App",
        description: "A mobile-friendly plant e-commerce platform with cart and payment options.",
        image: "assets/images/plant.jpeg",
        technologies: ["Kotlin"],
        sourceCode: "https://github.com/dilkihewage/plant_selling_app.git"
    },
    {
        title: "To-Do App",
        description: "A simple to-do list app with local storage and task tracking features for students.",
        image: "assets/images/todo.jpeg",
        technologies: ["Kotlin"],
        sourceCode: "https://github.com/dilkihewage/todo-app.git"
    },
    {
        title: "Advanced Calculator in Python",
        description: "A desktop application for performing complex calculations",
        image: "assets/images/cal.jpeg",
        technologies: ["Python", "Tkinter"],
        sourceCode: "https://github.com/dilkihewage/Calculator-Python.git"
    },
    {
        title: "Hobbies Website",
        description: "A simple website sharing information and blogs about various hobbies.",
        image: "assets/images/hobby.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        sourceCode: "https://github.com/dilkihewage/web-site-about-hobbies.git"
    },
    {
        title: "Barcode Reader",
        description: "A Python-based barcode scanner for retail or inventory purposes.",
        image: "assets/images/barcode.jpeg",
        technologies: ["Java Script"],
        sourceCode: "https://github.com/dilkihewage/barcode-generator.git"
    },
    {
        title: "Bulb Challenge",
        description: "A creative JavaScript challenge to switch bulbs on/off dynamically.",
        image: "assets/images/bulb.jpeg",
        technologies: ["JavaScript", "HTML", "CSS"],
        sourceCode: "https://github.com/dilkihewage/bulb-challenge.git"
    },
    {
        title: "Simple Calculator using JavaScript",
        description: "A basic arithmetic calculator built using pure JavaScript.",
        image: "assets/images/caljs.jpeg",
        technologies: ["JavaScript", "HTML", "CSS"],
        sourceCode: "https://github.com/dilkihewage/simplecalculator.git"
    },
    {
        title: "Recipe App",
        description: "A responsive recipe listing app with search and filtering features.",
        image: "assets/images/receipe.jpeg",
        technologies: ["HTML", "CSS", "JavaScript"],
        sourceCode: "https://github.com/dilkihewage/odin-Recepies.git"
    },
    {
        title: "Simple Game using JS",
        description: "An interactive browser-based game developed using JavaScript.",
        image: "assets/images/Blackjack.jpeg",
        technologies: ["JavaScript"," HTML", "CSS"],
        sourceCode: "https://github.com/dilkihewage/simple-game.git"
    }
];


function displayProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = projectsData.map(project => `
        <div class="col-md-6 col-lg-4">
            <div class="card project-card">
                <img src="${project.image}" class="project-image card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => 
                            `<span class="project-technology">${tech}</span>`
                        ).join('')}
                    </div>
                    <div class="project-links">

                        <a href="${project.sourceCode}" class="btn btn-outline-dark" target="_blank">
                            <i class="bi bi-github"></i> Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Certificates data
const certificates = [
    
    {
        id: 'oop',
        title: 'Programming Foundations: Object-Oriented Design',
        issuedBy: 'LinkedIn Learning',
        link: 'assets/certificates/CertificateOfCompletion_Programming Foundations ObjectOriented Design.pdf'
    },
      {
        id: 'python',
        title: 'Introduction to Career Skills in Software Development',
        issuedBy: 'LinkedIn Learning',
        link: 'assets/certificates/CertificateOfCompletion_Introduction to Career Skills in Software Development.pdf'
    },
     {
        id: 'python',
        title: 'React Creating and Hosting a FullStack Site',
        issuedBy: 'LinkedIn Learning',
        link: 'assets/certificates/CertificateOfCompletion_React Creating and Hosting a FullStack Site.pdf'
    },
    {
        id: 'python',
        title: 'Python for Beginners',
        issuedBy: 'University of Moratuwa',
        link: 'assets/certificates/Python_for_Beginners_E-Certificate.pdf'
    },
   
     {
        id: 'python',
        title: 'Python Programming',
        issuedBy: 'University of Moratuwa',
        link: 'assets/certificates/Python_Programming_E-Certificate.pdf'
    },
     {
        id: 'webdesign',
        title: 'Web Design for Beginners',
        issuedBy: 'University of Moratuwa',
        link: 'assets/certificates/Web_Design_for_Beginners_E-Certificate.pdf'
    },
];

function displayCertificates() {
    const certificatesContainer = document.querySelector('.certificates-grid');
    if (!certificatesContainer) return;

    certificatesContainer.innerHTML = certificates.map(cert => `
        <div class="certificate-card" data-aos="fade-up">
            <div class="certificate-content">
                <div class="certificate-icon">
                    <i class="bi ${getCertificateIcon(cert.title)}"></i>
                </div>
                <h3>${cert.title}</h3>
                <p class="issuer">${cert.issuedBy}</p>
                
                <button class="view-certificate" data-certificate="${cert.link}">
                    <i class="bi bi-file-earmark-pdf me-2"></i>View Certificate
                </button>
            </div>
        </div>
    `).join('');

    // Add event listeners
    document.querySelectorAll('.view-certificate').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const certificateUrl = this.getAttribute('data-certificate');
            if (certificateUrl) {
                window.open(certificateUrl, '_blank');
            }
        });
    });
}

function getCertificateIcon(title) {
    if (title.toLowerCase().includes('python')) return 'bi-filetype-py';
    if (title.toLowerCase().includes('web')) return 'bi-globe2';
    if (title.toLowerCase().includes('object')) return 'bi-code-square';
    return 'bi-award'; // default icon
}

// Education data
const educationData = [
    {
        degree: "BSc (Hons) in Information Technology",
        institution: "Sri Lanka Institute of Information Technology",
        location: "Malabe, Sri Lanka",
        period: "2022 - 2026"
    },

];

function displayEducation() {
    const timelineContainer = document.getElementById('education-timeline');
    if (!timelineContainer) return;

    timelineContainer.innerHTML = educationData.map(edu => `
        <div class="education-item" data-aos="fade-up">
            <div class="education-date">${edu.period}</div>
            <div class="education-content">
                <h5>${edu.degree}</h5>
                <p class="institution">${edu.institution}</p>
                <p class="text-muted">${edu.location}</p>

            </div>
        </div>
    `).join('');
}

// Figma projects data
const figmaProjects = [
    {
        title: "CareDoc",
        description: "Care Doc is a mobile healthcare app UI/UX project designed in Figma, focused on enabling fast and convenient doctor appointments, consultations, and prescription management",
        image: "assets/images/caredoc.png",
        link: "https://www.figma.com/design/namVhKEmN42g0AWWOzmQ6P/Untitled?node-id=0-1&t=wbHZsqtvhcpbZMKQ-1",
        preview: "https://www.figma.com/proto/namVhKEmN42g0AWWOzmQ6P/Untitled?node-id=1-2&p=f&t=fNZniONgwEJ9ZkH5-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3"
    },
    {
        title: "Lanka Holidays website redesign",
        description: "Redesigning High-fidelity desktop application prototype with micro-interactions.",
        image: "assets/images/lanka holidays.png",
        link: "https://www.figma.com/design/aYfUTmRRPkPWySFySzWyBK/Untitled?node-id=0-1&t=Tyo2J5Rs2mlMMdvP-1",
        preview: "https://www.figma.com/proto/aYfUTmRRPkPWySFySzWyBK/Untitled?node-id=358-505&p=f&t=iyumb2fVolLt9nYZ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=358%3A505&show-proto-sidebar=1"
    }
];

// Render Figma projects
function displayFigmaProjects() {
    const container = document.getElementById('figma-container');
    if (!container) return;

    container.innerHTML = figmaProjects.map(p => `
        <div class="figma-card">
            <img src="${p.image}" alt="${p.title}">
            <h4 class="figma-title">${p.title}</h4>
            <p class="figma-desc">${p.description}</p>
            <div class="figma-actions">
                <a href="${p.preview}" class="btn btn-figma" target="_blank" rel="noopener">Open Prototype</a>
                <a href="${p.link}" class="btn btn-figma-outline" target="_blank" rel="noopener">Open File</a>
            </div>
        </div>
    `).join('');
}

// Initialize projects, certificates and education on page load
document.addEventListener('DOMContentLoaded', function() {
    displayProjects();
    displayCertificates();
    displayEducation();
    displayFigmaProjects(); // new call to render figma projects

    // Initialize tooltips and other Bootstrap components
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});