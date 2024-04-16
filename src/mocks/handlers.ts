import { http, HttpResponse } from "msw";
import { ENDPOINTS } from "@/shared/constants/endpoints";

export const handlers = [
  http.get(ENDPOINTS.CORE_MATCH.PING, () => {
    return HttpResponse.json({ message: "pong" });
  }),
];
