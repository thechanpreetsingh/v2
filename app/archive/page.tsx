import Link from 'next/link';
import { Icon } from '@/components/icons';
import { featuredProjects } from '@/lib/featured-data';
import { projectsData } from '@/lib/projects-data';

export const metadata = {
  title: 'Archive | Chanpreet Singh',
  description: 'A list of all projects and things I\'ve worked on.',
};

export default function Archive() {
  // Combine all projects with year
  const allProjects = [
    ...featuredProjects.map(p => ({
      year: '2023',
      title: p.title,
      tech: p.tech,
      github: p.github,
      external: p.external,
    })),
    ...projectsData.map(p => ({
      year: '2022',
      title: p.title,
      tech: p.tech,
      github: p.github,
      external: p.external,
    })),
  ];

  return (
    <div className="min-h-screen bg-navy py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-green hover:underline mb-12 group"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            className="transition-transform group-hover:-translate-x-1"
          >
            <path
              d="M10 5L0 5M5 0L0 5L5 10"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate mb-4">
            Archive
          </h1>
          <p className="text-lg md:text-xl text-green">A big list of things I've built</p>
        </header>

        {/* Projects table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left">
                <th className="pb-4 pr-6 text-sm font-normal text-lightest-slate border-b border-lightest-navy">
                  Year
                </th>
                <th className="pb-4 pr-6 text-sm font-normal text-lightest-slate border-b border-lightest-navy">
                  Title
                </th>
                <th className="hidden md:table-cell pb-4 pr-6 text-sm font-normal text-lightest-slate border-b border-lightest-navy">
                  Built with
                </th>
                <th className="pb-4 text-sm font-normal text-lightest-slate border-b border-lightest-navy text-right">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {allProjects.map((project, index) => (
                <tr
                  key={index}
                  className="group hover:bg-lightest-navy/10 transition-colors"
                >
                  <td className="py-6 pr-6 text-sm text-green font-mono">
                    {project.year}
                  </td>
                  <td className="py-6 pr-6 text-lightest-slate font-semibold">
                    {project.title}
                  </td>
                  <td className="hidden md:table-cell py-6 pr-6">
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs text-slate font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-6 text-right">
                    <div className="flex items-center justify-end gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate hover:text-green transition-colors"
                          aria-label="GitHub"
                        >
                          <Icon name="GitHub" className="w-5 h-5" />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate hover:text-green transition-colors"
                          aria-label="External Link"
                        >
                          <Icon name="External" className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Project count */}
        <div className="mt-16 text-center text-slate">
          <p className="font-mono text-sm">
            {allProjects.length} projects total
          </p>
        </div>
      </div>
    </div>
  );
}
