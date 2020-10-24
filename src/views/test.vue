<template>
    <div>
        <dl class="choose-dl" v-for="(value,preindex) in selectArr" :key="preindex">
            <dt class="choose-dt">{{ value.name }}</dt>
            <dd class="choose-dd">
                <!--第二层循环    @click="selectActive 为点击切换active   :class="{ selectActive:index == selectArr[preindex].showItem }" 动态添加class  -->
                <a href="javascript:void (0)" class="choose-item" @click="selectActive(preindex,index)" 
                :class="{ selectActive:index == selectArr[preindex].showItem }"  v-for="(item,index) in value.arrList" 
                :key="index">
                    {{ item.name }}
                </a>
            </dd>
        </dl>
    </div>
</template>
<script>
    export default {
        name: 'testItem',
        data(){
            return{
                selectArr:[
                    {
                        showItem: 0,
                        name: '融资方式',
                        arrList: [
                            { name: '股权' },
                            { name: '债权' }
                        ]
                    },
                    {
                        showItem: 0,
                        name: '所属行业',
                        arrList: [
                            { name: '金融' },
                            { name: '互联网' },
                            { name: '汽车' },
                            { name: '美容' }
                        ]
                    }
                ]
            }
        },
        methods: {
            selectActive(preindex,index){
                console.log(preindex);
                console.log(index);
                this.selectArr[preindex].showItem = index
                console.log(this.selectArr);
            }
        }
}
</script>

<style>
 .choose-dl {
        position: relative;
        margin-bottom: 10px;
        min-height: 26px;
    }

    .choose-dt {
        position: absolute;
        top: 0;
        left: 0;
        font-weight: 700;
        font-size: 14px;
    }

    .choose-dd {
        padding-left: 80px;
    }

    .choose-item {
        /*font-weight: 700;*/
        color: #444;
        margin-right: 20px;
        margin-bottom: 5px;
        display: inline-block;
        font-size: 13px;
    }
    .selectActive{
        font-weight: 700;
        color: #477fd2;
    }

</style>
