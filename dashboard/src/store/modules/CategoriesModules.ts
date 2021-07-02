import axios from "axios";
import { VuexModule, Module, MutationAction } from "vuex-module-decorators";
import { IEntry } from "../../common/Entry";
import store from "@/store";

@Module({ namespaced: true, dynamic: true, store, name: "CategoriesModule" })
export default class CategoriesModule extends VuexModule {
  // state
  categories: Array<string> = [];

  @MutationAction({ mutate: ["categories"] })
  async fetchCategories(): Promise<any> {
    const response = await axios.get("https://api.publicapis.org/categories");
    return {categories: response.data};
  }

  get getCategories(): Array<string> {
    return this.categories;
  }
}
