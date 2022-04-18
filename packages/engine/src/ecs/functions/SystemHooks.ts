import { Engine } from '../classes/Engine'

/**
 * @deprecated Use Engine.currentWorld
 */
//TODO: Remove this, as it's misleading. This isn't really a "hook", and "rules of hooks" don't apply.
export function useWorld() {
  return Engine.currentWorld!
}
