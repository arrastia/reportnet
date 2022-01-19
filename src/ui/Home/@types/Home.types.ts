import { HomeTypes } from './Home.enum';

import type { ActionMap } from 'ui/@types/Reducer.types';
import type { DataflowAmount, DataflowType, IDataflow } from 'core/entities/Dataflow';
import type { LoadingStatus } from 'ui/@types/Loading.types';

// ACTIONS

const { HANDLE_MODALS, LOAD_DATAFLOWS, LOAD_DATAFLOWS_AMOUNT, ON_CHANGE_VIEW, SET_LOADING_STATUS } = HomeTypes;

export type HomeActions = ActionMap<HomePayload>[keyof ActionMap<HomePayload>];

export interface HomePayload {
  [HANDLE_MODALS]: {
    modal: 'isAddDataflow' | 'isAddPermission';
    isVisible: boolean;
  };
  [ON_CHANGE_VIEW]: {
    view: DataflowType;
  };
  [SET_LOADING_STATUS]: {
    status: LoadingStatus;
  };
  [LOAD_DATAFLOWS]: { data: IDataflow[]; view: DataflowType };
  [LOAD_DATAFLOWS_AMOUNT]: HomeStateAmount;
}

// STATE
export interface HomeState {
  amount: HomeStateAmount;
  data: HomeStateData;
  dataflowView: DataflowType;
  isEditing: boolean;
  loadingStatus: LoadingStatus;
  modals: HomeStateModals;
}

interface HomeStateData {
  BUSINESS: IDataflow[];
  CITIZEN_SCIENCE: IDataflow[];
  REFERENCE: IDataflow[];
  REPORTING: IDataflow[];
}

interface HomeStateAmount {
  BUSINESS: number | null;
  CITIZEN_SCIENCE: number | null;
  REFERENCE: number | null;
  REPORTING: number | null;
}

interface HomeStateModals {
  isAddDataflow: boolean;
  isAddPermission: boolean;
}
