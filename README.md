# 【实验室名称】展示网站

一个纯 HTML/CSS/JS 的响应式静态网站，包含三个页面：

| 文件 | 说明 |
| --- | --- |
| `index.html` | 首页：实验室简介、研究方向、快速导航 |
| `projects.html` | 代码 / 项目展示 |
| `publications.html` | 论文 / 成果列表 |
| `css/style.css` | 全部样式（改顶部 `--accent` 变量即可换主题色） |
| `js/main.js` | 手机端菜单等交互 |

## 一、在本地预览

直接用浏览器双击打开 `index.html` 即可查看效果。

## 二、替换成你的真实内容

所有待填内容都用 `【】` 标出来了，用编辑器（如 VS Code）全局搜索 `【` 逐个替换即可。主要要改：

1. 所有页面里的 `【实验室名称】` → 实验室真实名称
2. `index.html` 的 `#about` 区块 → 实验室详细介绍、成员、联系方式
3. `projects.html` 的卡片 → 你的项目（复制卡片改内容即可加更多）
4. `publications.html` → 论文列表（按年份分组）
5. 所有 `你的GitHub用户名` 和 `你的邮箱@example.com` → 真实信息

## 三、部署到 GitHub Pages（免费，公网可访问）

> 电脑和手机都能通过网址直接打开。需要：一个 GitHub 账号 + 电脑上装了 Git（或直接用 GitHub 网页上传）。

### 方式 A：用 Git 命令行（推荐，以后更新方便）

> ✅ 本目录**已经初始化好 Git 仓库并提交了第一个版本**，你只需要：
> 1. 在 GitHub 网页上新建一个仓库（名字建议 `lab-website`，设为 **Public**，**不要**勾选自动生成 README 选项）
> 2. 回到本目录执行下面两行：

```bash
git remote add origin https://github.com/你的GitHub用户名/lab-website.git
git push -u origin main
```

### 方式 B：不用 Git，直接网页上传

1. 打开 GitHub 新建仓库（Public），点 **uploading an existing file**
2. 把 `lab-website` 文件夹里的 **所有文件** 拖进去上传

### 开启 Pages（两种方式都要做）

1. 进入仓库 → **Settings** → 左侧 **Pages**
2. **Source** 选 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`
3. 点 **Save**，等 1~2 分钟
4. 访问 `https://你的GitHub用户名.github.io/lab-website/`，就是你的网站了 🎉

### 以后更新内容

本地改完文件后：

```bash
git add .
git commit -m "更新内容"
git push
```

等 1 分钟刷新网页即可看到新内容。

## 四、进阶（可选）

- **自定义域名**：Settings → Pages → Custom domain，绑定你买的域名
- **GitHub 组织**：如果实验室有自己的 GitHub 组织账号，把仓库放到组织下，网址变成 `组织名.github.io/仓库名`
- **SSL**：Pages 默认免费开启 HTTPS

## 五、常见问题

**Q1：部署后页面样式/图片全乱了？**
> 检查地址栏网址是否以 `/lab-website/` 结尾（如果仓库名不是 `lab-website`，就是你的仓库名）。本网站全部使用相对路径，只要文件结构和仓库一致就不会出错；不要用 `file://` 打开部署后的链接。

**Q2：编辑保存后中文变成乱码？**
> 所有文件都是 UTF-8 编码。用 VS Code / Notepad++ 编辑时，右下角确认编码是 **UTF-8**（不要选 GBK 或 ANSI）。Windows 老版记事本建议用 VS Code 代替。

**Q3：GitHub 访问慢或打不开？**
> GitHub 国内访问偶尔不稳定。可选的替代方案：
> - 换用 **Gitee（码云）** 的 Pages 服务（国内快，但需实名认证），流程类似；
> - 用 Cloudflare Pages（免费，海外节点快）；
> - 给 GitHub Pages 配置国内 CDN 或自定义域名。

**Q4：推送时提示 "failed to push some refs"？**
> 说明 GitHub 上的仓库已有其他内容（比如勾选了自动生成 README）。解决：先 `git pull origin main --allow-unrelated-histories`，再重新 `git push -u origin main`。

**Q5：改完推送后网页没更新？**
> GitHub Pages 部署需要 1~2 分钟，稍等后强制刷新（Ctrl+F5 / 手机端清缓存）即可。
