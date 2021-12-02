import { dataflowWebConfig } from 'configuration/www/Dataflow';

import { IDataflowController } from 'core/entities/Dataflow';

import { HTTPUtils } from 'core/_tools/Utils/HTTPUtils';
import { URLUtils } from 'core/_tools/Utils/URLUtils';

const { get } = HTTPUtils;
const { parseURL } = URLUtils;

const publicList = async (): Promise<IDataflowController[]> => {
  const { data } = await get({ url: parseURL({ url: dataflowWebConfig.publicDataflows }) });

  return data;
};

export const DataflowRepository = { publicList };
