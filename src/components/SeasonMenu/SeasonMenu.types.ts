/**
 * Imports interfaces
 */
import { TVShow as ITVShow } from "../../hooks";

/**
 * Defines the props interface
 */
export interface SeasonMenuProps {
  show: ITVShow;
  seasonId: number | undefined;
  handleChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
}
