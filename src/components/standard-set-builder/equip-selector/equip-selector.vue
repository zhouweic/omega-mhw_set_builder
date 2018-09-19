<template>
<el-card>
    <div slot="header">
        <span v-text="part" />
    </div>
    <el-row>
      <el-col :span="8">
        <el-select v-model="selected" value-key="name" :placeholder="`请选择${part}`" @change="select">
          <el-option v-for="equip in equipList" :key="equip.name" :label="equip.name" :value="equip"></el-option>
        </el-select>
      </el-col>
      <el-col :span="16">
        <ul v-if="selected">
          <p>{{ selected }}</p>
        </ul>
      </el-col>
    </el-row>
</el-card>
</template>

<script>
import makeArmor from '../utils/data-builder'
export default {
  name: 'EquipSelector',
  props: {
    part: {
      type: String,
      default: '装备部位'
    },
    value: {
      type: Object
    }
  },
  data: function () {
    return {
      equipList: [],
      selected: undefined
    }
  },
  mounted: function () {
    const armorList = makeArmor()
    this.$set(this, 'equipList', this.equipList.concat(armorList.filter(armor => {
      return armor.part === this.part
    })))
  },
  methods: {
    select: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>
