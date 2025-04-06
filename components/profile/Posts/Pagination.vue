<script setup>
const emit = defineEmits(['setPage'])
const props = defineProps({
    pages: Object,
    pageSize: Object
})

const currentPage = ref(1)

const pagesToShow = computed(() => {
    return getPaginationPages(currentPage.value, props.pages)
})

function getPaginationPages(current, total) {
    if (total <= 5) {
        return total
    }

    const range = []
    const start = 1
    const displayedPagesLeft = current - 1
    const displayedPagesRight = current + 1

    if (current <= start + 2) {
        for (let i = start; i <= start + 3; i++) {
            range.push(i)
        }
        range.push('...')
        range.push(total)
    }

    if (current >= total - 2) {
        range.push(start)
        range.push('...')
        for (let i = total - 3; i <= total; i++) {
            range.push(i)
        }
    }

    if (current > start + 2 && current < total -2) {
        range.push(start)
        range.push('...')

        for (let i = displayedPagesLeft; i <= displayedPagesRight; i++) {
            range.push(i)
        }

        range.push('...')
        range.push(total)
    }

    return range
}

const setPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > props.pages) {
        return
    }

    currentPage.value = pageNumber
    emit('setPage', pageNumber)
}

watch(() => props.pages, (pages, oldPages) => {
    if (pages < oldPages) {
        currentPage.value = pages
    }
})

watch(() => currentPage.value, (newPage) => setPage(newPage))

</script>

<template>
    <div :class="$style.container">
        <div :class="$style.item" @click="setPage(currentPage-1)">
            <
        </div>
        <div :class="[$style.item, { [$style.active]: page === currentPage }]" v-for="page in pagesToShow" @click="typeof page === 'number' && setPage(page)">
            {{ page }}
        </div>
        <div :class="$style.item" @click="setPage(currentPage+1)">
           >
        </div>
    </div>
</template>

<style module>
.container {
    display: flex;
    justify-content: space-around;
}

.item {
    color: var(--primary-color-marengo);
    font-family: var(--primary-font);
    cursor: pointer;
    background-color: #fcefe6;
    border-radius: 30%;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.active {
    color: #f46b0f;
}
</style>