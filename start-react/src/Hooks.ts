import {createTypedHooks} from 'easy-peasy'
import {StoreModel} from './index'

const {useStoreActions, useStoreState, useStoreDispatch, useStore} = createTypedHooks<StoreModel>()
export {useStoreActions, useStoreState, useStoreDispatch, useStore}