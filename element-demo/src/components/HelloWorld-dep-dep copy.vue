<template>
  <div class="hello">
    <div
      class="questionEdit"
      v-if="questionEditShow && form.questionlist.length != 0"
    >
      <el-form label-position="right" label-width="140px" :model="form">
        <el-form-item
          label="题目"
          class="backSubtitle"
          :prop="'questionlist.' + theQuestionlistIndex + '.title'"
          :rules="formRules.questionVerification"
        >
          <el-input
            v-model="form.questionlist[theQuestionlistIndex].title"
            placeholder=""
          ></el-input>
        </el-form-item>
        <el-form-item label="题型" prop="problemType" class="backSubtitle">
          <el-row type="flex">
            <el-col :span="6">
              <template>
                <el-select
                  v-model="form.questionlist[theQuestionlistIndex].problemType"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in problemTypelist"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </template>
            </el-col>
            <el-col :span="6">
              <el-checkbox
                v-model="form.questionlist[theQuestionlistIndex].required"
                >非必选</el-checkbox
              >
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="选项" prop="optionType" class="backSubtitle">
          <template>
            <el-select
              v-model="form.questionlist[theQuestionlistIndex].optionType"
              placeholder="请选择"
            >
              <el-option
                v-for="item in optionTypelist"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
        </el-form-item>
        <el-form-item label="" prop="">
          <draggable
            v-model="form.questionlist[theQuestionlistIndex].optionsList"
            :options="{ animation: 30 }"
            @end="
              dragEnd(
                $event,
                form.questionlist[theQuestionlistIndex].optionsList
              )
            "
          >
            <div
              v-for="(item, key) in form.questionlist[theQuestionlistIndex]
                .optionsList"
              :key="key"
              :index="key"
            >
              <el-form-item
                label=""
                :rules="formRules.optionsVerification"
                :prop="
                  'questionlist.' +
                  theQuestionlistIndex +
                  '.optionsList.' +
                  key +
                  '.options'
                "
              >
                <el-row type="flex" style="margin: 10px 0">
                  <el-col :span="0.5">
                    <img class="dragImg1" src="./imgs/drag.png" alt="" />
                  </el-col>
                  <el-col :span="12" style="margin-right: 20px">
                    <el-input
                      v-model="item.options"
                      placeholder=""
                      @click="editOption(item, key)"
                    ></el-input>
                  </el-col>
                  <el-col :span="3">
                    <el-button
                      style="width: 80px"
                      type="danger"
                      @click="deleteOption(item, key)"
                      :disabled="
                        form.questionlist[theQuestionlistIndex].optionsList
                          .length <= 2
                      "
                    >
                      删除
                    </el-button>
                  </el-col>
                </el-row>
              </el-form-item>
            </div>
          </draggable>
        </el-form-item>
        <el-form-item label="" prop="optionsList">
          <el-button type="primary" @click="addOption">+添加选项</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      formData: {
        conditions: {
          userAttributeCondition: {
            orCriteria: [
              {
                andCriteria: [
                  {
                    attribute1: "name",
                    formula: "IN",
                    value: "cy1111",
                  },
                ],
              },
              {
                andCriteria: [
                  {
                    attribute1: "mobile",
                    formula: "NOT_EQUALS",
                    value: "15586987517",
                  },
                  {
                    attribute1: "sex",
                    formula: "EQUALS",
                    value: "男",
                  },
                ],
              },
              {
                andCriteria: [
                  {
                    attribute1: "id",
                    formula: "IS_EMPTY",
                    value: "333",
                  },
                  {
                    attribute1: "province",
                    formula: "CONTAINS",
                    value: "上海",
                  },
                  {
                    attribute1: "1111",
                    formula: "IS_EMPTY",
                    value: "tttttt",
                  },
                ],
              },
            ],
          },
        },
      },
      rules: {},
    };
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
