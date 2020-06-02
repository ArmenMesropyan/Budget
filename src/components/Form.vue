<template>
  <section class="form">
    <h2 class="visually-hidden">Main form</h2>
    <ElCard class="form__card card">
      <ElForm
        ref="form"
        :model="dataForm"
        :rules="rules"
        label-position="top"
        class="form__form main-form"
      >
        <ElFormItem label="Type" prop="type">
          <ElSelect
            v-model="dataForm.type"
            placeholder="Choose type..."
            class="main-form__select"
          >
            <ElOption label="INCOME" value="INCOME"></ElOption>
            <ElOption label="OUTCOME" value="OUTCOME"></ElOption>
          </ElSelect>
        </ElFormItem>

        <ElFormItem label="Comment" prop="comment">
          <ElInput v-model="dataForm.comment"></ElInput>
        </ElFormItem>

        <ElFormItem label="Value" prop="value">
          <ElInput v-model.number="dataForm.value"></ElInput>
        </ElFormItem>
        <ElButton type="primary" @click="onSubmit">Submit</ElButton>
      </ElForm>
    </ElCard>
  </section>
</template>

<script>
const validateValue = (rule, value, callback) => {
  if (value === 0) callback(new Error("Value must be more than 0"));
  callback();
};

export default {
  name: "Form",
  data: () => ({
    dataForm: {
      type: "INCOME",
      comment: "",
      value: 0,
    },
    rules: {
      type: [
        { required: true, message: "Please select type", trigger: "blur" },
      ],
      comment: [
        {
          required: true,
          message: "Please, input some comment!",
          trigger: "change",
        },
      ],
      value: [
        { validator: validateValue, trigger: "change" },
        { required: true, message: "Please, input value", trigger: "change" },
        {
          type: "number",
          message: "Please input only number value",
          trigger: "change",
        },
      ],
    },
  }),
  methods: {
    onSubmit() {
      this.$refs.form.validate((isValid) => {
        if (!isValid) return;

        this.checkType(this.dataForm);

        this.$emit("onFormSubmit", this.dataForm);
        this.resetForm();
      });
    },
    checkType(data) {
      if (data.type === "OUTCOME") data.value = -data.value;
      else data.value = Math.abs(data.value);
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style>
.form label,
.main-form__select {
  width: 100%;
}

.budget-list.income li,
.budget-list.outcome li {
  display: none;
}

.budget-list.all li,
.budget-list.income li.income,
.budget-list.outcome li.outcome {
  display: flex;
}
</style>
