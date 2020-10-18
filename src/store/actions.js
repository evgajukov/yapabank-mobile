import client from "../client";

import Signer from "@waves/signer";
import { ProviderSeed } from "@waves/provider-seed";

export default {
  async loadWallet({ commit }, seed) {
    console.log(seed);
    const signer = new Signer();
    signer.setProvider(new ProviderSeed(seed));
    const wallet = await signer.login();
    const assets = await signer.getBalance();
    commit("setWallet", { ...wallet, assets });
  },
  async loadTxList({ state, commit }) {
    const gate = "https://acrasrv.yapalab.ru";
    const limit = 1000;
    const result = await client().get(
      `${gate}/transactions/address/${state.wallet.address}/limit/${limit}`
    );
    let txlist =
      result.data != null && result.data.length == 1
        ? result.data[0]
        : [];
    txlist = txlist.filter((tx) => tx.assetId == state.asset.id);
    commit("setTxList", txlist);
  },
};