<template>
    <main
            class="home"
            :aria-labelledby="data.heroText !== null ? 'main-title' : null">
        <div class="bg bg_1"></div>
        <div class="bg bg_2"></div>
        <div class="bg bg_3"></div>
        <div class="bg bg_1_cover"></div>
        <div class="bg bg_3_cover"></div>
        <div class="section">
            <div id="section_1">
                <div class="white_content_box">
                    <p class="margin_bottom_2rem">Open Source Infrastructure</p>
                    <p class="margin_bottom_2rem">We love open source and we believe we can utilize open source projects
                        to construct our open source community infrastructure.</p>
                </div>

            </div>
            <div id="section_2">
                <div class="white_content_box">
                    <div>
                        <h2>ABOUT US</h2>
                        <p>
                            Open source Infrastructure team started along with openEuler, MindSpore, openGauss and
                            openLookeng
                            communities.</p>
                        <p> We are responsible for the common infrastructure of these communities, including
                            Community Portal, Communication, Accounts, Developing, Testing, Distribution，License and
                            Community Health Analytics tools.
                        </p>
                    </div>
                    <div>
                        <img src="https://themes.gohugo.io//theme/airspace-hugo/images/wrapper-img.png" alt="picture">
                    </div>
                </div>
            </div>
            <div id="section_3">
                <div class="white_content_box">
                    <div>
                        <h2>WE BELIEVE IN GREAT IDEAS</h2>
                        <p>Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
                            eros.
                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                            justo sit amet risus.</p>
                        <p>Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
                            eros.
                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                            justo sit amet risus.</p>
                        <p>Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
                            eros.
                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                            justo sit amet risus.</p>
                        <NavLink
                                class="action-button black-font-color"
                                :item="actionLink_faq"
                        />
                    </div>
                </div>
            </div>
            <div id="section_4" class="white_bg">
                <div class="white_content_box">
                    <div class="center">
                        <h2>OUR SERVICES</h2>
                        <p>Most of our services started from open source projects</p>
                        <p>which are fully accessible and can be easily configured with our guidance in one minute</p>
                    </div>
                    <div class="margin_top_2rem">
                        <div class="flex_space_between">
                            <div class="center" v-for="item in serviceArr">
                                <img class="img-coffee" :src="item.src" alt="coffee">
                                <h2>{{item.title}}</h2>
                                <p>{{item.description}}</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>

            </div>
            <div id="section_5">
                <div id="mountNode" class="white_content_box center white-font-color">

                </div>
            </div>
        </div>
        <Content class="theme-default-content custom"/>
    </main>
</template>

