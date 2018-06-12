<template>
  <div class="container">
    <div class="docs" v-if="tab === '文档'">
        <h1>生产环境部署</h1>
  <a href="#开启生产环境模式" data-scroll="">
    <h2 id="开启生产环境模式"><a href="#开启生产环境模式" class="headerlink" title="开启生产环境模式"></a>开启生产环境模式</h2>
  </a>
  <p>开发时，Vue 会提供很多警告来帮你解决常见的错误与陷阱。生产时，这些警告语句却没有用，反而会增加你的载荷量。再次，有些警告检查有小的运行时开销，生产环境模式下是可以避免的。</p>
  <a href="#不用打包工具" data-scroll="">
    <h3 id="不用打包工具"><a href="#不用打包工具" class="headerlink" title="不用打包工具"></a>不用打包工具</h3>
  </a>
  <p>如果用 Vue 完整独立版本（直接用 <code>&lt;script&gt;</code> 元素引入 Vue），生产时应该用精简版本（<code>vue.min.js</code>)。请查看
    <a
      href="installation.html#直接-lt-script-gt-引入">安装指导</a>，附有开发与精简版本。</p>
  <a href="#用打包工具" data-scroll="">
    <h3 id="用打包工具"><a href="#用打包工具" class="headerlink" title="用打包工具"></a>用打包工具</h3>
  </a>
  <p>如果用 Webpack 或 Browserify 类似的打包工具时，生产状态会在 Vue 源码中由 <code>process.env.NODE_ENV</code>    决定，默认在开发状态。Webpack 与 Browserify 两个打包工具都提供方法来覆盖此变量并使用生产状态，警告语句也会被精简掉。每一个 <code>vue-cli</code>    模板有预先配置好的打包工具，但了解怎样配置会更好。</p>
  <h4 id="Webpack"><a href="#Webpack" class="headerlink" title="Webpack"></a>Webpack</h4>
  <p>使用 Webpack 的 <a href="http://webpack.github.io/docs/list-of-plugins.html#defineplugin"
      target="_blank" rel="external">DefinePlugin</a> 来指定生产环境，以便在压缩时可以让 UglifyJS 自动删除代码块内的警告语句。例如配置：</p>
  <figure class="highlight js">
    <table>
      <tbody>
        <tr>
          <td class="code">
            <pre><div class="line"><span class="keyword">var</span> webpack = <span class="built_in">require</span>(<span class="string">'webpack'</span>)</div><div class="line"></div><div class="line"><span class="built_in">module</span>.exports = {</div><div class="line">  <span class="comment">// ...</span></div><div class="line">  plugins: [</div><div class="line">    <span class="comment">// ...</span></div><div class="line">    <span class="keyword">new</span> webpack.DefinePlugin({</div><div class="line">      <span class="string">'process.env'</span>: {</div><div class="line">        <span class="attr">NODE_ENV</span>: <span class="string">'"production"'</span></div><div class="line">      }</div><div class="line">    }),</div><div class="line">    <span class="keyword">new</span> webpack.optimize.UglifyJsPlugin({</div><div class="line">      <span class="attr">compress</span>: {</div><div class="line">        <span class="attr">warnings</span>: <span class="literal">false</span></div><div class="line">      }</div><div class="line">    })</div><div class="line">  ]</div><div class="line">}</div></pre>
          </td>
        </tr>
      </tbody>
    </table>
  </figure>
  <h4 id="Browserify"><a href="#Browserify" class="headerlink" title="Browserify"></a>Browserify</h4>
  <ul>
    <li>运行打包命令，设置 <code>NODE_ENV</code> 为 <code>"production"</code>。等于告诉 <code>vueify</code>      避免引入热重载和开发相关代码。</li>
    <li>使用一个全局 <a href="https://github.com/hughsk/envify" target="_blank" rel="external">envify</a>      转换你的 bundle 文件。这可以精简掉包含在 Vue 源码中所有环境变量条件相关代码块内的警告语句。例如：</li>
  </ul>
  <figure class="highlight bash">
    <table>
      <tbody>
        <tr>
          <td class="code">
            <pre><div class="line">NODE_ENV=production browserify -g envify <span class="_">-e</span> main.js | uglifyjs -c -m &gt; build.js</div></pre>
          </td>
        </tr>
      </tbody>
    </table>
  </figure>
  <h4 id="Rollup"><a href="#Rollup" class="headerlink" title="Rollup"></a>Rollup</h4>
  <p>使用 <a href="https://github.com/rollup/rollup-plugin-replace" target="_blank" rel="external">rollup-plugin-replace</a>：</p>
  <figure class="highlight js">
    <table>
      <tbody>
        <tr>
          <td class="code">
            <pre><div class="line"><span class="keyword">const</span> replace = <span class="built_in">require</span>(<span class="string">'rollup-plugin-replace'</span>)</div><div class="line">rollup({</div><div class="line">  <span class="comment">// ...</span></div><div class="line">  plugins: [</div><div class="line">    replace({</div><div class="line">      <span class="string">'process.env.NODE_ENV'</span>: <span class="built_in">JSON</span>.stringify( <span class="string">'production'</span> )</div><div class="line">    })</div><div class="line">  ]</div><div class="line">}).then(...)</div></pre>
          </td>
        </tr>
      </tbody>
    </table>
  </figure>
  <a href="#预编译模板" data-scroll="">
    <h2 id="预编译模板"><a href="#预编译模板" class="headerlink" title="预编译模板"></a>预编译模板</h2>
  </a>
  <p>当你需要处理 DOM 内或 JavaScript 内的模板时，“从模板到渲染函数”的编译就会在线上发生。通常情况下这种处理是足够快的，但是如果你的应用对性能很敏感最好还是回避。</p>
  <p>预编译模板最简单的方式就是使用<a href="./single-file-components.html">单文件组件</a> - 相关的构建设置会自动把预编译处理好，所以构建好的代码已经包含了编译出来的渲染函数而不是原始的模板字符串。</p>
  <p>如果你使用 Webpack，并且喜欢分离 JavaScript 和模板文件，你可以使用 <a href="https://github.com/ktsn/vue-template-loader"
      target="_blank" rel="external">vue-template-loader</a>，它也可以在构建过程中把模板文件转换成为 JavaScript
    渲染函数。</p>
  <a href="#提取组件的-CSS" data-scroll="">
    <h2 id="提取组件的-CSS"><a href="#提取组件的-CSS" class="headerlink" title="提取组件的 CSS"></a>提取组件的 CSS</h2>
  </a>
  <p>当使用单文件组件时，组件内的 CSS 会以 <code>&lt;style&gt;</code> 标签的方式通过 JavaScript 动态注入。这有一些小小的运行时开销，如果你使用服务端渲染，这会导致一段“无样式的内容瞬间
    (fouc)”。横跨所有组件提取 CSS 到同一个文件回避这件事情，这也会更好的压缩和缓存 CSS。</p>
  <p>可查阅相关构建工具文档：</p>
  <ul>
    <li><a href="https://vue-loader.vuejs.org/zh-cn/configurations/extract-css.html"
        target="_blank" rel="external">Webpack + vue-loader</a> (the <code>vue-cli</code>      webpack template has this pre-configured</li>
    <li><a href="https://github.com/vuejs/vueify#css-extraction" target="_blank" rel="external">Browserify + vueify</a></li>
    <li><a href="https://vuejs.github.io/rollup-plugin-vue/#/en/2.3/?id=custom-handler"
        target="_blank" rel="external">Rollup + rollup-plugin-vue</a></li>
  </ul>
  <a href="#跟踪运行时错误" data-scroll="">
    <h2 id="跟踪运行时错误"><a href="#跟踪运行时错误" class="headerlink" title="跟踪运行时错误"></a>跟踪运行时错误</h2>
  </a>
  <p>如果在组件渲染时出现运行错误，错误将会被传递至全局 <code>Vue.config.errorHandler</code> 配置函数（如果已设置）。利用这个钩子函数和错误跟踪服务（如
    <a href="https://sentry.io" target="_blank" rel="external">Sentry</a>，它为 Vue
    提供<a href="https://sentry.io/for/vue/" target="_blank" rel="external">官方集成</a>），可能是个不错的主意。</p>
  <div class="guide-links">
    <span style="float:right"><a href="/v2/guide/single-file-components.html">单文件组件</a> →</span>
  </div>
  <div class="footer">
    发现错误？想参与编辑？
    <a href="https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/deployment.md"
      target="_blank">
        在 Github 上编辑此页！
      </a>
  </div>
    </div>
    <div class="kernel" v-if="tab === '核心业务层介绍'">
      <p>核心业务层，顾名思义，就是本系统最核心的部分。</p>
      <p>为了快捷开发和模块化开发，该层的搭建选择了目前在人工智能开发工作中最受欢迎的编程语言——Python语言。</p>
      <p>
        Python是一种解释型、面向对象、动态数据类型的高级程序设计语言。Python在人工智能和数据科学方面的开
        发生态十分成熟，有很多非常有用的库可以使用，例如著名的NumPy，SciPy等。而在深度学习方面，
        则有Keras、TensorFlow和Theano等库。由于开发环境和个人喜好等原因，该系统选择了使用Keras
        作为模型搭建的前端，并以TensorFlow作为模型的后端。
      </p>
      <p>
        Keras是一个高层神经网络API，Keras由纯Python编写而成并基Tensorflow、Theano以及CNTK后端。
        Keras 为支持快速实验而生，能够把你的想法迅速转换为结果。keras具有高度模块化，极简，和可扩充特性，
        支持CNN和RNN，或二者的结合，而且可以无缝CPU和GPU切换。
      </p>
      <p>
        根据章节3.2中搭建的深度学习模型结构，我们可以轻易地使用Keras来实现。我们的模型结构并不复杂，
        是多个网络层的线性堆叠，因此可以使用序贯（Sequential）模型来搭建。
      </p>
      <p>使用Keras搭建一个模型的过程大致如下。</p>
      <ol>
        <li>用Sequential对象初始化一个模型；</li>
        <li>用模型的add方法将每个层按顺序从头到尾地添加到模型中；</li>
        <li>通过compile方法来对学习过程进行配置，即编译；</li>
        <li>使用fit方法训练模型。</li>
      </ol>
      <p>
        由于Keras的层类很丰富，基本上神经网络里的各种层都能找到对应的类。每个层都是用相应的类初始化的，
        并且每个类会有对应的参数用于设置该层的权值和形状等超参数。最后要将这些层通过模型的add方法添加到模型当中。
      </p>
      <p>
        编译设置，接收三个参数，优化器、损失函数和指标列表。优化器可指定为已预定义的优化器名，
        如rmsprop、adagrad，或一个Optimizer类的对象；损失函数为模型试图最小化的目标函数，它可为预定义的损失函数名，
        如categorical_crossentropy、mse，也可以为一个损失函数。指标可以是一个预定义指标的名字，
        也可以是一个用户定制的函数。
      </p>
      <p>
        训练模型，我们需要将训练数据、数据的标记和训练轮数等作为参数传入模型的fit方法进行训练。
        最后我们将会得到了一个训练好的模型。
      </p>
      <p>为了评估模型，需要使用evaluate方法传入训练数据进行评估。</p>
      <p>
        通过不断地搭建模型、训练和评估后，选择一个效果最好的模型进行保存。
        使用to_json方法得到序列化成为JSON字符串的模型，并保存为JSON格式的数据文件。
        对于训练好的模型的权值，则是使用save_weights方法保存为h5格式的数据文件。
      </p>
      <p>
        最后需要写一个主程序，使得服务器代码可以用以执行得到结果。
        该主进程会先从JSON数据文件读取模型，接着读取训练好的模型参数，
        最后对新的样本数据进行分类并返回分类结果给调用该进程的程序。
      </p>
    </div>
    <div id="server" v-if="tab === '服务器介绍'">
        <p>服务器层使用的开发平台是Node.js，其使用的编程语言是JavaScript。</p>
        <p>
          Node.js是一个基于Chrome V8引擎的JavaScript运行环境。
          Node.js使用了一个事件驱动、非阻塞式I/O的模型，使其轻量又高效。
          Node.js的包管理器npm，是全球最大的开源库生态系统。Node.js的最大优势是借助JavaScript天生的事件驱动机制加V8高性能引擎，
          使编写高性能Web服务轻而易举。因此，本系统选择了Node.js作为服务器端的开发环境。
        </p>
        <p>
          Node.js提供了开发Web服务器的各方面基本功能，只是提供了一个开发平台，但这还不足以形成框架，
          因此还不能做到便捷性、层次性和维护性高的开发。使用基于Node.js平台的下一代开发框架koa是一个不错的选择。
        </p>
        <p>
          koa是致力于成为一个更小、更富有表现力、更健壮的Web框架。使用koa编写web应用，通过组合不同的generator，
          可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。koa不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，
          使得编写Web 应用变得得心应手。
        </p>
        <p>
          koa对网络请求采用了中间件的形式处理，中间件可以介入请求和相应的处理，是一个轻量级的模块，每个中间负责完成某个特定的功能。
          中间件的通过next函数联系，执行next后会将控制权交给下一个中间件，如果没有中间件没有执行next后将会沿路折返，
          将控制权交换给前一个中间件。这种代码执行的方式，如下图所示，这种模型也可以称为“洋葱模型”。
        </p>
        <p class="center">
          <img class="server-img" src="assets/koa-model.png" alt="">
        </p>
        <p class="center">图2.1 koa的执行模型，亦称洋葱模型。</p>
        <p>
          本系统使用了许多中间件来进行辅助，如日志中间件、静态资源响应中间件和路由中间件等。
          其中，有的是自己编写的，有的则是使用开源的库。使用具体中间件及其功能如下表所示。
        </p>
        <p class="center">表4.1 koa中间件列表</p>
        <div class="center">
        <table rules="groups" frame="hsides" cellspacing="0" cellpadding="6" border="2">
          <colgroup>
            <col class="org-left">
            <col class="org-left">
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="org-left">中间件名称</th>
              <th scope="col" class="org-left">功能介绍</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="org-left">loger</td>
              <td class="org-left">在终端打印服务器的请求与响应的日志，以及响应时间。</td>
            </tr>
            <tr>
              <td class="org-left">koa-router</td>
              <td class="org-left">配置服务器的路由，可以响应GET和POST等请求。</td>
            </tr>
            <tr>
              <td class="org-left">koa-static</td>
              <td class="org-left">响应静态资源的去请求，返回响应的静态资源。</td>
            </tr>
            <tr>
              <td class="org-left">koa-multer</td>
              <td class="org-left">处理文件上传的请求，解析请求体中的文件内容。</td>
            </tr>
          </tbody>
        </table>
        </div>
        <p>
          本系统需要的服务器的功能比较简单，只需要对资源的请求进行响应，及接收用户上传的图片资源等信息。
          如果，后续系统的规模变大，将会使用数据库进行信息的存取，而在是简单地使用文件系统进行。
        </p>
        <p>
          具体的实现代码，请参照附录中的代码。
        </p>
      </div>
    <div id="front-end" v-if="tab === '前端介绍'">
      <p>
      交互界面使用的环境是浏览器，为了更好的开发前端页面，不仅使用到了HTML、CSS和JavaScript等技术，还使用了现在流行前端框架Vue.js。
      </p>
      <p>
        Vue.js是一套构建用户界面的渐进式的前端开发框架。与其他重量级框架（如React和Angular）不同的是，Vue 采用自底向上增量开发的设计。
        Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，
        Vue也完全能够为复杂的单页应用程序提供驱动。
      </p>
      <p>
        Vue使用了Virtual DOM技术。该技术使用节点比较算法，减少单个节点的频繁更新，可以使得DOM的操作更加高效。
      </p>
      <p>
        使用Vue就可以开发复用性极高的组件化的视图组件，使得页面整体开发变得有层次感，维护也更加方便。组件系统是 Vue 的另一个重要概念，
        因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。组件系统的抽象类似图4.5。
      </p>
      <p class="center">
          <img class="front-img" src="assets/components.png" alt="">
        </p>
      <p class="center">
        图4.5  组件系统的抽象模型
      </p>
      <p>
        为了更好的使用Vue开发前端页面，我们使用Webpack作为项目打包工具，使用了vue-loader作为预编译模板处理工具，以此来部署了生产环境。
      </p>
      <p>
        我们将前端页面开发成单页面应用，因此使用到了前端路由，而与Vue配套的前端路由库是vue-router。库vue-router是Vue官方的路由管理器，
        和Vue的核心深度集成让构建单页面应用变得易如反掌。主要的页面结构及内容如表4.2所示。
      </p>
      <p>
        本系统没有使用任何前端UI库（如Bootstrap或vue-element等），每个组件都是封装在浏览器原生组件之上的。每个页面都使用了许多通用的组件，
        这些组件有Header、Footer、Intro、Service等。
      </p>
      <p>
        组件间的通信是分为父子组件间通信和全局通信。一般简单的通信都是使用父子组件间通信，则是使用属性传递或函数回调或事件触发等方法。
        复杂的通信使用的是全局通信，则是跨组件通信的方法，使用的是一个全局的Vue队形作为事件监听器和事件发射器，使用中央事件总线进行传递。
      </p>
      <p class="center">
        表4.2  系统页面结构及内容
      </p>
      <div class="center">
      <table rules="groups" frame="hsides" cellspacing="0" cellpadding="6" border="2">
        <colgroup>
        <col class="org-left">
        <col class="org-left">
        </colgroup>
        <thead>
        <tr>
        <th scope="col" class="org-left">页面路由以名称</th>
        <th scope="col" class="org-left">内容介绍</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td class="org-left">“/”，首页</td>
        <td class="org-left">系统的大致介绍，以及少量的功能展示，数据展示等</td>
        </tr>
        <tr>
        <td class="org-left">“/service”，服务功能页</td>
        <td class="org-left">系统的主要服务和功能，如数据上传，数据识别等</td>
        </tr>
        <tr>
        <td class="org-left">“/docs”，文档页</td>
        <td class="org-left">系统的使用说明和系统的结构内容，和更新等</td>
        </tr>
        </tbody>
      </table>
      </div>
      <p>
        而前端与服务器端通信使用的是Ajax异步通信技术，及页面动态的向服务器进行请求。
        系统在Ajax通信中，使用的不是XMLHttpRequest技术，而是较为先进的Fetch API技术。
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'DocTabs',
  props: ['tab'],
})
</script>
<style scoped>
  .container a {
    color: #ffd152;
  }
  .server-img,
  .front-img {
    width: 300px;
    background: #fff;
    border-radius: 3px;
  }
  .front-img {
    width: 600px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
</style>
