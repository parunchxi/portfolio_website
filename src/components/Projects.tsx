import React from "react";
import { projects } from "@/contents/projects";
import { Card, CardBody, CardFooter, Chip, Link } from "@nextui-org/react";

const Projects = () => {
  return (
    <section id="projects" className="pt-16">
      <h2 className="font-bold text-3xl mb-4">Projects</h2>
      <div className="w-[100%] sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {projects.map((project) => (
          <div key={project.title} className="mb-4">
            <Card className="p-2 sm:h-full">
              <CardBody>
                <div className="flex flex-row gap-1 mb-3">
                  <Chip color="default" variant="bordered">
                    {project.catagory}
                  </Chip>
                  <Chip color="default" variant="flat">
                    {project.role}
                  </Chip>
                </div>
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-default-500">{project.description}</p>
              </CardBody>
              <CardFooter className="gap-2">
                {project.github && (
                  <Link href={project.github} isExternal>
                    <i className="ri-github-fill text-default-700 hover:text-default-500 ease-in-out duration-300 text-2xl"></i>
                  </Link>
                )}
                {project.link && (
                  <Link href={project.link} isExternal>
                    <i className="ri-link text-default-700 hover:text-default-500 ease-in-out duration-300 text-2xl"></i>
                  </Link>
                )}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          href="https://github.com/parunchxi?tab=repositories"
          color="foreground"
          isExternal
          isBlock
          showAnchorIcon
        >
          Show more
        </Link>
      </div>
    </section>
  );
};

export default Projects;
