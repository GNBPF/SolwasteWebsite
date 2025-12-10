export interface VentResponse {
  solution: string;
  technicalSpec: string;
}

export interface ImpactStat {
  label: string;
  value: number;
  unit: string;
}

export enum SectionId {
  HERO = 'hero',
  VENT = 'vent',
  MACHINES = 'machines',
  IMPACT = 'impact',
  APP = 'app',
  CONTACT = 'contact'
}