import type { Issue } from "@/interface";
import { looklookPet, prettierConfig, rsAward, rsMedal } from "./issues/index";

/**
 * Issue Data with Image Requirements:
 *
 * Images object should contain:
 * - thumbnail: Aspect ratio 16:9 (e.g., 1200x675px) - Used in issue cards and grid
 * - banner: Aspect ratio 21:9 (e.g., 1400x600px) - Used in issue detail page hero
 * - photos: Array of square images 1:1 (e.g., 800x800px) - Used in image gallery
 *
 * Individual issue files are located in data/issues/ directory for easier maintenance.
 * Add new issues by creating a new file in data/issues/ and importing it here.
 */

export const issuesData: Issue[] = [
  looklookPet,
  prettierConfig,
  rsAward,
  rsMedal,
];
