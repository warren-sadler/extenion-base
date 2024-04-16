import { faker } from "@faker-js/faker";
import { type Type as Person } from "./person";

export function generateRandomPerson(overrides: Partial<Person> = {}): Person {
  return {
    givenName: faker.person.firstName(),
    surname: faker.person.lastName(),
    ...overrides,
  };
}
