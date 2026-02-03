import { Ability } from "./Ability";

// Ability group interface for organizing abilities by category
export interface AbilityGroup {
  category: string;
  description: string;
  icon: string; // Icon name for @iconify/react
  abilities: Ability[];
}
