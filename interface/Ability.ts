import { AbilityCategory } from "@/enum";

// Ability interface
export interface Ability {
  name: string;
  category: AbilityCategory;
  icon: string; // Icon name for @iconify/react
}
