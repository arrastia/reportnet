import { Fragment, useState } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';

import { IoExpand, IoNotifications, IoPerson, IoPower } from 'react-icons/io5';

import { Styles } from './Header.styles';

import { routes } from 'configuration/routes';

import { Avatar } from 'ui/_components/Avatar';
import { Button } from 'ui/_components/Button';
import { Logo } from 'ui/_components/Logo';
import { Modal } from 'ui/_components/Modal';
import { ThemeButton } from 'ui/_components/ThemeButton';

import { UserService } from 'core/services/User';

import { useBreakpoint } from 'ui/_tools/Hooks/useBreakPoint';

import { refreshTokenStore, tokenStore } from 'ui/_tools/Atoms/UserStore';
import { useLocalStorage } from 'ui/_tools/Hooks/useLocalStorage';
import { useAuth } from 'ui/_tools/Hooks/useAuth';

import { CookiesUtils } from 'core/_tools/Utils/CookiesUtils';

const { getCookie, setCookie } = CookiesUtils;

export const Header = () => {
  const { push } = useHistory();
  const { signIn, signOut } = useAuth();

  const [token, setToken] = useRecoilState(tokenStore);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { breakpoint } = useBreakpoint();

  return (
    <Fragment>
      <Styles.Header>
        {/* {breakpoint === 'phone' ? <Avatar /> : null} */}
        <Logo onClick={() => push(routes.DATAFLOWS)} />
        <Styles.ActionButtons>
          {!token ? (
            <Fragment>
              {/* <Button label="Sing up" type="secondary" /> */}
              {/* <ThemeButton /> */}
              <Button label="Sing in" onClick={() => signIn('pablo.custodian', '1234')} type="gradient" />
            </Fragment>
          ) : (
            <Fragment>
              <Button label="Sing in" onClick={() => signIn('pablo.custodian', '1234')} type="gradient" />

              <Button icon={<IoPerson />} type="transparent" />
              <Button icon={<IoNotifications />} onClick={() => getCookie('auth_token')} type="transparent" />
              <Button icon={<IoExpand />} type="transparent" />
              <Button icon={<IoPower />} onClick={signOut} type="transparent" />
            </Fragment>
          )}
        </Styles.ActionButtons>
      </Styles.Header>

      <Modal
        animation={'zoom'}
        cancelLabel={''}
        className={''}
        closeMaskOnClick={true}
        closeOnEsc={true}
        confirmButtonType={'primary'}
        confirmLabel={'Sing in'}
        customMaskStyles={{}}
        customStyles={{}}
        duration={0}
        enterAnimation={'zoom'}
        height={500}
        isDisabled={false}
        leaveAnimation={'zoom'}
        leftSideFooter={undefined}
        measure={'px'}
        modalTitle={'Authenticate yourself'}
        onAnimationEnd={() => {}}
        onClose={() => setIsModalVisible(false)}
        onConfirm={() => {}}
        showCloseButton={true}
        showMask={true}
        visible={isModalVisible}
        width={500}
      />
    </Fragment>
  );
};
