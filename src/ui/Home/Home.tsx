import { useEffect, useReducer } from 'react';

import { IoFilter, IoRefresh, IoSearch, IoStar } from 'react-icons/io5';

import { Styles } from './Home.styles';

import { MyTitle } from 'ui/_components/MyTitle';
import { TopTab } from 'ui/_components/TopTab';

import { DataflowService } from 'core/services/Dataflow';

import { useSidebar } from 'ui/_tools/Hooks/useSidebar';

import { homeReducer, initialState } from './_tools/Reducers/homeReducer';

import { homeSections } from './_tools/Helpers/homeSections.helpers';

import { HomeTypes } from 'ui/Home/@types/Home.enum';

import type { DataflowType } from 'core/entities/Dataflow';
import type { LoadingStatus } from 'ui/@types/Loading.types';
import type { ITopTabItem } from 'ui/@types/TopTab';
import { RainbowButton } from 'ui/_components/RainbowButton';
import { Button } from 'ui/_components/Button';
import { Dataflow } from './_components/Dataflow';
import { Table } from 'ui/_components/Table';

const { HANDLE_MODALS, LOAD_DATAFLOWS, LOAD_DATAFLOWS_AMOUNT, ON_CHANGE_VIEW, SET_LOADING_STATUS } = HomeTypes;

export const Home = () => {
  const [homeState, homeDispatch] = useReducer(homeReducer, initialState);

  const { amount, data, dataflowView: view, isEditing, loadingStatus, modals } = homeState;

  useSidebar({ cardShape: 'ONLY_ICON', sections: homeSections });

  useEffect(() => {
    loadDataflowsAmount();
  }, []);

  useEffect(() => {
    if (data[view].length === 0) {
      loadDataflows();
    }
  }, [view]);

  const loadDataflowsAmount = async () => {
    try {
      const response = await DataflowService.amount();

      homeDispatch({ type: LOAD_DATAFLOWS_AMOUNT, payload: response });
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  const loadDataflows = async () => {
    setLoadingStatus('PENDING');
    try {
      const response = await DataflowService.list(view);

      homeDispatch({ type: LOAD_DATAFLOWS, payload: { data: response, view } });
      setLoadingStatus('SUCCESS');
    } catch (error) {
      console.log('error :>> ', error);
      setLoadingStatus('FAILED');
    }
  };

  const setLoadingStatus = (status: LoadingStatus) => homeDispatch({ type: SET_LOADING_STATUS, payload: { status } });

  const setView = (view: DataflowType) => homeDispatch({ type: ON_CHANGE_VIEW, payload: { view } });

  const renderRightButtons = () => [
    { icon: <IoFilter />, id: 0, onClick: () => {} },
    { icon: <IoSearch />, id: 1, onClick: () => {} },
    { icon: <IoStar />, id: 2, onClick: () => {} },
    { icon: <IoRefresh />, id: 3, onClick: loadDataflows }
  ];

  const renderElements = (): ITopTabItem<DataflowType>[] => {
    return [
      { badge: amount.REFERENCE, id: 0, label: 'Reference dataflows', value: 'REFERENCE' },
      { badge: amount.CITIZEN_SCIENCE, id: 1, label: 'Citizen science', value: 'CITIZEN_SCIENCE' },
      { badge: amount.REPORTING, id: 2, label: 'Reporting dataflows', value: 'REPORTING' },
      { badge: amount.BUSINESS, id: 3, label: 'Business dataflows', value: 'BUSINESS' }
    ];
  };

  if (loadingStatus === 'PENDING') return <div>LOADING</div>;

  return (
    <Styles.App>
      <MyTitle
        colors={{ degrees: 45, firstColor: '#005e9c', secondColor: '#009490' }}
        isLargeTitle={true}
        rightButtons={renderRightButtons()}
        title="Dataflows"
      />
      <TopTab elements={renderElements()} onChange={setView} value={view} />
      {/* <RainbowButton></RainbowButton> */}
      {/* <div style={{ margin: '1rem' }}>
        <Button className="neon" label="HOLAAA"></Button>
      </div> */}
      <Table headers={['Owner', 'Name', 'Description', 'Status', 'Creation date', 'Delivery date']} rows={[{ id: 0, cells: [] }]} />
      {data[view].map(dataflow => (
        <Dataflow assigned={[]} isStarred={false} key={dataflow.id} name={dataflow.name} />
      ))}
    </Styles.App>
  );
};
