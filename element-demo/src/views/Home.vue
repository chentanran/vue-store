<template>
  <div class='home'>
    <el-row :gutter='20'>
      <el-col :span='12'>
        <el-tree
          ref="tree"
          :props='props'
          :load='loadNode'
          check-strictly
          node-key='id'
          lazy
          show-checkbox
          @check-change='handleCheckChange'
        >
        </el-tree>
      </el-col>
      <el-col :span='12'>
        <el-card class='box-card'>
          <div slot='header' class='clearfix'>
            <span>卡片名称</span>
            <el-button style='float: right; padding: 3px 0' type='text'>操作按钮</el-button>
          </div>
          <div v-for='o in cardList' :key='o' class='text item'>
            {{ o.name }}
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      props: {
        label: 'name',
        children: 'zones'
      },
      count: 1,
      treeData: [],
      data: [{
        id: '20201102100847640-8A0B-4A102DDC6',
        parentId: '0',
        name: 'test企业'
      }, {
        id: '20200807175740874-1EA4-AA925C712',
        parentId: '0',
        name: '陈毅企业陈毅企业陈毅企业陈毅企业'
      }, {
        id: '20201102100815935-BD7A-8D50EFDCF',
        parentId: '0',
        name: '中国'
      }],
      // 右侧列表数据
      listData: [],
      // 构建tree的数据
      TreeData: [],
      // 卡片数据
      cardList: []
    }
  },
  methods: {
    handleCheckChange (data, checked, indeterminate) {
      this.isNodeChild(data, checked, indeterminate)
      // console.log(data, checked, indeterminate, 'indeterminate')
    },

    // 判断当前点击的节点下面是否有子级
    isNodeChild (data, checked, indeterminate) {
      console.log(data, '复选框勾选的数据')
      this.listData = this.getTreeData(this.TreeData, '0')

      if (checked) {
        this.cardList.push(data)

        console.log(data.id, this.listData)
        console.log(this.traceParentNode(data.parentId, this.listData, '0'), '父节点id')
        console.log(this.traceChildNode(data.id, this.listData), '字节点id')

        // 获取父节点id
        const arrParent = this.traceParentNode(data.parentId, this.listData, '0')
        // 获取字节点id
        const arrChild = this.traceChildNode(data.id, this.listData)

        const arr = [...arrParent, ...arrChild]
        // 如果没有父子节点，直接return
        if (arr.length <= 0) {
          return
        }
        // 对比卡片的数据和当前勾选的复选框的父子id， 如果相同， 就取消选中并移除
        for (let i = 0; i < this.cardList.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            if (this.cardList[i].id === arr[j].id) {
              this.$refs.tree.setChecked(this.cardList[i], false)
              this.cardList.splice(i, 1)
            }
          }
        }
      } else {
        // 当取消选中时, 将当前数据过滤掉
        this.cardList = this.cardList.filter(item => {
          return item.id !== data.id
        })
      }
    },

    loadNode (node, resolve) {
      if (node.level === 0) {
        this.TreeData.push(...this.data)
        return resolve(this.data)
      }
      if (node.level > 3) return resolve([])

      var hasChild
      var ccChild
      var cccChild
      if (node.data.name === 'test企业') {
        hasChild = true
      } else if (node.data.name === '陈毅企业陈毅企业陈毅企业陈毅企业') {
        ccChild = true
      } else if (node.data.name === 'chenyi机构') {
        cccChild = true
      } else {
        hasChild = false
        ccChild = false
        cccChild = false
      }

      setTimeout(() => {
        if (hasChild) {
          this.data = [{
            id: '20200807180632352-3A11-F85CD5238',
            parentId: '20201102100847640-8A0B-4A102DDC6',
            name: 'chenyi机构'
          }, {
            id: '20201102100938234-9231-133682332',
            parentId: '20201102100847640-8A0B-4A102DDC6',
            name: 'test4444'
          }]
        } else if (ccChild) {
          this.data = [{
            id: '20200807180632352-3A11-F85CD52385',
            parentId: '20200807175740874-1EA4-AA925C712',
            name: 'chenyi机构'
          }, {
            id: '20201102100938234-9231-1336823323',
            parentId: '20200807175740874-1EA4-AA925C712',
            name: 'test4444'
          }]
        } else if (cccChild) {
          this.data = [{
            id: '20200807180632352-3A11-F85CD523856',
            parentId: '20200807180632352-3A11-F85CD52385',
            name: '测试11111'
          }, {
            id: '20201102100922647-2EFF-CC96054166',
            parentId: '20200807180632352-3A11-F85CD52385',
            name: '测试22222'
          }]
        } else {
          this.data = []
        }

        this.TreeData.push(...this.data)
        // console.log(this.TreeData, this.data, 'pppp')
        resolve(this.data)
      }, 500)
    },

    // 递归生成tree结构
    getTreeData (data, pid, pidName = 'parentId', idName = 'id', childrenName = 'children', key) {
      const arr = []
      for (let i = 0; i < data.length; i++) {
        if (data[i][pidName] === pid) {
          data[i].key = data[i][idName]
          data[i][childrenName] = this.getTreeData(data, data[i][idName], pidName, idName, childrenName)
          arr.push(data[i])
        }
      }
      return arr
    },

    // 追溯父节点
    traceParentNode (pid, data, rootPid, pidName = 'parentId', idName = 'id', childrenName = 'children') {
      let arr = []
      this.foreachTree(data, childrenName, (node) => {
        if (node[idName] === pid) {
          arr.push(node)
          if (node[pidName] !== rootPid) {
            arr = arr.concat(this.traceParentNode(node[pidName], data, rootPid, pidName, idName))
          }
        }
      })
      return arr
    },

    // 遍历树节点
    foreachTree (data, childrenName = 'children', callback) {
      for (let i = 0; i < data.length; i++) {
        callback(data[i])
        if (data[i][childrenName] && data[i][childrenName].length > 0) {
          this.foreachTree(data[i][childrenName], childrenName, callback)
        }
      }
    },

    // 获取字节点
    traceChildNode (id, data, pidName = 'parentId', idName = 'id', childrenName = 'children') {
      let arr = []
      this.foreachTree(data, childrenName, (node) => {
        if (node[pidName] === id) {
          arr.push(node)
          arr = arr.concat(this.traceChildNode(node[idName], data, pidName, idName, childrenName))
        }
      })
      return arr
    }
  }
}
</script>
