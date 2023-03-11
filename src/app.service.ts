import { Injectable } from '@nestjs/common';

interface BlogInfo {
  title: string;
  id: number;
  desc: string;
  auther: string;
  createdTime: string;
  modifyTime: string;
  total: number;
  like: number;
}

interface BlogDetail extends BlogInfo {
  content: string;
}

const blogLists: BlogDetail[] = [
  {
    title: 'Vue3响应式原理',
    id: 1,
    desc: '介绍Vue3响应式的原理与实现',
    auther: 'may',
    createdTime: '2023.03.10',
    modifyTime: '2023.03.10',
    total: 315,
    like: 12,
    content: 'Vue3响应式原理content\n\n介绍Vue3响应式的原理与实现',
  },
  {
    title: 'React性能优化',
    id: 2,
    desc: '介绍工作中常见的React性能优化方法',
    auther: 'may',
    createdTime: '2023.03.10',
    modifyTime: '2023.03.10',
    total: 615,
    like: 16,
    content: 'Vue3响应式原理content\n\n介绍工作中常见的React性能优化方法',
  },
  {
    title: 'VSCode调试指南',
    id: 3,
    desc: '介绍工作中常用的VSCode调试方式和launch常用配置',
    auther: 'may',
    createdTime: '2023.03.11',
    modifyTime: '2023.03.11',
    total: 619,
    like: 6,
    content: 'VSCode调试指南\n\n介绍工作中常用的VSCode调试方式和launch常用配置',
  },
];

@Injectable()
export class AppService {
  getList(): BlogInfo[] {
    return blogLists;
  }

  getBlogDetail(id: number): BlogDetail | object {
    return blogLists.find((info) => info.id === id) || {};
  }
}
