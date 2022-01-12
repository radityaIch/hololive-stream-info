<template>
    <div class="video-item">
        <div class="img-video">
            <img :src="thumbnail" alt="suisei">
        </div>
        <div class="text-video">
            <h3 class="title flex mb-3">
                <span class="mr-3">
                    <img width="120" height="120" :src="profilePic">
                </span>
                <a :href="link">{{truncateText(title, 40)}}</a>
            </h3>
            <div class="text-info">
                <a :href="channelLink" class="flex items-center">
                    <span class="mr-1">{{channel}}</span>
                    <span>
                        <box-icon animation="tada-hover" type='solid' size="20px" color="#ccc" name='badge-check'></box-icon>
                    </span>
                </a>
                <p class="flex items-center">
                    <span class="mr-1">
                        <box-icon type='solid' size="25px" color="#ccc" name='group'></box-icon>
                    </span>
                    {{liveWatch}} people is watching
                </p>
                <p class="flex items-center">
                    <span class="mr-1">
                        <box-icon
                            animation="flashing-hover"
                            size="25px"
                            color="red"
                            name="broadcast"
                        />
                    </span>
                    Stream started {{diffTime(liveStart)}} hour ago
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: 'LiveCard',
        props: {
            thumbnail: { type: String, default: "" },
            profilePic: { type: String, default: "" },
            title: { type: String, default: "" },
            link: { type: String, default: "" },
            channel: { type: String, default: "" },
            channelLink: { type: String, default: "" },
            liveWatch: { type: Number, default: "" },
            liveStart: { type: String, default: "" },
        },
        setup() {
            const truncateText = (str, length, ending) => {
                if (length == null) {
                    length = 100;
                }
                if (ending == null) {
                    ending = "...";
                }
                if (str.length > length) {
                    return str.substring(0, length - ending.length) + ending;
                } else {
                    return str;
                }
            };
            const diffTime = (startTime) => {
                const now = moment(new Date());
                const duration = moment.duration(now.diff(startTime));
                return Math.round(duration.asHours());
            }
            return { truncateText, diffTime };
        },
    }
</script>

<style scoped>
    .video-item{
        max-width: 280px;
        margin: 1rem;
    }
    .video-item .img-video img{
        width: 100%;
        height: 160px;
        object-fit: cover;
    }
    .text-video{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .video-item .text-video .title{
        margin-top: 1rem;
    }
    .title span{
        max-width: 50px;
    }
    .video-item .text-video .title img{
        border-radius: 100%;
    }
</style>