import { IDocument } from 'core/entities/Document';
import { IWebLink } from 'core/entities/WebLink';

export type DataflowStatus = 'DESIGN' | 'DRAFT';
export type DataflowType = 'REPORTING' | 'CITIZEN_SCIENCE' | 'REFERENCE' | 'BUSINESS';

export interface DataflowAmount {
  amount: number;
  type: DataflowType;
}

export interface Dataflow {
  creationDate?: Date;
  documents: IDocument[];
  id: number;
  name: string;
  status: DataflowStatus;
  type: DataflowType;
  webLinks: IWebLink[];
}

export class Dataflow {
  constructor({ creationDate, documents, id, name, status, type, webLinks }: Dataflow) {
    this.creationDate = creationDate;
    this.documents = documents;
    this.id = id;
    this.name = name;
    this.status = status;
    this.type = type;
    this.webLinks = webLinks;
  }
}

// anySchemaAvailableInPublic,
// dataCollections,
// dataProviderGroupId,
// dataProviderGroupName,
// datasets,
// description,
// designDatasets,
// documents,
// euDatasets,
// expirationDate,
// fmeUserId,
// fmeUserName,
// isReleasable,
// manualAcceptance,
// obligation,
// referenceDatasets,
// reportingDatasetsStatus,
// representatives,
// requestId,
// showPublicInfo,
// testDatasets,
// type,
// userRole,

// webLinks
// name,
// status,
// creationDate,
// id,
