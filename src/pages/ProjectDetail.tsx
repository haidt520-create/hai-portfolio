import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Layers3,
  ShoppingBag,
  Zap,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const projectData = {
  "shopify-storefront": {
    platform: "SHOPIFY",
    title: "Shopify",
    subtitle: "Storefront.",
    lead:
      "Custom Shopify storefront development focused on performance, reusable UI patterns and scalable e-commerce experiences.",
    tags: ["Shopify", "JavaScript", "HTML5", "CSS", "APIs"],
    role: "Frontend Developer",
    focus: "Storefront Development",
    type: "E-commerce",
    icon: <ShoppingBag size={15} />,

    overviewTitle:
      "Building a storefront that works for both users and the business.",

    overview: [
      "This project focused on developing a custom Shopify storefront for an e-commerce business with a strong emphasis on usability, responsive behaviour and maintainable frontend implementation.",
      "The storefront was structured around reusable interface patterns that could be adapted across product, collection and content pages.",
    ],

    challenges: [
      {
        title: "Reusable UI",
        text:
          "Create consistent interface patterns that could be reused across different storefront sections.",
      },
      {
        title: "Responsive experience",
        text:
          "Ensure the shopping experience remained intuitive across desktop, tablet and mobile devices.",
      },
      {
        title: "Third-party integrations",
        text:
          "Connect external services and APIs without compromising the customer experience.",
      },
      {
        title: "Performance",
        text:
          "Keep the storefront lightweight and maintainable while supporting rich commerce functionality.",
      },
    ],

    solutions: [
      {
        icon: <Layers3 size={21} />,
        title: "Reusable storefront sections",
        text:
          "Structured reusable sections for product, collection and content-driven experiences.",
      },
      {
        icon: <Code2 size={21} />,
        title: "Clean frontend implementation",
        text:
          "Semantic HTML, maintainable JavaScript and responsive CSS patterns.",
      },
      {
        icon: <ShoppingBag size={21} />,
        title: "E-commerce focused UX",
        text:
          "Clear product discovery, intuitive navigation and conversion-oriented interactions.",
      },
    ],

    features: [
      "Product discovery",
      "Responsive product pages",
      "Collection experience",
      "API integrations",
      "Reusable components",
      "Performance-minded UI",
    ],

    technologies: [
      ["Platform", "Shopify"],
      ["Frontend", "HTML5 · CSS · JavaScript"],
      ["Commerce", "Shopify APIs"],
      ["Development", "Git · Responsive UI"],
      ["Integration", "Third-party APIs"],
    ],

     projects: [
      ["Vets Love Pets", "https://vetslovepets.com.au/"],
      ["Taylors Wines", "https://www.taylorswines.com.au/"],
      ["Kokoblack", "https://www.kokoblack.com/"],
      ["Thermomix", "https://www.thermomix.com/"],
      ["Henne", "https://www.henne.com.au/"],
    ],
  },

  "magento-2-platform": {
    platform: "MAGENTO 2",
    title: "Magento 2",
    subtitle: "Commerce Platform.",
    lead:
      "Custom Magento 2 development for complex e-commerce platforms, combining scalable frontend architecture, custom functionality and third-party integrations.",
    tags: [
      "Magento 2",
      "PHP",
      "JavaScript",
      "HTML5",
      "REST APIs",
      "MySQL",
    ],
    role: "Magento Frontend Developer",
    focus: "E-commerce Engineering",
    type: "Enterprise E-commerce",
    icon: <Code2 size={15} />,

    overviewTitle:
      "Engineering a flexible Magento platform for complex commerce workflows.",

    overview: [
      "This project focused on developing and maintaining Magento 2 e-commerce functionality for international clients with complex business requirements.",
      "The work covered frontend components, custom Magento functionality, integrations and improvements to existing commerce workflows.",
    ],

    challenges: [
      {
        title: "Complex commerce logic",
        text:
          "Translate business requirements into Magento functionality while working within the platform architecture.",
      },
      {
        title: "Custom frontend",
        text:
          "Build responsive and maintainable interfaces on top of Magento's flexible but complex frontend structure.",
      },
      {
        title: "Third-party integrations",
        text:
          "Integrate external services and APIs with Magento while maintaining reliable data flows.",
      },
      {
        title: "Legacy codebase",
        text:
          "Work with existing modules and frontend implementations while gradually improving maintainability.",
      },
    ],

    solutions: [
      {
        icon: <Layers3 size={21} />,
        title: "Modular Magento development",
        text:
          "Structure custom functionality around Magento modules and reusable frontend patterns.",
      },
      {
        icon: <Code2 size={21} />,
        title: "Custom frontend components",
        text:
          "Develop responsive UI components and improve existing Magento storefront behaviour.",
      },
      {
        icon: <Database size={21} />,
        title: "API and data integration",
        text:
          "Connect Magento with external services and support reliable data exchange between systems.",
      },
      {
        icon: <Zap size={21} />,
        title: "Performance and debugging",
        text:
          "Investigate frontend and backend issues, identify bottlenecks and improve the overall storefront experience.",
      },
    ],

    features: [
      "Custom Magento functionality",
      "Responsive storefront UI",
      "Product and catalogue workflows",
      "REST API integrations",
      "Custom frontend components",
      "Debugging and performance optimisation",
    ],

    technologies: [
      ["Platform", "Magento 2"],
      ["Backend", "PHP"],
      ["Frontend", "JavaScript · HTML5 · CSS"],
      ["Database", "MySQL"],
      ["Integration", "REST APIs · Third-party services"],
      ["Engineering", "Git · Responsive UI · Debugging"],
    ],

    projects: [
      ["Stuck on you", "https://www.stuckonyou.com/intl/"],
      ["Supply Store", "https://supplystore.com.au/"],
      ["Strictly comfort", "https://www.strictlycomfort.com.au/"],
    ],
  },

  "bigcommerce-platform": {
    platform: "BIGCOMMERCE",
    title: "BigCommerce",
    subtitle: "Commerce Platform.",
    lead:
      "Custom BigCommerce storefront development focused on responsive UI, reusable components, product experiences and third-party integrations.",
    tags: [
      "BigCommerce",
      "JavaScript",
      "HTML5",
      "CSS",
      "Stencil",
      "APIs",
    ],
    role: "Frontend Developer",
    focus: "Storefront Development",
    type: "E-commerce",
    icon: <ShoppingBag size={15} />,

    overviewTitle:
      "Building a flexible storefront for modern e-commerce experiences.",

    overview: [
      "This project focused on developing and improving a BigCommerce storefront with an emphasis on responsive design, reusable frontend components and a smooth shopping experience.",
      "The implementation covered storefront customisation, product and category experiences, frontend interactions and integration with third-party services.",
    ],

    challenges: [
      {
        title: "Storefront customisation",
        text:
          "Adapt the BigCommerce storefront to meet specific brand and business requirements while keeping the implementation maintainable.",
      },
      {
        title: "Reusable components",
        text:
          "Create reusable frontend patterns that could be applied across product, category and content pages.",
      },
      {
        title: "Responsive experience",
        text:
          "Deliver a consistent shopping experience across desktop, tablet and mobile devices.",
      },
      {
        title: "Third-party integrations",
        text:
          "Integrate external services and APIs while maintaining reliable storefront behaviour.",
      },
    ],

    solutions: [
      {
        icon: <Layers3 size={21} />,
        title: "Reusable storefront components",
        text:
          "Develop reusable UI patterns for product, category, navigation and content experiences.",
      },
      {
        icon: <Code2 size={21} />,
        title: "Custom frontend development",
        text:
          "Implement responsive interfaces using semantic HTML, CSS and JavaScript.",
      },
      {
        icon: <ShoppingBag size={21} />,
        title: "Commerce-focused UX",
        text:
          "Improve product discovery, navigation and customer interactions throughout the shopping journey.",
      },
      {
        icon: <Zap size={21} />,
        title: "Performance optimisation",
        text:
          "Improve frontend performance and reduce unnecessary complexity across the storefront.",
      },
    ],

    features: [
      "Custom BigCommerce storefront",
      "Responsive product pages",
      "Category and collection experience",
      "Reusable UI components",
      "Third-party integrations",
      "Performance optimisation",
    ],

    technologies: [
      ["Platform", "BigCommerce"],
      ["Frontend", "HTML5 · CSS · JavaScript"],
      ["Theme", "Stencil"],
      ["Commerce", "BigCommerce APIs"],
      ["Integration", "Third-party APIs"],
      ["Development", "Git · Responsive UI"],
    ],

    projects: [
      ["Hardware General", "https://www.hg.com.au/"],
      ["Isc Sport", "https://iscsport.com/"],
    ],
  },

  "wordpress-platform": {
    platform: "WORDPRESS",
    title: "WordPress",
    subtitle: "Digital Experience.",
    lead:
      "Custom WordPress development focused on responsive interfaces, reusable components, content management and performance.",
    tags: [
      "WordPress",
      "PHP",
      "JavaScript",
      "HTML5",
      "CSS",
      "REST API",
    ],
    role: "Frontend Developer",
    focus: "Website Development",
    type: "Content & E-commerce",
    icon: <Code2 size={15} />,

    overviewTitle:
      "Creating flexible WordPress experiences built around content and usability.",

    overview: [
      "This project focused on developing and customising WordPress websites with an emphasis on responsive frontend implementation, reusable components and easy content management.",
      "The work included custom theme development, frontend interactions, CMS integration and performance improvements across different page types.",
    ],

    challenges: [
      {
        title: "Custom theme development",
        text:
          "Translate design requirements into a flexible WordPress theme while keeping the implementation scalable and maintainable.",
      },
      {
        title: "Content management",
        text:
          "Create flexible content structures that allow non-technical users to manage website content efficiently.",
      },
      {
        title: "Responsive design",
        text:
          "Ensure consistent visual and functional experiences across desktop, tablet and mobile devices.",
      },
      {
        title: "Performance",
        text:
          "Optimise frontend assets, page structure and implementation to improve overall website performance.",
      },
    ],

    solutions: [
      {
        icon: <Layers3 size={21} />,
        title: "Custom WordPress theme",
        text:
          "Develop reusable theme components and page structures tailored to the project's requirements.",
      },
      {
        icon: <Code2 size={21} />,
        title: "Frontend implementation",
        text:
          "Build responsive interfaces using semantic HTML, CSS and JavaScript.",
      },
      {
        icon: <Database size={21} />,
        title: "CMS integration",
        text:
          "Structure content so that editors can easily manage pages, sections and dynamic content.",
      },
      {
        icon: <Zap size={21} />,
        title: "Performance optimisation",
        text:
          "Improve page loading and frontend efficiency through cleaner implementation and asset optimisation.",
      },
    ],

    features: [
      "Custom WordPress theme",
      "Responsive website UI",
      "Reusable content sections",
      "CMS-driven pages",
      "REST API integration",
      "Performance optimisation",
    ],

    technologies: [
      ["Platform", "WordPress"],
      ["Backend", "PHP"],
      ["Frontend", "HTML5 · CSS · JavaScript"],
      ["CMS", "WordPress"],
      ["Integration", "REST API"],
      ["Development", "Git · Responsive UI"],
    ],
  },

};

