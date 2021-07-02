import axios from "axios";
import { VuexModule, Module, MutationAction } from "vuex-module-decorators";
import { IEntry } from "../../common/Entry";
import store from "@/store";

@Module({ namespaced: true, dynamic: true, store, name: "RandomModule" })
export default class RandomModule extends VuexModule {
  // state
  entries: Array<IEntry> = [];
  count = 0;

  @MutationAction({ mutate: ["count", "entries"] })
  async fetchRandom(): Promise<any> {
    const response = await axios.get("https://api.publicapis.org/random");
    return response.data;
  }

  get getRandom(): Array<IEntry> {
    return this.entries;
  }
}
