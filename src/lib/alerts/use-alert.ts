import { useContext } from 'react';
import AlertContext from './AlertContext';
import { AlertClient } from './AlertProvider';

/**
 * Returns a reference to perform alerts.
 *
 * To avoid infinite loops, clients must call this function in a code path
 * that runs once, not every time the component renders.
 *
 * Examples of valid places to do an alert:
 *   - in a useEffect block with an empty dependency array
 *   - in an onClick callback from a button click
 */
export default function useAlert(): AlertClient {
  const alert = useContext(AlertContext);
  return alert;
}
