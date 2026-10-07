import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Layers3, ShoppingBag, Sparkles } from "lucide-react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
};

function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const projects = [
  {
    id: "ecommerce-design-system",
    title: "E-commerce Design System",
    tech: "React · TypeScript · UI Architecture",
    description: "A reusable component system for scalable e-commerce interfaces, designed around consistent patterns, responsive behavior and maintainable frontend code.",
    icon: <Layers3 size={22} />,
  },
  {
    id: "shopify-storefront",
    title: "Shopify Storefront",
    tech: "Shopify · JavaScript · HTML5 · CSS · APIs",
    description: "Custom storefront development and third-party integrations for e-commerce businesses, with a focus on performance and reusable UI patterns.",
    icon: <ShoppingBag size={22} />,
  },
  {
    id: "magento-2-platform",
    title: "Magento 2 Platform",
    tech: "Magento · PHP · JavaScript · HTML5 · HYVA THEME",
    description: "Custom e-commerce functionality, frontend components and integrations developed for international clients and complex commerce workflows.",
    icon: <Code2 size={22} />,
  },
  {
    id: "bigcommerce-platform",
    title: "Bigcommerce",
    tech: "Bigcommerce · CSS · JavaScript · HTML5 · Stencil · APIs ",
    description: "Building a flexible storefront for modern e-commerce experiences.",
    icon: <Code2 size={22} />,
  },
  {
    id: "wordpress-platform",
    title: "WordPress",
    tech: "WordPress · CSS · JavaScript · HTML5 · PHP · REST APIs ",
    description: "Building a flexible storefront for modern e-commerce experiences.",
    icon: <Code2 size={22} />,
  }
];

const components = ["Button", "Input", "Select", "Checkbox", "Radio", "Toggle", "Card", "Modal", "Alert", "Tabs", "Table", "Pagination"];

