import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Backend Technologies", 
      skills: ["Node.js", "Express.js", "PHP", "MySQL", "MongoDB", "RESTful APIs", "Authentication", "Database Design"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Webpack", "Linux", "Command Line"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Project Management", "Communication", "Attention to Detail", "Continuous Learning"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Skills & Technologies</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of skills and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;