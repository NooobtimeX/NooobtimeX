import {
  AffiliationEntityType,
  AffiliationType,
  Location,
  Position,
} from "@/enum";
import type { Affiliation, AffiliationItem } from "@/interface";

export const privateLife: Affiliation = {
  id: "private-life",
  name: "Private Life",
  location: Location.BangkokThailand,
  type: AffiliationEntityType.Personal,
};

export const born: AffiliationItem = {
  id: "born",
  affiliation: privateLife,
  position: Position.NewBorn,
  description: "The beginning of the journey.",
  abilities: [],
  type: AffiliationType.LifeEvent,
  startDate: "1999-01-01",
};
