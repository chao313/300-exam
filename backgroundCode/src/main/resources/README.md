# 在线考试系统
http://localhost:8080/300-exam/#/

#### 介绍
```
该项目是一个前后端分离，后端使用 SpringBoot，前端使用 VUE 和 Element-UI 组件库配合完成开发。共有三种角色：管理员、教师、学生；
```

#### 环境需要
```
1.运行环境：最好是java jdk 1.8，我们在这个平台上运行的。其他版本理论上也可以。
2.IDE环境：IDEA，Eclipse,Myeclipse都可以。推荐IDEA;
3.tomcat环境：Tomcat 7.x,8.x,9.x版本均可
4.硬件环境：windows 7/8/10 1G内存以上；或者 Mac OS；
5.是否Maven项目: 是；查看源码目录中是否包含pom.xml；若包含，则为maven项目，否则为非maven项目 
6.数据库：MySql 8.0版本；
```

#### 技术栈
```
1. 后端：SpringBoot
2. 前端：VUE 和 Element-UI 
```

#### 使用说明
```
1. 使用Navicat或者其它工具，在mysql中创建对应名称的数据库，并导入项目的sql文件；
2. 将项目中application.properties配置文件中的数据库配置改为自己的配置
3. 使用IDEA/Eclipse/MyEclipse导入项目，Eclipse/MyEclipse导入时，若为maven项目请选择maven;若为maven项目，导入成功后请执行maven clean;maven install命令，配置tomcat，然后运行；
4. 运行项目，localhost:8080 为后端路径；
5. 管理员账户:9527  密码:123456
教师账号：20081001  密码:123456
学生账号：20154084  密码:123456
```

#### 配合前端项目
```
1.cd到前端源码所在目录，执行 cnpm install
2.然后运行 cnpm run dev 即可
3.运行项目成功后，输入localhost:8088 即可登录；
```