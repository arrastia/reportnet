import { DataflowStatus, DataflowType } from 'core/entities/Dataflow';

import { IDocumentController } from 'core/entities/Document';
import { IWebLinkController } from 'core/entities/WebLink';

export interface DataflowController {
  deadlineDate: Date;
  description: string;
  documents: IDocumentController[];
  id: number;
  manualAcceptance: boolean;
  name: string;
  obligation: ObligationController;
  referenceDatasets: null;
  releasable: boolean;
  reportingDatasets: null;
  status: DataflowStatus;
  type: DataflowType;
  weblinks: IWebLinkController[];
}

interface ObligationController {
  client: string | null;
  comment: string | null;
  countries: string[] | null;
  description: string;
  issues: string[] | null;
  legalInstrument: LegalInstrumentController;
  nextDeadline: number | null;
  obligationId: number;
  oblTitle: string;
  reportFreq: null;
  reportFreqDetail: null;
  validSince: Date;
  validTo: Date;
}

interface LegalInstrumentController {
  sourceAlias: string;
  sourceId: string;
  sourceTitle: string;
}
