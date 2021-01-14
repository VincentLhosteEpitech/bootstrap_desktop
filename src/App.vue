<template>
    <v-content>
      <div class="ma-12 pa-12">
          <v-navigation-drawer
            permanent
            expand-on-hover
            fixed
            :width="200"
          >
            <v-list>
              <v-list-item class="px-2">
                <v-list-item-avatar>
                  <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    Sandra Adams
                  </v-list-item-title>
                  <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list
              nav
              dense
            >
              <router-link to="/Home">
              <v-list-item>
                <v-list-item-icon>
                  <router-link to="/"><v-icon>mdi-home-variant-outline</v-icon></router-link>
                </v-list-item-icon>
                <v-list-item-title>My Files</v-list-item-title>
              </v-list-item>
              </router-link>
              <router-link to="/settings">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account-cog-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Shared with me</v-list-item-title>
              </v-list-item>
              </router-link>
              <router-link to="/Widgets">
              <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-star</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Starred</v-list-item-title>
              </v-list-item>
              </router-link>
            </v-list>
          </v-navigation-drawer>
      </div>
      <router-view/>
    </v-content>
</template>

<style lang="scss">
$mainbeige: #f7cc8b;
.brick-content.mas {
    width: 33.3%;
    float: left;
    text-align: justify;
    font-family: verdana;
}

.v-navigation-drawer.v-navigation-drawer--fixed.v-navigation-drawer--mini-variant.v-navigation-drawer--open.v-navigation-drawer--open-on-hover.theme--light {
    width: 70px !important;
}

.v-list-item__title {
    font-family: helvetica;
}
</style>
