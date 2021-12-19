import { dataflowWebConfig } from 'configuration/www/Dataflow';

import { DataflowType, IDataflowController } from 'core/entities/Dataflow';

import { HTTPUtils } from 'core/_tools/Utils/HTTPUtils';
import { URLUtils } from 'core/_tools/Utils/URLUtils';

const { get } = HTTPUtils;
const { parseURL } = URLUtils;

const URL_PARAMS = {
  BUSINESS: 'businessDataflows',
  CITIZEN_SCIENCE: 'citizenScienceDataflows',
  REFERENCE: 'referenceDataflows',
  REPORTING: 'getDataflows'
};

const list = async (type: DataflowType): Promise<IDataflowController[]> => {
  const { data } = await get({ url: parseURL({ url: dataflowWebConfig.dataflows, params: { dataflowType: URL_PARAMS[type] } }) });

  return data;
};

const publicList = async (): Promise<IDataflowController[]> => {
  const { data } = await get({ url: parseURL({ url: dataflowWebConfig.publicDataflows }) });

  return data;
};

export const DataflowRepository = { list, publicList };
