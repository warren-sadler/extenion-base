import { faker } from "@faker-js/faker";
import { type Type as Account } from "./account";
import { Person } from "@/shared/types/person";
import { Concern } from "@/shared/types/concern";
import { State } from "@/shared/types/state";
import { InsuranceProvider } from "@/shared/types/insurance-provider";

export function generateRandomAccount(
  overrides: Partial<Account> = {},
): Account {
  return {
    emailAddress: faker.internet.email(),
    concerns: faker.helpers.arrayElements(Concern.CONCERNS),
    state: faker.helpers.arrayElement(State.STATES),
    insurance: faker.helpers.arrayElement(
      InsuranceProvider.INSURANCE_PROVIDERS,
    ),
    ...Person.random(),
    ...overrides,
  };
}
