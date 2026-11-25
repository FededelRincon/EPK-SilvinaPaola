import { experiences, projects } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n";
import { ProjectCard } from "../ProjectCard";
import { ProjectDetail } from "../ProjectDetail";
import { Reveal } from "../Reveal";
import { SectionTitle } from "../SectionTitle";

export function Trajectory({ dict }: { dict: Dictionary }) {
  const t = dict.trajectory;
  return (
    <section id="trayectoria" className="bg-ivory">
      <div className="mx-auto max-w-page px-6 py-20 md:py-28">
        <SectionTitle title={t.title} phrase={t.phrase} />
        <div className="mt-14">
          <SectionTitle as="h3" title={t.universe} />
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map(({ id, name, photo, href }, index) => {
              const experience = experiences.find((item) => item.id === id);
              return (
                <Reveal key={id} index={index}>
                  <ProjectCard
                    name={name}
                    photo={photo}
                    href={href}
                    discover={dict.common.discover}
                    closeLabel={dict.common.close}
                    {...dict.projects[id]}
                  >
                    {experience && <ProjectDetail experience={experience} dict={dict} />}
                  </ProjectCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
