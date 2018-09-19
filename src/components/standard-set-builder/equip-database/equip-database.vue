<template>
<el-tabs type="border-card" value="armors">
  <el-tab-pane label="武器" name="weapons" />
  <el-tab-pane label="防具" name="armors">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-table :data="equipList" height="calc(100vh - 200px)">
          <el-table-column label="装备组" prop="name" width="120px" />
          <el-table-column label="装备部位">
            <template slot-scope="scope">
              <el-button v-if="scope.row.contains.map(item => item.part).indexOf('头') === -1" type="danger" icon="el-icon-close" plain circle disabled />
              <el-button v-else type="primary" plain circle @click="showInfo(scope.row, '头')">头</el-button>
              <el-button v-if="scope.row.contains.map(item => item.part).indexOf('胸') === -1" type="danger" icon="el-icon-close" plain circle disabled />
              <el-button v-else type="primary" plain circle @click="showInfo(scope.row, '胸')">胸</el-button>
              <el-button v-if="scope.row.contains.map(item => item.part).indexOf('手') === -1" type="danger" icon="el-icon-close" plain circle disabled />
              <el-button v-else type="primary" plain circle @click="showInfo(scope.row, '手')">手</el-button>
              <el-button v-if="scope.row.contains.map(item => item.part).indexOf('腰') === -1" type="danger" icon="el-icon-close" plain circle disabled />
              <el-button v-else type="primary" plain circle @click="showInfo(scope.row, '腰')">腰</el-button>
              <el-button v-if="scope.row.contains.map(item => item.part).indexOf('腿') === -1" type="danger" icon="el-icon-close" plain circle disabled />
              <el-button v-else type="primary" plain circle @click="showInfo(scope.row, '腿')">腿</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="16">
        <el-card class="box-card" height="calc(100vh - 200px)">
          <div slot="header" class="clearfix">
            <span>装备详情</span>
          </div>
          <el-form v-if="selectedItem" label-width="80px">
            <el-form-item label="装备组">
              <span v-text="selectedItem.group" />
            </el-form-item>
            <el-form-item label="装备名称">
              <span v-text="selectedItem.name" />
            </el-form-item>
            <el-table :data="[selectedItem]">
              <el-table-column align="center" label="装备耐性">
                <el-table-column align="center" label="火耐性" prop="resist[0]"></el-table-column>
                <el-table-column align="center" label="水耐性" prop="resist[1]"></el-table-column>
                <el-table-column align="center" label="雷耐性" prop="resist[2]"></el-table-column>
                <el-table-column align="center" label="冰耐性" prop="resist[3]"></el-table-column>
                <el-table-column align="center" label="龙耐性" prop="resist[4]"></el-table-column>
              </el-table-column>
            </el-table>
            <el-form-item v-if="selectedItem.slots.map(i => i > 0).indexOf(true) !== -1" label="装备插槽">
              <div v-for="(slot, index) in selectedItem.slots" :key="index">
                <span v-if="slot" v-text="`${index+1}级插槽${slot}个`" />
              </div>
            </el-form-item>
            <el-form-item v-if="selectedItem.skills" label="装备技能">
              <div v-for="(skill, index) in selectedItem.skills" :key="index">
                <span v-text="`${skill.level}级${skill.name}`" />
              </div>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </el-tab-pane>
  <el-tab-pane label="护石" name="stones" />
  <el-tab-pane label="珠子" name="jewels" />
  <el-tab-pane label="套装效果" name="suits" />
  <el-tab-pane label="技能" name="skills" />
</el-tabs>
</template>

<script>
import data from '@/assets/database/mhw-omega.json'
export default {
  name: 'EquipDatabase',
  data: function () {
    return {
      equipList: data.armors,
      selectedItem: undefined
    }
  },
  methods: {
    showInfo: function (row, part) {
      const itemJson = JSON.stringify(row.contains[row.contains.map(item => item.part).indexOf(part)])
      this.selectedItem = JSON.parse(itemJson)
      this.selectedItem.group = row.name
      this.selectedItem.resist = row.resist
      if (row.skill !== undefined) {
        this.selectedItem.skill = row.skill
      }
    }
  }
}
</script>
