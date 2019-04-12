<template>
    <div class="gitalk-container">
        <div class="wg" style="color: #c3c3c3;">
            <span id="busuanzi_container_page_pv" style="display:none;">被围观 <span id="busuanzi_value_page_pv" style="color: #608fe8;"></span> 人次</span>
            <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
        </div>
        <div id="gitalk-container"></div>
    </div>
</template>
<script>
    export default {
        name: 'comment',
        data() {
            return {};
        },
        mounted() {
            let body = document.querySelector('.gitalk-container');
            let script = document.createElement('script');
            script.src = 'https://unpkg.com/gitalk/dist/gitalk.min.js';
            body.appendChild(script);

            //创建css
            let linkGitalk = document.createElement('link');
            linkGitalk.href = 'https://unpkg.com/gitalk/dist/gitalk.css';
            linkGitalk.rel = 'stylesheet';
            body.appendChild(linkGitalk);


            script.onload = () => {
                const commentConfig = {
                    clientID: 'ec01832826e103daa07b',
                    clientSecret: '8b6977fb29466a3b974842c2e4059cfb8434f0eb',
                    repo: 'blog-comments',
                    owner: 'xiaoymin',
                    // 这里接受一个数组，可以添加多个管理员
                    admin: ['xiaoymin'],
                    // id 用于当前页面的唯一标识，一般来讲 pathname 足够了，

                    // 但是如果你的 pathname 超过 50 个字符，GitHub 将不会成功创建 issue，此情况可以考虑给每个页面生成 hash 值的方法.
                    id: location.pathname,
                    distractionFreeMode: false,
                };
                const gitalk = new Gitalk(commentConfig);
                gitalk.render('gitalk-container');
            };
        },
    };
</script>

作者：YanceyOfficial
链接：https://juejin.im/post/5c9e30fb6fb9a05e1c4cecf6
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。