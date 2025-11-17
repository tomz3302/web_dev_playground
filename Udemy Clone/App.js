// By Omar Dardir
import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Globe, 
  ChevronLeft, 
  ChevronRight, 
  Menu,
  Sparkles,
  Trophy,
  MessageSquare, 
  Briefcase,    
  Star          
} from 'lucide-react';


const GlobalStyles = () => (
  <style>{`
    /* --- Base & Fonts --- */
    body {
      margin: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #fff;
      color: #1c1d1f;
    }

    button, a {
      cursor: pointer;
      text-decoration: none;
      color: inherit;
    }

    /* --- Smart Bar --- */
    .smart-bar {
      background-color: #f3ca8c;
      text-align: center;
      font-size: 14px;
      font-weight: 700;
      color: #3e4143;
      padding: 12px;
    }
    .smart-bar-bold {
      font-weight: 700;
      margin-left: 8px;
    }

    /* --- Header --- */
    .header {
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .header-logo {
      flex-shrink: 0;
    }

    .header-nav-explore {
      /* This container doesn't need padding */
    }
    .header-nav-explore button {
      font-size: 14px;
      padding: 8px 12px;
      background: none;
      border: none;
      font-family: inherit; /* Use the same font as the page */
      font-weight: 700; /* Match other header links */
    }
    .header-nav-explore:hover button {
      color: #5624d0;
    }

    .header-search-form {
      flex-grow: 1;
      max-width: 600px;
      display: flex;
      align-items: center;
      border: 1px solid #1c1d1f;
      border-radius: 9999px;
      padding: 0 16px;
      height: 46px;
      background-color: #f7f9fa;
    }
    .header-search-icon {
      color: #565a5c;
    }
    .header-search-input {
      flex-grow: 1;
      background: transparent;
      margin-left: 12px;
      border: none;
      outline: none;
      font-size: 14px;
    }

    .header-links-desktop {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 14px;
    }
    .header-links-desktop a {
      white-space: nowrap;
    }
    .header-links-desktop a:hover {
      color: #5624d0;
    }
    
    .header-auth-icons {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .icon-btn {
      background: none;
      border: none;
      padding: 8px;
    }

    .header-auth-buttons-desktop {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .btn {
      font-size: 14px;
      font-weight: 700;
      padding: 0 16px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #1c1d1f;
    }
    
    .btn-login {
      background-color: #fff;
      color: #1c1d1f;
    }
    .btn-login:hover {
      background-color: #f7f9fa;
    }
    
    .btn-signup {
      background-color: #1c1d1f;
      color: #fff;
    }
    .btn-signup:hover {
      background-color: #3e4143;
    }
    
    .btn-globe {
      border: 1px solid #1c1d1f;
      background-color: #fff;
      height: 40px;
      width: 40px;
      padding: 0;
    }
    .btn-globe:hover {
       background-color: #f7f9fa;
    }
    
    .mobile-icon-btn {
      display: none;
    }

    /* --- Hero Section --- */
    .hero-section {
      position: relative;
      width: 100%;
      margin-bottom: 32px;
    }
    .hero-image {
      width: 100%;
      object-fit: cover;
      height: 400px;
    }
    .hero-content-box {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 32px;
      background-color: #fff;
      padding: 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      max-width: 440px;
      width: 100%;
      box-sizing: border-box; /* Ensures padding doesn't break width */
    }
    .hero-title {
      font-size: 40px;
      font-family: 'Georgia', serif;
      font-weight: 700;
      margin: 0 0 12px 0;
    }
    .hero-subtitle {
      font-size: 18px;
      margin: 0 0 16px 0;
      line-height: 1.5;
    }
    .hero-cta-btn {
      background-color: #1c1d1f;
      color: #fff;
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 700;
      border: none;
    }
    .hero-cta-btn:hover {
      background-color: #3e4143;
    }
    
    .hero-nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: #fff;
      padding: 12px;
      border-radius: 9999px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .hero-nav-btn:hover {
      background-color: #f7f9fa;
    }
    .hero-nav-btn.left {
      left: 16px;
    }
    .hero-nav-btn.right {
      right: 16px;
    }

    .hero-dots {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
    }
    .hero-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      border: none;
      padding: 0;
    }
    .hero-dot.active {
      background-color: #fff;
    }


    /* --- Trusted By Section --- */
    .trusted-by-section {
      background-color: #f7f9fa;
      padding: 48px 24px;
    }
    .trusted-by-container {
      max-width: 1152px;
      margin: 0 auto;
      text-align: center;
    }
    .trusted-by-title {
      font-size: 20px;
      color: #565a5c;
      margin: 0 0 24px 0;
    }
    .trusted-by-logos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 16px 48px;
    }
    .trusted-by-logos img {
      height: 44px;
      object-fit: contain;
    }
    
    /* --- Reimagine Career Section --- */
    .reimagine-section {
      background-color: #1c1d1f;
      color: #fff;
      margin: 48px 0;
    }
    .reimagine-container {
      max-width: 1152px;
      margin: 0 auto;
      padding: 32px 48px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      align-items: center;
    }
    .reimagine-text-content {
      max-width: 480px;
    }
    .reimagine-title {
      font-size: 40px;
      font-family: 'Georgia', serif;
      font-weight: 700;
      margin: 0 0 16px 0;
      line-height: 1.2;
    }
    .reimagine-subtitle {
      font-size: 18px;
      color: #d1d7dc;
      margin: 0 0 24px 0;
      line-height: 1.5;
    }
    .reimagine-features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }
    .reimagine-feature-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .reimagine-feature-icon {
      padding: 8px;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .reimagine-feature-icon.purple { background-color: #e8d9ff; color: #401b9c; }
    .reimagine-feature-icon.green { background-color: #d7ffdb; color: #1e6055; }
    .reimagine-feature-icon.orange { background-color: #ffe8cc; color: #995200; }
    .reimagine-feature-icon.teal { background-color: #cffcf2; color: #005c53; }
    
    .reimagine-feature-text {
      font-weight: 700;
    }
    .reimagine-cta-btn {
      background-color: #fff;
      color: #1c1d1f;
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 700;
      border: none;
    }
     .reimagine-cta-btn:hover {
       background-color: #f7f9fa;
     }
    .reimagine-price {
      font-size: 14px;
      color: #d1d7dc;
      margin-top: 12px;
    }
    .reimagine-image-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .reimagine-image {
      width: 100%;
      height: auto;
      max-width: 480px;
    }

    /* --- Skills Transform Section --- */
    .skills-section {
      max-width: 1200px;
      margin: 48px auto;
      padding: 0 24px;
    }
    .skills-title {
      font-size: 32px;
      font-weight: 700;
      font-family: 'Georgia', serif;
      margin: 0 0 8px 0;
    }
    .skills-subtitle {
      font-size: 18px;
      color: #565a5c;
      margin: 0 0 24px 0;
    }
    .skills-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 24px;
      border-bottom: 1px solid #d1d7dc;
    }
    .skill-tab-btn {
      background: none;
      border: none;
      font-size: 16px;
      font-weight: 700;
      color: #565a5c;
      padding: 8px 4px 16px 4px;
      border-bottom: 4px solid transparent;
    }
    .skill-tab-btn.active {
      color: #1c1d1f;
      border-bottom-color: #1c1d1f;
    }
    .skill-tab-btn:hover {
      color: #1c1d1f;
    }
    .course-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 24px;
    }
    .course-card {
      border: 1px solid #d1d7dc;
      border-radius: 8px;
      overflow: hidden;
    }
    .course-card-image {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-bottom: 1px solid #d1d7dc;
    }
    .course-card-content {
      padding: 16px;
    }
    .course-card-title {
      font-size: 16px;
      font-weight: 700;
      margin: 0 0 8px 0;
      /* Truncate text */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .course-card-author {
      font-size: 12px;
      color: #565a5c;
      margin: 0 0 8px 0;
    }
    .course-card-stats {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      margin: 0 0 8px 0;
    }
    .course-card-rating {
      font-weight: 700;
      color: #b4690e;
    }
    .course-card-reviews {
      font-size: 12px;
      color: #565a5c;
    }
    .course-card-price {
      font-size: 16px;
      font-weight: 700;
      margin: 0 0 8px 0;
    }
    .course-card-badge {
      font-size: 12px;
      font-weight: 700;
      padding: 4px 8px;
      border-radius: 4px;
      display: inline-block;
    }
    .course-card-badge.bestseller {
      background-color: #f3ca8c;
    }
    .course-card-badge.premium {
      background-color: #e8d9ff;
      color: #401b9c;
    }
    .skills-show-all {
      display: inline-block;
      font-weight: 700;
      color: #1c1d1f;
      border: 1px solid #1c1d1f;
      padding: 12px 20px;
      margin-top: 24px;
      font-size: 14px;
    }
    .skills-show-all:hover {
      background-color: #f7f9fa;
    }

    /* --- Responsive Media Queries --- */
    
    /* Tablet and smaller */
    @media (max-width: 1024px) {
      .header-links-desktop {
        display: none;
      }
    }
    
    /* Mobile */
    @media (max-width: 768px) {
      .header {
        padding: 12px 16px;
      }
      .header-nav-explore,
      .header-search-form,
      .header-auth-buttons-desktop,
      .header-links-desktop {
        display: none;
      }
      .mobile-icon-btn {
        display: inline-flex;
      }
      .hero-content-box {
        position: static;
        transform: none;
        max-width: none;
        margin: 24px 16px 0 16px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      .hero-image {
        height: auto;
        max-height: 250px;
      }
      .hero-section {
        margin-bottom: 24px;
      }
      .hero-title {
        font-size: 32px;
      }
      .hero-subtitle {
        font-size: 16px;
      }
      .hero-nav-btn {
        display: none; /* Hide carousel buttons on mobile for simplicity */
      }
      .reimagine-container {
        grid-template-columns: 1fr;
        padding: 24px 16px;
      }
      .reimagine-image-content {
        order: -1; /* Image comes first on mobile */
      }
      .reimagine-features {
        grid-template-columns: 1fr;
      }
      .reimagine-title {
        font-size: 32px;
      }
      .reimagine-subtitle {
        font-size: 16px;
      }
      .skills-section {
        padding: 0 16px;
      }
      .skills-tabs {
        flex-wrap: nowrap;
        overflow-x: auto;
        /* Hide scrollbar */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      .skills-tabs::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }
      .skill-tab-btn {
        white-space: nowrap;
      }
    }
  `}</style>
);


