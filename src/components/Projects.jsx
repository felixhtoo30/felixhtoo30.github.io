import React, { useState } from "react";
import Banner from "./Banner";
import data from "../db.json";

const splitList = (value = "") =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const hostname = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const DevCard = ({ project }) => (
  <article className="timeline-card bg-white p-5 lg:p-6 flex flex-col h-full rounded-xl shadow-md">
    <h3 className="text-lg lg:text-xl font-bold text-secondary">
      {project.name}
    </h3>
    <p className="text-sm text-secondary opacity-70 mt-1">
      <i className="far fa-clock mr-2" aria-hidden="true" />
      {project.duration}
    </p>

    {project.remark && (
      <ul className="flex flex-wrap gap-2 mt-3">
        {splitList(project.remark).map((tag) => (
          <li
            key={tag}
            className="text-xs font-bold text-primary border border-primary rounded-full px-2 py-0.5"
          >
            {tag}
          </li>
        ))}
      </ul>
    )}

    <ul className="flex flex-wrap gap-2 mt-4">
      {splitList(project.skills).map((skill) => (
        <li
          key={skill}
          className="text-xs text-secondary bg-gray-100 rounded px-2 py-1"
        >
          {skill}
        </li>
      ))}
    </ul>

    {project.url && (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto pt-5 text-primary font-bold hover:underline break-all"
      >
        {hostname(project.url)}
        <i className="fas fa-external-link-alt ml-2 text-xs" aria-hidden="true" />
      </a>
    )}
  </article>
);

const DesignCard = ({ design }) => (
  <article className="timeline-card bg-white p-5 lg:p-6 flex flex-col h-full rounded-xl shadow-md">
    <h3 className="text-lg lg:text-xl font-bold text-secondary">
      {design.name}
    </h3>
    <a
      href={design.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto pt-5 text-primary font-bold hover:underline"
    >
      <i className="fab fa-figma mr-2" aria-hidden="true" />
      View {design.link_text}
    </a>
  </article>
);

const TABS = [
  { id: "dev", label: "Development", count: data.project.dev.length },
  { id: "design", label: "UI/UX Design", count: data.project.design.length },
];

const Projects = () => {
  const [tab, setTab] = useState("dev");

  return (
    <>
      <Banner title="Projects" />
      <div className="container lg:container-lg py-10">
        <div
          role="tablist"
          aria-label="Project categories"
          className="flex justify-center gap-3 mb-10"
        >
          {TABS.map(({ id, label, count }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`px-4 py-2 rounded-full border-2 border-primary font-bold transition-colors ${
                tab === id ? "bg-primary text-white" : "bg-white text-primary"
              }`}
            >
              {label} <span className="opacity-75">({count})</span>
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tab === "dev"
            ? data.project.dev.map((project) => (
                <DevCard project={project} key={project.name} />
              ))
            : data.project.design.map((design) => (
                <DesignCard design={design} key={design.name} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
