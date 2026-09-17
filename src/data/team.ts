import { salonConfig } from "@/data/salon";
import { TeamMember } from "@/types";

/**
 * Re-exports team from the single source of truth: salonConfig in @/data/salon.
 */
export const teamData: TeamMember[] = salonConfig.team;
