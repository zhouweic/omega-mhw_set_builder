<template>
<el-row :gutter="20">
  <el-col :span="8">
    <equip-selector part="武器" />
    <equip-selector part="头" />
    <equip-selector part="胸" />
    <equip-selector part="手" />
    <equip-selector part="腰" />
    <equip-selector part="腿" />
    <equip-selector part="护石" />    
  </el-col>
  <el-col :span="16">
    <el-form label-position="top">
      <el-form-item label="1级槽">
        <el-select v-model="builder.leg" placeholder="请选择1级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
        <el-select v-model="builder.leg" placeholder="请选择1级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
        <el-select v-model="builder.leg" placeholder="请选择1级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
        <el-select v-model="builder.leg" placeholder="请选择1级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
        <el-select v-model="builder.leg" placeholder="请选择1级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
        <el-select v-model="builder.leg" placeholder="请选择1级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
        <el-select v-model="builder.leg" placeholder="请选择1级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="2级槽">
        <el-select v-model="builder.leg" placeholder="请选择2级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
        <el-select v-model="builder.leg" placeholder="请选择2级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
        <el-select v-model="builder.leg" placeholder="请选择2级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
        <el-select v-model="builder.leg" placeholder="请选择2级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
        <el-select v-model="builder.leg" placeholder="请选择2级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="3级槽">
        <el-select v-model="builder.leg" placeholder="请选择3级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
        <el-select v-model="builder.leg" placeholder="请选择3级槽珠子">
          <el-option label="武器一" value="weapon1"></el-option>
          <el-option label="武器二" value="weapon2"></el-option>
        </el-select>
      </el-form-item>
      <h1>----------TODO: 放置配装信息---------</h1>
    </el-form>
  </el-col>
</el-row>
</template>

<script>
import data from '@/assets/database/mhw-omega.json'
import make_armor from './utils/data-builder'

import EquipSelector from './equip-selector/equip-selector'

export default {
  name: 'StandardSetBuilder',
  components: {
    EquipSelector
  },
  data: function () {
    return {
      builder: { }
    }
  },
  mounted: function() {
    console.log(make_armor(data));
  }
}
</script>

<style lang="stylus">
h1
  color red
</style>
