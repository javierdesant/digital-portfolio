import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),

  route("about", "./routes/about.tsx"),

  route("projects", "./routes/projects.tsx", [
    index("./routes/projects-home.tsx"),
  ]),

  route("cv", "./routes/cv.tsx", [
    index("./routes/cv-personal.tsx"),
    route("upm", "./routes/cv-upm.tsx"),
  ]),
] satisfies RouteConfig;
