# omega-mhw_set_builder
MHW配装器

# 开发环境
1. [VS Code](https://aka.ms/win32-x64-user-stable)
2. [Git for Windows](https://github.com/git-for-windows/git/releases/download/v2.19.0.windows.1/Git-2.19.0-64-bit.exe)

# 定义
装备数据库存放装备描述信息，供配装器使用

## 防具
防具数据存放在"armor"数组内，包含以下若干字段
+ 定义：
    * "name": 装备名称
    * "part": <头|手|胸|脚|腿> 装备部位
    * "slots": 插槽数量，【1级，2级，3级】
    * "resist": 属性耐性，【火，水，雷，冰，龙】
    * "skills": 技能列表（没有技能则留空）
        - "name": 技能名称
        - "level": 技能等级
+ 样例:
``` json
{
"armors": [{
    "name": "皮制头饰α",
    "part": "头",
    "slots": [0, 0, 0],
    "resist": [2, 0, 0, 0, 0],
    "skills": [{
        "skill": "饥饿耐性",
        "lv": 2
    }]
}
```