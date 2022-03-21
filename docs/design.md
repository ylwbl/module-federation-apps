# module federation watcher 设计文档

## 1.module federation builder

在打包module federation 模块的时候,打包生成额外的json配置文件用以生成静态的文件供读取

## 2.module federation watcher

在项目运行过程中,观测项目中远程加载模块的情况

## 3.module federation viewer

根据watcher和builder的数据,即时生成可视化界面供解读。