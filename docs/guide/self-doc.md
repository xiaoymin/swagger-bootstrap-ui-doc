# 自定义文档

## 效果说明

在`1.9.3`版本中,`swagger-bootstrap-ui`为了满足文档的个性化配置,添加了自定义文档功能

开发者可自定义`md`文件扩展补充整个系统的文档说明

开发者可以在当前项目中添加一个文件夹，文件夹中存放`.md`格式的markdown文件,每个`.md`文档代表一份自定义文档说明

**注意**：自定义文档说明必须以`.md`结尾的文件,其他格式文件会被忽略

例如项目结构如下：

![](/images/1-9-3/construct.png)

每个`.md`文件中，`swagger-bootstrap-ui`允许一级(h1)、二级(h2)、三级(h3)标题作为最终的文档标题

比如`api.md`文档：

```markdown
## 获取用户列表

access_token是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用access_token。开发者需要进行妥善保存。access_token的存储至少要保留512个字符空间。access_token的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的access_token失效

```

最终在`swagger-bootstrap-ui`的界面中,`api.md`的文档标题会是`获取用户列表`

整个文档效果如下：

![](/images/1-9-3/ef.png)

如果没有按照一级(h1)、二级(h2)、三级(h3)来设置标题,默认标题会是文件名称，如图上的`api2.md`

## 如何使用

### Spring Boot环境

在SpringBoot环境中,首先需要在`application.yml`或者`application.properties`配置文件中配置自定义文档目录

如下：

```yml
swagger:
  markdowns: classpath:markdown/*
```

然后在Swagger的配置文件中启用`@EnableSwaggerBootstrapUi`注解

如下代码：

```java
@Configuration
@EnableSwagger2
@EnableSwaggerBootstrapUI
public class SwaggerConfiguration {
    //more...
    
}
```

除了在后端开启注解功能,在`doc.html`中,个性化配置里面还需要设置开启增强功能

![](/images/1-9-3/en-fun.png)

当然,在确保后端增强无误的情况下,你可以直接使用快速访问设置功能来直接启用增强

地址输入：`http://127.0.0.1:8888/doc.html?plus=1`



### Spring MVC环境

在Spring MVC环境中,需要在Spring的XML配置文件中注入`MarkdownFiles`类的实例bean

首先引入swagger-bootstrap-ui的jar包文件
```xml
<dependency>
  <groupId>com.github.xiaoymin</groupId>
  <artifactId>swagger-bootstrap-ui</artifactId>
  <version>1.9.3</version>
</dependency>
```

如下：

```xml
<!--注入自定义文档的bean-->
<bean id="markdownFiles" class="io.swagger.models.MarkdownFiles" init-method="init">
    <property name="basePath" value="classpath:markdown/*"></property>
</bean>
```

其他例如开启增强等操作和Spring Boot环境无异,打开doc.html即可访问看到效果

## demo示例

以上两种不同环境的demo示例可参考[swagger-bootstrap-ui-demo](https://gitee.com/xiaoym/swagger-bootstrap-ui-demo)