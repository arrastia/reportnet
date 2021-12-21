import { Styles } from './TopTab.styles';

import type { ITopTab } from 'ui/@types/TopTab';

export const TopTab = <T extends {}>({ elements, onChange, value }: ITopTab<T>) => {
  return (
    <Styles.TabBar>
      <Styles.Indicator />

      {elements.map(element => (
        <Styles.Tab isActive={element.value === value} key={element.id} onClick={() => onChange(element.value)}>
          {element.badge ? <Styles.Badge>{element.badge}</Styles.Badge> : null}
          <Styles.TabLabel>{element.label}</Styles.TabLabel>
        </Styles.Tab>
      ))}
    </Styles.TabBar>
  );
};
