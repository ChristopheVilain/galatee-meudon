import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("le-club", "routes/le-club.tsx")
] satisfies RouteConfig;
