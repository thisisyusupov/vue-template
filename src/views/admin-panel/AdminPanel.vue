<template>
  <div>
    <a-row :gutter="24" type="flex">
      <a-col :span="24" class="mb-24">
      </a-col>
    </a-row>
    <a-row :gutter="24" type="flex">

      <a-col :span="24" class="mb-24">

        <CardProjectTable2
            :data="adminList"
            :columns="table2Columns"
            :radios="radios"
            :link="link"
            :header="header"
        ></CardProjectTable2>
      </a-col>
    </a-row>
  </div>
</template>

<script>

// "Projects" table component.
import CardProjectTable2 from '../../components/Cards/CardProjectTable2' ;
import router from "../../router";


const table2Columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    class: 'font-semibold text-muted',
  },
    {
    title: 'ISM',
    dataIndex: 'firstName',
    scopedSlots: { customRender: 'name' },
    width: 200,
  },
  {
    title: 'FAMILYA',
    dataIndex: 'lastName',
    class: 'font-semibold text-muted',
  },
  {
    title: 'TELEFON RAQAMI',
    dataIndex: 'login',
    class: 'font-semibold text-muted text-sm',
  },
  {
    title: 'EMAIL',
    scopedSlots: { customRender: 'email' },
    dataIndex: 'email',
  },
  {
    title: 'ROLE',
    scopedSlots: { customRender: 'role' },
    dataIndex: 'systemRoleName',
  },  {
    title: 'STATUS',
    scopedSlots: { customRender: 'status' },
    dataIndex: 'status',
  },
  {
    title: '',
    scopedSlots: { customRender: 'editBtn' },

  },
];

const radio = [
  {
    title: 'BARCHASI',
    status: 'ALL'
  },  {
    title: 'ACTIVE',
    status: 'ACTIVE'
  },
  {
    title: 'PASSIVE',
    status: 'PASSIVE'
  }
];


export default ({
  components: {
    CardProjectTable2,
  },
  data() {
    return {
      adminList: [],
      radios: radio,
      link: "/admin-panel/add",
      header: "Foydalanuvchilar ro'yxati",
      table2Columns: table2Columns,
    }
  },
  methods: {
    getSellingList() {
      this.$http.get('/admin-list').then(res => {
        this.adminList = res.data
        console.log(res.data)
        console.log(this.adminList)
      })
    }
  },
  created() {
    this.getSellingList()
  }
})

</script>

<style lang="scss">
</style>
