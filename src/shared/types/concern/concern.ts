import { z } from "zod";

export const CONCERNS = [
  "ADHD",
  "Addiction",
  "Anger",
  "Anxiety",
  "Bipolar Disorder",
  "Bisexual Concerns",
  "Burnout",
  "Care Giving",
  "Career Counseling",
  "Child or Adolescent Issues",
  "Codependency",
  "Coping Skills",
  "Depression",
  "Dual Diagnosis",
  "Eating Disorders",
  "Family Issues",
  "Gender or Sexual Identity",
  "Grief and Loss",
  "Health/Illness",
  "Immigrant Concerns",
  "Intimate Partner Violence",
  "LGBTQ+ Issues",
  "Life Transitions",
  "Men's Concerns",
  "Neurodivergence",
  "Parenting",
  "Peer Relationships",
  "Pregnancy, Prenatal, or Postpartum Issues",
  "Racial Identity",
  "Racism or Microaggression",
  "Relationship or Marital Issues",
  "Self-Esteem",
  "Self-Harming",
  "Sexual Abuse/Trauma",
  "Spirituality",
  "Stress",
  "Substance Use",
  "Trauma or PTSD",
  "Women's Concerns",
] as const;

export const schema = z.enum(CONCERNS);

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
