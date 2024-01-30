<template>
    <div class="padlr">
        <h1>R-Calculator</h1>
        <button @click="addNumber" class="uk-button uk-button-primary">Add</button>
        <button @click="addNewInput" class="uk-button uk-button-secondary"><span
                uk-icon="icon: plus-circle"></span></button>
        <div class="uk-margin">
            <button :class="{ 'uk-button uk-button-primary': addParallel, 'uk-button uk-button-secondary': !addParallel }"
                @click="setAddParallel(true)">
                Parallel
            </button>
            <button :class="{ 'uk-button uk-button-primary': !addParallel, 'uk-button uk-button-secondary': addParallel }"
                @click="setAddParallel(false)">
                Serial
            </button>
        </div>
        <p class="uk-text-lead">Result: {{ result }}</p>

        <div v-for="(input, index) in inputs" :key="index" class="uk-flex uk-flex-middle uk-margin-bottom">
            <input v-model="inputs[index]" @input="updateResult" type="number" class="uk-input"
                placeholder="Enter a number" />
            <button @click="removeInput(index)" class="uk-button uk-button-danger uk-margin-left"><span
                    uk-icon="icon: minus"></span></button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'RCalc',
    data() {
        return {
            numberToAdd: 0,
            result: null,
            inputs: [],
            addParallel: true,
        };
    },
    methods: {
        addNumber() {
            if (this.addParallel) {
                this.result = this.inputs.length > 0 ? 1 / this.inputs.reduce((sum, resistor) => sum + 1 / resistor, 0) : null;
            } else {
                this.result = this.inputs.reduce((sum, resistor) => sum + resistor, 0);
            }
        },
        addNewInput() {
            this.inputs.push(0);
            this.updateResult();
        },
        removeInput(index: number) {
            this.inputs.splice(index, 1);
            this.updateResult();
        },
        setAddParallel(value: boolean) {
            this.addParallel = value;
            this.updateResult();
        },
        updateResult() {
            this.addNumber();
        },
    },
};
</script>

<style scoped>

</style>
