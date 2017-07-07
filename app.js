Vue.component('v-select', VueSelect.VueSelect);
var vm = new Vue({
el: "#app",
data:{
    tagsExpanded:false,
    tagsOverflow:false,
    //selected: null,
    brands: [{ "label": "Elkyway", "value": "Elkyway", "type": "Brand" }, { "label": "Halsey Swift", "value": "Halsey Swift", "type": "Brand" }],
    selectedBrands: [],
    states: [{"label": "Alabama","value": "AL","type":"State"},{"label": "Alaska","value": "AK","type":"State"},{"label": "American Samoa","value": "AS","type":"State"},{"label": "Arizona","value": "AZ","type":"State"},{"label": "Arkansas","value": "AR","type":"State"},{"label": "California","value": "CA","type":"State"},{"label": "Colorado","value": "CO","type":"State"},{"label": "Connecticut","value": "CT","type":"State"},{"label": "Delaware","value": "DE","type":"State"},{"label": "District Of Columbia","value": "DC","type":"State"},{"label": "Federated States Of Micronesia","value": "FM","type":"State"},{"label": "Florida","value": "FL","type":"State"},{"label": "Georgia","value": "GA","type":"State"},{"label": "Guam","value": "GU","type":"State"},{"label": "Hawaii","value": "HI","type":"State"},{"label": "Idaho","value": "ID","type":"State"},{"label": "Illinois","value": "IL","type":"State"},{"label": "Indiana","value": "IN","type":"State"},{"label": "Iowa","value": "IA","type":"State"},{"label": "Kansas","value": "KS","type":"State"},{"label": "Kentucky","value": "KY","type":"State"},{"label": "Louisiana","value": "LA","type":"State"},{"label": "Maine","value": "ME","type":"State"},{"label": "Marshall Islands","value": "MH","type":"State"},{"label": "Maryland","value": "MD","type":"State"},{"label": "Massachusetts","value": "MA","type":"State"},{"label": "Michigan","value": "MI","type":"State"},{"label": "Minnesota","value": "MN","type":"State"},{"label": "Mississippi","value": "MS","type":"State"},{"label": "Missouri","value": "MO","type":"State"},{"label": "Montana","value": "MT","type":"State"},{"label": "Nebraska","value": "NE","type":"State"},{"label": "Nevada","value": "NV","type":"State"},{"label": "New Hampshire","value": "NH","type":"State"},{"label": "New Jersey","value": "NJ","type":"State"},{"label": "New Mexico","value": "NM","type":"State"},{"label": "New York","value": "NY","type":"State"},{"label": "North Carolina","value": "NC","type":"State"},{"label": "North Dakota","value": "ND","type":"State"},{"label": "Northern Mariana Islands","value": "MP","type":"State"},{"label": "Ohio","value": "OH","type":"State"},{"label": "Oklahoma","value": "OK","type":"State"},{"label": "Oregon","value": "OR","type":"State"},{"label": "Palau","value": "PW","type":"State"},{"label": "Pennsylvania","value": "PA","type":"State"},{"label": "Puerto Rico","value": "PR","type":"State"},{"label": "Rhode Island","value": "RI","type":"State"},{"label": "South Carolina","value": "SC","type":"State"},{"label": "South Dakota","value": "SD","type":"State"},{"label": "Tennessee","value": "TN","type":"State"},{"label": "Texas","value": "TX","type":"State"},{"label": "Utah","value": "UT","type":"State"},{"label": "Vermont","value": "VT","type":"State"},{"label": "Virgin Islands","value": "VI","type":"State"},{"label": "Virginia","value": "VA","type":"State"},{"label": "Washington","value": "WA","type":"State"},{"label": "West Virginia","value": "WV","type":"State"},{"label": "Wisconsin","value": "WI","type":"State"},{"label": "Wyoming","value": "WY","type":"State"}],
    selectedStates: [],
    cities: [{ "label": "Albany", "value": "Albany", "type": "City" },{ "label": "Baltimore", "value": "Baltimore", "type": "City" },{ "label": "Cleves", "value": "Cleves", "type": "City" },{ "label": "Lombard", "value": "Lombard", "type": "City" },{ "label": "Seattle", "value": "Seattle", "type": "City" } ],
    selectedCities: [],
    zipcodes: [],
    selectedZipcodes: [],
    industries: [{ "label": "Airport", "value": "Airport", "type": "Industry" }, { "label": "Church", "value": "Church", "type": "Industry" }, { "label": "Daycare Facility", "value": "Daycare Facility", "type": "Industry" }, { "label": "Elder Care Facility", "value": "Elder Care Facility", "type": "Industry" }, { "label": "Fitness Center/Health Care", "value": "Fitness Center/Health Care", "type": "Industry" }, { "label": "Government Building", "value": "Government Building", "type": "Industry" }, { "label": "Healthcare", "value": "Healthcare", "type": "Industry" }, { "label": "Hospitality", "value": "Hospitality", "type": "Industry" }, { "label": "Office Building", "value": "Office Building", "type": "Industry" }, { "label": "Other (specify)", "value": "Other (specify)", "type": "Industry" }, { "label": "Parks and Recreation", "value": "Parks and Recreation", "type": "Industry" }, { "label": "Public Facilities", "value": "Public Facilities", "type": "Industry" }, { "label": "Retail Environment", "value": "Retail Environment", "type": "Industry" }, { "label": "School K-12", "value": "School K-12", "type": "Industry" }, { "label": "Showroom", "value": "Showroom", "type": "Industry" }, { "label": "Tourist Attraction (specify)", "value": "Tourist Attraction (specify)", "type": "Industry" }, { "label": "College/University", "value": "College/University", "type": "Industry" }],
    selectedIndustries: [],
    typesArr:{
        Brand:'selectedBrand',
        State:'selectedStates',
        City: 'selectedCities',
        ZIP: 'selectedZipcodes',
        Industry:'selectedIndustries',
    }
    
},
computed:{
    selected: function () {
        //var d = a.concat(b, c);
        return this.selectedBrands.concat(this.selectedStates, this.selectedCities, this.selectedIndustries);
    },
    viewAllLabel: function () {
        if(this.tagsExpanded){
            return "View less";
        }
        if(this.selected.length){
            return 'View all ' + this.selected.length;
        }
        return 'View all';
    }
},
methods:{
    removeTag:function(tag){
        var str = this.typesArr[tag.type];
        var arr = vm[str];
        var idx = _.findIndex(arr, { 'label': tag.label});
        arr.splice(idx, 1);
    },
    removeZip:function(tag){
        var arr = vm.selectedZipcodes;
        var idx = _.findIndex(arr, function(o) { return o == tag; });
        arr.splice(idx, 1);
    },
    clearFilters:function(){
        this.selectedBrands = [];
        this.selectedStates = [];
        this.selectedCities = [];
        this.selectedZipcodes = [];
        this.selectedIndustries = [];
    },
    vselectChange:function(){
        if(this.$refs.fftags && this.$refs.fftags.clientHeight && this.$refs.fftags.clientHeight > 50){
            this.tagsOverflow = true;
            return;
        }
        this.tagsOverflow = false;
        
    }
}

});