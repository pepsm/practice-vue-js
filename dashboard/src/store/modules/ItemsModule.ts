import axios from "axios";
import { VuexModule, Module, MutationAction } from "vuex-module-decorators";
import { Entry, IEntry } from "../../common/Entry";
import store from "@/store";
import { mapEntries } from "@/common/Map";

@Module({ namespaced: true, dynamic: true, store, name: "ItemsModule" })
export default class Items extends VuexModule {
  // state
  entries: Array<IEntry> = [];
  count = 0;

  @MutationAction({ mutate: ["count", "entries"] })
  async fetchAll(): Promise<any> {
    const response = await (await axios.get("api/entries")).data;

    const mapedEntries = mapEntries(response.entries);
    return { count: response.count, entries: mapedEntries };
  }

  get items(): Array<IEntry> {
    return this.entries;
  }
}
