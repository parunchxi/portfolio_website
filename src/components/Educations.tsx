import React from "react";
import { educations } from "@/contents/educations";
import { Card, CardBody } from "@nextui-org/react";

const Educations = () => {
  return (
    <section id="education" className="pt-16">
      <h2 className="font-bold text-3xl mb-4">Educations</h2>
      <div className="w-[100%] flex gap-8">
        {educations.map((education) => (
          <div key={education.title} className="mb-4">
            <Card className="px-8">
              <CardBody>
                <h3 className="font-bold text-xl mb-2">{education.title}</h3>
                <p>{education.time}</p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educations;
