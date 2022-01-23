import { FC, useState } from 'react';

import { IoDocumentOutline, IoMailOutline } from 'react-icons/io5';

import { Styles } from './PublicHome.styles';

import { MyTitle } from 'ui/_components/MyTitle';
import { Title } from 'ui/_components/Title';
import { TopTab } from 'ui/_components/TopTab';

type DataflowStatusType = 'OBLIGATION' | 'COUNTRY';
type DataflowReturn = { id: number; order: number; isDisabled: boolean; label: string; value: DataflowStatusType };

export const PublicHome: FC = () => {
  const [view, setView] = useState<DataflowStatusType>('COUNTRY');

  const renderElements = (): DataflowReturn[] => {
    return [
      { id: 0, order: 0, isDisabled: false, label: 'Obligation status', value: 'OBLIGATION' },
      { id: 1, order: 1, isDisabled: false, label: 'Country status', value: 'COUNTRY' }
    ];
  };

  return (
    <Styles.PublicPage>
      <MyTitle
        colors={{ degrees: 45, firstColor: '#005e9c', secondColor: '#009490' }}
        isLargeTitle={false}
        rightButtons={[{ icon: <IoMailOutline /> }, { icon: <IoDocumentOutline /> }]}
        title="Reportnet clone"
      />
      <Styles.Content>
        <Styles.Subtitle>The next generation for e-Reporting environmental and climate data</Styles.Subtitle>
        <Styles.ParagraphWrapper>
          Reportnet 3 is the new e-Reporting platform for reporting environmental and climate data to the European Environment Agency (EEA). The
          platform embraces the strategic goals of the European Commission’s Green Deal and Digital Strategy and will host reporting tasks on behalf
          of EEA and the Commission.
        </Styles.ParagraphWrapper>
        <Styles.ParagraphWrapper>
          The transition of reporting obligations from Reportnet 2 to Reportnet 3 will take a number of years. Therefore, Reportnet 2 will remain
          operational until all data flows are migrated and will then become an archive. Reportnet 2 can be accessed here:
          http://cdr.eionet.europa.eu/
        </Styles.ParagraphWrapper>
        <Styles.Subtitle>View public dataflows</Styles.Subtitle>
        <Styles.ButtonWrapper>
          <TopTab elements={renderElements()} onChange={(value: DataflowStatusType) => setView(value)} value={view} />
        </Styles.ButtonWrapper>
        <Styles.Subtitle>External portals</Styles.Subtitle>
        <Styles.ButtonWrapper>
          <TopTab elements={renderElements()} onChange={(value: DataflowStatusType) => setView(value)} value={view} />
        </Styles.ButtonWrapper>
      </Styles.Content>
    </Styles.PublicPage>
  );
};
