/**
 * @template Result
 * @template A
 * @param {() => A} effect
 * @param {(a: A) => Result} Ok
 * @param {(err: unknown) => Result} Err
 * @returns {() => Result}
 */
export function try_catch_impl(effect, Ok, Err) {
  return () => {
    try {
      return Ok(effect());
    } catch (e) {
      return Err(e);
    }
  };
}

/**
 * @template E
 * @param {E} e
 * @returns {() => never}
 */
export function throw_impl(e) {
  return () => {
    throw e;
  };
}