function App() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("Button");

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="app">
      <header className="nav">
        <div className="container nav-inner">
          <button className="logo" onClick={() => go("home")}>HAI<span>.</span></button>
          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
          <nav className={open ? "nav-links open" : "nav-links"}>
            {["about", "skills", "projects", "design-system"].map((id) => (
              <button key={id} onClick={() => go(id)}>{id.replace("-", " ")}</button>
            ))}
            <Button variant="primary" onClick={() => go("contact")}>Contact</Button>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow"><Sparkles size={15} /> Software Engineer · E-commerce · Design Systems</div>
              <h1>Building scalable<br /><span>digital experiences.</span></h1>
              <p className="hero-copy">
                IT Engineer with 10+ years of experience in e-commerce development,
                specializing in Shopify, Magento, BigCommerce and modern web technologies.
              </p>
              <div className="hero-actions">
                <Button onClick={() => go("projects")}>View projects <ArrowUpRight size={17} /></Button>
                <Button variant="secondary" onClick={() => go("design-system")}>Explore design system</Button>
              </div>
              <div className="stats">
                <div><strong>10+</strong><span>Years in IT</span></div>
                <div><strong>4</strong><span>Years Shopify</span></div>
                <div><strong>3+</strong><span>Commerce platforms</span></div>
              </div>
            </div>
            <div className="hero-card">
              <div className="code-top"><span></span><span></span><span></span><small>component.tsx</small></div>
              <pre>{`export function Button({\n  variant = "primary",\n  children\n}) {\n  return (\n    <button className={\n      button-\${variant}\n    }>\n      {children}\n    </button>\n  );\n}`}</pre>
              <div className="code-caption">Reusable · Accessible · Scalable</div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div>
              <div className="section-label">01 / ABOUT</div>
              <h2>Engineering experience with a commerce mindset.</h2>
            </div>
            <div className="body-copy">
              <p>I am an Information Technology engineer with extensive experience building and maintaining e-commerce applications for international clients.</p>
              <p>My background spans PHP, Magento, Shopify, BigCommerce, WordPress, JavaScript, HTML5 and API integrations. I am currently expanding my frontend engineering expertise in TypeScript, React and Design Systems.</p>
              <p>I enjoy turning product requirements and design concepts into reliable, reusable software.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section muted">
          <div className="container">
            <div className="section-label">02 / SKILLS</div>
            <h2>Technology & engineering</h2>
            <div className="skill-grid">
              {[
                ["Frontend", "HTML5 · CSS · JavaScript · TypeScript · React"],
                ["E-commerce", "Shopify · Magento 2 · BigCommerce · WordPress"],
                ["Backend", "PHP · REST APIs · Third-party integrations"],
                ["Engineering", "Reusable components · Responsive UI · Performance · Debugging"],
              ].map(([title, text]) => (
                <div className="skill-card" key={title}><h3>{title}</h3><p>{text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-label">03 / PROJECTS</div>
            <div className="section-heading"><h2>Selected work</h2><span>Personal demos + professional experience</span></div>
            <div className="project-grid">
              {projects.map((p, i) => (
                <article className="project-card" key={p.title}>
                  <div className="project-icon">{p.icon}</div>
                  <span className="project-number">0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <div className="tech">{p.tech}</div>
                  <p>{p.description}</p>
                  <button
                    className="text-link"
                    onClick={() => {
                      if (i === 0) {
                        go("design-system");
                      } else {
                        navigate(`/portfolio/${p.id}`);
                      }
                    }}
                  >
                    {i === 0 ? "View demo" : "Case study"}
                    <ArrowUpRight size={16} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="design-system" className="section design-system">
  <div className="container">

    <div className="section-label">
      04 / DESIGN SYSTEM
    </div>

    <div className="section-heading">
      <div>
        <h2>Design becomes code.</h2>
        <p>
          A reusable component library demonstrating scalable,
          consistent and maintainable UI engineering.
        </p>
      </div>

      <span>React · TypeScript</span>
    </div>

    <div className="ds-layout">

      {/* LEFT SIDEBAR */}
      <div className="ds-sidebar">

        <div className="ds-title">
          Foundations
        </div>

        {["Colors", "Typography", "Spacing"].map((item) => (
          <button
            key={item}
            className={
              selectedComponent === item ? "active" : ""
            }
            onClick={() => setSelectedComponent(item)}
          >
            {item}
          </button>
        ))}

        <div className="ds-title">
          Components
        </div>

        {components.map((item) => (
          <button
            key={item}
            className={
              selectedComponent === item ? "active" : ""
            }
            onClick={() => setSelectedComponent(item)}
          >
            {item}
          </button>
        ))}

      </div>


      {/* RIGHT CONTENT */}
      <div className="ds-main">

        {/* BUTTON */}
        {selectedComponent === "Button" && (
          <>
            <h3>Buttons</h3>

            <p>
              Reusable actions with clear hierarchy,
              consistent styling and interaction states.
            </p>

            <div className="demo-row">
              <Button>
                Primary action
              </Button>

              <Button variant="secondary">
                Secondary
              </Button>

              <Button variant="ghost">
                Ghost
              </Button>
            </div>

            <div className="demo-card">
              <div>
                <span className="mini-label">
                  COMPONENT / BUTTON
                </span>

                <h3>
                  Reusable action
                </h3>

                <p>
                  Buttons provide consistent actions
                  across the application.
                </p>
              </div>

              <Button variant="secondary">
                Learn more
              </Button>
            </div>
          </>
        )}


        {/* COLORS */}
        {selectedComponent === "Colors" && (
          <>
            <h3>Colors</h3>

            <p>
              Core design tokens used throughout
              the application interface.
            </p>

            <div className="color-grid">

              <div className="color-item">
                <div className="color-box primary-color"></div>
                <strong>Primary</strong>
                <span>#2563EB</span>
              </div>

              <div className="color-item">
                <div className="color-box dark-color"></div>
                <strong>Text</strong>
                <span>#171717</span>
              </div>

              <div className="color-item">
                <div className="color-box muted-color"></div>
                <strong>Muted</strong>
                <span>#6B6B6B</span>
              </div>

              <div className="color-item">
                <div className="color-box soft-color"></div>
                <strong>Surface</strong>
                <span>#F2F1EF</span>
              </div>

            </div>
          </>
        )}


        {/* TYPOGRAPHY */}
        {selectedComponent === "Typography" && (
          <>
            <h3>Typography</h3>

            <p>
              A consistent type scale for product
              interfaces and digital experiences.
            </p>

            <div className="type-demo">

              <h1>Heading 1</h1>

              <h2>Heading 2</h2>

              <h3>Heading 3</h3>

              <p>
                Body text for product interfaces,
                descriptions and application content.
              </p>

              <small>
                Small supporting text
              </small>

            </div>
          </>
        )}


        {/* SPACING */}
        {selectedComponent === "Spacing" && (
          <>
            <h3>Spacing</h3>

            <p>
              Consistent spacing tokens keep layouts
              predictable and scalable.
            </p>

            <div className="spacing-demo">

              {[8, 16, 24, 32, 48, 64].map((size) => (
                <div
                  className="spacing-row"
                  key={size}
                >
                  <span>
                    {size}px
                  </span>

                  <div
                    style={{
                      width: `${size}px`
                    }}
                  ></div>
                </div>
              ))}

            </div>
          </>
        )}


        {/* INPUT */}
        {selectedComponent === "Input" && (
          <>
            <h3>Input</h3>

            <p>
              Form controls with consistent states
              and interaction behavior.
            </p>

            <div className="form-demo">

              <label>
                Email address
              </label>

              <input
                placeholder="you@example.com"
              />

              <label>
                Disabled
              </label>

              <input
                disabled
                placeholder="Disabled input"
              />

              <label>
                Message
              </label>

              <textarea
                placeholder="Tell me about your project..."
                rows={4}
              />

            </div>
          </>
        )}


        {/* SELECT */}
        {selectedComponent === "Select" && (
          <>
            <h3>Select</h3>

            <p>
              Selection control for structured
              application inputs.
            </p>

            <div className="form-demo">

              <label>
                Country
              </label>

              <select>
                <option>Vietnam</option>
                <option>Australia</option>
                <option>Singapore</option>
                <option>Japan</option>
              </select>

              <label>
                Platform
              </label>

              <select>
                <option>Shopify</option>
                <option>Magento</option>
                <option>BigCommerce</option>
              </select>

            </div>
          </>
        )}


        {/* CHECKBOX */}
        {selectedComponent === "Checkbox" && (
          <>
            <h3>Checkbox</h3>

            <p>
              Multi-selection control for forms
              and application settings.
            </p>

            <div className="control-demo">

              <label>
                <input type="checkbox" defaultChecked />
                Receive notifications
              </label>

              <label>
                <input type="checkbox" />
                Subscribe to updates
              </label>

            </div>
          </>
        )}


        {/* RADIO */}
        {selectedComponent === "Radio" && (
          <>
            <h3>Radio</h3>

            <p>
              Single-selection control for
              mutually exclusive options.
            </p>

            <div className="control-demo">

              <label>
                <input
                  type="radio"
                  name="plan"
                  defaultChecked
                />
                Professional
              </label>

              <label>
                <input
                  type="radio"
                  name="plan"
                />
                Enterprise
              </label>

            </div>
          </>
        )}


        {/* TOGGLE */}
        {selectedComponent === "Toggle" && (
          <>
            <h3>Toggle</h3>

            <p>
              Binary control for enabling or
              disabling application features.
            </p>

            <label className="toggle-demo">
              <input
                type="checkbox"
                defaultChecked
              />
              <span></span>
              Enable notifications
            </label>
          </>
        )}


        {/* CARD */}
        {selectedComponent === "Card" && (
          <>
            <h3>Card</h3>

            <p>
              Reusable content container for
              products and applications.
            </p>

            <div className="demo-card">

              <div>

                <span className="mini-label">
                  PRODUCT
                </span>

                <h3>
                  Reusable component
                </h3>

                <p>
                  Components can be combined to
                  create consistent product experiences.
                </p>

              </div>

              <Button variant="secondary">
                Learn more
              </Button>

            </div>
          </>
        )}


        {/* MODAL */}
        {selectedComponent === "Modal" && (
          <>
            <h3>Modal</h3>

            <p>
              Dialog pattern for focused
              user interactions.
            </p>

            <div className="modal-demo">

              <div className="modal-window">

                <span className="mini-label">
                  DIALOG
                </span>

                <h3>
                  Confirm action
                </h3>

                <p>
                  Are you sure you want to continue?
                </p>

                <div className="demo-row">

                  <Button variant="secondary">
                    Cancel
                  </Button>

                  <Button>
                    Confirm
                  </Button>

                </div>

              </div>

            </div>
          </>
        )}


        {/* ALERT */}
        {selectedComponent === "Alert" && (
          <>
            <h3>Alert</h3>

            <p>
              Feedback messages for important
              application states.
            </p>

            <div className="alert-demo">

              <strong>
                Success
              </strong>

              <span>
                Your changes have been saved successfully.
              </span>

            </div>
          </>
        )}


        {/* TABS */}
        {selectedComponent === "Tabs" && (
          <>
            <h3>Tabs</h3>

            <p>
              Navigation pattern for switching
              between related content.
            </p>

            <div className="tabs-demo">

              <button className="tab active">
                Overview
              </button>

              <button className="tab">
                Features
              </button>

              <button className="tab">
                Reviews
              </button>

            </div>

            <div className="tab-content">
              Overview content for the selected tab.
            </div>

          </>
        )}


        {/* TABLE */}
        {selectedComponent === "Table" && (
          <>
            <h3>Table</h3>

            <p>
              Structured data presentation for
              dashboards and applications.
            </p>

            <table className="demo-table">

              <thead>
                <tr>
                  <th>Product</th>
                  <th>Status</th>
                  <th>Revenue</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Product A</td>
                  <td>Active</td>
                  <td>$12,400</td>
                </tr>

                <tr>
                  <td>Product B</td>
                  <td>Active</td>
                  <td>$8,750</td>
                </tr>

                <tr>
                  <td>Product C</td>
                  <td>Draft</td>
                  <td>$4,200</td>
                </tr>

              </tbody>

            </table>
          </>
        )}


        {/* PAGINATION */}
        {selectedComponent === "Pagination" && (
          <>
            <h3>Pagination</h3>

            <p>
              Navigation control for large
              collections of data.
            </p>

            <div className="pagination-demo">

              <button>
                ←
              </button>

              <button className="active">
                1
              </button>

              <button>
                2
              </button>

              <button>
                3
              </button>

              <button>
                →
              </button>

            </div>
          </>
        )}

      </div>
    </div>
  </div>
</section>

        <section id="contact" className="section contact">
          <div className="container contact-box">
            <div>
              <div className="section-label">05 / CONTACT</div>
              <h2>Let’s build something useful.</h2>
              <p>Open to Software Engineering, Frontend and Design System opportunities.</p>
            </div>
            <div className="contact-links">
              <a href="mailto:haidt520@gmail.com"><Mail size={18} /> Email</a>
              <a href="https://www.linkedin.com/in/hai-dinh-27a31a357/" target="_blank"><Linkedin size={18} /> LinkedIn</a>
              <a href="https://github.com/haidt520-create" target="_blank"><Github size={18} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container">© 2026 Hai · Software Engineer</div></footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);