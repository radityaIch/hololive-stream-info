<template>
    <section class="now-live">
        <div class="now-live-container">
            <div class="live-stream">
                <h1>{{streamDataLive.titleStream}}</h1>
                <div class="video-list">
                    <LiveCard
                        v-for="data in streamDataLive.slice(1)"
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
            </div>
        </div>
    </section>
</template>

<script>
    import {ref} from 'vue'
    import { useRoute } from 'vue-router'
    import LiveCard from '@/components/LiveCard.vue'
    export default {
        name: 'now-live',
        components: {
            LiveCard
        },
        setup(){
            const route = useRoute()
            const selected = ['Now Streaming', 'Upcoming Stream', 'Finished Stream']
            const menu = ref(`${route.params.type}`)
            const streamDataLive = ref([])
            async function getStreamData(){
                const response = await fetch(
                    'https://api.holotools.app/v1/live'
                )
                const payload = await response.json()
                menu.value = route.params.type
                if(menu.value === 'now'){
                    streamDataLive.value = payload.live
                    streamDataLive.value.titleStream = selected[0]
                }else if(menu.value === 'upcoming'){
                    streamDataLive.value = payload.upcoming
                    streamDataLive.value.titleStream = selected[1]
                }else if(menu.value === 'ended'){
                    streamDataLive.value = payload.ended
                    streamDataLive.value.titleStream = selected[2]
                }
            }
            getStreamData()
            return {streamDataLive, menu}
        }
    }
</script>

<style>
    .sidebar.close ~ .now-live{
        left: 78px;
        width: calc(100% - 78px);
        transition: all 0.5s ease;
    }
</style>
<style scoped>
    .now-live{
        left: 260px;
        top: 60px;
        position: relative;
        width: calc(100% - 260px);
        transition: all 0.5s ease;
    }
    .now-live .now-live-container{
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        padding: 1rem;
        width: 90%;
    }

    .now-live .now-live-container .live-stream h1{
        font-size: 1.7em;
        margin-bottom: 1.5rem;
    }
    .now-live .now-live-container .live-stream{
        width: 90%;
    }
    .now-live .now-live-container .live-stream .video-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 2rem;
    }
</style>