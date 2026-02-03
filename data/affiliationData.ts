import type { AffiliationItem } from "@/interface";
import { freelanceBlitzwerkAffiliation as freelanceBlitzwerk } from "./affiliations/freelance-blitzwerk";
import { jasmineTechnologySolutionAffiliation as jasmineTechnologySolution } from "./affiliations/jasmine-technology-solution";
import { born } from "./affiliations/personal";
import {
  ruamsukPlatingAdvisor,
  ruamsukPlatingJunior,
  ruamsukPlatingSenior,
} from "./affiliations/ruamsuk-plating";

const affiliations = [
  born,
  freelanceBlitzwerk,
  jasmineTechnologySolution,
  ruamsukPlatingAdvisor,
  ruamsukPlatingJunior,
  ruamsukPlatingSenior,
];

// Sort affiliations by startDate in descending order (newest first)
export const affiliationData: AffiliationItem[] = affiliations.sort((a, b) => {
  return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
});
