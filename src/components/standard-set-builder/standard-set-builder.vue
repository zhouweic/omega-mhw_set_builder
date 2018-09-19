<template>
<el-tabs value="equip-database">
  <el-tab-pane label="mhw-ω-database" name="equip-database">
    <equip-database />
  </el-tab-pane>
  <el-tab-pane label="基本配装" name="standard-builder">
    <el-row :gutter="20">
      <el-col :span="8">
        <equip-selector part="武器" />
        <equip-selector v-model="builder.head" part="头" />
        <equip-selector v-model="builder.chest" part="胸" />
        <equip-selector v-model="builder.hand" part="手" />
        <equip-selector v-model="builder.waist" part="腰" />
        <equip-selector v-model="builder.leg" part="腿" />
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
  </el-tab-pane>
</el-tabs>
</template>

<script>
import EquipDatabase from './equip-database/equip-database'
import EquipSelector from './equip-selector/equip-selector'

export default {
  name: 'StandardSetBuilder',
  components: {
    EquipDatabase,
    EquipSelector
  },
  data: function () {
    return {
      builder: { }
    }
  }
}
</script>
