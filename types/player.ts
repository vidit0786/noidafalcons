export type PlayerRole = 'Batter' | 'Bowler' | 'All-Rounder' | 'Wicket Keeper';

export interface SquadPlayer {
  id: string;
  name: string;
  jerseyNumber: number;
  role: PlayerRole;
  nationality: string;
  isCaptain?: boolean;
  image: string;
  battingStyle: string;
  bowlingStyle: string;
  biography: string;
  matches: number;
  runs: number;
  wickets: number;
}

export interface SquadFilter {
  label: string;
  value: 'All Players' | PlayerRole;
}
