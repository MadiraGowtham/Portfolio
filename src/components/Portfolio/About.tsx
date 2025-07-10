import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive web applications using modern frameworks and libraries."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs with secure and scalable architecture."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      description: "Expertise in HTML, CSS, JavaScript, and modern web development tools and frameworks."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Developing mobile-first, cross-platform applications that work seamlessly across devices."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software developer with experience in creating innovative web applications 
            and systems. I enjoy solving complex problems and turning ideas into reality through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My passion for technology began early, and I've been dedicated to continuous learning 
                and improvement in the field of software development. I believe in writing clean, 
                maintainable code and creating user-friendly applications.
              </p>
              <p>
                Through various projects and experiences, I've developed a strong foundation in 
                both frontend and backend technologies, allowing me to take a full-stack approach 
                to problem-solving.
              </p>
              <p>
                I'm always excited to work on new challenges and contribute to innovative projects 
                that make a positive impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {expertise.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-primary mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;