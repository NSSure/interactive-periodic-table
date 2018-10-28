<template>
    <div class="periodic-list">
        <!-- <router-link :to="{ name: 'periodic-table' }" style="text-decoration: none; color: silver; margin: 0 15px;">List</router-link> -->
        <div class="badge shadow-lg bg-dark" style="padding-left: 20px; margin: 30px 15px;">
            <span>Displaying {{elements.length}} element(s)</span>
        </div>
        <div v-for="(element, index) in elements" :key="index" style="background-color: rgba(0.0,0.0,0.0,0.3); margin: 30px 15px;">
            <div style="display: flex; flex-direction: row;">
                <!-- background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%); -->
                <div style="padding: 15px; width: 200px; color: #333333; height: 150px; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-end;" v-bind:style="{background: 'linear-gradient(45deg, ' + element.color + ' 90%, ' + lightenColor(element.color, -20) + ' 30%)'}">
                    <h4>{{element.symbol}}</h4>
                    <span>{{element.name}}</span>
                </div>
                <div class="breakdown d-flex flex-column justify-content-center" style="width: 100%;">
                    <div class="row">
                        <div class="col-lg-2">
                            <strong>Category</strong>
                        </div>
                        <div class="col-lg-2">
                            <strong>Atomic Mass</strong>
                        </div>
                        <div class="col-lg-2">
                            <strong>Boil</strong>
                        </div>
                        <div class="col-lg-2">
                            <strong>Melt</strong>
                        </div>
                        <div class="col-lg-2">
                            <strong>Density</strong>
                        </div>
                        <div class="col-lg-2">
                            <strong>Phase</strong>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-2">
                            {{element.category}}
                        </div>
                        <div class="col-lg-2">
                            {{element.atomic_mass}}
                        </div>
                        <div class="col-lg-2">
                            {{element.boil}}
                        </div>
                        <div class="col-lg-2">
                            {{element.melt}}
                        </div>
                        <div class="col-lg-2">
                            {{element.density}}
                        </div>
                        <div class="col-lg-2">
                            {{element.phase}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import elementsJson from "../elements.json";

export default {
  name: "periodic-list",
  data() {
    return {
      elements: elementsJson
    };
  },
  methods: {
      lightenColor(col, amt) {
        if (!col) {
            return;
        }

        var usePound = false;
  
        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }
    
        var num = parseInt(col,16);
    
        var r = (num >> 16) + amt;
    
        if (r > 255) r = 255;
        else if  (r < 0) r = 0;
    
        var b = ((num >> 8) & 0x00FF) + amt;
    
        if (b > 255) b = 255;
        else if  (b < 0) b = 0;
    
        var g = (num & 0x0000FF) + amt;
    
        if (g > 255) g = 255;
        else if (g < 0) g = 0;
    
        return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
    }
  }
};
</script>

<style scoped>
.periodic-list {
  font-size: 24px;
}

.breakdown:hover {
  background-color: rgba(0.1, 0.1, 0.1, 0.2);
  transition: all 1s ease;
}
</style>
