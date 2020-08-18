import { useContext } from 'react';
import AlertContext from './AlertContext';
import { AlertClient } from './alerts';

/**
 * Returns a reference to perform alerts.
 *
 * To avoid infinite loops, clients must call the alert API in a code path
 * that runs once, not every time the component re-renders.
 *
 * Examples of valid places to do an alert:
 *   - in a useEffect block with an empty dependency array
 *   - in an onClick callback from a button click
 */
export default function useAlert(): AlertClient {
  return useContext(AlertContext);
}
