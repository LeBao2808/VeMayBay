
<template>
  <Suspense>
    <BasicAdminFormVue
      :tableColumns="tableColumns"
      :apiName="'Airlines'"
      :allowAdd="false"
      :allowEdit="true"
      :allowDelete="true"
      title="Airlines"
      :CustomActions="CustomActions"
      @onCustomAction="ChangePage"
    />
  </Suspense>
</template>

<style>

</style>

<script lang="ts" setup>
import BasicAdminFormVue from "../../../components/maynghien/adminTable/BasicAdminForm.vue"
  import { ApiActionType, CustomAction, CustomActionDataType, CustomActionResponse } from "../../../components/maynghien/adminTable/Models/CustomAction";
  // @ts-ignore
  import { TableColumn } from "@/components/maynghien/adminTable/Models/TableColumn.ts";
  import router from "../../../router";
// import { axiosInstance } from "@/Services/axiosConfig";
import Cookies from "js-cookie";
import * as jwt from "jsonwebtoken";
import { ref, reactive } from "vue";

const token = Cookies.get("accessToken")?.toString() ?? "";
const decodedToken = jwt.decode(token ?? "") as TokenPayload;
//   const userRoles = decodedToken.Roles || [];

//   const hasTeamleaderRole = hasPermission(userRoles, ["teamleader"]);
//   const hasSaleRole = hasPermission(userRoles, ["Sale"]);
//   const hasAdminRole = hasPermission(userRoles, ["Admin", "superadmin"]);

interface TokenPayload {
  Roles: string[];
}
const customerLinkId = ref("");
const deatailShow = ref(false);
const tableColumns: TableColumn[] = [
{
   key: "name",
      label: "Tên Đối Tác ",
      enableEdit: true,
      enableCreate:true,
      hidden: false,
      width: 500,
      required: true,
      sortable: true,
      showSearch: true,
      inputType: "text",
      dropdownData: null,
},
{
  key: "information",
      label: "Thông Tin ",
      enableEdit: true,
      enableCreate:true,
      hidden: false,
      width: 500,
      required: true,
      sortable: true,
      showSearch: true,
      inputType: "text",
      dropdownData: null,

},
{
  key: "loGo",
      label: "Lô Gô",
      enableEdit: true,
      enableCreate:true,
      hidden: false,
      width: 500,
      required: true,
      sortable: true,
      showSearch: true,
      inputType: "text",
      dropdownData: null,
},
{
      key: "address",
      label: "Địa Chỉ",
      enableEdit: true,
      enableCreate:true,
      hidden: false,
      width: 500,
      required: true,
      sortable: true,
      showSearch: true,
      inputType: "text",
      dropdownData: null,

  },
  {
      key: "email",
      label: "Email ",
      enableEdit: true,
      enableCreate:true,
      hidden: false,
      width: 500,
      required: true,
      sortable: true,
      showSearch: true,
      inputType: "text",
      dropdownData: null,

  },
  {
      key: "phoneNumber",
      label: "Số Điện Thoại ",
      enableEdit: true,
      enableCreate:true,
      hidden: false,
      width: 500,
      required: true,
      sortable: true,
      showSearch: true,
      inputType: "text",
      dropdownData: null,

  },



]
function hasPermission(userRoles: string[], requiredRoles: string[]): boolean {
for (const requiredRole of requiredRoles) {
  if (userRoles.includes(requiredRole)) {
    return true;
  }
}
return false;
}

const CustomActions: CustomAction[] = ([
  {
      ActionName: "Deatail",
      ActionLabel: "Link",
      ApiActiontype:ApiActionType.PUT,
      IsRowAction: true,
      DataType: CustomActionDataType.RowId,
  }
]);
function ChangePage(item: CustomActionResponse){
  if(item.Action.ActionName == "Deatail")
  router.push('/Airlines/' + item.Data.customerId);
}
</script>