<script>
    import NavLink from '@theme/components/NavLink.vue'
    import * as util from '../util/util'
    // import G6 from '../@antv/g6'

    export default {
        name: 'Home',

        components: {NavLink},

        computed: {
            data() {
                return this.$page.frontmatter
            },
            actionLink() {
                return {
                    link: this.data.actionLink,
                    text: this.data.actionText
                }
            },
            actionLink_faq() {
                return {
                    link: this.data.actionLink_faq,
                    text: this.data.actionText_faq
                }
            },
            actionLink_contact() {
                return {
                    link: this.data.actionLink_contact,
                    text: this.data.actionText_contact
                }
            }
        },
        data() {
            return {
                bg_1_distance: '',
                bg_2_distance: '',
                bg_3_distance: '',
                serviceArr: [
                    {
                        src: 'img/pen.png',
                        title: 'CLA',
                        description: 'Easily handle Contributor License Agreements (CLAs), both for individual and cooperation licenses, multiple languages are supported'
                    },
                    {
                        src: 'img/email.png',
                        title: 'Maillist',
                        description: 'Based on mailman, new host can be added within 5 steps'
                    },
                    {
                        src: 'img/account.png',
                        title: 'Accounts',
                        description: 'Unified account center for different communities.'
                    },
                    {
                        src: 'img/robot.png',
                        title: 'Yabot',
                        description: 'Start from test infra project more features are added including support gitee, weekly report, CLA check, etc.'
                    }],
                nodesData: {
                    nodes: [
                        {
                            id: 'openeuler',
                            label: 'openEuler', //显示名称
                            level: 0,           //显示名称
                            childrenNum: 4,     //子节点数，图像大小
                            tag: 'openeuler',   //节点标签
                            description: 'openEuler通过社区合作，打造创新平台，构建支持多处理架构、统一和开放的操作系统，推动软硬件应用生态繁荣发展。', //节点描述，hover显示
                        },
                        {
                            id: 'opengauss',
                            label: 'openGauss',
                            level: 0,
                            childrenNum: 3,
                            tag: 'opengauss',
                            description: 'openGauss是一款高性能、高安全、高可靠的企业级开源关系型数据库',
                        },
                        {
                            id: 'openlookeng',
                            label: 'openLooKeng',
                            level: 0,
                            childrenNum: 2,
                            tag: 'openlookeng',
                            description: 'openlookeng是一款面向大数据库的数据虚拟化引擎',
                        },
                        {
                            id: 'mindspore',
                            label: 'Mindspore',
                            level: 0,
                            childrenNum: 1,
                            tag: 'mindspore',
                            description: '通过社区合作，面向全场景构建最佳昇腾匹配、支持多处理器架构的开放AI架构，为算法工程师和数据科学家提供开发友好、运行高效、部署灵活的体验，帮助人工智能软硬件应用生态繁荣发展。',
                        },
                        {
                            id: 'prow',
                            label: 'Prow',
                            level: 1,
                            isLeaf: false,
                            tag: 'prow',
                            tags: ['openguass', 'openeuler', 'openlookeng'],
                            description: 'prow description',
                        },
                        {
                            id: 'cla',
                            label: 'CLA',
                            level: 1,
                            isLeaf: false,
                            tag: 'cla',
                            tags: ['openguass', 'openeuler'],
                            description: 'cla description',
                        },
                        {
                            id: 'mail-list',
                            label: 'Mail-list',
                            level: 1,
                            isLeaf: false,
                            tag: 'mail-list',
                            tags: ['openeuler', 'openguass', 'mindspore'],
                            description: 'mail-list description',
                        },
                        {
                            id: 'yabot',
                            label: 'Yabot',
                            level: 1,
                            isLeaf: false,
                            tag: 'yabot',
                            tags: ['openeuler', 'openguass', 'openlookeng', 'mindspore'],
                            description: 'Yabot description',
                        },
                        {
                            id: 'yabot-state',
                            label: 'ready',
                            level: 2,
                            isLeaf: true,
                            tag: 'yabot-state',
                            tags: ['openeuler-yabot', 'openguass-yabot', 'openlookeng-yabot', 'mindspore-yabot'],
                            description: 'Yabot-state description',
                        },
                        {
                            id: 'yabot-use-num',
                            label: 12,
                            level: 2,
                            isLeaf: true,
                            tag: 'yabot-use-num',
                            tags: ['openeuler-yabot', 'openguass-yabot', 'openlookeng-yabot', 'mindspore-yabot'],
                            description: 'Yabot-use-num description',
                        },
                        {
                            id: 'yabot-version',
                            label: 'v1.1.2',
                            level: 2,
                            isLeaf: true,
                            tag: 'yabot-version',
                            tags: ['openeuler-yabot', 'openguass-yabot', 'openlookeng-yabot', 'mindspore-yabot'],
                            description: 'Yabot-version description',
                        },
                        {
                            id: 'prow-state',
                            label: 'ready',
                            level: 2,
                            isLeaf: true,
                            tag: 'prow-state',
                            tags: ['openeuler-prow', 'openguass-prow', 'openlookeng-prow'],
                            description: 'prow-state description',
                        },
                        {
                            id: 'prow-use-num',
                            label: 10,
                            level: 2,
                            isLeaf: true,
                            tag: 'prow-use-num',
                            tags: ['openeuler-prow', 'openguass-prow', 'openlookeng-prow'],
                            description: 'prow-use-num description',
                        },
                        {
                            id: 'prow-version',
                            label: 'v1.0.0',
                            level: 2,
                            isLeaf: true,
                            tag: 'prow-version',
                            tags: ['openeuler-prow', 'openguass-prow', 'openlookeng-prow'],
                            description: 'prow-version description',
                        },
                    ],
                    edges: [
                        {
                            source: 'openeuler',
                            target: 'prow',
                        },
                        {
                            source: 'openeuler',
                            target: 'cla',
                        },
                        {
                            source: 'openeuler',
                            target: 'mail-list',
                        },
                        {
                            source: 'openguass',
                            target: 'mail-list',
                        },
                        {
                            source: 'mindspore',
                            target: 'mail-list',
                        },
                        {
                            source: 'openeuler',
                            target: 'yabot',
                        },
                        {
                            source: 'openguass',
                            target: 'yabot',
                        },
                        {
                            source: 'openlookeng',
                            target: 'yabot',
                        },
                        {
                            source: 'mindspore',
                            target: 'yabot',
                        },
                        {
                            source: 'openguass',
                            target: 'prow',
                        },
                        {
                            source: 'openguass',
                            target: 'cla',
                        },
                        {
                            source: 'openlookeng',
                            target: 'prow',
                        },
                        {
                            source: 'yabot',
                            target: 'yabot-state',
                        },
                        {
                            source: 'yabot',
                            target: 'yabot-use-num',
                        },
                        {
                            source: 'yabot',
                            target: 'yabot-version',
                        },
                        {
                            source: 'prow',
                            target: 'prow-state',
                        },
                        {
                            source: 'prow',
                            target: 'prow-use-num',
                        },
                        {
                            source: 'prow',
                            target: 'prow-version',
                        },
                    ],
                },
            }
        },
        mounted() {
            import('@antv/g6').then(G6 => {
                console.log(G6);
                let tooltip = new G6.Tooltip({
                    offsetX: 10,
                    offsetY: 10,
                    itemTypes: ['node'],
                    getContent: (e) => {
                        const outDiv = document.createElement('div');
                        outDiv.style.width = 'fit-content';
                        //outDiv.style.padding = '0px 0px 20px 0px';
                        outDiv.innerHTML = `<h4>${e.item.getModel().description}</h4>`;
                        return outDiv;
                    },
                });
                let showNodes = [];
                let showEdges = [];
                let curShowNodes = [];
                let curShowEdges = [];
                let nodes = [];
                let edges = [];
                let nodeMap = new Map();
                let edgesMap = new Map();
                let curShowNodesMap = new Map();
                let highlighting = false;
                let currentFocus;
                const width = document.getElementById('mountNode').scrollWidth;
                const height = document.getElementById('mountNode').scrollHeight || 600;
                const LIMIT_OVERFLOW_WIDTH = width;
                const LIMIT_OVERFLOW_HEIGHT = height;
                const mapNodeSize = (nodes, propertyName, visualRange) => {
                    let minp = 9999999999;
                    let maxp = -9999999999;
                    nodes.forEach((node) => {
                        minp = node[propertyName] < minp ? node[propertyName] : minp;
                        maxp = node[propertyName] > maxp ? node[propertyName] : maxp;
                    });
                    const rangepLength = maxp - minp;
                    const rangevLength = visualRange[1] - visualRange[0];
                    nodes.forEach((node) => {
                        node.size = ((node[propertyName] - minp) / rangepLength) * rangevLength + visualRange[0];
                    });
                };
                const lightColors = [
                    '#002FA7',
                    '#8503ED',
                    '#5A9B83',
                    '#40ADFF',
                    '#FFA1E3',
                    '#FFE269',
                    '#BFCFEE',
                    '#FFA0C5',
                    '#D5FF86',
                ];
                const darkColors = [
                    '#002FA7',
                    '#8503ED',
                    '#5A9B83',
                    '#40ADFF',
                    '#AE6CFF',
                    '#FF5A34',
                    '#5D7092',
                    '#FF6565',
                    '#6BFFDE',
                ];
                const uLightColors = [
                    '#CFF6FF',
                    '#BCFCFF',
                    '#FFECF5',
                    '#ECFBFF',
                    '#EAD9FF',
                    '#FFF8DA',
                    '#DCE2EE',
                    '#FFE7F0',
                    '#EEFFCE',
                ];
                const uDarkColors = [
                    '#CADBFF',
                    '#A9FFEB',
                    '#FFC4DD',
                    '#CACDFF',
                    '#FFD4F2',
                    '#FFD3C9',
                    '#EBF2FF',
                    '#FFCBCB',
                    '#CAFFF3',
                ];
                const gColors = [];
                const unlightColorMap = new Map();
                lightColors.forEach((lcolor, i) => {
                    gColors.push('l(0) 0:' + lcolor + ' 1:' + darkColors[i]);
                    unlightColorMap.set(gColors[i], 'l(0) 0:' + uLightColors[i] + ' 1:' + uDarkColors[i]);
                });
                let graph;
                const layoutCfg = {
                    type: 'force',
                    nodeSize: (d) => {
                        return d.size / 2 + 5;
                    },
                    nodeStrength: 2500,
                    collideStrength: 0.8,
                    alphaDecay: 0.01,
                    preventOverlap: true,
                    onTick: () => {
                        const nodeItems = graph.getNodes();
                        const height = graph.get('height');
                        const width = graph.get('width');
                        const padding = 10;
                        nodeItems.forEach((item) => {
                            const model = item.getModel();
                            if (model.x > width - padding) model.x = width - padding;
                            else if (model.x < padding) model.x = padding;
                            if (model.y > height - padding) model.y = height - padding;
                            else if (model.y < padding) model.y = padding;
                        });
                    },
                };
                G6.registerBehavior('double-finger-drag-canvas', {
                    getEvents: function getEvents() {
                        return {
                            wheel: 'onWheel',
                        };
                    },
                    onWheel: (ev) => {
                        if (ev.ctrlKey) {
                            const canvas = graph.get('canvas');
                            const point = canvas.getPointByClient(ev.clientX, ev.clientY);
                            let ratio = graph.getZoom();
                            if (ev.wheelDelta > 0) {
                                ratio = ratio + ratio * 0.05;
                            } else {
                                ratio = ratio - ratio * 0.05;
                            }
                            graph.zoomTo(ratio, {
                                x: point.x,
                                y: point.y,
                            });
                        } else {
                            const x = ev.deltaX || ev.movementX;
                            const y = ev.deltaY || ev.movementY || (-ev.wheelDelta * 125) / 3;
                            translate(x, y);
                        }
                        ev.preventDefault();
                    },
                });
                G6.registerNode(
                    'bubble',
                    {
                        drawShape(cfg, group) {
                            const self = this;
                            const r = cfg.size / 2;
                            // a circle by path
                            const path = [
                                ['M', -r, 0],
                                ['C', -r, r / 2, -r / 2, r, 0, r],
                                ['C', r / 2, r, r, r / 2, r, 0],
                                ['C', r, -r / 2, r / 2, -r, 0, -r],
                                ['C', -r / 2, -r, -r, -r / 2, -r, 0],
                                ['Z'],
                            ];
                            const keyShape = group.addShape('path', {
                                attrs: {
                                    x: 0,
                                    y: 0,
                                    path,
                                    fill: cfg.color || 'steelblue',
                                },
                                name: 'path-shape',
                            });
                            const mask = group.addShape('path', {
                                attrs: {
                                    x: 0,
                                    y: 0,
                                    path,
                                    opacity: 0.25,
                                    fill: cfg.color || 'steelblue',
                                    shadowColor: cfg.color.split(' ')[2].substr(2),
                                    shadowBlur: 40,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 30,
                                },
                                name: 'mask-shape',
                            });
                            const spNum = 10; // split points number
                            const directions = [],
                                rs = [];
                            self.changeDirections(spNum, directions);
                            for (let i = 0; i < spNum; i++) {
                                const rr = r + directions[i] * ((Math.random() * r) / 1000); // +-r/6, the sign according to the directions
                                if (rs[i] < 0.97 * r) rs[i] = 0.97 * r;
                                else if (rs[i] > 1.03 * r) rs[i] = 1.03 * r;
                                rs.push(rr);
                            }
                            keyShape.animate(
                                () => {
                                    const path = self.getBubblePath(r, spNum, directions, rs);
                                    return {path};
                                },
                                {
                                    repeat: true,
                                    duration: 10000,
                                },
                            );
                            const directions2 = [],
                                rs2 = [];
                            self.changeDirections(spNum, directions2);
                            for (let i = 0; i < spNum; i++) {
                                const rr = r + directions2[i] * ((Math.random() * r) / 1000);
                                if (rs2[i] < 0.97 * r) rs2[i] = 0.97 * r;
                                else if (rs2[i] > 1.03 * r) rs2[i] = 1.03 * r;
                                rs2.push(rr);
                            }
                            mask.animate(
                                () => {
                                    const path = self.getBubblePath(r, spNum, directions2, rs2);
                                    return {path};
                                },
                                {
                                    repeat: true,
                                    duration: 10000,
                                },
                            );
                            return keyShape;
                        },
                        changeDirections(num, directions) {
                            for (let i = 0; i < num; i++) {
                                if (!directions[i]) {
                                    const rand = Math.random();
                                    const dire = rand > 0.5 ? 1 : -1;
                                    directions.push(dire);
                                } else {
                                    directions[i] = -1 * directions[i];
                                }
                            }
                            return directions;
                        },
                        getBubblePath(r, spNum, directions, rs) {
                            const path = [];
                            const cpNum = spNum * 2; // control points number
                            const unitAngle = (Math.PI * 2) / spNum; // base angle for split points
                            let angleSum = 0;
                            const sps = [];
                            const cps = [];
                            for (let i = 0; i < spNum; i++) {
                                const speed = 0.001 * Math.random();
                                rs[i] = rs[i] + directions[i] * speed * r; // +-r/6, the sign according to the directions
                                if (rs[i] < 0.97 * r) {
                                    rs[i] = 0.97 * r;
                                    directions[i] = -1 * directions[i];
                                } else if (rs[i] > 1.03 * r) {
                                    rs[i] = 1.03 * r;
                                    directions[i] = -1 * directions[i];
                                }
                                const spX = rs[i] * Math.cos(angleSum);
                                const spY = rs[i] * Math.sin(angleSum);
                                sps.push({x: spX, y: spY});
                                for (let j = 0; j < 2; j++) {
                                    const cpAngleRand = unitAngle / 3;
                                    const cpR = rs[i] / Math.cos(cpAngleRand);
                                    const sign = j === 0 ? -1 : 1;
                                    const x = cpR * Math.cos(angleSum + sign * cpAngleRand);
                                    const y = cpR * Math.sin(angleSum + sign * cpAngleRand);
                                    cps.push({x, y});
                                }
                                angleSum += unitAngle;
                            }
                            path.push(['M', sps[0].x, sps[0].y]);
                            for (let i = 1; i < spNum; i++) {
                                path.push([
                                    'C',
                                    cps[2 * i - 1].x,
                                    cps[2 * i - 1].y,
                                    cps[2 * i].x,
                                    cps[2 * i].y,
                                    sps[i].x,
                                    sps[i].y,
                                ]);
                            }
                            path.push(['C', cps[cpNum - 1].x, cps[cpNum - 1].y, cps[0].x, cps[0].y, sps[0].x, sps[0].y]);
                            path.push(['Z']);
                            return path;
                        },
                        setState(name, value, item) {
                            const shape = item.get('keyShape');
                            if (name === 'dark') {
                                if (value) {
                                    if (shape.attr('fill') !== '#fff') {
                                        shape.oriFill = shape.attr('fill');
                                        const uColor = unlightColorMap.get(shape.attr('fill'));
                                        shape.attr('fill', uColor);
                                    } else {
                                        shape.attr('opacity', 0.2);
                                    }
                                } else {
                                    if (shape.attr('fill') !== '#fff') {
                                        shape.attr('fill', shape.oriFill || shape.attr('fill'));
                                    } else {
                                        shape.attr('opacity', 1);
                                    }
                                }
                            }
                        },
                    },
                    'single-node',
                );
                G6.registerNode(
                    'animate-circle',
                    {
                        setState(name, value, item) {
                            const shape = item.get('keyShape');
                            const label = shape.get('parent').get('children')[1];
                            if (name === 'disappearing' && value) {
                                shape.animate(
                                    (ratio) => {
                                        return {
                                            opacity: 1 - ratio,
                                            r: shape.attr('r') * (1 - ratio),
                                        };
                                    },
                                    {
                                        duration: 200,
                                    },
                                );
                                label.animate(
                                    (ratio) => {
                                        return {
                                            opacity: 1 - ratio,
                                        };
                                    },
                                    {
                                        duration: 500,
                                    },
                                );
                            } else if (name === 'appearing' && value) {
                                const r = item.getModel().size / 2;
                                shape.animate(
                                    (ratio) => {
                                        return {
                                            opacity: ratio,
                                            r: r * ratio,
                                            fill: shape.attr('fill'),
                                        };
                                    },
                                    {
                                        duration: 300,
                                    },
                                );
                                label.animate(
                                    {
                                        onFrame(ratio) {
                                            return {
                                                opacity: ratio,
                                            };
                                        },
                                    },
                                    {
                                        duration: 300,
                                    },
                                );
                            } else if (name === 'dark') {
                                if (value) {
                                    if (shape.attr('fill') !== '#fff') {
                                        shape.oriFill = shape.attr('fill');
                                        const uColor = unlightColorMap.get(shape.attr('fill'));
                                        shape.attr('fill', uColor);
                                    } else {
                                        shape.attr('opacity', 0.2);
                                        label.attr('fill', '#A3B1BF');
                                    }
                                } else {
                                    if (shape.attr('fill') !== '#fff') {
                                        shape.attr('fill', shape.oriFill || shape.attr('fill'));
                                    } else {
                                        shape.attr('opacity', 1);
                                        label.attr('fill', '#697B8C');
                                    }
                                }
                            }
                        },
                    },
                    'circle',
                );
                G6.registerEdge(
                    'animate-line',
                    {
                        drawShape(cfg, group) {
                            const self = this;
                            let shapeStyle = self.getShapeStyle(cfg);
                            shapeStyle = Object.assign(shapeStyle, {
                                opacity: 0,
                                strokeOpacity: 0,
                            });
                            const keyShape = group.addShape('path', {
                                attrs: shapeStyle,
                                name: 'path-shape',
                            });
                            return keyShape;
                        },
                        afterDraw(cfg, group) {
                            const shape = group.get('children')[0];
                            shape.animate(
                                (ratio) => {
                                    const opacity = ratio * cfg.style.opacity;
                                    const strokeOpacity = ratio * cfg.style.strokeOpacity;
                                    return {
                                        opacity: ratio || opacity,
                                        strokeOpacity: ratio || strokeOpacity,
                                    };
                                },
                                {
                                    duration: 300,
                                },
                            );
                        },
                        setState(name, value, item) {
                            const shape = item.get('keyShape');
                            if (name === 'disappearing' && value) {
                                shape.animate(
                                    (ratio) => {
                                        return {
                                            opacity: 1 - ratio,
                                            strokeOpacity: 1 - ratio,
                                        };
                                    },
                                    {
                                        duration: 200,
                                    },
                                );
                            } else if (name === 'dark') {
                                if (value) shape.attr('opacity', 0.2);
                                else shape.attr('opacity', 1);
                            }
                        },
                    },
                    'line',
                );
                let container = document.getElementById('mountNode');
                graph = new G6.Graph({
                    container: container,
                    width,
                    height,
                    plugins: [tooltip],
                    linkCenter: true,
                    layout: layoutCfg,
                    modes: {
                        default: ['drag-canvas'],
                    },
                    defaultNode: {
                        type: 'circle',
                        size: 95,
                    },
                    defaultEdge: {
                        color: '#888',
                        type: 'animate-line',
                    },
                });
                graph.get('canvas').set('localRefresh', false);

                function translate(x, y) {
                    let moveX = x;
                    let moveY = y;
                    /* 获得当前偏移量*/
                    const group = graph.get('group');
                    const bbox = group.getBBox();
                    const leftTopPoint = graph.getCanvasByPoint(bbox.minX, bbox.minY);
                    const rightBottomPoint = graph.getCanvasByPoint(bbox.maxX, bbox.maxY);
                    /* 如果 x 轴在区域内，不允许左右超过100 */
                    if (x < 0 && leftTopPoint.x - x > LIMIT_OVERFLOW_WIDTH) {
                        moveX = 0;
                    }
                    if (x > 0 && rightBottomPoint.x - x < width - LIMIT_OVERFLOW_WIDTH) {
                        moveX = 0;
                    }
                    if (y < 0 && leftTopPoint.y - y > LIMIT_OVERFLOW_HEIGHT) {
                        moveY = 0;
                    }
                    if (y > 0 && rightBottomPoint.y - y < height - LIMIT_OVERFLOW_HEIGHT) {
                        moveY = 0;
                    }
                    graph.translate(-moveX, -moveY);
                }

                function refreshDragedNodePosition(e) {
                    const model = e.item.get('model');
                    model.fx = e.x;
                    model.fy = e.y;
                }

                graph.on('node:dragstart', (e) => {
                    graph.layout();
                    refreshDragedNodePosition(e);
                });
                graph.on('node:drag', (e) => {
                    refreshDragedNodePosition(e);
                });
                graph.on('node:dragend', (e) => {
                    e.item.get('model').fx = null;
                    e.item.get('model').fy = null;
                });
                graph.on('node:mouseenter', (e) => {
                    graph.setItemState(e.item, 'hover', true);
                    const item = e.item;
                    const model = item.getModel();
                    if (model.level === 0) {
                        return;
                    }
                    highlighting = true;
                    graph.setAutoPaint(false);
                    const nodeItems = graph.getNodes();
                    const edgeItems = graph.getEdges();
                    nodeItems.forEach((node) => {
                        graph.setItemState(node, 'dark', true);
                        node.getModel().light = false;
                    });
                    graph.setItemState(item, 'dark', false);
                    model.light = true;
                    const tags = model.tags;
                    const findTagsMap = new Map();
                    let mid = 0;
                    let fTag = '';
                    // if the model is F node, find the leaves of it
                    if (!model.isLeaf && model.level !== 0) {
                        fTag = model.tag;
                        nodeItems.forEach((item) => {
                            const itemModel = item.getModel();
                            if (!itemModel.isLeaf) return;
                            const modelTags = itemModel.tags;
                            modelTags.forEach((mt) => {
                                const mts = mt.split('-');
                                if (mts[1] === fTag) {
                                    graph.setItemState(item, 'dark', false);
                                    itemModel.light = true;
                                }
                            });
                        });
                    }
                    // find the tags
                    tags.forEach((t) => {
                        const ts = t.split('-');
                        findTagsMap.set(ts[0], mid);
                        mid++;
                        if (ts[1]) {
                            findTagsMap.set(ts[1], mid);
                            mid++;
                        }
                    });
                    // find the nodes with tag === tags[?]
                    nodeItems.forEach((item) => {
                        const node = item.getModel();
                        if (findTagsMap.get(node.tag) !== undefined) {
                            graph.setItemState(item, 'dark', false);
                            node.light = true;
                        }
                    });
                    edgeItems.forEach((item) => {
                        const source = item.getSource().getModel();
                        const target = item.getTarget().getModel();
                        if (source.light && target.light) {
                            graph.setItemState(item, 'dark', false);
                        } else {
                            graph.setItemState(item, 'dark', true);
                        }
                    });
                    graph.paint();
                    graph.setAutoPaint(true);
                });
                graph.on('node:mouseleave', (e) => {
                    graph.setItemState(e.item, 'hover', false);
                    if (highlighting) {
                        const nodeItems = graph.getNodes();
                        const edgeItems = graph.getEdges();
                        highlighting = false;
                        nodeItems.forEach((item) => {
                            graph.setItemState(item, 'dark', false);
                        });
                        edgeItems.forEach((item) => {
                            graph.setItemState(item, 'dark', false);
                        });
                    }
                });
                const loadData = (data) => {
                    const layoutController = graph.get('layoutController');
                    layoutController.layoutCfg.nodeStrength = 2500;
                    layoutController.layoutCfg.collideStrength = 0.8;
                    layoutController.layoutCfg.alphaDecay = 0.01;
                    nodes = data.nodes;
                    edges = data.edges;
                    showNodes = [];
                    showEdges = [];
                    nodeMap = new Map();
                    edgesMap = new Map();
                    // find the roots
                    nodes.forEach((node) => {
                        if (node.level === 0) {
                            node.color = gColors[showNodes.length % gColors.length];
                            node.style = {
                                fill: gColors[showNodes.length % gColors.length],
                                lineWidth: 0,
                            };
                            node.labelCfg = {
                                style: {
                                    fontSize: 16,
                                    fill: '#fff',
                                    fontWeight: 300,
                                },
                            };
                            node.x = Math.random() * 800;
                            node.y = Math.random() * 800;
                            showNodes.push(node);
                        }
                        nodeMap.set(node.id, node);
                    });
                    mapNodeSize(showNodes, 'childrenNum', [120, 180]);
                    // map the color to F nodes, same to its parent
                    nodes.forEach((node) => {
                        if (node.level !== 0 && !node.isLeaf) {
                            const parent = nodeMap.get(node.tags[0]);
                            node.color = parent.color;
                            node.style = {
                                fill: parent.color,
                            };
                        }
                    });
                    edges.forEach((edge) => {
                        // map the id
                        edge.id = `${edge.source}-${edge.target}`;
                        edge.style = {
                            lineWidth: 0.5,
                            opacity: 1,
                            strokeOpacity: 1,
                        };
                        edgesMap.set(edge.id, edge);
                    });
                    graph.data({
                        nodes: showNodes,
                        edges: showEdges,
                    });
                    graph.render();
                };
                loadData(this.nodesData);
                // click root to expand
                graph.on('node:click', (e) => {
                    curShowNodes = [];
                    curShowEdges = [];
                    const item = e.item;
                    const model = item.getModel();
                    if (!model.isLeaf && model.level !== 0) {
                        return;
                    }
                    // if clicked a root, hide unrelated items and show the related items
                    if (model.level === 0) {
                        const layoutController = graph.get('layoutController');
                        const forceLayout = layoutController.layoutMethods[0];
                        forceLayout.forceSimulation.stop();
                        // light the level 0 nodes
                        showNodes.forEach((snode) => {
                            const item = graph.findById(snode.id);
                            graph.setItemState(item, 'dark', false);
                            if (snode.x < 0.5 * width) {
                                snode.x = 300;
                            } else {
                                snode.x = width - 300;
                            }
                        });
                        model.x = width / 2;
                        model.y = height / 2;
                        // animatively hide the items which are going to disappear
                        if (curShowEdges.length) {
                            curShowEdges.forEach((csedge) => {
                                const item = graph.findById(csedge.id);
                                item && graph.setItemState(item, 'disappearing', true);
                            });
                        }
                        curShowNodes.forEach((csnode) => {
                            const item = graph.findById(csnode.id);
                            item && graph.setItemState(item, 'disappearing', true);
                        });
                        graph.positionsAnimate();
                        // reset curShowNodes nad curShowEdges
                        curShowNodes = [];
                        curShowEdges = [];
                        // click on the same node which is the current focus node, hide the small nodes, change the layout parameters to roots view
                        if (currentFocus && currentFocus.id === model.id) {
                            currentFocus = undefined;
                            layoutController.layoutCfg.nodeStrength = 2500;
                            layoutController.layoutCfg.collideStrength = 0.8;
                            layoutController.layoutCfg.alphaDecay = 0.01;
                        } else {
                            // click other focus node, hide the current small nodes and show the related nodes
                            currentFocus = model;
                            // change data after the original items disappearing
                            const layoutController = graph.get('layoutController');
                            layoutController.layoutCfg.nodeStrength = () => {
                                return -80;
                            };
                            layoutController.layoutCfg.collideStrength = 0.2;
                            layoutController.layoutCfg.linkDistance = (d) => {
                                if (d.source.level !== 0) return 120;
                                const length = 250;
                                return length;
                            };
                            layoutController.layoutCfg.edgeStrength = () => {
                                return 2;
                            };
                            const tag = model.tag;
                            const findTags = [];
                            curShowNodesMap = new Map();
                            // find the nodes which are the descendants of clicked model
                            nodes.forEach((node) => {
                                if (!node.tags) return;
                                const tags = node.tags;
                                const tlength = tags.length;
                                let isChild = false;
                                const parents = [];
                                for (let i = 0; i < tlength; i++) {
                                    const ts = tags[i].split('-');
                                    if (ts[0] === tag) {
                                        isChild = true;
                                    }
                                    parents.push(nodeMap.get(ts[0]));
                                }
                                if (isChild) {
                                    const randomAngle = Math.random() * 2 * Math.PI;
                                    node.x = model.x + (Math.cos(randomAngle) * model.size) / 2 + 10;
                                    node.y = model.y + (Math.sin(randomAngle) * model.size) / 2 + 10;
                                    // const dist = (model.x - node.x) * (model.x - node.x) + (model.y - node.y) * (model.y - node.y);
                                    if (!node.style) node.style = {};
                                    node.style.lineWidth = 0;
                                    node.style.opacity = 1;
                                    if (node.isLeaf) {
                                        node.type = 'animate-circle';
                                        let color = 'l(0)';
                                        const parentsNum = parents.length;
                                        parents.forEach((parent, i) => {
                                            const parentColor = parent.color.split(' ')[1].substr(2);
                                            color += ` ${i / (parentsNum - 1)}:${parentColor}`;
                                        });
                                        if (parentsNum === 1) {
                                            color = model.color.split(' ')[1].substr(2);
                                        }
                                        node.color = color;
                                        node.style.fill = color;
                                        node.style.fill = '#fff';
                                        node.style.lineWidth = 1;
                                        node.size = 60;
                                        node.labelCfg = {
                                            style: {
                                                fontSize: 11,
                                                lineHeight: 19,
                                                fill: '#697B8C',
                                            },
                                            position: 'center',
                                        };
                                    } else if (node.level !== 0) {
                                        node.type = 'circle'; // 'bubble';
                                        node.size = 95;
                                        if (!node.style) node.style = {};
                                        node.color = model.color;
                                        node.style.fill = model.color;
                                        node.labelCfg = {
                                            style: {
                                                fill: '#fff',
                                                fontSize: 14,
                                            },
                                            position: 'center',
                                        };
                                    }
                                    curShowNodes.push(node);
                                    curShowNodesMap.set(node.id, node);
                                    // add the edge connect from model to node which exists in edges
                                    const edgeId = `${model.id}-${node.id}`;
                                    const edge = edgesMap.get(edgeId);
                                    if (edge) {
                                        edge.color = model.color;
                                        curShowEdges.push(edge);
                                    }
                                    tags.forEach((t) => {
                                        const ts = t.split('-');
                                        if (ts[0] !== tag) {
                                            findTags.push(ts[0]);
                                        }
                                        if (ts[1]) {
                                            findTags.push(ts[1]);
                                        }
                                    });
                                }
                            });
                            // find the nodes which are the ancestors of the current curShowNodes
                            nodes.forEach((node) => {
                                const findTagsLength = findTags.length;
                                for (let i = 0; i < findTagsLength; i++) {
                                    if (node.tag === findTags[i] && curShowNodesMap.get(node.id) === undefined) {
                                        curShowNodes.push(node);
                                        curShowNodesMap.set(node.id, node);
                                        return;
                                    }
                                }
                            });
                            // find the edges whose target end source are in the curShowNodes
                            curShowNodes.forEach((nu, i) => {
                                const lu = nu.level;
                                curShowNodes.forEach((nv, j) => {
                                    if (j <= i) return;
                                    const lv = nv.level;
                                    let edgeId;
                                    if (lu < lv) {
                                        edgeId = `${nu.id}-${nv.id}`;
                                    } else {
                                        edgeId = `${nv.id}-${nu.id}`;
                                    }
                                    let color = model.color;
                                    if (nu.isLeaf) {
                                        if (nv.level === 0 && nv.tag !== model.tag) color = '#DFE5EB';
                                        else if (!nv.isLeaf && nv.tags[0] !== model.tag) {
                                            color = '#DFE5EB';
                                        }
                                    } else if (nv.isLeaf) {
                                        if (nu.level === 0 && nu.tag !== model.tag) color = '#DFE5EB';
                                        else if (!nu.isLeaf && nu.tags[0] !== model.tag) {
                                            color = '#DFE5EB';
                                        }
                                    }
                                    const edge = edgesMap.get(edgeId);
                                    if (edge) {
                                        edge.color = color;
                                        curShowEdges.push(edge);
                                    }
                                });
                            });
                        }
                        setTimeout(() => {
                            graph.changeData({
                                nodes: showNodes.concat(curShowNodes),
                                edges: showEdges.concat(curShowEdges),
                            });
                            const nodeItems = graph.getNodes();
                            const edgeItems = graph.getEdges();
                            edgeItems.forEach((item) => {
                                graph.clearItemStates(item);
                            });
                            nodeItems.forEach((item) => {
                                graph.clearItemStates(item);
                                graph.setItemState(item, 'appearing', true);
                            });
                        }, 400);
                    }
                });
                graph.on('canvas:click', () => {
                    currentFocus = undefined;
                    const forceLayout = graph.get('layoutController').layoutMethods[0];
                    forceLayout.forceSimulation.stop();
                    const nodeItems = graph.getNodes();
                    const edgeItems = graph.getEdges();
                    if (highlighting) {
                        highlighting = false;
                        nodeItems.forEach((item) => {
                            graph.setItemState(item, 'dark', false);
                        });
                        edgeItems.forEach((item) => {
                            graph.setItemState(item, 'dark', false);
                        });
                    } else {
                        nodeItems.forEach((item) => {
                            const model = item.getModel();
                            if (model.level === 0) {
                                graph.setItemState(item, 'dark', false);
                            } else {
                                graph.setItemState(item, 'disappearing', true);
                            }
                        });
                        edgeItems.forEach((item) => {
                            graph.setItemState(item, 'disappearing', true);
                        });
                        curShowNodes = [];
                        curShowEdges = [];
                        setTimeout(() => {
                            const layoutController = graph.get('layoutController');
                            layoutController.layoutCfg.nodeStrength = 2500;
                            layoutController.layoutCfg.collideStrength = 0.8;
                            layoutController.layoutCfg.alphaDecay = 0.01;
                            graph.changeData({
                                nodes: showNodes,
                                edges: showEdges,
                            });
                        }, 400);
                    }
                });
                if (typeof window !== 'undefined')
                    window.onresize = () => {
                        if (!graph || graph.get('destroyed')) return;
                        if (!container || !container.scrollWidth || !container.scrollHeight) return;
                        graph.changeSize(container.scrollWidth, container.scrollHeight);
                    };
            });
            let clientHeight = util.getClientHeight();
            if (document.getElementById('section_3').offsetTop - document.documentElement.scrollTop < clientHeight) {
                document.getElementsByClassName('bg_1')[0].style.height = document.getElementById('section_3').offsetTop - document.documentElement.scrollTop - parseInt(window.getComputedStyle(document.getElementById('section_2')).height) / 2 + 'px';
                document.getElementsByClassName('bg_1_cover')[0].style.height = document.getElementById('section_3').offsetTop - document.documentElement.scrollTop - parseInt(window.getComputedStyle(document.getElementById('section_2')).height) / 2 + 'px';
            } else {
                document.getElementsByClassName('bg_1')[0].style.height = `${clientHeight}px`;
                document.getElementsByClassName('bg_1_cover')[0].style.height = `${clientHeight}px`
            }
            if (document.getElementById('section_5').offsetTop - document.documentElement.scrollTop < clientHeight) {
                document.getElementsByClassName('bg_2')[0].style.height = document.getElementById('section_5').offsetTop - document.documentElement.scrollTop - parseInt(window.getComputedStyle(document.getElementById('section_4')).height) / 2 + 'px';
            } else {
                document.getElementsByClassName('bg_2')[0].style.height = `${clientHeight}px`;
            }
            document.getElementsByClassName('bg_3')[0].style.height = `${clientHeight}px`;
            document.getElementsByClassName('bg_3_cover')[0].style.height = `${clientHeight}px`;
            window.onscroll = () => {
                if (document.getElementById('section_3').offsetTop - document.documentElement.scrollTop > 0) {
                    if (document.documentElement.clientHeight - document.getElementById('section_3').offsetTop + document.documentElement.scrollTop + parseInt(window.getComputedStyle(document.getElementById('section_2')).height) / 2 > 0) {
                        document.getElementsByClassName('bg_1')[0].style.height = document.getElementById('section_3').offsetTop - document.documentElement.scrollTop - parseInt(window.getComputedStyle(document.getElementById('section_2')).height) / 2 + 'px';
                        document.getElementsByClassName('bg_1_cover')[0].style.height = document.getElementById('section_3').offsetTop - document.documentElement.scrollTop - parseInt(window.getComputedStyle(document.getElementById('section_2')).height) / 2 + 'px';
                    } else {
                        document.getElementsByClassName('bg_1')[0].style.height = document.documentElement.clientHeight + 'px';
                        document.getElementsByClassName('bg_1_cover')[0].style.height = document.documentElement.clientHeight + 'px'
                    }
                }
                if (document.getElementById('section_5').offsetTop - document.documentElement.scrollTop > 0) {
                    if (document.documentElement.clientHeight - document.getElementById('section_5').offsetTop + document.documentElement.scrollTop + parseInt(window.getComputedStyle(document.getElementById('section_4')).height) / 2 > 0) {
                        document.getElementsByClassName('bg_2')[0].style.height = document.getElementById('section_5').offsetTop - document.documentElement.scrollTop - parseInt(window.getComputedStyle(document.getElementById('section_4')).height) / 2 + 'px';
                    } else {
                        document.getElementsByClassName('bg_2')[0].style.height = document.documentElement.clientHeight + 'px'
                    }
                }
            };
        },
        beforeDestroy() {
            window.onscroll = null
        }
    }
