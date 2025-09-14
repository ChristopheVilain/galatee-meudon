import type { Route } from "./+types/le-club";
import { LeClub } from "~/pages/page_le_club/le_club";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Le Club - Galatée Meudon" },
    { name: "description", content: "Découvrez notre club de plongée Galatée Meudon, fondé en 1975." },
  ];
}

export default function LeClubRoute() {
  return <LeClub />;
}
