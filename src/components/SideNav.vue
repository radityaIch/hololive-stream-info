<template>
  <div class="sidebar" :class="{'close': isClose}">
    <div class="logo-details">
      <div class="px-4 pt-1">
        <box-icon size="30px" color="#fff" type="logo" name="play-store" />
      </div>
      <span class="logo_name">HoloStream Info</span>
    </div>
    <ul class="nav-links">
      <li :class="{showMenu: isArrowDown}">
        <router-link :to="'/'" @click="changeMenu('Dashboard')">
          <a>
            <span class="pt-1 px-5">
              <box-icon
                animation="spin-hover"
                size="25px"
                color="#fff"
                name="grid-alt"
              />
            </span>
            <span class="link_name">Dashboard</span>
          </a>
        </router-link>
        <ul class="sub-menu blank">
          <li>
            <router-link :to="'/'" @click="changeMenu('Dashboard')">
              <a class="link_name">Dashboard</a>
            </router-link>
          </li>
        </ul>
      </li>
      <li :class="{showMenu: isArrowDown}">
        <div class="icon-link mb-3" @click="showDropdown">
          <a href="#">
            <span class="pt-1 px-5">
              <box-icon
                animation="flashing"
                size="25px"
                color="#fff"
                name="broadcast"
              />
            </span>
            <span class="link_name">Live Streaming</span>
            <span class="pt-1 ml-6 arrow">
              <box-icon size="25px" color="#fff" name="chevron-down" />
            </span>
          </a>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">Live Streaming</a></li>
          <li>
            <router-link :to="'/live-stream/now'" @click="changeMenu('Live Streaming')">Now Streaming</router-link>
          </li>
          <li>
            <router-link :to="'/live-stream/upcoming'" @click="changeMenu('Live Streaming')">Upcoming</router-link>
          </li>
          <li>
            <router-link :to="'/live-stream/ended'" @click="changeMenu('Live Streaming')">Finished</router-link>
          </li>
        </ul>
      </li>
      <li :class="{showMenu: isArrowDown}">
        <div class="profile-details">
          <div class="profile-content">
            <img
              src="https://pbs.twimg.com/profile_images/1417395387527098371/sp6Dzzep_400x400.jpg"
              alt="Usada Pekora"
            />
          </div>
          <div class="name-job">
            <div class="profile_name">Usada Pekora</div>
            <div class="job">Virtual Creature</div>
          </div>
          <div class="mt-2 mr-2">
            <box-icon v-if="!isClose" size="30px" color="#fff" name="log-out" />
          </div>
        </div>
      </li>
    </ul>
  </div>
  <section class="home-section">
    <div class="home-content">
      <button class="pt-1 px-4" @click="showMenus()">
        <box-icon v-if="isClose" size="30px" color="#11101d" name="menu" />
        <box-icon
          v-if="!isClose"
          size="30px"
          color="#11101d"
          name="menu-alt-left"
        />
      </button>
      <span class="text">{{currentMenu}}</span>
    </div>
  </section>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  background: #11101d;
  z-index: 100;
  transition: all 0.5s ease;
}
.sidebar.close {
  width: 78px;
}
.sidebar .logo-details {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i {
  font-size: 30px;
  color: #fff;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}
.sidebar .logo-details .logo_name {
  font-size: 22px;
  color: #fff;
  font-weight: 600;
  transition: 0.3s ease;
  transition-delay: 0.1s;
  white-space: nowrap;
}
.sidebar.close .logo-details .logo_name {
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links {
  height: 100%;
  padding: 30px 0 150px 0;
  overflow: auto;
}
.sidebar.close .nav-links {
  overflow: visible;
}
.sidebar .nav-links::-webkit-scrollbar {
  display: none;
}
.sidebar .nav-links li {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
  white-space: nowrap;
}
.sidebar .nav-links li:hover {
  background: #1d1b31;
}
.sidebar .nav-links li .icon-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar.close .nav-links li .icon-link {
  display: block;
}
.sidebar .nav-links li i {
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.sidebar .nav-links li.showMenu .arrow {
  transform: rotate(-180deg);
}
.sidebar.close .nav-links .arrow {
  display: none;
}
.sidebar .nav-links li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.sidebar .nav-links li a .link_name {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  transition: all 0.4s ease;
}
.sidebar.close .nav-links li a .link_name {
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li .sub-menu {
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
  background: #1d1b31;
  display: none;
}
.sidebar .nav-links li.showMenu .sub-menu {
  display: block;
}
.sidebar .nav-links li .sub-menu a {
  color: #fff;
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}
.sidebar .nav-links li .sub-menu a:hover {
  opacity: 1;
}
.sidebar.close .nav-links li .sub-menu {
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}
.sidebar.close .nav-links li:hover .sub-menu {
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
}
.sidebar .nav-links li .sub-menu .link_name {
  display: none;
}
.sidebar.close .nav-links li .sub-menu .link_name {
  font-size: 18px;
  opacity: 1;
  display: block;
}
.sidebar .nav-links li .sub-menu.blank {
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li:hover .sub-menu.blank {
  top: 50%;
  transform: translateY(-50%);
}
.sidebar .profile-details {
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1d1b31;
  padding: 12px 0;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details {
  background: none;
}
.sidebar.close .profile-details {
  width: 78px;
}
.sidebar .profile-details .profile-content {
  display: flex;
  align-items: center;
}
.sidebar .profile-details img {
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 14px 0 12px;
  background: #1d1b31;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details img {
  padding: 10px;
}
.sidebar .profile-details .profile_name,
.sidebar .profile-details .job {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}
.sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name,
.sidebar.close .profile-details .job {
  display: none;
}
.sidebar .profile-details .job {
  font-size: 12px;
}
.home-section {
  position: fixed;
  background: #e4e9f7;
  z-index: 50;
  /* height: 100vh; */
  left: 260px;
  width: calc(100% - 260px);
  transition: all 0.5s ease;
}
.sidebar.close ~ .home-section {
  left: 78px;
  width: calc(100% - 78px);
}
.home-section .home-content {
  height: 60px;
  display: flex;
  align-items: center;
}
.home-section .home-content .bx-menu,
.home-section .home-content .text {
  color: #11101d;
  font-size: 35px;
}
.home-section .home-content .bx-menu {
  margin: 0 15px;
  cursor: pointer;
}
.home-section .home-content .text {
  font-size: 26px;
  font-weight: 600;
}
@media (max-width: 420px) {
  .sidebar.close .nav-links li .sub-menu {
    display: none;
  }
}
</style>

<script>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
export default {
    setup(){
      const router = useRoute() 
      const currentMenu = ref('')
      const isClose = ref(true)
      const isArrowDown = ref(false)

      function showMenus() {
        isClose.value = !isClose.value
      }
      function showDropdown() {
        isArrowDown.value = !isArrowDown.value
      }
      function changeMenu(menu){
        currentMenu.value =  menu
      }
      return {changeMenu,currentMenu, isClose, isArrowDown, showMenus, showDropdown}
    },
}
</script>
