import { HomeTypes } from 'ui/Home/@types/Home.enum';

import type { HomeActions, HomeState } from 'ui/Home/@types/Home.types';

const { HANDLE_MODALS, ON_CHANGE_VIEW, SET_LOADING_STATUS, LOAD_DATAFLOWS, LOAD_DATAFLOWS_AMOUNT } = HomeTypes;

export const initialState: HomeState = {
  amount: { BUSINESS: null, CITIZEN_SCIENCE: null, REPORTING: null, REFERENCE: null },
  data: { BUSINESS: [], CITIZEN_SCIENCE: [], REPORTING: [], REFERENCE: [] },
  dataflowView: 'REPORTING',
  isEditing: false,
  loadingStatus: 'IDLE',
  modals: { isAddDataflow: false, isAddPermission: false }
};

export const homeReducer = (state: HomeState, action: HomeActions): HomeState => {
  switch (action.type) {
    case HANDLE_MODALS:
      return { ...state, modals: { ...state.modals, [action.payload.modal]: action.payload.isVisible } };

    case LOAD_DATAFLOWS_AMOUNT:
      return { ...state, amount: action.payload };

    case LOAD_DATAFLOWS:
      return { ...state, data: { ...state.data, [action.payload.view]: action.payload.data } };

    case ON_CHANGE_VIEW:
      return { ...state, dataflowView: action.payload.view };

    case SET_LOADING_STATUS:
      return { ...state, loadingStatus: action.payload.status };

    default:
      throw new Error('Invalid action type');
  }
};
