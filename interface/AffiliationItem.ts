import { AffiliationType, Position } from "@/enum";
import { Ability } from "./Ability";
import { Affiliation } from "./Affiliation";

// AffiliationItem interface
export interface AffiliationItem {
  id: string;
  affiliation: Affiliation;
  position: Position;
  description: string;
  abilities: Ability[];
  type: AffiliationType;
  startDate: string;
  endDate?: string;
}
