function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  data: {
    src:'http://1258175978.vod2.myqcloud.com/edfdd31fvodtranscq1258175978/05bedd475285890783410045427/v.f30.mp4',
      nodes1: [{
        name: 'a',
        attrs: {
          class: 'div_class',
        },
        children: [
          {
            type: 'text',
            text: '完整版'
          }
        ]
      }],
    nodes2: [{
      name: 'a',
      attrs: {
        class: 'div_class',
      },
      children: [
        {
          type: 'text',
          text: '水位'
        }
      ]
    }],
    nodes3: [{
      name: 'a',
      attrs: {
        class: 'div_class',
      },
      children: [
        {
          type: 'text',
          text: '流速仪流量'
        }
      ]
    }],
    nodes4: [{
      name: 'a',
      attrs: {
        class: 'div_class',
      },
      children: [
        {
          type: 'text',
          text: 'adcp流量'
        }
      ]
    }],
    nodes5: [{
      name: 'a',
      attrs: {
        class: 'div_class',
      },
      children: [
        {
          type: 'text',
          text: '20mm降雨'
        }
      ]
    }],
    nodes6: [{
      name: 'a',
      attrs: {
        class: 'div_class',
      },
      children: [
        {
          type: 'text',
          text: '虹吸式雨量'
        }
      ]
    }],
    nodes7: [{
      name: 'a',
      attrs: {
        class: 'div_class',
      },
      children: [
        {
          type: 'text',
          text: '蒸发'
        }
      ]
    }],
    nodes7: [{
      name: 'a',
      attrs: {
        class: 'div_class',
      },
      children: [
        {
          type: 'text',
          text: '水温'
        }
      ]
    }]
    },
  tap1() {
    this.setData({ src: "http://1258175978.vod2.myqcloud.com/edfdd31fvodtranscq1258175978/05bedd475285890783410045427/v.f30.mp4" })
  },
  tap2() {
    this.setData({ src: "http://1258175978.vod2.myqcloud.com/edfdd31fvodtranscq1258175978/bab0e2d15285890783419068711/v.f30.mp4" })
  },
  tap3() {
    this.setData({ src: "http://1258175978.vod2.myqcloud.com/edfdd31fvodtranscq1258175978/ba56f4945285890783419019709/v.f30.mp4" })
  },
  tap4() {
    this.setData({ src: "http://1258175978.vod2.myqcloud.com/edfdd31fvodtranscq1258175978/805dbe795285890783418864860/v.f30.mp4" })
  },
  tap5() {
    this.setData({ src: "http://1258175978.vod2.myqcloud.com/edfdd31fvodtranscq1258175978/807fad5e5285890783418880498/v.f30.mp4" })
  },
  tap6() {
    this.setData({ src: "http://1258175978.vod2.myqcloud.com/edfdd31fvodtranscq1258175978/ba5558d45285890783419016973/v.f30.mp4" })
  },
  tap7() {
    this.setData({ src: "http://1258175978.vod2.myqcloud.com/edfdd31fvodtranscq1258175978/bcbcffce5285890783419127055/v.f30.mp4" })
  },
  tap8() {
    this.setData({ src: "http://1258175978.vod2.myqcloud.com/edfdd31fvodtranscq1258175978/ba7a09745285890783419037673/v.f30.mp4" })
  }
})