// --- Icon Components ---
// Using lucide-react, but defining them here for clarity if you were to use SVGs

const UdemyLogo = () => (
  <img 
    src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" 
    alt="Udemy" 
    width="91" 
    height="34" 
    className="header-logo"
  />
);

// --- Sub-Components ---

/**
 * Renders the yellow "New-learner offer" bar
 */
const SmartBar = () => {
  return (
    <div className="smart-bar">
      <span>New-learner offer</span> | Courses from E£259.99. Click button to see savings. 
      <span className="smart-bar-bold">Ends in 5h 28m 38s.</span>
    </div>
  );
};

/**
 * Renders the main desktop header
 */
const Header = () => {
  return (
    <header className="header">
      {/* Mobile Menu Icon (hidden on desktop) */}
      <button className="icon-btn mobile-icon-btn">
        <Menu size={24} />
      </button>

      {/* Logo */}
      <div className="header-logo">
        <UdemyLogo />
      </div>

      {/* Categories (Desktop) */}
      <nav className="header-nav-explore">
        <button>Explore</button>
      </nav>

      {/* Search Bar (Desktop) */}
      <form className="header-search-form">
        <Search size={18} className="header-search-icon" />
        <input
          type="text"
          placeholder="Search for anything"
          className="header-search-input"
        />
      </form>

      {/* Links (Desktop) */}
      <nav className="header-links-desktop">
        <a href="#">Plans & Pricing</a>
        <a href="#">Udemy Business</a>
        <a href="#">Teach on Udemy</a>
      </nav>
      
      {/* Icons & Auth */}
      <div className="header-auth-icons">
        {/* Search Icon (Mobile) */}
        <button className="icon-btn mobile-icon-btn">
          <Search size={24} />
        </button>
        
        {/* Cart Icon */}
        <button className="icon-btn">
          <ShoppingCart size={24} />
        </button>

        {/* Auth Buttons (Desktop) */}
        <div className="header-auth-buttons-desktop">
          <button className="btn btn-login">
            Log in
          </button>
          <button className="btn btn-signup">
            Sign up
          </button>
          <button className="btn btn-globe">
            <Globe size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

/**
 * Renders the Hero section with the carousel (now functional)
 */
const Hero = () => {
  // Data stored in an array as requested
  const slides = [
    {
      id: 1,
      title: "Jump into learning — for less",
      subtitle: "If you’re new to Udemy, we’ve got good news: For a limited time, courses start at just E£259.99 for new learners!",
      imageUrl: "https://img-c.udemycdn.com/notices/home_carousel_slide/image/4ea0e369-e5a2-4a86-b616-2fc2312a8efd.png",
      cta: "Sign up now"
    },
    {
      id: 2,
      title: "Subscribe to the best of Udemy",
      subtitle: "With Personal Plan, you get access to 26,000+ of our top-rated courses in tech, business, and more.",
      imageUrl: "https://img-c.udemycdn.com/notices/home_carousel_slide/image/4ecf5f5f-1e48-4783-8b06-76306c633e71.jpg",
      cta: "Try it now"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="hero-section">
      <div className="w-full">
        {/* Background Image */}
        <img 
          src={slide.imageUrl} 
          alt={slide.title}
          className="hero-image" 
          key={slide.id} // Add key for React to re-render image on change
        />
        
        {/* Text Content Box */}
        <div className="hero-content-box">
          <h1 className="hero-title">
            {slide.title}
          </h1>
          <p className="hero-subtitle">
            {slide.subtitle}
          </p>
          <button className="hero-cta-btn">
            {slide.cta}
          </button>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="hero-nav-btn left" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button className="hero-nav-btn right" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>
      
      {/* Slide Indicator Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

/**
 * Renders the "Trusted By" banner with company logos
 */
const TrustedBy = () => {
  // Data stored in an array as requested
  const logos = [
    { name: "Volkswagen", src: "https://placehold.co/115x44/999999/ffffff?text=Volkswagen" },
    { name: "Samsung", src: "https://placehold.co/115x44/999999/ffffff?text=Samsung" },
    { name: "Cisco", src: "https://placehold.co/115x44/999999/ffffff?text=Cisco" },
    { name: "Vimeo", src: "https://placehold.co/115x44/999999/ffffff?text=Vimeo" },
    { name: "Procter & Gamble", src: "https://placehold.co/115x44/999999/ffffff?text=P%26G" },
    { name: "Hewlett Packard Enterprise", src: "https://placehold.co/115x44/999999/ffffff?text=HPE" },
    { name: "Citi", src: "https://placehold.co/115x44/999999/ffffff?text=Citi" },
    { name: "Ericsson", src: "https://placehold.co/115x44/999999/ffffff?text=Ericsson" },
  ];

  return (
    <section className="trusted-by-section">
      <div className="trusted-by-container">
        <h2 className="trusted-by-title">
          Trusted by over 17,000 companies and millions of learners around the world
        </h2>
        <div className="trusted-by-logos">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={`${logo.name} logo`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Renders the "Reimagine your career" section
 */
const ReimagineCareer = () => {
  // Data stored in an array as requested
  const features = [
    { 
      text: "Learn AI and more", 
      icon: <Sparkles size={18} />,
      colorClass: "purple"
    },
    { 
      text: "Prep for a certification", 
      icon: <Trophy size={18} />,
      colorClass: "green"
    },
    { 
      text: "Practice with AI coaching", 
      icon: <MessageSquare size={18} />,
      colorClass: "orange"
    },
    { 
      text: "Advance your career", 
      icon: <Briefcase size={18} />,
      colorClass: "teal"
    },
  ];

  return (
    <section className="reimagine-section">
      <div className="reimagine-container">
        {/* Left Side (Text Content) */}
        <div className="reimagine-text-content">
          <h2 className="reimagine-title">
            Reimagine your career in the AI era
          </h2>
          <p className="reimagine-subtitle">
            Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.
          </p>
          
          <div className="reimagine-features">
            {features.map((feature) => (
              <div key={feature.text} className="reimagine-feature-item">
                <div className={`reimagine-feature-icon ${feature.colorClass}`}>
                  {feature.icon}
                </div>
                <span className="reimagine-feature-text">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <button className="reimagine-cta-btn">
            Learn more
          </button>
          <p className="reimagine-price">
            Starting at E£204.00/month
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="reimagine-image-content">
          <img 
            src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@1x.webp" 
            alt="A person giving a presentation next to abstract shapes and VR goggles" 
            className="reimagine-image" 
          />
        </div>
      </div>
    </section>
  );
};

/**
 * Renders the "Skills to transform your career" section
 */
const SkillsTransform = () => {
  // Data stored in arrays/objects as requested
  const courseTabs = [
    "Artificial Intelligence (AI)",
    "Python",
    "Microsoft Excel",
    "AI Agents & Agentic AI",
    "Digital Marketing",
    "Amazon AWS",
  ];

  const [activeTab, setActiveTab] = useState(courseTabs[0]);

  // Data for the course cards, organized by tab
 const courseData = {
    "Artificial Intelligence (AI)": [
      {
        id: 1,
        title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
        author: "365 Careers",
        rating: 4.6,
        reviews: 11585,
        price: "E£349.99",
        badge: "Bestseller",
        imageUrl: "https://placehold.co/480x270/003366/ffffff?text=AI+Engineer+Bootcamp",
      },
      {
        id: 2,
        title: "Intro to AI Agents and Agentic AI",
        author: "365 Careers",
        rating: 4.4,
        reviews: 1600,
        price: "E£349.99",
        badge: "Bestseller",
        imageUrl: "https://placehold.co/480x270/003366/ffffff?text=Intro+to+AI+Agents",
      },
      {
        id: 3,
        title: "Artificial Intelligence for Business+ ChatGPT Prize [2025]",
        author: "Hadelin de Ponteves, Kirill Eremenko...",
        rating: 4.4,
        reviews: 4854,
        price: "E£719.99",
        badge: "Premium",
        imageUrl: "https://placehold.co/480x270/a435f0/ffffff?text=AI+for+Business",
      },
      {
        id: 4,
        title: "The Complete Guide To AI Powered Salesforce Development",
        author: "Matt Gerry",
        rating: 4.8,
        reviews: 83,
        price: "E£349.99",
        badge: "Bestseller",
        imageUrl: "https://placehold.co/480x270/00a1e0/ffffff?text=AI+Salesforce",
      },
    ],
    "Python": [], // Data for other tabs would go here
    "Microsoft Excel": [],
    "AI Agents & Agentic AI": [],
    "Digital Marketing": [],
    "Amazon AWS": [],
  };

  const activeCourses = courseData[activeTab] || [];

  const getBadgeClass = (badge) => {
    if (badge === "Bestseller") return "course-card-badge bestseller";
    if (badge === "Premium") return "course-card-badge premium";
    return "course-card-badge";
  }

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills to transform your career and life</h2>
      <p className="skills-subtitle">
        From critical skills to technical topics, Udemy supports your professional development.
      </p>

      {/* Tabs */}
      <nav className="skills-tabs">
        {courseTabs.map((tab) => (
          <button
            key={tab}
            className={`skill-tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Course Grid */}
      <div className="course-grid">
        {activeCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.imageUrl} alt={course.title} className="course-card-image" />
            <div className="course-card-content">
              <h3 className="course-card-title">{course.title}</h3>
              <p className="course-card-author">{course.author}</p>
              <div className="course-card-stats">
                <span className="course-card-rating">{course.rating}</span>
                <Star size={14} color="#b4690e" fill="#b4690e" />
                <span className="course-card-reviews">({course.reviews.toLocaleString()})</span>
              </div>
              <p className="course-card-price">{course.price}</p>
              {course.badge && (
                <span className={getBadgeClass(course.badge)}>
                  {course.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <a href="#" className="skills-show-all">
        Show all {activeTab} courses
      </a>
    </section>
  );
};


// --- Main App Component ---

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <SmartBar />
      <Header />
      <main>
        <Hero />
        <ReimagineCareer />
        <SkillsTransform />
        <TrustedBy />
      </main>
    </div>
  );
}