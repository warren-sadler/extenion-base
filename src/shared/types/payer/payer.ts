import { z } from "zod";

export const PAYERS = [
  "Aetna",
  "Affinity Health Plan",
  "Alliance",
  "Amerigroup",
  "AmeriHealth",
  "Anthem",
  "Beacon",
  "Behavioral Health Systems",
  "Blue Care Network",
  "BlueCross BlueShield",
  "CareFirst",
  "Ceridian",
  "Cigna",
  "Coventry",
  "EmblemHealth",
  "Fidelis",
  "Guardian",
  "Harvard Pilgrim",
  "HealthFirst",
  "Humana",
  "Kaiser",
  "Medicaid",
  "Medicare",
  "Meritian Health",
  "MetroPlus Health Plan",
  "Optum",
  "Oscar",
  "TRICARE",
  "UnitedHealthcare",
] as const;

export const schema = z.enum(PAYERS);

export type Type = z.infer<typeof schema>;

export const validate = (value: unknown): Type => {
  return schema.parse(value);
};

export const isValid = (value: unknown): value is Type => {
  try {
    validate(value);
    return true;
  } catch {
    return false;
  }
};
