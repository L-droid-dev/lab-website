# 郑州航空工业管理学院 · 机器人科创实验室 · 云枢Thrive战队 展示网站

一个纯 HTML/CSS/JS 的响应式静态网站，包含三个页面：

| 文件 | 说明 |
| --- | --- |
| `index.html` | 首页：实验室简介、云枢Thrive战队、团队成员、合作伙伴、快速导航 |
| `projects.html` | 代码 / 项目展示 |
| `awards.html` | 获奖荣誉：代表成果 + 参赛足迹（2026 赛季）+ 历年获奖 |
| `css/style.css` | 全部样式（改顶部 `--accent` 变量即可换主题色） |
| `js/main.js` | 手机端菜单等交互 |
| `assets/img/` | 实验室 logo（3 个）、战队 logo（2 个）、赞助单位 logo（创芯工坊、铨洲科技） |

## 一、在本地预览

直接用浏览器双击打开 `index.html` 即可查看效果。

## 二、替换成你的真实内容

所有待填内容都用 `【】` 标出来了，用编辑器（如 VS Code）全局搜索 `【` 逐个替换即可。主要要改：

1. 首页 `index.html`：补充实验室 / 战队详细介绍、更多成员（复制卡片即可）、联系邮箱
2. `projects.html` 的卡片 → 你的项目（复制卡片改内容即可加更多）
3. `awards.html` → 补全历年获奖情况（按年份分组，复制条目加更多）；参赛足迹已按 2026 赛季实际名单填好
4. GitHub 用户名已设为 L-droid-dev（如更换账号，全局搜索 `L-droid-dev` 替换即可）
5. 想换 logo：直接替换 `assets/img/` 里的同名图片即可（保持文件名不变）
6. 不需要「合作伙伴」板块：删除 `index.html` 中 `id="team"` 之后、页脚之前的整段 `<!-- ===== 合作伙伴 ===== -->` 区块
7. 获奖证书照片放 `assets/img/certificates/`，实验室风采照片放 `assets/img/gallery/`，然后在对应页面的图墙里引用

## 三、部署到 GitHub Pages（免费，公网可访问）

> 电脑和手机都能通过网址直接打开。需要：一个 GitHub 账号 + 电脑上装了 Git（或直接用 GitHub 网页上传）。

### 方式 A：用 Git 命令行（推荐，以后更新方便）

> ✅ 本目录**已经初始化好 Git 仓库并提交了第一个版本**，你只需要：
> 1. 在 GitHub 网页上新建一个仓库（名字建议 `lab-website`，设为 **Public**，**不要**勾选自动生成 README 选项）
> 2. 回到本目录执行下面两行：

```bash
git remote add origin https://github.com/L-droid-dev/lab-website.git
git push -u origin main
```

### 方式 B：不用 Git，直接网页上传

1. 打开 GitHub 新建仓库（Public），点 **uploading an existing file**
2. 把 `lab-website` 文件夹里的 **所有文件** 拖进去上传

### 开启 Pages（两种方式都要做）

1. 进入仓库 → **Settings** → 左侧 **Pages**
2. **Source** 选 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`
3. 点 **Save**，等 1~2 分钟
4. 访问 `https://L-droid-dev.github.io/lab-website/`，就是你的网站了 🎉

### 以后更新内容

本地改完文件后：

```bash
git add .
git commit -m "更新内容"
git push
```

等 1 分钟刷新网页即可看到新内容。

## 四、内部代码协作指南（实验室成员）

> 网站是公开的，但**代码仓库是私有的**：只有受邀成员登录 GitHub 后才能查看、上传、修改代码；非成员点击四宫格会看到 404（保密效果，属正常现象）。

### 1. 创建四个方向的私有仓库（一次性，由管理员做）

在 GitHub 网页上依次新建 4 个仓库（New repository → 名称填下面的 → 选 **Private** → 勾选 Add a README）：

| 方向 | 仓库名 | 网页地址 |
| --- | --- | --- |
| 控制 | `control` | github.com/L-droid-dev/control |
| 视觉 | `vision` | github.com/L-droid-dev/vision |
| 硬件 | `hardware` | github.com/L-droid-dev/hardware |
| 机械 | `mechanical` | github.com/L-droid-dev/mechanical |

