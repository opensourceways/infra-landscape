<template>
    <Common :sidebarItems="sidebarItems" :showModule="recoShowModule">
        <component v-if="$frontmatter.home" :is="homeCom"/>
        <Page v-else :sidebar-items="sidebarItems"/>
        <Footer v-if="$themeConfig.footer" class="footer"/>
    </Common>
</template>

<script>
    import {defineComponent, computed, getCurrentInstance} from 'vue-demi'
    import Home from '@theme/components/Home'
    import HomeBlog from '@theme/components/HomeBlog'
    import Page from '@theme/components/Page'
    import Footer from '@theme/components/Footer'
    import Common from '@theme/components/Common'
    import {resolveSidebarItems} from '@theme/helpers/utils'
    import moduleTransitonMixin from '@theme/mixins/moduleTransiton'

    export default defineComponent({
        mixins: [moduleTransitonMixin],
        components: {HomeBlog, Home, Page, Common, Footer},
        methods: {
            changePageHeight() {
                document.getElementsByTagName('main')[0].style.minHeight = 0 + 'px';
                if (parseInt(window.getComputedStyle(document.getElementsByTagName('main')[0]).height) < document.documentElement.clientHeight - parseInt(window.getComputedStyle(document.getElementsByClassName('footer-wrapper')[0]).height)) {
                    document.getElementsByTagName('main')[0].style.minHeight = document.documentElement.clientHeight - parseInt(window.getComputedStyle(document.getElementsByClassName('footer-wrapper')[0]).height) + 'px'
                }
            },
        },
        mounted() {
            if (this.$themeConfig.footer) {
                this.changePageHeight()
            }
        },
        updated() {
            if (this.$themeConfig.footer) {
                this.changePageHeight()
            }
        },
        setup(props, ctx) {
            const instance = getCurrentInstance().proxy

            const sidebarItems = computed(() => {
                if (instance.$page) {
                    return resolveSidebarItems(
                        instance.$page,
                        instance.$page.regularPath,
                        instance.$site,
                        instance.$localePath
                    )
                } else {
                    return []
                }
            })

            const homeCom = computed(() => {
                const {type} = instance.$themeConfig || {}
                if (type !== undefined) {
                    return type == 'blog' ? 'HomeBlog' : type
                }
                return 'Home'
            })

            return {sidebarItems, homeCom}
        }
    })
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
