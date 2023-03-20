import { d as defineStore } from "../server.mjs";
const useUsefulStore = defineStore("usefulStore", {
  state: () => ({
    index: 0,
    dataUseful: []
  }),
  actions: {
    setIndex(num) {
      this.index = num;
    },
    async fetchUsefulData() {
      const res = await fetch("http://95.163.236.196:1337/api/useful-medias?populate=*");
      const data = await res.json();
      this.dataUseful = data.data.map((el) => el.attributes);
    }
  },
  getters: {
    getUsefulData() {
      return this.dataUseful;
    }
  }
});
export {
  useUsefulStore as u
};
//# sourceMappingURL=usefulStore.2899b889.js.map
