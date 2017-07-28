import api from '../../api/api.js'
import util from '../../utils/util.js'

Page({
  data: {
    vols: [{
      "hp_img_url": "../../images/zhou.jpg",
      "hp_title": "皮蛋瘦肉粥",
      "hp_author": " ",
      "hp_content": "白粥，清淡质朴。最简单最不奢华的粥，却也是人们记忆中最抹不去的味道。甜粥，清新味甘。甜滋而不油腻的粥，或许总会挑逗着嗜甜者的味蕾。      咸粥，醇香咸鲜。风味浓郁而鲜香的粥，也不断深受喝粥者的喜爱。      白粥，是我从小吃到大的。母亲的白粥煮得是非常好的。      今天的这道粥，是家常不能再家常的——【皮蛋瘦肉粥】。",
      "hp_makettime": "2017-7-25",
    },
    {
      "hp_img_url": "../../images/dan.jpg",
      "hp_title": "爱心火腿煎蛋",
      "hp_author": " ",
      "hp_content": "煎蛋是一种常见的食品，多作为早餐食用，因烹饪简单、便捷、美味、营养而成为大众化的食品。煎蛋可随着人们口味的变化而在烹饪上变换很多的花样，其营养价值也因加入的配餐食品而得到了进一步的提升。其实煎荷包蛋是有技巧的，鸡蛋本身就很嫩，剥去外壳后就更容易熟了。用热锅的余温来煎鸡蛋，不仅不油腻，而且煎出的鸡蛋爽滑可口。 ",
      "hp_makettime": "2017-7-24",
    },
    {
      "hp_img_url": "../../images/mian.jpg",
      "hp_title": "海鲜意面",
      "hp_author": " ",
      "hp_content": "意面是西餐中比较容易制作，也是中国人在口感上最容易接受的品种。意面的口味有很多，更有些朋友喜欢在家中创造一些混搭风的意面，今天我发的是比较常见的红酱海鲜意面。海鲜只用了家里现有的虾和鱿鱼，本想再去买些蛤蜊，可是实在不喜欢用叉子吃蛤蜊的感觉，干脆也就不难为自己了。红酱是我自己做的，谈不上正宗，却是我很喜欢的味道。",
      "hp_makettime": "2017-7-23",
    },

    ],
    current: 0
  },
  onLoad: function () {
    api.getVolIdList({
      success: (res) => {
        if (res.data.res === 0) {
          let idList = res.data.data
          this.getVols(idList)
        }
      }
    })
  },
  getVols: function (idList) {
    let vols = this.data.vols

    if (idList.length > 0) {
      api.getVolById({
        query: {
          id: idList.shift()
        },
        success: (res) => {
          if (res.data.res === 0) {
            let vol = res.data.data
            
            vol.hp_makettime = util.formatMakettime(vol.hp_makettime)
            vols.push(vol)
          }
          this.getVols(idList)
        }
      })
    } else {
      this.setData({ vols })
    }
  },
  handleChange: function (e) {
    let current = e.detail.current
    let volsLength = this.data.vols.length

    if (current === volsLength) {
      this.setData({
        current: volsLength
      })
      wx.navigateTo({
      //  url: '../history/history?page=index',
        success: () => {
          this.setData({
            current: volsLength - 1
          })
        }
      })
    }
  }
})
