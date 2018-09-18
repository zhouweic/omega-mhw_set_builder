<template>
<el-card>
    <div slot="header">
        <span v-text="part" />
    </div>
    <el-select :placeholder="`请选择${part}`">
        <el-option label="武器一" value="weapon1"></el-option>
        <el-option label="武器二" value="weapon2"></el-option>
    </el-select>
</el-card>
</template>

<script>
export default {
  name: 'EquipSelector',
  props: {
    part: {
      type: String,
      default: '装备部位'
    }
  }
}
</script>
