<template>
  <div>
    <a-row :gutter="24" type="flex">
      <a-col :span="24" class="mb-24">
      </a-col>
    </a-row>
    <a-row :gutter="24" type="flex">

      <a-col :span="24" class="mb-24">

        <CardProjectTable2
            :data="sellingList"
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

const radio = [
  {
    title: 'BARCHASI',
    status: 'ALL'
  },  {
    title: 'NAQD',
    status: '1'
  },
  {
    title: 'NASIYA',
    status: '2'
  },
  {
    title: 'AVANS',
    status: '3'
  }
];

const table2Columns = [
  {
    title: 'LIST NUMBER',
    dataIndex: 'listNumber',
    scopedSlots: { customRender: 'listNumber' },
    width: 200,
  },
  {
    title: 'DATE',
    dataIndex: 'date',
    class: 'font-semibold text-muted',
  },
  {
    title: 'PAYMENT TYPE',
    dataIndex: 'paymentType.name',
    class: 'font-semibold text-muted text-sm',
  },
  {
    title: 'PRODUCT TYPE',
    scopedSlots: { customRender: 'productType' },
    dataIndex: 'productType.name',
  },
  {
    title: 'VALUE',
    scopedSlots: { customRender: 'value' },
    dataIndex: 'value',
  },
  {
    title: '',
    scopedSlots: { customRender: 'editBtn' },
    width: 50,
  },
];


export default ({
  components: {
    CardProjectTable2,
  },
  data() {
    return {
      radios: radio,
      sellingList: [],
      link: "/selling/add",
      header: "Sotilgan mahsulotlar ro'yxati",
      table2Columns: table2Columns,
    }
  },
  methods: {
    getSellingList() {
      this.$http.get('/selling').then(res => {
        this.sellingList = res.data
        console.log(res.data)
        console.log(this.sellingList)
      })
    },
  },
  created() {
    this.getSellingList()
  }
})

</script>

<style lang="scss">
</style>
