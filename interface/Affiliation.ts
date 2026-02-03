import { AffiliationEntityType, Location } from "@/enum";

export interface Affiliation {
  id: string; // concise logical ID, e.g. "blitzwerk", "jasmine", "university"
  name: string;
  logo?: string;
  location: Location;
  type: AffiliationEntityType;
  url?: string;
}
