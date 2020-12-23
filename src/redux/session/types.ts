import { Session } from '../../types/global';

export type SessionState = {
  sessions: Session[];
  loading: boolean;
  error: Error | null;
};
