import axios from 'axios';
import { useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { useWeb3React } from '@web3-react/core';
import { useRouter } from 'next/router';
import { Web3Provider } from '@ethersproject/providers';

import { COOKIE } from 'components/helper';
import api from 'components/api/axios';

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

export function useWalletSignature() {
  const routers = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();

  const context = useWeb3React<Web3Provider>();
  const { account, library } = context;

  const getJWT = useCallback(
    async (signature: string, wallet: any) => {
      if (!signature) {
        return;
      }
      const walletAddress = account.toLowerCase();

      const param = {
        walletAddress: walletAddress,
        signature: signature,
      };

      const response: any = await api
        .post(`/authMekabae`, param)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log('eror: ', error.response);
        });

      const accessToken = response?.data?.accessToken;
      if (accessToken) {
        wallet.once = response.data.once;
        console.log("wallet: ", wallet);
        localStorage.setItem('mekabae-wallet', JSON.stringify(wallet));
        const cookieName = `${COOKIE}-${walletAddress}`;
        if (cookies[cookieName]) {
          let path = routers.query?.lang ? '/' + routers.query.lang : '/';
          removeCookie(cookieName, { path: path });
          removeCookie(cookieName, { path: '/' });
        }
        setCookie(cookieName, accessToken, {
          path: '/',
          maxAge: 2592000,
        });
      }
      return accessToken;
    },
    [account, setCookie]
  );

  const fetchSignature = useCallback(async () => {
    const localWallet = localStorage.getItem('mekabae-wallet');
    const wallet = JSON.parse(localWallet);

    if (!wallet || !wallet.once || !library) {
      console.warn('Not have wallet connected yet!');
      return;
    }
    const signature = await library
      .getSigner(account)
      .signMessage(
        `I authorize publishing on baecafe.xyz from this device using: ${wallet.once}`
      )
      .then((signature: any) => {
        return signature;
      })
      .catch((error: any) => {
        console.log('error: ', error);
        return null;
      });
    return getJWT(signature, wallet);
  }, [library, account, getJWT]);

  const withSignature = useCallback(
    async <F extends () => any = () => any>(func?: F) => {
      const token = cookies[COOKIE] || (await fetchSignature());
      if (token) {
        await axios.interceptors.request.use(
          function (config) {
            if (!config.headers) {
              config.headers = {};
            }
            config.headers['Authorization'] = `Bearer ${token}`;
            return config;
          },
          function (error) {
            return Promise.reject(error);
          }
        );
        const res: Awaited<ReturnType<typeof func>> = await func?.();
        return res;
      }
      return;
    },
    [cookies, fetchSignature]
  );

  return {
    withSignature,
  };
}