</script>

<style lang="stylus">
    .home
        //padding-top $navbarHeight
        display block

        .img-coffee
            width 3rem
            height 3rem

        a
            color white

        .flex_space_between
            display flex
            justify-content space-around

            & > div
                width 200px

        button
            padding 1rem

        .white_content_box
            max-width 1200px
            margin 0 auto

        .section
            width 100%
            position relative
            z-index 12

            & > div
                padding 5rem

        #section_1
            color white
            text-align center
            padding 10rem 5rem

            p
                &:nth-of-type(1)
                    font-size 2rem

        #section_2
            background-color white

            & > div
                display flex

            & > div > div:nth-of-type(1)
                width 700px
                margin-right 2rem
                flex-grow 1

            & > div > div:nth-of-type(2) > img
                width 400px

        #section_3
            a
                color black

            & > div
                display flex
                flex-direction row-reverse

                & > div
                    width 500px

        .margin_top_1rem
            margin-top 1rem

        .margin_top_2rem
            margin-top 2rem

        .margin_bottom_2rem
            margin-bottom 2rem

        .bg
            width 100%
            position fixed;
            left 0
            top 0
            background-repeat no-repeat
            background-size cover


        .bg_1_cover
            background rgba(0 0 0 .7)
            z-index 11


        .bg_1
            z-index 10
            background-image url("../images/home-bg.jpg")

        .bg_2
            z-index 9
            background-image url("../images/feature-bg.jpg")

        .bg_3_cover
            background rgba(0 0 0 .7)
            z-index 8

        .bg_3
            z-index 7
            background-image url("../images/call-to-action-bg.jpg")

        .action-button
            display inline-block
            font-size 1.2rem
            padding 0.8rem 1.6rem
            border-radius 4px
            box-sizing border-box
            border 1px solid darken(white, 50%)

            &:hover
                border 1px solid darken(white, 20%)

        .hero
            text-align center

            img
                max-width: 100%
                max-height 280px
                display block
                margin 3rem auto 1.5rem

            h1
                font-size 3rem

            h1, .description, .action
                margin 1.8rem auto

            .description
                max-width 35rem
                font-size 1.6rem
                line-height 1.3
                color lighten($textColor, 40%)


        .features
            border-top 1px solid $borderColor
            padding 1.2rem 0
            margin-top 2.5rem
            display flex
            flex-wrap wrap
            align-items flex-start
            align-content stretch
            justify-content space-between

        .feature
            flex-grow 1
            flex-basis 30%
            max-width 30%

            h2
                font-size 1.4rem
                font-weight 500
                border-bottom none
                padding-bottom 0
                color lighten($textColor, 10%)

            p
                color lighten($textColor, 25%)


        @media (max-width: $MQMobile)
            .home
                .features
                    flex-direction column

                .feature
                    max-width 100%
                    padding 0 2.5rem

        @media (max-width: $MQMobileNarrow)
            .home
                padding-left 1.5rem
                padding-right 1.5rem

                .action-button
                    font-size 1rem
                    padding 0.6rem 1.2rem

                .hero
                    img
                        max-height 210px
                        margin 2rem auto 1.2rem

                    h1
                        font-size 2rem

                    h1, .description, .action
                        margin 1.2rem auto

                    .description
                        font-size 1.2rem


                .feature
                    h2
                        font-size 1.25rem
</style>