function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const project =
    projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="container">
          <div className="project-not-found">
            <span className="eyebrow">PROJECT</span>

            <h1>Project not found</h1>

            <p>
              The project you are looking for does not exist.
            </p>

            <button
              className="back-link"
              onClick={() => navigate("/")}
            >
              <ArrowLeft size={17} />
              Back to projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">

      {/* NAVIGATION */}
      <header className="project-detail-nav">
        <div className="container project-nav-inner">

          <button
            className="detail-logo"
            onClick={() => navigate("/")}
          >
            HAI<span>.</span>
          </button>

          <button
            className="back-link"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={17} />
            Back to projects
          </button>

        </div>
      </header>


      {/* HERO */}
      <section className="project-hero">
        <div className="container">

          <div className="project-hero-grid">

            <div className="project-hero-content">

              <div className="eyebrow">
                {project.icon}
                CASE STUDY · {project.platform}
              </div>

              <h1>
                {project.title}
                <br />
                <span>{project.subtitle}</span>
              </h1>

              <p className="project-lead">
                {project.lead}
              </p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

            </div>


            {/* PLATFORM VISUAL */}
            <div className="project-visual">

              <div className="browser-window">

                <div className="browser-top">

                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="browser-url">
                    {project.platform === "MAGENTO 2"
                      ? "commerce.example.com/admin"
                      : "store.example.com"}
                  </div>

                </div>


                {project.platform === "MAGENTO 2" ? (
                  <div className="magento-showcase">

                  {/* Main screenshot */}
                  <figure className="magento-main-shot">
                    <img
                      src="/images/magento/magento1.png"
                      alt="Magento 2 storefront homepage"
                    />
                    <figcaption>
                      Stuck on You — Magento 2 storefront
                    </figcaption>
                  </figure>

                  {/* Detail screenshots */}
                  <div className="magento-detail-shots">

                    <figure>
                      <div className="magento-crop magento-crop-header">
                        <img
                          src="/images/magento/magento2.png"
                          alt="Magento 2 storefront navigation"
                        />
                      </div>

                      <figcaption>
                        Storefront navigation & UI
                      </figcaption>
                    </figure>

                    <figure>
                      <div className="magento-crop magento-crop-content">
                        <img
                          src="/images/magento/magento3.png"
                          alt="Magento 2 storefront hero section"
                        />
                      </div>

                      <figcaption>
                        Responsive e-commerce experience
                      </figcaption>
                    </figure>

                  </div>

                </div>
                ) : (
                  <div className="storefront-preview">

                    <div className="store-header">
                      <strong>STORE</strong>

                      <div>
                        <span>Shop</span>
                        <span>Collections</span>
                        <span>About</span>
                        <span>Cart</span>
                      </div>
                    </div>

                    <div className="store-hero">

                      <div>
                        <small>NEW COLLECTION</small>

                        <h3>
                          Designed for
                          <br />
                          everyday life.
                        </h3>

                        <button>
                          Shop collection
                          <ArrowUpRight size={14} />
                        </button>
                      </div>

                    </div>

                    <div className="product-preview-grid">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* OVERVIEW */}
      <section className="detail-section">

        <div className="container">

          <div className="detail-grid">

            <div>

              <div className="section-label">
                01 / OVERVIEW
              </div>

              <h2>
                {project.overviewTitle}
              </h2>

            </div>


            <div className="detail-copy">

              {project.overview.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}

            </div>

          </div>


          {/* META */}
          <div className="project-meta-grid">

            <div className="meta-card">
              <span>ROLE</span>
              <strong>{project.role}</strong>
              <p>
                Development, frontend implementation,
                debugging and integration.
              </p>
            </div>

            <div className="meta-card">
              <span>PLATFORM</span>
              <strong>{project.platform}</strong>
              <p>
                E-commerce platform and commerce ecosystem.
              </p>
            </div>

            <div className="meta-card">
              <span>FOCUS</span>
              <strong>{project.focus}</strong>
              <p>
                Scalable frontend and e-commerce engineering.
              </p>
            </div>

            <div className="meta-card">
              <span>PROJECT TYPE</span>
              <strong>{project.type}</strong>
              <p>
                Customer-facing digital commerce experience.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CHALLENGE */}
      <section className="detail-section muted-detail">

        <div className="container">

          <div className="detail-grid">

            <div>

              <div className="section-label">
                02 / CHALLENGE
              </div>

              <h2>
                Solving complex commerce
                requirements without
                compromising usability.
              </h2>

            </div>

            <div className="detail-copy">

              <p>
                E-commerce platforms often need to support
                complex business rules, multiple integrations
                and a large amount of product and customer data.
              </p>

              <p>
                The challenge was to implement these requirements
                while keeping the customer-facing experience
                consistent, responsive and maintainable.
              </p>

            </div>

          </div>


          <div className="challenge-grid">

            {project.challenges.map((challenge, index) => (

              <div
                className="challenge-card"
                key={challenge.title}
              >

                <span>
                  0{index + 1}
                </span>

                <h3>
                  {challenge.title}
                </h3>

                <p>
                  {challenge.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* SOLUTION */}
      <section className="detail-section">

        <div className="container">

          <div className="detail-grid">

            <div>

              <div className="section-label">
                03 / SOLUTION
              </div>

              <h2>
                Building reusable solutions
                around the commerce platform.
              </h2>

            </div>

            <div className="detail-copy">

              <p>
                The implementation focused on separating
                reusable frontend patterns from business-specific
                functionality.
              </p>

              <p>
                This approach made it easier to extend the
                platform while reducing duplicated implementation
                and improving maintainability.
              </p>

            </div>

          </div>


          <div className="solution-list">

            {project.solutions.map((solution) => (

              <div
                className="solution-item"
                key={solution.title}
              >

                <div className="solution-icon">
                  {solution.icon}
                </div>

                <div>

                  <h3>
                    {solution.title}
                  </h3>

                  <p>
                    {solution.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="detail-section muted-detail">

        <div className="container">

          <div className="section-label">
            04 / KEY FEATURES
          </div>

          <div className="feature-heading">

            <h2>
              Engineering around
              the commerce journey.
            </h2>

            <p>
              The platform combines business functionality,
              frontend engineering and integrations to support
              a complete e-commerce experience.
            </p>

          </div>


          <div className="feature-grid">

            {project.features.map((feature, index) => (

              <div
                className="feature-card"
                key={feature}
              >

                <span>
                  0{index + 1}
                </span>

                <h3>
                  {feature}
                </h3>

                <p>
                  Designed and implemented as part of
                  the e-commerce platform experience.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* TECH STACK */}
      <section className="detail-section">

        <div className="container">

          <div className="detail-grid">

            <div>

              <div className="section-label">
                05 / TECH STACK
              </div>

              <h2>
                Technology behind
                the platform.
              </h2>

            </div>


            <div className="tech-stack">

              {project.technologies.map(
                ([name, technology]) => (

                  <div
                    className="tech-row"
                    key={name}
                  >

                    <span>{name}</span>

                    <strong>
                      {technology}
                    </strong>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>
      
      {/* FEATURED PROJECT STACK */}
      <section className="detail-section">

        <div className="container">

          <div className="detail-grid">

            <div>

              <div className="section-label">
                06 / FEATURED PROJECTS
              </div>

              <h2>
                Featured Projects
              </h2>

            </div>

            <div className="projects-stack">

              {project.projects?.map(([name, link]) => (

                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-stack-item"
                >

                  <span>
                    {name}
                  </span>

                  <ArrowUpRight size={18} />

                </a>

              ))}

            </div>

          </div>

        </div>

      </section>       

      {/* PROCESS */}
      <section className="detail-section muted-detail">

        <div className="container">

          <div className="section-label">
            07 / DEVELOPMENT PROCESS
          </div>

          <div className="process-grid">

            <div className="process-item">
              <span>01</span>

              <h3>
                Analyse
              </h3>

              <p>
                Understand business requirements, existing
                platform behaviour and technical constraints.
              </p>
            </div>

            <div className="process-item">
              <span>02</span>

              <h3>
                Design
              </h3>

              <p>
                Break requirements into reusable UI patterns,
                components and implementation tasks.
              </p>
            </div>

            <div className="process-item">
              <span>03</span>

              <h3>
                Develop
              </h3>

              <p>
                Implement frontend functionality, platform
                features and required integrations.
              </p>
            </div>

            <div className="process-item">
              <span>04</span>

              <h3>
                Test & refine
              </h3>

              <p>
                Debug issues, verify responsive behaviour and
                improve the final user experience.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* OUTCOME */}
      <section className="detail-section">

        <div className="container">

          <div className="results-box">

            <div>

              <div className="section-label">
                08 / OUTCOME
              </div>

              <h2>
                A more scalable foundation
                for e-commerce growth.
              </h2>

            </div>


            <div className="result-list">

              <div>
                <Check size={18} />
                <span>
                  Reusable frontend patterns for future
                  development
                </span>
              </div>

              <div>
                <Check size={18} />
                <span>
                  Better consistency across customer-facing
                  interfaces
                </span>
              </div>

              <div>
                <Check size={18} />
                <span>
                  Flexible foundation for custom commerce
                  functionality
                </span>
              </div>

              <div>
                <Check size={18} />
                <span>
                  Easier integration with external services
                  and APIs
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* NEXT */}
      <section className="project-next">

        <div className="container">

          <div className="next-project">

            <span>
              BACK TO PORTFOLIO
            </span>

            <h2>
              More projects
            </h2>

            <button onClick={() => navigate("/")}>
              View all projects
              <ArrowUpRight size={18} />
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ProjectDetail;