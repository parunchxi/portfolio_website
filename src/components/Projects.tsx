import React from "react";
import { projects } from "@/contents/projects";
import { Card, CardBody } from "@nextui-org/react";

const Projects = () => {
  return (
    <section id="projects" className="pt-16">
      <h2 className="font-bold text-3xl mb-4">Projects</h2>
      <div className="w-[100%] flex gap-8">
        {projects.map((project) => (
          <div key={project.title} className="mb-4">
            <Card className="px-8">
              <CardBody>
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
