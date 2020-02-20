<template>
  <div class="login-wrap">
    <!-- 左侧登陆盒子 -->
    <div class="login-box">
      <!-- 标题盒子 -->
      <div class="title-box">
        <!-- 放入log -->
        <img class="logo" src="./images/1.png" alt />
        <span class="left-title">黑马绵绵</span>
        <!-- 竖线 -->
        <span class="line"></span>
        <span class="right-title">用户登录</span>
      </div>
      <!-- 表单 -->
      <el-form label-width="43px">
        <!-- 账号输入框 -->
        <el-form-item>
          <el-input placeholder="请输入手机号码" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码输入框 -->
        <el-form-item>
          <el-input placeholder="请输入密码" show-password prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <!-- 验证码输入框 -->
        <el-form-item>
          <!-- 第一列放 验证码输入框 -->
          <el-row>
            <el-col :span="17">
              <el-input placeholder="请输入验证码" prefix-icon="el-icon-key"></el-input>
            </el-col>
            <el-col :span="7">
              <img class="code" src="./images/2.png" alt />
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-checkbox class="agree" v-model="checked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button class="box-btn" type="primary">登陆</el-button>
          <el-button class="box-btn" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img src="./images/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.login-wrap {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  display: flex;
  justify-content: space-around;
  align-items: center;

  .login-box {
    // 内裤收缩
    box-sizing: border-box;
    padding-right: 41px;
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);

    .title-box {
      display: flex;
      // 副轴居中
      align-items: center;
      margin-top: 50px;
      margin-left: 48px;
      margin-bottom: 29px;

      .logo {
        width: 22px;
        height: 17px;
        margin-right: 16px;
      }

      .left-title {
        margin-right: 14px;
        font-size: 22px;
      }
      .line {
        width: 1px;
        height: 28px;
        margin-right: 14px;
        background: rgba(199, 199, 199, 1);
      }
      .right-title {
        font-size: 21px;
      }
    }
    .code {
      width: 100%;
      height: 42px;
    }
    .agree {
      display: flex;
      align-items: center;
    }
    .box-btn {
      width: 100%;
      &:nth-child(2) {
        margin-left: 0px;
        margin-top: 26px;
      }
    }
  }
}
</style>