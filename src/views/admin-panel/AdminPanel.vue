<template>
  <div>
    <a-row :gutter="24" type="flex">
      <a-col :span="24" class="mb-24">
      </a-col>
    </a-row>
    <a-row :gutter="24" type="flex">

      <a-col :span="24" class="mb-24">

        <CardProjectTable2
            :data="admin"
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
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
    width: 200,
  },
  {
    title: 'FAMILYA',
    dataIndex: 'family',
    class: 'font-semibold text-muted',
  },
  {
    title: 'TELEFON RAQAMI',
    dataIndex: 'phoneNumber',
    class: 'font-semibold text-muted text-sm',
  },
  {
    title: 'EMAIL',
    scopedSlots: { customRender: 'gender' },
    dataIndex: 'gender',
  },
  {
    title: 'ROLE',
    scopedSlots: { customRender: 'role' },
    dataIndex: 'role',
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
      this.$http.get('/admin').then(res => {
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
