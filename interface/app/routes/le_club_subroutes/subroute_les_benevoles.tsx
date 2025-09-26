import type { Route } from "./+types/subroute_les_benevoles";
import { LesBenevoles } from "~/pages/page_le_club/subroutes/les_benevoles";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Les Bénévoles - Galatée Meudon" },
    { name: "description", content: "Nos bénévoles, qui font vivre le club." },
  ];
}

export default function LesBenevolesRoute() {
    return <LesBenevoles />;
}