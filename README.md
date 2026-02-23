# box3-perlin-noise

<blockquote>🏔️ 神奇代码岛（Box3）柏林噪声地形生成函数</blockquote>

<p>一个专为神奇代码岛（Box3）设计的柏林噪声地形生成库，可用于生成随机地形、山脉、丘陵等多种自然地貌。</p>

[![Box3 Arena](https://img.shields.io/badge/%E7%A5%9E%E5%A5%87%E4%BB%A3%E7%A0%81%E5%B2%9B-Arena-blue)](https://dao3.fun/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ 功能特点

<ul>
  <li>🎲 <strong>可重复生成</strong> - 支持随机种子，确保地形可重复生成</li>
  <li>🌊 <strong>平滑地形</strong> - 基于柏林噪声算法，生成自然平滑的地形过渡</li>
  <li>⚙️ <strong>高度可配置</strong> - 15+ 个配置参数，精细控制地形生成效果</li>
  <li>📦 <strong>开箱即用</strong> - 简单集成到现有Box3项目中</li>
  <li>📊 <strong>高度图返回</strong> - 返回生成的高度图数据，便于后续处理</li>
</ul>

## 📦 安装

<p>将 <code>index.js</code> 文件复制到你的Box3项目目录中，然后在代码中引入：</p>

<pre><code>// 方式1：直接复制函数到你的代码中
// 方式2：在项目新增pn.js文件，复制函数至pn.js文件，在index.js中键入require('./pn.js');</code></pre>

## 🚀 快速开始

<pre><code>// 基础使用示例
generatePerlinTerrain(world, {
    seed: 12345,           // 随机种子
    scale: 50.0,           // 噪声频率
    amplitude: 20.0,       // 噪声振幅
    octaves: 4,            // 叠加层数
    baseHeight: 10,        // 基础高度
    surfaceBlock: 'grass', // 地表方块
    subsurfaceBlock: 'dirt' // 地下方块
});</code></pre>

## 📋 参数说明

<h3><code>generatePerlinTerrain(world, options)</code></h3>

<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>参数</th>
    <th>类型</th>
    <th>默认值</th>
    <th>说明</th>
  </tr>
  <tr>
    <td><code>world</code></td>
    <td>Object</td>
    <td>-</td>
    <td>Box3世界对象</td>
  </tr>
  <tr>
    <td><code>options</code></td>
    <td>Object</td>
    <td><code>{}</code></td>
    <td>地形生成配置参数</td>
  </tr>
</table>

<h3>Options 配置参数</h3>

<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>参数</th>
    <th>类型</th>
    <th>默认值</th>
    <th>说明</th>
  </tr>
  <tr>
    <td><code>seed</code></td>
    <td>number</td>
    <td>随机</td>
    <td>随机种子，确保生成可重复的地形</td>
  </tr>
  <tr>
    <td><code>scale</code></td>
    <td>number</td>
    <td>50.0</td>
    <td>噪声频率（缩放比例），值越小地形越平滑</td>
  </tr>
  <tr>
    <td><code>amplitude</code></td>
    <td>number</td>
    <td>20.0</td>
    <td>噪声振幅（高度缩放），控制地形起伏的最大高度</td>
  </tr>
  <tr>
    <td><code>octaves</code></td>
    <td>number</td>
    <td>4</td>
    <td>噪声叠加层数，增加细节复杂度</td>
  </tr>
  <tr>
    <td><code>persistence</code></td>
    <td>number</td>
    <td>0.5</td>
    <td>持续度（振幅衰减系数），控制每层噪声对整体形状的影响衰减速度</td>
  </tr>
  <tr>
    <td><code>lacunarity</code></td>
    <td>number</td>
    <td>2.0</td>
    <td>间隙度（频率倍增系数），控制每层噪声的频率增加速度</td>
  </tr>
  <tr>
    <td><code>baseHeight</code></td>
    <td>number</td>
    <td>10</td>
    <td>基础高度，地形的最低海拔</td>
  </tr>
  <tr>
    <td><code>surfaceBlock</code></td>
    <td>string</td>
    <td>'grass'</td>
    <td>地表方块的ID（如 "snow"、"grass"、"stone" 等）</td>
  </tr>
  <tr>
    <td><code>subsurfaceBlock</code></td>
    <td>string|null</td>
    <td>'dirt'</td>
    <td>地表下方的方块ID（如 "snow"、"grass"、"stone" 等），若为 null 则仅放置地表</td>
  </tr>
  <tr>
    <td><code>originX</code></td>
    <td>number</td>
    <td>0</td>
    <td>生成区域的原点X坐标</td>
  </tr>
  <tr>
    <td><code>originZ</code></td>
    <td>number</td>
    <td>0</td>
    <td>生成区域的原点Z坐标</td>
  </tr>
  <tr>
    <td><code>widthX</code></td>
    <td>number</td>
    <td>128</td>
    <td>在X轴方向生成的地形宽度</td>
  </tr>
  <tr>
    <td><code>widthZ</code></td>
    <td>number</td>
    <td>128</td>
    <td>在Z轴方向生成的地形宽度</td>
  </tr>
  <tr>
    <td><code>maxHeight</code></td>
    <td>number</td>
    <td>127</td>
    <td>在Y轴方向生成的地形宽度</td>
  </tr>
</table>

## 💡 使用示例

<h3>示例1：生成平原地形</h3>

<pre><code>generatePerlinTerrain(world, {
    seed: 1001,
    scale: 80.0,        // 较大的scale值使地形更平缓
    amplitude: 10.0,    // 较小的amplitude使起伏更小
    octaves: 3,
    baseHeight: 15,
    surfaceBlock: 'grass',
    subsurfaceBlock: 'dirt',
    widthX: 64,
    widthZ: 64
});</code></pre>

<h3>示例2：生成山地地形</h3>

<pre><code>generatePerlinTerrain(world, {
    seed: 2024,
    scale: 30.0,        // 较小的scale值使地形更陡峭
    amplitude: 40.0,    // 较大的amplitude使起伏更大
    octaves: 6,         // 更多层数增加细节
    persistence: 0.6,
    baseHeight: 20,
    surfaceBlock: 'stone',
    subsurfaceBlock: 'dirt',
    widthX: 128,
    widthZ: 128
});</code></pre>

<h3>示例3：生成雪地地形</h3>

<pre><code>generatePerlinTerrain(world, {
    seed: 3003,
    scale: 60.0,
    amplitude: 25.0,
    octaves: 4,
    baseHeight: 50,     // 较高的基础高度
    surfaceBlock: 'snow',
    subsurfaceBlock: 'stone',
    originX: -64,       // 从负坐标开始生成
    originZ: -64,
    widthX: 128,
    widthZ: 128
});</code></pre>

<h3>示例4：仅生成地表（无地下方块）</h3>

<pre><code>generatePerlinTerrain(world, {
    seed: 4004,
    scale: 50.0,
    amplitude: 20.0,
    surfaceBlock: 'grass',
    subsurfaceBlock: null,  // 设置为null仅放置地表
    widthX: 64,
    widthZ: 64
});</code></pre>

<h3>示例5：获取高度图数据</h3>

<pre><code>const result = generatePerlinTerrain(world, {
    seed: 5005,
    widthX: 32,
    widthZ: 32
});

// 访问生成的高度图
console.log('高度图:', result.heightMap);
console.log('配置:', result.config);
console.log('生成区域原点:', result.origin);
console.log('生成区域大小:', result.size);

// 遍历高度图
for (let x = 0; x < result.size.x; x++) {
    for (let z = 0; z < result.size.z; z++) {
        const height = result.heightMap[x][z];
        console.log(`位置 (${x}, ${z}) 高度: ${height}`);
    }
}</code></pre>

## ⚙️ 参数调优指南

<h3>地形平滑度</h3>
<ul>
  <li><strong>更平滑</strong>：增大 <code>scale</code>，减少 <code>octaves</code></li>
  <li><strong>更崎岖</strong>：减小 <code>scale</code>，增加 <code>octaves</code></li>
</ul>

<h3>地形起伏</h3>
<ul>
  <li><strong>更平缓</strong>：减小 <code>amplitude</code>，减小 <code>persistence</code></li>
  <li><strong>更陡峭</strong>：增大 <code>amplitude</code>，增大 <code>persistence</code></li>
</ul>

<h3>细节复杂度</h3>
<ul>
  <li><strong>更简单</strong>：减少 <code>octaves</code>（2-3层）</li>
  <li><strong>更复杂</strong>：增加 <code>octaves</code>（5-6层）</li>
</ul>

<h3>常用配置预设</h3>

<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>地形类型</th>
    <th>scale</th>
    <th>amplitude</th>
    <th>octaves</th>
    <th>persistence</th>
  </tr>
  <tr>
    <td>平原</td>
    <td>80-100</td>
    <td>5-10</td>
    <td>2-3</td>
    <td>0.4-0.5</td>
  </tr>
  <tr>
    <td>丘陵</td>
    <td>50-70</td>
    <td>15-25</td>
    <td>3-4</td>
    <td>0.5-0.6</td>
  </tr>
  <tr>
    <td>山地</td>
    <td>20-40</td>
    <td>30-50</td>
    <td>5-6</td>
    <td>0.6-0.7</td>
  </tr>
  <tr>
    <td>高原</td>
    <td>60-80</td>
    <td>20-30</td>
    <td>3-4</td>
    <td>0.5</td>
  </tr>
</table>

## 🔧 工具函数

<p>代码中包含以下辅助工具函数：</p>

<h3><code>lerp(a, b, t)</code></h3>
<p>线性插值函数，用于平滑过渡。</p>

<pre><code>lerp(0, 10, 0.5);  // 返回 5</code></pre>

<h3><code>smoothstep(t)</code></h3>
<p>平滑阶跃函数（5次多项式），用于噪声平滑处理。</p>

<pre><code>smoothstep(0.5);  // 返回 0.5</code></pre>

## ⚠️ 注意事项

<ol>
  <li><strong>性能考虑</strong>：生成较大区域可能需要较长时间造成神岛的卡顿BUG</li>
  <li><strong>高度限制</strong>：确保 <code>baseHeight + amplitude</code> 不超过 <code>maxHeight</code></li>
  <li><strong>种子一致性</strong>：相同种子 + 相同配置 = 相同地形</li>
  <li><strong>坐标范围</strong>：注意世界的坐标边界限制</li>
</ol>

## 📝 更新日志

<h3>v1.0.0</h3>
<ul>
  <li>✨ 初始版本发布</li>
  <li>🎲 支持柏林噪声地形生成</li>
  <li>⚙️ 15+ 可配置参数</li>
  <li>📊 返回高度图数据</li>
</ul>

## 🤝 贡献

<p>欢迎提交 Issue 和 Pull Request！</p>

## 📄 许可证

<p>MIT License</p>

## 🙏 特别感谢

<ul>
  <li><a href="https://zhuanlan.zhihu.com/p/721568930">Perlin noise（柏林噪声）</a></li>
  <li><a href="https://gitee.com/box3lab/box3-product-document">神岛产品手册文档-神岛实验室</a></li>
</ul>

## 🔗 相关链接

<ul>
  <li><a href="https://dao3.fun/">神奇代码岛官网</a></li>
  <li><a href="https://baike.baidu.com/item/%E6%9F%8F%E6%9E%97%E5%99%AA%E5%A3%B0/3366096">柏林噪声百度百科</a></li>
  <li><a href="https://en.wikipedia.org/wiki/Perlin_noise">柏林噪声维基百科</a></li>
</ul>

<hr>

<p align="center"><strong>Made with ❤️ for Box3</strong></p>

<p align="center">如果这个项目对你有帮助，请给个 ⭐ Star</p>


