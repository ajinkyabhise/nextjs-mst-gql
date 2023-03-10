/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin } from "mst-gql"

import { TodoModel } from "./TodoModel"
import { todoModelPrimitives, TodoModelSelector } from "./TodoModel.base"


/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Todo', () => TodoModel]], ['Todo']))
  .props({
    todos: types.optional(types.map(types.late(() => TodoModel)), {})
  })
  .actions(self => ({
    // queryTodos(variables:any, resultSelector:Object = todoModelPrimitives.toString(), options = {}) {
    //   return self.query(`query todos { todos {
    //     ${typeof resultSelector === "function" ? resultSelector(new TodoModelSelector()).toString() : resultSelector}
    //   } }`, variables, options)
    // },
    queryDoneTodos(variables:any, resultSelector:Object = todoModelPrimitives.toString(), options = {}) {
      return self.query(`query {
        event(id: "5879ad8f6672e70036d58ba5") {
          title
          address
          currency
          host {
            firstName
          }
          timeSlots {
            totalCount
            nodes {
              startAt
            }
          }
        }
      }`)
    },
    // mutateToggleTodo(variables:any, resultSelector:Object = todoModelPrimitives.toString(), optimisticUpdate:any) {
    //   return self.mutate(`mutation toggleTodo($id: ID!) { toggleTodo(id: $id) {
    //     ${typeof resultSelector === "function" ? resultSelector(new TodoModelSelector()).toString() : resultSelector}
    //   } }`, variables, optimisticUpdate)
    // },
  }))
