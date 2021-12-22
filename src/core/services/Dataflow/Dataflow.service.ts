import { DataflowRepository } from 'core/repositories/Dataflow';

import Dataflow, { DataflowType } from 'core/entities/Dataflow';
import Document, { IDocumentController } from 'core/entities/Document';
import WebLink, { IWebLinkController } from 'core/entities/WebLink';

const parseDocuments = (documents: IDocumentController[]) => {
  return documents.map(
    document =>
      new Document({
        category: document.category,
        date: document.date,
        description: document.description,
        id: document.id,
        isPublic: document.isPublic,
        language: document.language,
        size: document.size,
        title: document.title
      })
  );
};

const parseWebLinks = (webLinks: IWebLinkController[]) => {
  return webLinks.map(webLink => new WebLink({ description: webLink.description, id: webLink.id, isPublic: webLink.isPublic, url: webLink.url }));
};

const amount = async () => {
  const response = await DataflowRepository.amount();

  return response.reduce((obj, item) => Object.assign(obj, { [item.type]: item.amount }), {}) as Record<DataflowType, number>;
};

const list = async (type: DataflowType) => {
  const dataflows = await DataflowRepository.list(type);

  return dataflows.map(
    dataflow =>
      new Dataflow({
        documents: [],
        id: dataflow.id,
        name: dataflow.name,
        status: dataflow.status,
        type: dataflow.type,
        webLinks: []
      })
  );
};

const publicList = async () => {
  const dataflows = await DataflowRepository.publicList();

  return dataflows.map(
    dataflow =>
      new Dataflow({
        documents: [],
        id: dataflow.id,
        name: dataflow.name,
        status: dataflow.status,
        type: dataflow.type,
        webLinks: []
      })
  );
};

export const DataflowService = { amount, list, publicList };

// webLinks: parseWebLinks(dataflow.weblinks)
// webLinks: parseWebLinks(dataflow.weblinks)
