<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    
  </el-menu>
</template>

<script setup lang="ts">
import {  reactive, ref } from 'vue'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons'
    const isCollapse = ref(false)
    const handleOpen = (key : string | number, keyPath: string) => {
      console.log(key, keyPath)
    }
    const handleClose = (key : string | number, keyPath: string) => {
      console.log(key, keyPath)
    }
let menulist= reactive([
  {
    "path": "/system",
    "component": "Layout",
    "alwaysShow": true,
    "name": "system",
    "meta": {
      "title": "系统管理",
      "icon": "Setting",
      "roles": [
        "sys:manage"
      ]
    },
    "children": [
      {
        "path": "/department",
        "component": "/system/department/department",
        "alwaysShow": false,
        "name": "department",
        "meta": {
          "title": "机构管理",
          "icon": "List",
          "roles": [
            "sys:dept"
          ]
        }
      },
      {
        "path": "/userList",
        "component": "/system/User/UserList",
        "alwaysShow": false,
        "name": "userList",
        "meta": {
          "title": "用户管理",
          "icon": "UserFilled",
          "roles": [
            "sys:user"
          ]
        }
      },
      {
        "path": "/roleList",
        "component": "/system/Role/RoleList",
        "alwaysShow": false,
        "name": "roleList",
        "meta": {
          "title": "角色管理",
          "icon": "Wallet",
          "roles": [
            "sys:role"
          ]
        }
      },
      {
        "path": "/menuList",
        "component": "/system/Menu/MenuList",
        "alwaysShow": false,
        "name": "menuList",
        "meta": {
          "title": "权限管理",
          "icon": "Menu",
          "roles": [
            "sys:menu"
          ]
        }
      }
    ]
  },
  {
    "path": "/goods",
    "component": "Layout",
    "alwaysShow": true,
    "name": "goods",
    "meta": {
      "title": "商品管理",
      "icon": "Tickets",
      "roles": [
        "sys:goods"
      ]
    },
    "children": [
      {
        "path": "/goodCategory",
        "component": "/goods/goodsCategory/goodsCategoryList",
        "alwaysShow": false,
        "name": "goodCategory",
        "meta": {
          "title": "分类管理",
          "icon": "ShoppingBag",
          "roles": [
            "sys:goodsCategory"
          ]
        }
      }
    ]
  },
  {
    "path": "/systenConfig",
    "component": "Layout",
    "alwaysShow": true,
    "name": "systenConfig",
    "meta": {
      "title": "系统工具",
      "icon": "ChatLineSquare",
      "roles": [
        "sys:systenConfig"
      ]
    },
    "children": [
      {
        "path": "/systemCode",
        "component": "/system/config/code",
        "alwaysShow": false,
        "name": "systemCode",
        "meta": {
          "title": "日志管理",
          "icon": "Operation",
          "roles": [
            "sys:systemCode"
          ]
        }
      },
      {
        "path": "/document",
        "component": "/system/config/systemDocument",
        "alwaysShow": false,
        "name": "http://42.193.158.170:8089/swagger-ui/index.html",
        "meta": {
          "title": "接口文档",
          "icon": "DocumentCopy",
          "roles": [
            "sys:document"
          ]
        }
      }
    ]
  }
])
      

</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}
</style>