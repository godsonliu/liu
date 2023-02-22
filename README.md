# shopify/eufy-theme

#### shopify theme dev
- 安装 theme cli 工具 [themekit](https://git.io/JUR8H)
  ```sh
  brew tap shopify/shopify
  brew install themekit
  ```
  
- cli 常用命令
```sh
theme get --list # 获取商店模板列表
theme open # 浏览器打开 网站首页
theme open -E # 浏览器打开 模板配置页
theme download templates/test.liquid # 下载 线上文件 => 本地
# theme download config/settings_data.json # 下载商店 theme 配置
theme remove templates/test.liquid # 删除 本地+线上 文件
theme deploy --allow-live -e=eufy-us sections/x1.liquid sections/x2.liquid # 上传本地文件
# theme deploy --allow-live -a xx.liquid # 上传本地文件到所有env店铺
theme watch --allow-live # 本地文件变动, 自动上传
```

#### Faqs
- 生成 `theme` / `config.yml` 使用的 的秘钥:
  - shopify admin后台 Online Store, `/admin/apps/private/`, 创建Private app
  - App name: `themekit[f2e]`
  - ADMIN API PERMISSIONS: Theme templates and theme assets: `read_themes, write_themes`
  - Admin API: copy Password for `$shppa_password`
- Docs for Shopify APIs, https://shopify.dev/docs
  - [theme settings_schema](https://shopify.dev/docs/themes/settings#special-input-setting-types)
- APP的类型 [Public apps, Custom apps, Private apps](https://shopify.dev/concepts/apps)
 - [Create private app 直接在店铺后台](http://t.cn/A6wKT1ba), 这个应该是最方便的, 无需安装
 - [Create custom app 在Partner Dashboard](http://t.cn/A6wKnCqK)
    - app 的 `Generate link` 按钮, 生成安装链接到某1店铺 (**仅能安装到1个店铺**)
    - `Public apps` draft 在测试商店安装, 会改店铺为 `Transfer disabled` (不能改店铺 套餐/转让)
    - `Custom app` 也可以在 多个测试商店 测试, 不会改店铺的`Transfer disabled`
- 创建需要安装的app可以通过 shopify-app-cli(https://git.io/JUR3C), 可以选择语言
  ```sh
  # 启动app, 并自动修改 partners 里 app的 url
  shopify serve # yarn dev + ngrok http 8081
  ```
- Metafields
  - [安装App Store的 Metafields app](https://apps.shopify.com/search?q=metafield)
    - 优势: 不依赖浏览器, 所有账号都可使用
    - 比如 `Metafields Guru`
  - [Chrome web store 的 插件](http://t.cn/A64EdNz6)
  - [Using Metafields in Your Shopify Theme](http://t.cn/A64ErNnU)
  - [Metafields in Shopify Without Using an App](http://t.cn/A64EdcNi)
- 体验不好的:
  - .scss does not support `@import`  (`@import 'variables.scss';`)
  - [Different section options for different pages with same sections](https://community.shopify.com/c/Shopify-Design/s/td-p/362914) enhance the {%schema%} tag
