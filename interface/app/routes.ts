import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/route_home.tsx"),
  route("le-club", "routes/route_le_club.tsx"),
  route("le-club/les-benevoles", "routes/le_club_subroutes/subroute_les_benevoles.tsx"),
] satisfies RouteConfig;
