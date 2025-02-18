import{_ as a,c as r,a as s,o as l}from"./app-CqEZDnCU.js";const i="/blog/assets/img-DLl01PQz.png",n="/blog/assets/img_1-Dve9avbb.png",t="/blog/assets/img_3-DrXT2ztH.png",p="/blog/assets/img_4-D11l5GAv.png",c="/blog/assets/img_5-B16AaxYs.png",o="/blog/assets/img_6-CBhu9cWe.png",h={};function g(b,e){return l(),r("div",null,e[0]||(e[0]=[s('<h1 id="微服务常用组件" tabindex="-1"><a class="header-anchor" href="#微服务常用组件"><span>微服务常用组件</span></a></h1><p>暂定2月23日之前完成文档</p><h2 id="微服务介绍" tabindex="-1"><a class="header-anchor" href="#微服务介绍"><span>微服务介绍</span></a></h2><p>微服务架构是一种架构模式，它体长将单一的应用程序划分成一组小的服务，每个服务运行在其独立的自己的进程内，服务之间互相协调，采用轻量级的通信机制(HTTP)互相沟通。各个服务能够被独立的部署到生产环境中，应尽量避免统一的，集中式的服务管理机制，但可以有一个非常轻量级的集中式管理来协调这些服务。</p><p>从技术层面理解：</p><p>微服务化的核心就是将传统的一站式应用，根据业务拆分成一个一个的服务，彻底地去耦合，每一个微服务提供单个业务功能的服务，一个服务做一件事情，从技术角度看就是一种小而独立的处理过程，类似进程的概念，能够自行单独启动或销毁，拥有自己独立的数据库。</p><p>常见微服务项目的整体架构 <img src="'+i+'" alt="常见微服务架构图"></p><p>Spring Cloud Alibaba 的介绍 <img src="'+n+'" alt="img.png"></p><h2 id="常见faq" tabindex="-1"><a class="header-anchor" href="#常见faq"><span>常见FAQ</span></a></h2><p>1.Spring Cloud Alibaba 和 Spring Cloud、Spring Cloud Netflix 的区别在哪？</p><p>Spring Cloud：Spring 官方提供的分布式应用开发的一套共用模式，也可以理解成一套微服务开发的统一的抽象编程模型。<br> Spring Cloud Netflix：基于 Spring Cloud 编程模型实现的微服务框架，是最早期的微服务框架。近年来，Netflix 宣布大多数组件停止维护。<br> Spring Cloud Alibaba：Alibaba 提供的基于 Spring Cloud 编程模型实现的微服务框架，其所有组件都来自于阿里巴巴微服务技术，无论是解决方案完整性、技术成熟度、社区还是文档资料等都对国内开发者非常友好。</p><h2 id="常用组件和原理介绍" tabindex="-1"><a class="header-anchor" href="#常用组件和原理介绍"><span>常用组件和原理介绍</span></a></h2><p>本片文章会从根据SpringCloudAlibaba的服务入手，讲讲各个生态的常用组件<br> 官方地址 https://sca.aliyun.com/docs/2023/overview/what-is-sca</p><p>组件可以分为 7种 着重讲的</p><ul><li>注册配置中心</li><li>限流降级</li></ul><p>省略讲的</p><ul><li>分布式定时任务</li></ul><p>不讲/分到别的模块讲的</p><ul><li>分布式消息 mq相关 (单独开一个模块讲)</li><li>异构服务 (短时间没什么用，除了大厂一般用不到)</li><li>静态编译 (了解即可)</li></ul><h2 id="注册配置中心" tabindex="-1"><a class="header-anchor" href="#注册配置中心"><span>注册配置中心</span></a></h2><h3 id="注册配置中心的作用" tabindex="-1"><a class="header-anchor" href="#注册配置中心的作用"><span>注册配置中心的作用</span></a></h3><p>微服务的架构的核心思想是将系统拆分成多个独立的服务，高内聚，低耦合<br> 比如一个微服务有abc三个子服务,分别启动在同一服务器的8081，8082，8083的端口上，而进程之间是不可以相互通信的，如果要访问其他模块的接口一般是采用http协议<br> a项目想调用b项目的接口，发送http请求，访问127.0.0.1:8082/goods/insertOne (调用了商品模块的增加接口)<br> 注册中心就是将服务注册起来，形成一个注册表，让a项目调用的时候不用关系b的ip地址和端口，而是根据应用名来访问 采用了注册中心之后 就可以通过projectGoods/goods/insertOne来实现远程调用了，注册中心会自动找到要访问哪台服务器的，里面也有负载均衡的逻辑实现。</p><p>注册中心要关注的重点是 服务注册与发现 这里主要介绍 nacos1.x和nacos2.x和eruka的异同</p><h3 id="eureka-介绍" tabindex="-1"><a class="header-anchor" href="#eureka-介绍"><span>eureka 介绍</span></a></h3><ul><li>EurekaServer启动的时候注册自己的IP端口服务名称等信息</li><li>EurekaClient作为java客户端，在服务启动后周期性的（默认30s）向EurekaServer发送心跳</li><li>EurekaServer在一定时间（默认90s）没有收到某个服务的心跳就会注销该实例，EurekaClient发送canel命令后也会注销该实例</li><li>EurekaServer之间会相互复制注册表信息</li><li>EurekaClient会缓存注册表信息 (二级缓存),从EurekaServer中拉取(默认30s)</li><li>EurekaServer的自我保护机制，如果15分钟内超过85%的客户端节点都没有正常的心跳，Eureka就会认为客户端与注册中心出现了网络故障，然后将实例保护起来，不让他们立即过期</li><li>EurekaClient发送cancel命令后，EurekaServer会立即注销该实例</li></ul><p>eureka的架构图 <img src="'+t+'" alt="img.png"></p><h3 id="nacos-介绍" tabindex="-1"><a class="header-anchor" href="#nacos-介绍"><span>nacos 介绍</span></a></h3><p>引入概念<br> 临时实例和永久实例</p><p>临时实例(偏业务)<br> 临时实例在注册到注册中心之后仅仅只保存在服务端内部一个缓存中，不会持久化到磁盘<br> 这个服务端内部的缓存在注册中心届一般被称为服务注册表<br> 当服务实例出现异常或者下线之后，就会把这个服务实例从服务注册表中剔除</p><p>永久实例(偏运维)<br> 永久服务实例不仅仅会存在服务注册表中，同时也会被持久化到磁盘文件中<br> 当服务实例出现异常或者下线，Nacos 只会将服务实例的健康状态设置为不健康，并不会对将其从服务注册表中剔除<br> 所以这个服务实例的信息你还是可以从注册中心看到，只不过处于不健康状态</p><p>1.实例的区分异同 在 1.x 版本中，一个服务中可以既有临时实例也有永久实例，服务实例是永久还是临时是由服务实例本身决定的<br> 但是 2.x 版本中，一个服务中的所有实例要么都是临时的要么都是永久的，是由服务决定的，而不是具体的服务实例<br><img src="'+p+'" alt="img.png"></p><p>2.实例的通信协议异同<br> 在nacos1.x中，由http实现，nacos客户端定时往nacos服务端发送消息<br> 在nacos2.x中，由grpc实现，nacos客户端和nacos服务端之间建立长连接，通过长连接进行通信<br> 在nacos2.x中，会将临时实例的信息存储到客户端中的缓存中，重新建立连接注册服务端的时候的redo操作</p><p>3.心跳实现<br> 在 1.x 中，心跳机制实现是通过客户端和服务端各存在的一个定时任务来完成的<br> 在服务注册时，发现是临时实例，客户端会开启一个 5s 执行一次的定时任务<br><img src="'+c+'" alt="img.png"> 在 Nacos 服务端也会开启一个定时任务，默认也是 5s 执行一次，去检查这些服务实例最后一次心跳的时间，也就是客户端最后一次发送 Http 请求的时间<br> 当最后一次心跳时间超过 15s，但没有超过 30s，会把这服务实例标记成不健康<br> 当最后一次心跳超过 30s，直接把服务从服务注册表中剔除<br><img src="'+o+'" alt="img.png"></p><p>在 2.x 中，由于通信协议改成了 gRPC，客户端与服务端保持长连接，所以 2.x 版本之后它是利用这个 gRPC 长连接本身的心跳来保活<br> 如果连接断开，就从注册表中剔除<br> Nacos 服务端也会启动一个定时任务，默认每隔 3s 执行一次，这个任务会去检查超过 20s 没有发送请求数据的连接</p><p>4.健康检查机制(针对永久实例) 1.x和2.x版本实现机制相同，是由服务端向客户端发请求(tcp,http,mysql[通过执行sql来判断是否健康]),一般是tcp</p><p>相关文档参考<br> 1.eureka 底层 推荐网页 https://blog.csdn.net/yizhichengxuyuan/article/details/107539963<br> 2.nacos 底层 推荐网页 https://blog.csdn.net/agonie201218/article/details/135828043</p>',36)]))}const d=a(h,[["render",g],["__file","microservices-components.html.vue"]]),m=JSON.parse('{"path":"/backend/microservices-components.html","title":"微服务常用组件","lang":"zn-ch","frontmatter":{},"headers":[{"level":2,"title":"微服务介绍","slug":"微服务介绍","link":"#微服务介绍","children":[]},{"level":2,"title":"常见FAQ","slug":"常见faq","link":"#常见faq","children":[]},{"level":2,"title":"常用组件和原理介绍","slug":"常用组件和原理介绍","link":"#常用组件和原理介绍","children":[]},{"level":2,"title":"注册配置中心","slug":"注册配置中心","link":"#注册配置中心","children":[{"level":3,"title":"注册配置中心的作用","slug":"注册配置中心的作用","link":"#注册配置中心的作用","children":[]},{"level":3,"title":"eureka 介绍","slug":"eureka-介绍","link":"#eureka-介绍","children":[]},{"level":3,"title":"nacos 介绍","slug":"nacos-介绍","link":"#nacos-介绍","children":[]}]}],"git":{"updatedTime":1739881927000,"contributors":[{"name":"何力凯","username":"何力凯","email":"194671581@qq.com","commits":2,"url":"https://github.com/何力凯"},{"name":"晴为镜","username":"晴为镜","email":"11961954+hlknb123@user.noreply.gitee.com","commits":1,"url":"https://github.com/晴为镜"}]},"filePathRelative":"backend/microservices-components.md"}');export{d as comp,m as data};
