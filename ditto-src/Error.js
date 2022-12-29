/**
 * @param {string} message
 * @returns {Error}
 */
export function new_impl(message) {
  return new Error(message);
}

/**
 * @param {string} message
 * @param {unknown} cause
 * @returns {Error}
 */
export function new_with_cause_impl(message, cause) {
  return new Error(message, { cause });
}

/**
 * @template Maybe
 * @param {unknown} dunno
 * @param {(value: Error) => Maybe} Just
 * @param {Maybe} Nothing
 * @returns {Maybe}
 */
export function from_unknown_impl(dunno, Just, Nothing) {
  return dunno instanceof Error ? Just(dunno) : Nothing;
}

/**
 * @param {Error} err
 * @returns {string}
 */
export function message_impl(err) {
  return err.message;
}

/**
 * @template Maybe
 * @param {Error} err
 * @param {(cause: unknown) => Maybe} Just
 * @param {Maybe} Nothing
 * @returns {Maybe}
 */
export function cause_impl(err, Just, Nothing) {
  return err.cause !== undefined ? Just(err.cause) : Nothing;
}
