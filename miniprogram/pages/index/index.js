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
            text: '视频一'
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
          text: '视频二'
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
          text: '视频三'
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
          text: '视频四'
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
          text: '视频五'
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
          text: '视频六'
        }
      ]
    }]
    },
  tap1() {
    this.setData({ src: "http://1258175978.vod2.myqcloud.com/edfdd31fvodtranscq1258175978/05bedd475285890783410045427/v.f30.mp4" })
  },
  tap2() {
    this.setData({ src: "https://zunyishuiwenceyanshipin-1258175978.cos.ap-chengdu.myqcloud.com/02-%E6%B0%B4%E4%BD%8D.mp4" })
  },
  tap3() {
    this.setData({ src: "https://zunyishuiwenceyanshipin-1258175978.cos.ap-chengdu.myqcloud.com/02-%E6%B0%B4%E4%BD%8D.mp4" })
  },
  tap4() {
    this.setData({ src: "https://zunyishuiwenceyanshipin-1258175978.cos.ap-chengdu.myqcloud.com/04-%E6%B0%B4%E6%B8%A9.mp4" })
  },
  tap5() {
    this.setData({ src: "https://zunyishuiwenceyanshipin-1258175978.cos.ap-chengdu.myqcloud.com/05-%E8%92%B8%E5%8F%91%E7%9A%BF.mp4" })
  },
  tap6() {
    this.setData({ src: "https://zunyishuiwenceyanshipin-1258175978.cos.ap-chengdu.myqcloud.com/%E8%A7%82%E6%B5%8B%E5%87%86%E5%A4%87.mp4" })
  }
})