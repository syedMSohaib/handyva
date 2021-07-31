<script>
    import { Bar } from "vue-chartjs";
    export default {
        extends: Bar,
        props: [
            'data',
            'label'
        ],
        mounted() {
            this.renderBarChart();
        },
        computed: {
            chartData: function() {
                return this.data;
            }
        },
        methods: {
            renderBarChart(){
                this.renderChart(
                    {
                        labels: [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December"
                        ],
                        datasets: [
                            {
                                label: this.label,
                                backgroundColor: "#f87979",
                                data: this.chartData
                            }
                        ]
                    },
                    { responsive: true, maintainAspectRatio: false }
                );
            }
        },
        watch: {
            data: function() {
                //this._chart.destroy();
                console.log(this.data);
                console.log(this.label);
                this.renderBarChart();
            }
        }
    };

</script>
