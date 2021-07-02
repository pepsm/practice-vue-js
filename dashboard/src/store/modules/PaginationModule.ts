import {
  VuexModule,
  Module,
  Mutation,
  Action,
  MutationAction,
} from "vuex-module-decorators";
import { IEntry } from "../../common/Entry";

import store from "@/store";

@Module({ namespaced: true, dynamic: true, store, name: "PaginationModule" })
export default class Pagination extends VuexModule {
  // state
  pagination: IEntry[][] = [];
  currentPage = 0;

  get getPagination(): any {
    return this.pagination;
  }
  get getCurrentPage(): number {
    return this.currentPage;
  }

  @MutationAction({ mutate: ["pagination", "currentPage"] })
  async updatePagination(pagination: Array<Array<IEntry>>): Promise<any> {
    return { pagination, currentPage: 0 };
  }

  @Mutation
  changeCurrentPage(currentPage: number): void {
    this.currentPage = currentPage;
  }

  @Action
  updateCurrentPage(currentPage: number): void {
    this.context.commit("changeCurrentPage", currentPage);
  }
}
