import React from "react";
import { educations } from "@/contents/educations";
import { Card, CardBody, Chip } from "@nextui-org/react";
import Image from "next/image";

const Educations = () => {
  return (
    <section id="educations" className="pt-16">
      <h2 className="font-bold text-3xl mb-4">Educations</h2>
      <div className="w-[100%] sm:grid sm:grid-cols-2 sm:gap-8">
        {educations.map((education) => (
          <div key={education.name} className="mb-4">
            <Card className="p-2 sm:h-full">
              <CardBody>
                <Chip color="default" variant="bordered" className="mb-3">
                  {education.catagory}
                </Chip>
                <h3 className="font-bold text-xl mb-2">{education.name}</h3>
                <p className="text-default-500">{education.year}</p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educations;
