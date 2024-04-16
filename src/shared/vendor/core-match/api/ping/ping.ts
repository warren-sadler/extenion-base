import { ENDPOINTS } from "@/shared/constants/endpoints";

export function ping() {
  return fetch(ENDPOINTS.CORE_MATCH.PING).then((res) => res.json());
}
