<template>
    <div>
        <el-steps :active="active" finish-status="success" space='200px' class="steps">
                <el-step title="活动信息"></el-step>
                <el-step title="报名签到"></el-step>
                <el-step title="分享设置"></el-step>
                <el-step title="个性设置"></el-step>
            </el-steps>
        <el-form>
            <el-form-item label="分享标题">
                <br/>
                <el-input></el-input>
            </el-form-item>

             <el-form-item label="分享描述">
                <br/>
                <el-input></el-input>
            </el-form-item>

            <el-form-item label="分享图片">
                <br/>
               <el-upload drag multiple action="https://jsonplaceholder.typicode.com/posts/">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">图片尺寸建议比例1:1,如160*160像素，图片不能大于2M</div>
               </el-upload>
            </el-form-item>
        </el-form>

        <el-button @click="previous">上一页</el-button>
        <el-button type="primary" @click="next">下一页</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active : 2
        }
    },
    methods : {
        previous() {
            this.$router.push("/side/fabu/step2");
        },
        next() {
          this.$router.push("/side/fabu/step4");
        }
    }
}
</script>

<style scoped>

</style>
