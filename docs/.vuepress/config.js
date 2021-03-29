module.exports = {
    theme: 'reco',
    title: 'opensourceway',
    description: 'official website for opensourceway',
    base: '/',
    dest: './dest',
    markdown: {
        lineNumbers: true
    },
    head: [['link',
        {rel: 'icon', href: '/img/logo.png'}],
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]],
    plugins: [['markdown-it-toc-done-right'], ['@goy/svg-icons']],
    themeConfig: {
        logo: '/img/logo.png',
        nav: [
            {text: 'Landscape', link: '/'},
            {text: 'Service Guides', link: '/service/'},
            {text: 'FAQ', link: '/faq/'},
            {text: 'Contact us', link: '/contact/faq'},
            {
                text: 'More',
                items: [
                    {text: 'Tag', link: '/tag/', icon: 'reco-tag'}
                ]
            }
        ],
        subSidebar: 'auto',
        sidebarDepth: 2,
        modePicker: false,
        search: false,
        footer: true,
        record: '蜀ICP备20009468号-1',
        recordLink: 'https://icp.chinaz.com/home/info?host=osinfra.cn',
        startYear: '2021',
    }
}