<template>
    <div class="h-[77vh]">
        <h1 class="text-3xl font-bold py-5 text-center">MarkDown</h1>
        <section class="flex mx-auto w-4/5 h-full">
            <article class="w-1/2 border overflow-y-auto">
                <textarea class="w-full h-full p-3" v-model="text"></textarea>
            </article>
            <article class="w-1/2 bg-gray-200 p-3 overflow-y-auto">{{ text }}</article>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: "",
        };
    },

    computed: {

    },

    methods: {

    }

}
</script>
