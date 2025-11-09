import {createWorkSpace, listWorkSpace} from "@/components/router/workspace";

export const router = {
  workspace: {
    list: listWorkSpace,
    create : createWorkSpace,
  },
};
