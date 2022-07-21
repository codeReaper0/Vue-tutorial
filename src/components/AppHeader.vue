<template>
    <nav class="flex gap-6 bg-[#8f0606] p-4">
        <router-link to="/" class="text-white text-xl font-bold">Tella Vue Project</router-link>

        <router-link v-for="link in links" :key="link.to" :to="link.to" class="text-white text-xl font-bold hover:text-black transition ease-in-out duration-500 capitalize">{{
                    link.title
            }}
        </router-link>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {title:"ToDo", to:"/pages/todo"},
                {title:"Calendar", to:"/pages/calendar"},
                {title:"Markdown App", to:"/pages/markdown"}
            ]
        }
    }
}
</script>
