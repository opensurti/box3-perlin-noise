function generatePerlinTerrain(world, options = {}) {
    const config = {
        seed: options.seed || Math.floor(Math.random() * 10000),
        scale: options.scale || 50.0,
        amplitude: options.amplitude || 20.0,
        octaves: options.octaves || 4,
        persistence: options.persistence || 0.5,
        lacunarity: options.lacunarity || 2.0,
        baseHeight: options.baseHeight || 10,
        surfaceBlock: options.surfaceBlock || 'grass',
        subsurfaceBlock: options.subsurfaceBlock || 'dirt',
        originX: options.originX || 0,
        originZ: options.originZ || 0,
        widthX: options.widthX || 128,
        widthZ: options.widthZ || 128,
        maxHeight: options.maxHeight || 127,
        ...options
    };

    // 简易柏林噪声生成器
    function perlinNoise(x, z) {
        // 基于种子的伪随机梯度噪声进行模拟
        const { seed, scale, octaves, persistence, lacunarity, amplitude } = config;
        let total = 0;
        let frequency = 1 / scale;
        let amplitudeCurrent = amplitude;
        let maxValue = 0; 

        for (let i = 0; i < octaves; i++) {
            // 计算当前八度的噪声坐标
            const sampleX = (x + seed) * frequency;
            const sampleZ = (z + seed) * frequency;

            // 模拟基于网格的梯度噪声
            let noiseValue = Math.sin(sampleX) * Math.cos(sampleZ);
            // 添加更多谐波用来模拟分形噪声
            noiseValue += 0.5 * Math.sin(2 * sampleX) * Math.cos(2 * sampleZ);
            noiseValue += 0.25 * Math.sin(4 * sampleX) * Math.cos(4 * sampleZ);

            total += noiseValue * amplitudeCurrent;
            maxValue += amplitudeCurrent;

            // 更新参数
            frequency *= lacunarity;
            amplitudeCurrent *= persistence;
        }

        if (maxValue > 0) {
            total /= maxValue;
        }
        return total; 
    }

    // 生成地形高度图并放置方块
    const heightMap = []; // 存储高度数据供后续使用（可选）

    for (let x = 0; x < config.widthX; x++) {
        heightMap[x] = [];
        for (let z = 0; z < config.widthZ; z++) {
            // 计算世界坐标
            const worldX = x + config.originX;
            const worldZ = z + config.originZ;

            // 获取噪声值并计算该位置的高度
            const noiseValue = perlinNoise(worldX, worldZ);
            // 将噪声值映射到实际高度
            let height = config.baseHeight + Math.floor(noiseValue * config.amplitude);
            // 约束高度在世界限制范围内
            height = Math.max(0, Math.min(height, config.maxHeight));

            // 记录高度（可选）
            heightMap[x][z] = height;

            // 放置地表方块
            const worldY = height;
            if (worldY <= config.maxHeight) {
                if (world.voxels && world.voxels.setVoxel) {
                    world.voxels.setVoxel(worldX, worldY, worldZ, config.surfaceBlock);
                } else {
                    // 备用
                    voxels.setVoxel(worldX, worldY, worldZ, config.surfaceBlock);
                }

                // 放置地表下方的方块
                if (config.subsurfaceBlock !== null) {
                    for (let y = worldY - 1; y > worldY - 4 && y >= 0; y--) {
                        if (world.voxels && world.voxels.setVoxel) {
                            world.voxels.setVoxel(worldX, y, worldZ, config.subsurfaceBlock);
                        } else {
                            voxels.setVoxel(worldX, y, worldZ, config.subsurfaceBlock);
                        }
                    }
                }
            }
        }
    }
  
    // 返回生成的高度图或其他有用信息
    return {
        heightMap: heightMap,
        config: config,
        origin: { x: config.originX, z: config.originZ },
        size: { x: config.widthX, z: config.widthZ }
    };
}

// 简单的噪声工具函数示例，使生成更连贯的噪声
function lerp(a, b, t) {
    return a + t * (b - a);
}

//平滑阶跃函数（5次多项式）
function smoothstep(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
}
