<template>
    <section class="dashboard">
        <div class="dashboard-container">
            <div class="live-stream">
                <h1>Now Streaming</h1>
                <div class="video-list">
                    <LiveCard
                        v-for="data in streamDataLive.slice(1,4)"
                        :key="data.id"
                        :thumbnail="`https://img.youtube.com/vi/${data.yt_video_key}/hqdefault.jpg`"
                        :profilePic="data.channel.photo"
                        :title="data.title"
                        :link="`https://www.youtube.com/watch?v=${data.yt_video_key}`"
                        :channel="data.channel.name"
                        :channelLink="`https://www.youtube.com/channel/${data.channel.yt_channel_id}`"
                        :liveWatch="data.live_viewers || 'no'"
                        :liveStart="new Date(data.live_start)"
                     />
                </div>
                <button class="bg-neutral-900 hover:bg-slate-300 text-white hover:text-neutral-900 transition-all px-5 py-2">
                    <router-link :to="'/live-stream/now'">
                        More
                    </router-link>
                </button>
            </div>

            <div class="live-stream">
                <h1>Upcoming Stream</h1>
                <div class="video-list">
                     <LiveCard
                        v-for="data in streamDataUpcoming.slice(1,4)"
                        :key="data.id"
                        :thumbnail="`https://img.youtube.com/vi/${data.yt_video_key}/hqdefault.jpg`"
                        :profilePic="data.channel.photo"
                        :title="data.title"
                        :link="`https://www.youtube.com/watch?v=${data.yt_video_key}`"
                        :channel="data.channel.name"
                        :channelLink="`https://www.youtube.com/channel/${data.channel.yt_channel_id}`"
                        :liveWatch="data.live_viewers || 'no'"
                        :liveStart="new Date(data.live_schedule)"
                     />
                </div>
                <button class="bg-neutral-900 hover:bg-slate-300 text-white hover:text-neutral-900 transition-all px-5 py-2">
                    <router-link :to="'/live-stream/upcoming'">
                        More
                    </router-link>
                </button>
            </div>

            <div class="live-stream">
                <h1>Finished Stream</h1>
                <div class="video-list">
                     <LiveCard
                        v-for="data in streamDataFinished.slice(1,4)"
                        :key="data.id"
                        :thumbnail="`https://img.youtube.com/vi/${data.yt_video_key}/hqdefault.jpg`"
                        :profilePic="data.channel.photo"
                        :title="data.title"
                        :link="`https://www.youtube.com/watch?v=${data.yt_video_key}`"
                        :channel="data.channel.name"
                        :channelLink="`https://www.youtube.com/channel/${data.channel.yt_channel_id}`"
                        :liveWatch="data.live_viewers || 'no'"
                        :liveEnd="new Date(data.live_end)"
                     />
                </div>
                <button class="bg-neutral-900 hover:bg-slate-300 text-white hover:text-neutral-900 transition-all px-5 py-2">
                    <router-link :to="'/live-stream/ended'">
                        More
                    </router-link>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
    import {ref} from 'vue'
    import LiveCard from '@/components/LiveCard.vue'
    import Search from '@/components/Search.vue'
    export default {
        name: 'Dashboard',
        components: {
            LiveCard,
            Search
        },
        setup(){
            const streamDataLive = ref([])
            const streamDataUpcoming = ref([])
            const streamDataFinished = ref([])
            async function getStreamData(){
                const response = await fetch(
                    'https://api.holotools.app/v1/live'
                )
                const payload = await response.json()
                streamDataLive.value = payload.live
                streamDataUpcoming.value = payload.upcoming
                streamDataFinished.value = payload.ended
            }
            getStreamData()
            return {streamDataLive, streamDataUpcoming, streamDataFinished}
        }
    }
</script>

<style>
    .sidebar.close ~ .dashboard{
        left: 78px;
        width: calc(100% - 78px);
        transition: all 0.5s ease;
    }
</style>
<style scoped>
    .dashboard{
        left: 260px;
        top: 60px;
        position: relative;
        width: calc(100% - 260px);
        transition: all 0.5s ease;
    }
    .dashboard .dashboard-container{
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        padding: 1rem;
        width: 90%;
    }
    .dashboard .dashboard-container .live-stream h1{
        font-size: 1.7em;
        margin-bottom: 1.5rem;
    }
    .dashboard .dashboard-container .live-stream{
        width: 90%;
        margin-bottom: 3rem;
    }
    .dashboard .dashboard-container .live-stream .video-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>