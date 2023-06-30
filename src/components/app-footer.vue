<template>
  <div class="contact">
    <div class="container">
      <ul>
        <li>
          <p class="title">
            客户服务
          </p>
          <div class="icon">
            <div class="left">
              <i class="iconfont icon-show_zaixiankefu_fill"></i>
              <span>在线客户</span>
            </div>
            <div class="right">
              <i class="iconfont icon-wentifankui"></i>
              <span>问题反馈</span>
            </div>
          </div>
        </li>
        <li>
          <p class="title">
            关注我们
          </p>
          <div class="icon">
            <div class="left">
              <i class="iconfont icon-WeChat"></i>
              <span>公众号</span>
            </div>
            <div class="right">
              <i class="iconfont icon-xinlangweibo"></i>
              <span>微博</span>
            </div>
          </div>
        </li>
        <li>
          <p class="title">
            下载APP
          </p>
          <div class="icon">
            <div class="left">
              <img src="@/assets/images/qrcode_g.xiayh.cn.png" alt="">
            </div>
            <div class="right-download">
              <p>扫描二维码</p>
              <p>立即下载APP</p>
              <div class="download">下载页面</div>
            </div>
          </div>
        </li>
        <li>
          <p class="title">
            服务热线
          </p>
          <div class="telephone ">
            <p class="fontcolor">400-0000-000 </p>
            <p>周一至周日 8:00-18:00</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="extra">
    <div class="container">
      <ul class="slogan">
        <li><i class="iconfont icon-icon-price"></i>价格亲民</li>
        <li><i class="iconfont icon-wuliu-"></i>物流快捷</li>
        <li><i class="iconfont icon-pinzhi1"></i>品质新鲜</li>
      </ul>
      <div class="line"></div>
      <div class="copyright">
        <ul>
          <li><a href="#">关于我们</a></li>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">售后服务</a></li>
          <li><a href="#">配送与验收</a></li>
          <li><a href="#">商务合作</a></li>
          <li><a href="#">搜索推荐</a></li>
          <li><a href="#">友情链接</a></li>
        </ul>
        <p>CopyRight © LoveFreedom</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  setup () {

  }
}
</script>

<style scoped lang="less">
.contact {
  background: white;
  padding: 60px 10px 60px 10px;
  color: #989898;

  ul {
    display: flex;

    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;

      .title {
        font-size: 18px;
        color: #989898;
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;

        .left, .right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 90px;
          height: 80px;
          border: 1px #bbbbbb solid;
          margin-top: 36px;
        }

        .iconfont {
          font-size: 32px;
          color: #666;

          &:hover {
            color: #34b99b;
          }
        }

        .right {
          margin-left: 15px;
        }

        .right-download {
          border: none;
          margin-top: 36px;
          margin-left: 15px;

          p {
            text-align: center;
          }

          .download {
            width: 106px;
            height: 34px;
            background: #34b99b;
            color: white;
            line-height: 34px;
            text-align: center;
            margin-top: 5px;
          }
        }
      }

      .telephone {
        margin-top: 36px;

        .fontcolor {
          color: #645e5e;
          font-size: 22px;
          text-align: center;
        }

        &:last-child {
          font-size: 16px;
        }
      }
    }
  }
}

.extra {
  background: #333333;
  color: white;
  padding-top: 40px;
  padding-bottom: 80px;

  .slogan {
    display: flex;
    font-size: 28px;
    padding: 60px 100px;

    li {
      flex: 1;
      display: flex;
      justify-content: center;

      i {
        font-size: 28px;
        padding-right: 10px;
      }
    }
  }

  .copyright {
    color: #989898;
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
      display: flex;

      li {
        a {
          color: #989898;
        }

        &::after {
          content: '|';
          color: #989898;
          padding: 0 5px;
        }
      }
    }

  }
}

.line {
  width: 100%;
  height: 1px;
  background: #777777;
  margin-bottom: 50px;
}
</style>
