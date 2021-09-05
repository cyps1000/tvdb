/**
 * Defines the response data interface
 */
export interface ResultResponse {
  show: {
    id: number;
    name: string;
    premiered: string;
    network: {
      name: string;
    } | null;
    webChannel: {
      name: string;
    } | null;
    image: {
      medium: string;
    } | null;
    summary: string | null;
  };
}
