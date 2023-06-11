<!--
	This is the tables page, it uses the dashboard layout in:
	"./layouts/Dashboard.vue" .
 -->

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
        ></CardProjectTable2>
      </a-col>
    </a-row>
  </div>
</template>

<script>

// "Authors" table component.
import CardAuthorTable from '../../components/Cards/CardAuthorTable' ;

// "Projects" table component.
import CardProjectTable2 from '../../components/Cards/CardProjectTable2' ;


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

// "Projects" table list of rows and their properties.
const table2Data = [
  {
    key: '1',
    company: {
      name: 'Spotify Version',
      logo: 'images/logos/logo-spotify.svg',
    },
    status: "working",
    budget: '$14,000',
    completion: 60,
  }
];

export default ({
  components: {
    CardAuthorTable,
    CardProjectTable2,
  },
  data() {
    return {
      sellingList: [],
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
