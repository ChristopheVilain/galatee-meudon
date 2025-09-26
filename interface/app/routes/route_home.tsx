import type { Route } from "./+types/route_home";
import { Bienvenue } from "~/pages/page_principale/bienvenue";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Galatée Meudon" },
    { name: "description", content: "Bienvenue sur le site web du club de plongée Galatée Meudon !" },
  ];
}

export default function Home() {
  return <Bienvenue />;
}
