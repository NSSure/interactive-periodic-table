<template>
    <div class="legend">
        <div class="d-flex flex-row p-3">
            <div class="col">
                <div class="badge">
                    <div class="badge-swatch alkali-metals"></div>
                    <span>Alkali metals</span>
                </div>
            </div>
            <div class="col">
                <div class="badge">
                    <div class="badge-swatch alkaline-earth-metals"></div>
                    <span>Alkaline earth metals</span>
                </div>
            </div>
            <div class="col">
                <div class="badge">
                    <div class="badge-swatch transition-metals"></div>
                    <span>Transition metals</span>
                </div>
            </div>
            <div class="col">
                <div class="badge">
                    <div class="badge-swatch post-transition-metals"></div>
                    <span>Post transition metals</span>
                </div>
            </div>
            <div class="col">
                <div class="badge">
                    <div class="badge-swatch metalloid"></div>
                    <span>Metalloid</span>
                </div>
            </div>
            <div class="col">
                <div class="badge">
                <div class="badge-swatch polyatomic-nonmetal"></div>
                <span>Polyatomic metal</span>
                </div>
            </div>
            <div class="col">
                <div class="badge">
                <div class="badge-swatch diatomic-nonmetal"></div>
                <span>Diatomic nonmetal</span>
                </div>
            </div>
            <div class="col">
                <div class="badge">
                <div class="badge-swatch noble-gas"></div>
                <span>Noble gas</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "category-legend"
};
</script>

<style scoped>
/* Classification colors */
.alkali-metals {
  background-color: #ebbfd8;
}
.alkaline-earth-metals {
  background-color: #f7e2f7;
}
.transition-metals {
  background-color: #5bc2e7;
}
.post-transition-metals {
  background-color: #90a4ae;
}
.metalloid {
  background-color: #d2b7d6;
}
.polyatomic-nonmetal {
  background-color: #8bc34a;
}
.diatomic-nonmetal {
  background-color: #eab37f;
}
.noble-gas {
  background-color: #eada24;
}
</style>
