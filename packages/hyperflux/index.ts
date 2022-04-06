import ActionFunctions from './functions/ActionFunctions'
import StateFunctions from './functions/StateFunctions'
import StoreFunctions from './functions/StoreFunctions'
import matches from './MatchesUtils'

function dynamicFunctionReference<M extends { [name: string]: Function }, K extends keyof M>(
  functionMap: M,
  functionName: K
): M[K] {
  return ((...args) => {
    return functionMap[functionName](...args)
  }) as any
}

export const createHyperStore = dynamicFunctionReference(StoreFunctions, 'createHyperStore')

export const defineAction = dynamicFunctionReference(ActionFunctions, 'defineAction')
export const dispatchAction = dynamicFunctionReference(ActionFunctions, 'dispatchAction')
export const addActionReceptor = dynamicFunctionReference(ActionFunctions, 'addActionReceptor')
export const removeActionReceptor = dynamicFunctionReference(ActionFunctions, 'removeActionReceptor')

export const defineState = dynamicFunctionReference(StateFunctions, 'defineState')
export const registerState = dynamicFunctionReference(StateFunctions, 'registerState')
export const getState = dynamicFunctionReference(StateFunctions, 'getState')
export const getMutableState = dynamicFunctionReference(StateFunctions, 'getMutableState')
export const addStateReactor = dynamicFunctionReference(StateFunctions, 'addStateReactor')
export const removeStateReactor = dynamicFunctionReference(StateFunctions, 'removeStateReactor')

export { matches }
