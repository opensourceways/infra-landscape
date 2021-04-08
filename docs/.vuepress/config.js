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
        issuesLink:'https://github.com/opensourceways/infra-landscape/issues',
        editText:'如果您有任何问题和改进建议，欢迎您随时联系',
        issuesLinkText:'github issue',
        footer:{
            copyright:'MIT Licensed | Copyright © opensourceways infrastructure',
            icpRecord: '蜀ICP备20009468号-1',
            icpRecordLink: 'https://icp.chinaz.com/home/info?host=osinfra.cn',
            policeRecord: '粤公网安备 44030702003822号',
            policeRecordLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030702003822',
            startYear: '2021',
        },
    },
}