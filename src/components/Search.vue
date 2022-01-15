<template>
    <form @submit.prevent="streamSearchData">
        <div class="search">
            <div class="w-10/12">
                <input class="search-bar px-2" type="text" v-model="search">
            </div>
            <div class="w-1/12">
                <button class="btn-search">Search</button>
            </div>
        </div>
    </form>
</template>
<style scoped>
    form{
        width: 100%;
        padding: 0 0 2rem 0; 
    }
    form .search{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    form .search .search-bar{
        width: 100%;
        height: 50px;
        border: 1px solid #aca8a8;
        border-radius: 10px;
    }
    form .search .btn-search{
        width: 100%;
        height: 50px;
        border: 1px solid #aca8a8;
        border-radius: 10px;
        word-wrap: break-word;
    }
</style>
<script>
    import { ref } from "vue"
    import { useRouter } from "vue-router"
    export default {
        name: 'Search',
        setup() {
            const router = useRouter()
            const search = ref("")

            async function streamSearchData() {
                if (search.value) {
                    router.push(`?search=${search.value}`)
                    return
                }
                router.replace('')
            }
            return {
                search,
                streamSearchData,
            };
        },
    }
</script>