（四宫格卡片已指向这些地址，仓库建好即生效。）

### 2. 给成员开权限（管理员操作）

每个成员的电脑上都要有 GitHub 账号（注册：github.com/signup），然后把成员的**用户名**发给你。

**添加 Collaborators（人少时推荐）：**

1. 打开私有仓库，例如 `https://github.com/L-droid-dev/control`
2. 点 **Settings** → 左侧 **Collaborators**
3. 点 **Add people**，输入成员的 GitHub 用户名
4. 选权限级别，点 **Add 用户名 to this repository**：
   - **Read**：只能查看（不能改）
   - **Write**：可查看 + 上传/修改代码（给队员用这个）
   - **Admin**：可管理仓库（只给核心负责人）
5. 成员会收到 GitHub 邀请邮件，点 **Accept invitation** 即完成

> ⚠️ 邀请 **7 天内**有效，过期要重新邀请；4 个代码仓库（control/vision/hardware/mechanical）都要分别添加。
> 💡 注意：**个人仓库添加成员后不能直接修改权限**。要改成 Admin，需先 **Remove**（移除）该成员，再 **Add people** 重新添加并选择 **Admin**。想随时灵活改权限，建议使用 **GitHub Organization（组织）**。

**人多 / 长期维护（推荐进阶）：**
创建 **GitHub Organization（组织）**，把 4 个仓库放进组织，成员加入组织并按组分配权限（控制组/视觉组/硬件组/机械组），换人、离职管理更规范，仓库归属也更统一。

### 3. 成员上传 / 更新代码（以 control 为例）

```bash
# 首次：克隆私有仓库（需已登录 GitHub 客户端或被邀请）
git clone https://github.com/L-droid-dev/control.git

# 日常更新
cd control
# ... 修改/添加文件 ...
git add .
git commit -m "更新说明"
git push
```

> 第一次 push 会弹出 GitHub 登录窗口，用被邀请的账号登录即可。以后每台机器只需登录一次。

### 4. 项目细分说明放哪

每个仓库内的 **README.md** 写这个方向的细分说明（模块列表、使用方法、依赖环境），点进仓库第一眼就能看到——细分内容全部在仓库里管理，网站只做入口。

### 5. 网站四宫格链接在哪改

`projects.html` 里的四张卡片 `<a href="https://github.com/L-droid-dev/xxx">`，改仓库名或换成组织地址即可。

## 五、进阶（可选）

- **自定义域名**：Settings → Pages → Custom domain，绑定你买的域名
- **GitHub 组织**：如果实验室有自己的 GitHub 组织账号，把仓库放到组织下，网址变成 `组织名.github.io/仓库名`
- **SSL**：Pages 默认免费开启 HTTPS

## 六、国内访问加速说明（Gitee Pages 已停服）

> ⚠️ **Gitee Pages 服务已停止新用户开通（平台政策，2022 年起）**，无法用它托管网页。本网站使用 GitHub Pages 部署。

### 当前网站的国内加速措施（已生效）

1. **图片全部走 jsDelivr CDN**（有国内节点），7.7MB 图片在国内加载快；
2. 网页本体（HTML/CSS/JS）只有几十 KB，从 GitHub Pages 加载本身不算慢；
3. 建议先实测：用手机流量打开 `https://L-droid-dev.github.io/lab-website/`，速度可接受就不用额外折腾。

### 如果网页本体也想放国内（替代方案）

| 方案 | 特点 |
| --- | --- |
| **腾讯云 COS / 阿里云 OSS 静态网站托管** | 国内快，需实名，按量付费（小流量每月几元内） |
| **Cloudflare Pages** | 免费，但国内访问速度一般 |
| **自有服务器** | 最可控，需要运维 |

> 做法：把 `lab-website` 文件夹整体上传到上述任一平台，开启静态网站托管即可；图片仍走 jsDelivr 不用改。

## 七、常见问题

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
