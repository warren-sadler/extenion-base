import { Type as Person } from "../person";

export function fullName(person: Person): string {
  return `${person.givenName} ${person.surname}`;
}
