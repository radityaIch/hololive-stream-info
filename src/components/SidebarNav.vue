<template>
    <div class="sidebar close">
        <div class="logo-details">
            <div class="px-4 pt-1">
                <box-icon size='30px' color='#fff' type='logo' name='play-store'/>
            </div>
            <span class="logo-name">HoloStream Info</span>
        </div>
        <ul class="menu-nav">
            <li class="list-none py-1 relative">
                <div>
                    <a href="#" class="flex items-center text-white">
                        <span class="pt-1 px-4">
                            <box-icon animation="spin-hover" size='25px' color='#fff' name='grid-alt'/>
                        </span>
                        <span>Dashboard</span>
                    </a>
                </div>
                <ul class="sub-menu blank">
                    <li><a href="#" class="flex items-center text-white">Dashboard</a></li>
                </ul>
            </li>
            <li class="list-none py-1 relative">
                <div>
                    <a href="#" class="flex items-center text-white">
                        <span class="pt-1 px-4">
                            <box-icon animation="flashing" size='25px' color='#fff' name='broadcast'/>
                        </span>
                        <span>Live Streaming</span>
                        <span class="pt-1 pl-12">
                            <box-icon size='25px' color='#fff' name='chevron-down'/>
                        </span>
                    </a>
                </div>
                <ul class="sub-menu">
                    <li><span class="flex items-center text-white">Live Streaming</span></li>
                    <hr>
                    <li><a href="#" class="flex items-center hover:underline underline-offset-2 text-white opacity-75 hover:opacity-100">Now Streaming</a></li>
                    <li><a href="#" class="flex items-center hover:underline underline-offset-2 text-white opacity-75 hover:opacity-100">Upcomming</a></li>
                    <li><a href="#" class="flex items-center hover:underline underline-offset-2 text-white opacity-75 hover:opacity-100">Finished Streaming</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .sidebar{
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 260px;
        background-color: #11101d;
    }
    .sidebar .logo-details{
        align-items: center;
        display: flex;
        height: 60px;
        width: 100%;
    }
    .sidebar .logo-details .logo-name{
        font-size: 22px;
        color: #fff;
    }
    .sidebar .menu-nav{
        height: 100%;
        padding-top: 1.5rem;
    }
    .sidebar .menu-nav li{
        transition: all 0.4 ease;
    }
    .sidebar .menu-nav li:hover{
        background-color: #1d1b31;
        transition: all 0.4 ease;
    }
    .sidebar .menu-nav .sub-menu{
        background-color: #1d1b31;
        /* display: none; */
        margin-top: 5px;
        padding: .2rem 0 .5rem 3.5rem;
        transition: all 0.4 ease;
        /* opacity: 0;
        pointer-events: none; */
    }
    .sidebar .menu-nav .sub-menu.blank{
        display:none;
    }
    .sidebar.close .menu-nav .sub-menu{
        left: 100%;
        position: absolute;
        top: 0;
        padding: 15px 20px;
        margin-top: 0;
        opacity: 1;
        pointer-events: auto;
    }
    .sidebar.close .menu-nav .sub-menu a{
        white-space: nowrap;
    }
    .sidebar .menu-nav .sub-menu li{
        padding: 5px 5px;
    }
</style>

<script>
    export default {
        name: 'SidebarNav'
    }
</script>