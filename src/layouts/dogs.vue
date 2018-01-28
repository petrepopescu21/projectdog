<template>
<v-app>
    <top-toolbar />
    <filter-drawer></filter-drawer>
<v-content>
        <v-container>
            <router-view />
        </v-container>
  </v-content>
  <v-footer></v-footer>
</v-app>
</template>

<script>
import FilterDrawer from '@/components/Drawers/FilterDrawer'
import TopToolbar from '@/components/Toolbars/TopToolbar'
export default {
  components: {FilterDrawer,TopToolbar}
}
</script>
