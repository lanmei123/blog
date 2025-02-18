import{_ as n,c as a,a as e,o as l}from"./app-CtvBz1x5.js";const p="/blog/assets/img-BzkyXdLf.png",t="/blog/assets/img_1-BfyxASxg.png",i={};function c(r,s){return l(),a("div",null,s[0]||(s[0]=[e('<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>docker</span></a></h1><h2 id="docker的介绍" tabindex="-1"><a class="header-anchor" href="#docker的介绍"><span>docker的介绍</span></a></h2><p>docker是一种容器,利用的是宿主机的内核,而常见的虚拟化技术是重新搭建一个操作系统 <img src="'+p+'" alt="img"></p><h2 id="docker工作机制与核心概念" tabindex="-1"><a class="header-anchor" href="#docker工作机制与核心概念"><span>docker工作机制与核心概念</span></a></h2><p>容器（Container） 容器是一个轻量级的、独立的软件包，包含运行应用所需的代码、依赖库、环境变量和配置文件。 容器共享宿主机的操作系统内核，但通过隔离机制（如命名空间、cgroups）实现进程、文件系统、网络等的独立。</p><p>镜像（Image） 镜像是容器的静态模板，定义了容器的初始状态（类似操作系统的安装光盘）。 镜像通过分层存储（Layer）实现高效复用，例如一个基础镜像（如 Ubuntu）可以被多个应用镜像共享。 Dockerfile</p><p>用于定义镜像构建过程的脚本文件，通过逐行指令（如 FROM, COPY, RUN）自动化构建镜像。 <img src="'+t+`" alt="img"></p><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><h3 id="镜像管理" tabindex="-1"><a class="header-anchor" href="#镜像管理"><span>镜像管理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token function">docker</span> pull <span class="token operator">&lt;</span>镜像名<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>标签<span class="token operator">&gt;</span>  <span class="token comment"># 拉取镜像 默认标签为 latest</span></span>
<span class="line"><span class="token function">docker</span> pull nginx:latest</span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> images <span class="token comment"># 查看本地镜像</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> build <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>镜像名<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>标签<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>Dockerfile路径<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># 示例（当前目录的 Dockerfile）</span></span>
<span class="line"><span class="token function">docker</span> build <span class="token parameter variable">-t</span> myapp:v1 <span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> rmi <span class="token operator">&lt;</span>镜像名或ID<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># 强制删除（即使有容器在使用）</span></span>
<span class="line"><span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>镜像名或ID<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> push <span class="token operator">&lt;</span>镜像名<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>标签<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># 示例（需先登录 Docker Hub）</span></span>
<span class="line"><span class="token function">docker</span> push myusername/myapp:v1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器管理" tabindex="-1"><a class="header-anchor" href="#容器管理"><span>容器管理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token operator">&lt;</span>镜像名<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># 常用选项：</span></span>
<span class="line"><span class="token comment"># -d: 后台运行</span></span>
<span class="line"><span class="token comment"># -p &lt;宿主机端口&gt;:&lt;容器端口&gt;: 端口映射</span></span>
<span class="line"><span class="token comment"># -v &lt;宿主机目录&gt;:&lt;容器目录&gt;: 挂载数据卷</span></span>
<span class="line"><span class="token comment"># --name: 指定容器名称</span></span>
<span class="line"><span class="token comment"># -e: 设置环境变量</span></span>
<span class="line"><span class="token comment"># --rm: 容器退出后自动删除</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 示例</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> mynginx nginx</span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> ubuntu:20.04 /bin/bash  <span class="token comment"># 临时进入Ubuntu容器</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span>      <span class="token comment"># 查看运行中的容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>   <span class="token comment"># 查看所有容器（包括已停止的）</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> start <span class="token operator">&lt;</span>容器名或ID<span class="token operator">&gt;</span></span>
<span class="line"><span class="token function">docker</span> stop <span class="token operator">&lt;</span>容器名或ID<span class="token operator">&gt;</span></span>
<span class="line"><span class="token function">docker</span> restart <span class="token operator">&lt;</span>容器名或ID<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>容器名或ID<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>命令<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># 示例（进入容器并启动交互式终端）</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mynginx /bin/bash</span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> logs <span class="token operator">&lt;</span>容器名或ID<span class="token operator">&gt;</span></span>
<span class="line"><span class="token function">docker</span> logs <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>容器名或ID<span class="token operator">&gt;</span>  <span class="token comment"># 实时跟踪日志</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>容器名或ID<span class="token operator">&gt;</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>容器名或ID<span class="token operator">&gt;</span>  <span class="token comment"># 强制删除运行中的容器</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据卷相关" tabindex="-1"><a class="header-anchor" href="#数据卷相关"><span>数据卷相关</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> <span class="token operator">&lt;</span>容器名<span class="token operator">&gt;</span> <span class="token parameter variable">-v</span> <span class="token operator">&lt;</span>宿主机目录<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>容器目录<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>镜像<span class="token operator">&gt;</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> web <span class="token parameter variable">-v</span> /opt/wwwroot:/usr/share/nginx/html nginx:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dockerfile相关" tabindex="-1"><a class="header-anchor" href="#dockerfile相关"><span>dockerFile相关</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="docker-compose相关" tabindex="-1"><a class="header-anchor" href="#docker-compose相关"><span>docker compose相关</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>  <span class="token comment"># 后台启动</span></span>
<span class="line"><span class="token function">docker-compose</span> down</span>
<span class="line"><span class="token function">docker-compose</span> <span class="token function">ps</span></span>
<span class="line"><span class="token function">docker-compose</span> up <span class="token parameter variable">--build</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见示例参考" tabindex="-1"><a class="header-anchor" href="#常见示例参考"><span>常见示例参考</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 运行一个MySQL容器</span></span>
<span class="line"><span class="token function">docker</span> pull mysql:8.3.0</span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span>  /home/mysql/<span class="token punctuation">{</span>conf,data,log<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> run <span class="token punctuation">\\</span></span>
<span class="line"><span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span></span>
<span class="line"><span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span></span>
<span class="line"><span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span></span>
<span class="line"><span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span></span>
<span class="line"><span class="token parameter variable">-v</span> /home/mysql/log:/var/log/mysql <span class="token punctuation">\\</span></span>
<span class="line"><span class="token parameter variable">-v</span> /home/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span></span>
<span class="line"><span class="token parameter variable">-v</span> /home/mysql/conf/my.cnf:/etc/mysql/my.cnf <span class="token punctuation">\\</span></span>
<span class="line"><span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>a12bCd3_W45pUq6 <span class="token punctuation">\\</span></span>
<span class="line"><span class="token parameter variable">-d</span> mysql:8.3.0  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="好文章" tabindex="-1"><a class="header-anchor" href="#好文章"><span>好文章</span></a></h3><p>优质汇总<br> https://docker-practice.github.io/zh-cn/introduction/</p>`,22)]))}const d=n(i,[["render",c],["__file","docker.html.vue"]]),m=JSON.parse('{"path":"/server/docker.html","title":"docker","lang":"zn-ch","frontmatter":{},"headers":[{"level":2,"title":"docker的介绍","slug":"docker的介绍","link":"#docker的介绍","children":[]},{"level":2,"title":"docker工作机制与核心概念","slug":"docker工作机制与核心概念","link":"#docker工作机制与核心概念","children":[]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[{"level":3,"title":"镜像管理","slug":"镜像管理","link":"#镜像管理","children":[]},{"level":3,"title":"容器管理","slug":"容器管理","link":"#容器管理","children":[]},{"level":3,"title":"数据卷相关","slug":"数据卷相关","link":"#数据卷相关","children":[]},{"level":3,"title":"dockerFile相关","slug":"dockerfile相关","link":"#dockerfile相关","children":[]},{"level":3,"title":"docker compose相关","slug":"docker-compose相关","link":"#docker-compose相关","children":[]},{"level":3,"title":"常见示例参考","slug":"常见示例参考","link":"#常见示例参考","children":[]},{"level":3,"title":"好文章","slug":"好文章","link":"#好文章","children":[]}]}],"git":{"updatedTime":1739879248000,"contributors":[{"name":"晴为镜","username":"晴为镜","email":"11961954+hlknb123@user.noreply.gitee.com","commits":1,"url":"https://github.com/晴为镜"}]},"filePathRelative":"server/docker.md"}');export{d as comp,m as data};
