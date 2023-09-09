<template>
  <div class="dashboard">
    <div class="header bg-[#ffbd80] flex items-center justify-between drop-shadow-md">
      <div class="text-3xl font-bold">Stock Data</div>
      <div class="text-sm w-max cursor-pointer" @click="signOut">Sign out</div>
    </div>
    <div class="trading-table">
      <table>
        <thead>
          <tr class="cursor-pointer">
            <th>Code</th>
            <th>Company Name</th>
            <th>Latest Price</th>
            <th>Change</th>
            <th>% Change</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stock in stockData" :key="stock.symbol" class="cursor-pointer">
            <td>{{ stock.symbol }}</td>
            <td>{{ stock.companyName }}</td>
            <td>{{ stock.latestPrice }}</td>
            <td :class="stock.change >= 0 ? 'green-text' : 'red-text'">{{ stock.change }}</td>
            <td :class="stock.changePercent >= 0 ? 'green-text' : 'red-text'"
              >{{ formatNumber(stock.changePercent) }}%</td
            >
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onUnmounted } from "vue";

export default {
  name: "home",
  meta: { isAuthenticated: true },
  middleware: "auth",
  setup() {
    // const config = useRuntimeConfig();
    // const apiKey = config.VUE_APP_API_KEY;

    const fetchStockData = () => {
      const apiKey = "pk_62bb975a23f34126b84f11aa773bf1ca";
      const apiUrl = `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${"aapl,googl,msft,AMZN,FB,NFLX,KO,JPM"}&types=quote&token=${apiKey}`;

      axios
        .get(apiUrl)
        .then((response) => {
          const stockSymbols = Object.keys(response.data);
          stockData.value = stockSymbols.map((symbol) => response.data[symbol].quote);
        })
        .catch((error) => {
          console.error("Error fetching stock data:", error);
        });
    };

    const stockData = ref(null);

    return {
      stockData,
      fetchStockData,
    };
  },
  data() {
    return {
      refreshInterval: null,
    };
  },
  mounted() {
    this.fetchStockData();
    this.refreshInterval = setInterval(this.fetchStockData, 15 * 1000);

    onUnmounted(() => {
      clearInterval(this.refreshInterval);
    });
  },
  methods: {
    signOut() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    formatNumber(value) {
      return value.toFixed(2);
    },
  },
};
</script>

<style lang="scss">
.dashboard {
  .header {
    padding: 12px 48px;
    background: lightgray;
  }
  .trading-table {
    padding: 48px 48px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    font-size: 14px;
  }

  tr:hover {
    transition: 0.3s;
    background: lightblue;
    border: none;
  }

  th {
    background-color: #f2f2f2;
  }

  .green-text {
    color: green;
  }

  .red-text {
    color: red;
  }
}

@media (max-width: 425px) {
  .dashboard {
    .header {
      padding: 12px 8px;
      background: lightgray;
    }
    .trading-table {
      padding: 24px 8px;
    }
  }
}
</style>
