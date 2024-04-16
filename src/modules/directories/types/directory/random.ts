import { faker } from "@faker-js/faker";
import { type Type as Directory } from "./directory";

export function generateRandomDirectory(
  overrides: Partial<Directory> = {},
): Directory {
  return {
    name: faker.lorem.word(),
    domain: faker.internet.domainName(),
    description: faker.lorem.sentence(),
    imageUrl: faker.image.url(),
    ...overrides,
  };
}
