import { cleanup } from "@testing-library/react";
import { beforeAll, afterEach, afterAll, expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";

import { server } from "./src/mocks/server";

expect.extend(matchers);

beforeAll(() => server.listen());
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());
