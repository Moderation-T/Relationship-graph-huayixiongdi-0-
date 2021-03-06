import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import data from './sample';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      nodes: data.nodes,
      edges: data.edges,
    };
  }

  render() {
    console.log(data);
    
    const { nodes, edges } = this.state;
    nodes.forEach(node => {
      node.draggable = true;
    });
    const option = {
      title: {
        text: '华谊兄弟关系图谱',
      },
      tooltip: {
        formatter(x) {
          return x.data.des;
        },
      },
      animationEasingUpdate: "quinticInOut",          // 数据更新动画的缓动效果。[ default: cubicOut ]    "quinticInOut"
	    animationDurationUpdate: 100,                    // 数据更新动画的时长。[ default: 300 ]
      series: [
        {
          type: 'graph',
          layout: 'force',
          symbolSize: 20,
	        roam: true,   // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          focusNodeAdjacency: true, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。[ default: false ]
          label: {
            normal: {
              show: true,
            },
          },
          force: {
            repulsion: 1000,
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            // 连接两个关系对象的线上的标签
            normal: {
              show: true,
              textStyle: {
                fontSize: 14,
              },
              formatter(param) {
                // 标签内容
                return param.data.name;
              },
            },
          },
          data: nodes,
          // links: [],
          links: edges,
          lineStyle: {
            normal: {
              color: 'source',          // 线的颜色[ default: '#aaa' ]
              width: 1,               // 线宽[ default: 1 ]
              type: 'solid',          // 线的类型[ default: solid ]   'dashed'    'dotted'
              opacity: 0.5,           // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。[ default: 0.5 ]
              curveness: 0            // 边的曲度，支持从 0 到 1 的值，值越大曲度越大。[ default: 0 ]

            },
          },
          itemStyle: {
            normal: {
              color(params) {
                // build a color map as your need.
                const colorList = [
                  '#64e7a9',
                  '#69f214',
                  '#2dccd9',
                  '#a9e71b',
                  '#50259d',
                  '#f732bb',
                  '#b766a5',
                  '#9c8aef',
                  '#1af64e',
                  '#c2a3a5',
                  '#535acf',
                  '#8e2e18',
                  '#f91d89',
                  '#4d6eaf',
                  '#dfc15f',
                  '#c4e848',
                  '#6f5ded',
                  '#9dc754',
                  '#e3fa6f',
                  '#438e48',
                  '#34b9ef',
                  '#243073',
                  '#664807',
                  '#057b9c',
                  '#2aab83',
                  '#e4019b',
                  '#721757',
                  '#e186dc',
                  '#9fbbb7',
                  '#eca27d',
                  '#980cc3',
                  '#2ec182',
                  '#b408d3',
                  '#332ccf',
                  '#c9da03',
                  '#2927b4',
                  '#ec4515',
                  '#43db33',
                  '#51b777',
                  '#45b097',
                  '#67d433',
                  '#e9dd9b',
                  '#c0fde3',
                  '#634884',
                  '#866fb9',
                  '#090a19',
                  '#26e41d',
                  '#64753d',
                  '#21b7be',
                  '#1cb097',
                  '#1e33b0',
                  '#b6c27b',
                  '#1ad8ea',
                  '#080741',
                  '#e65aaf',
                  '#88537b',
                  '#9e4e59',
                  '#985bf3',
                  '#8b3793',
                  '#d64fab',
                  '#a02a9b',
                  '#f857cd',
                  '#2722b1',
                  '#788a4d',
                  '#8707a4',
                  '#087f3a',
                  '#f0523c',
                  '#f7e9e2',
                  '#044088',
                  '#96b212',
                  '#21a5d9',
                  '#400ce5',
                  '#55b9ed',
                  '#f7b010',
                  '#74a508',
                  '#e4a45b',
                  '#15a0bf',
                  '#9c116b',
                  '#b35349',
                  '#a422f3',
                  '#ec050b',
                  '#abb471',
                  '#389004',
                  '#0f76da',
                  '#317ba0',
                  '#cbccb5',
                  '#001309',
                  '#e8eba2',
                  '#392305',
                  '#54b467',
                  '#306436',
                  '#539269',
                  '#dba9c7',
                  '#27f30d',
                  '#866560',
                  '#129e5d',
                  '#c47c42',
                  '#589a52',
                  '#7bffda',
                  '#2de3c6',
                  '#cf28c2',
                  '#73948b',
                  '#0c61db',
                  '#0a5947',
                  '#1d7172',
                  '#1761d6',
                  '#a28c02',
                  '#08b715',
                  '#7144a9',
                  '#60a615',
                  '#18836d',
                  '#d283bf',
                  '#e030fe',
                  '#6a574d',
                  '#aec992',
                  '#9a77d5',
                  '#10928d',
                  '#84182d',
                  '#fa7809',
                  '#feb59c',
                  '#9f9ea2',
                  '#b79894',
                  '#04b06a',
                  '#5d76f8',
                  '#f3e584',
                  '#76b646',
                  '#5f6be2',
                  '#5304fa',
                  '#f2a0db',
                  '#3ed798',
                  '#479a79',
                  '#f16fa0',
                  '#d77a07',
                  '#81d15e',
                  '#cf5716',
                  '#9d085c',
                  '#133204',
                  '#4a8835',
                  '#4b17bf',
                  '#ad9360',
                  '#5ca8b3',
                  '#716fa0',
                  '#116752',
                  '#79864c',
                  '#29e91e',
                  '#2238e8',
                  '#0cd360',
                  '#848fe2',
                  '#f8e0c0',
                  '#beb35c',
                  '#9ce005',
                  '#9879c2',
                  '#9d43eb',
                  '#989b3e',
                  '#8f6214',
                  '#9f22d6',
                  '#e5a6f9',
                  '#9a51b3',
                  '#fc84f6',
                  '#12df52',
                  '#5d5b29',
                  '#7c4894',
                  '#b8293c',
                  '#d0187d',
                  '#cd04de',
                  '#474309',
                  '#b093b8',
                  '#ae21bc',
                  '#9dd0a2',
                  '#0d97ed',
                  '#dfb1c9',
                  '#d39697',
                  '#f74a68',
                  '#bc0879',
                  '#a59cb6',
                  '#e07951',
                  '#d65030',
                  '#8f2f76',
                  '#ff915a',
                  '#ffe4a2',
                  '#6bba5e',
                  '#e5f7a5',
                  '#3aab30',
                  '#b0158d',
                  '#414825',
                  '#5ffd7f',
                  '#a8cd8a',
                  '#1783fd',
                  '#1f043d',
                  '#45e540',
                  '#926c46',
                  '#6f8de7',
                  '#af4545',
                  '#ee8769',
                  '#22e060',
                  '#48e1a7',
                  '#ecbe40',
                  '#da48ab',
                  '#5e2341',
                  '#a39601',
                ];
                return colorList[params.dataIndex];
              },
            },
          },
        },
      ],
    };

    return <ReactEcharts style={{ height: '100vh', width: '100%' }} option={option} />;
  }
}

export default App;
