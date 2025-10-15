import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Department Website",
      description: "A comprehensive department website built with modern web technologies. Features responsive design, interactive components, and user-friendly navigation.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/MadiraGowtham/Department_Website",
      demo: null,
      features: ["Responsive Layout", "Interactive UI", "Modern Design", "Cross-browser Compatible"]
    },
    {
      title: "VVIT Fee Management System",
      description: "A robust fee management system for educational institutions. Handles student fee tracking, payment processing, and administrative functions.",
      tech: ["JavaScript", "Node.js", "Database", "Web APIs"],
      github: "https://github.com/MadiraGowtham/VVIT_FeeManagementSystem",
      demo: null,
      features: ["Payment Processing", "Student Management", "Admin Dashboard", "Report Generation"]
    },
    {
      title: "Blood Donation Project",
      description: "A comprehensive blood donation management system designed to connect donors with recipients. Features user registration, donation tracking, and emergency blood requests.",
      tech: ["HTML", "CSS", "JavaScript", "Database"],
      github: "https://github.com/MadiraGowtham/Blood_Donation",
      demo: null,
      features: ["Donor Management", "Blood Inventory", "Emergency Requests", "User Authentication"]
    },
    {
      title: "E-commerce Website",
      description: "A full-featured e-commerce platform with advanced child order control system. Enables seamless shopping experience with order management, inventory tracking, and user account features.",
      tech: ["HTML", "CSS", "JavaScript", "E-commerce", "Order Management"],
      github: "https://github.com/MadiraGowtham/Ecommerce_Website",
      demo: null,
      features: ["Child Order Control", "Shopping Cart", "User Accounts", "Product Management", "Payment Integration"]
    },
    {
      title: "MERN Stack Developer Machine Test",
      description: "This project implements a basic full-stack application using the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring secure admin login with JWT authentication, agent creation management, and CSV list upload with task distribution among agents. It includes proper validation, error handling, and an interactive dashboard for managing agent tasks efficiently.",
      tech: ["ReactJS", "CSS", "NodeJS", "MongoDB", "ExpressJS"],
      github: "https://github.com/MadiraGowtham/Machine_Test",
      demo: null,
      features: ["Agents Creation", "Tasks Assign", "Agents Details Manipulation"]
    },
    {
      title: "Gradious Learning Management System",
      description: "A learning platform offering courses, materials, quizzes, and video sessions for students. Developed front-end with role-based access and UI logic using HTML, CSS, and JS with Gradious support. Gained knowledge of JSON-server, access control, and dynamic course content integration.",
      tech: ["HTML", "CSS", "JavaScript", "JSON Server"],
      github: "https://github.com/MadiraGowtham/GradiousLearning",
      demo: null,
      features: ["Course Offering", "Content Management", "User Accounts", "Communication and Collaboration Tools", "Tracking Progress"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Featured Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-gradient-secondary border-0">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Code className="w-8 h-8 text-primary" />
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.github && (
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <Button asChild size="sm" className="flex-1">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
