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
    cities: [{ "label": "Alabama", "value": "AL", "type": "City" }, { "label": "Alaska", "value": "AK", "type": "City" }, { "label": "American Samoa", "value": "AS", "type": "City" }, { "label": "Arizona", "value": "AZ", "type": "City" }, { "label": "Arkansas", "value": "AR", "type": "City" }, { "label": "California", "value": "CA", "type": "City" }, { "label": "Colorado", "value": "CO", "type": "City" }, { "label": "Connecticut", "value": "CT", "type": "City" }, { "label": "Delaware", "value": "DE", "type": "City" }, { "label": "District Of Columbia", "value": "DC", "type": "City" }, { "label": "Federated Citys Of Micronesia", "value": "FM", "type": "City" }, { "label": "Florida", "value": "FL", "type": "City" }, { "label": "Georgia", "value": "GA", "type": "City" }, { "label": "Guam", "value": "GU", "type": "City" }, { "label": "Hawaii", "value": "HI", "type": "City" }, { "label": "Idaho", "value": "ID", "type": "City" }, { "label": "Illinois", "value": "IL", "type": "City" }, { "label": "Indiana", "value": "IN", "type": "City" }, { "label": "Iowa", "value": "IA", "type": "City" }, { "label": "Kansas", "value": "KS", "type": "City" }, { "label": "Kentucky", "value": "KY", "type": "City" }, { "label": "Louisiana", "value": "LA", "type": "City" }, { "label": "Maine", "value": "ME", "type": "City" }, { "label": "Marshall Islands", "value": "MH", "type": "City" }, { "label": "Maryland", "value": "MD", "type": "City" }, { "label": "Massachusetts", "value": "MA", "type": "City" }, { "label": "Michigan", "value": "MI", "type": "City" }, { "label": "Minnesota", "value": "MN", "type": "City" }, { "label": "Mississippi", "value": "MS", "type": "City" }, { "label": "Missouri", "value": "MO", "type": "City" }, { "label": "Montana", "value": "MT", "type": "City" }, { "label": "Nebraska", "value": "NE", "type": "City" }, { "label": "Nevada", "value": "NV", "type": "City" }, { "label": "New Hampshire", "value": "NH", "type": "City" }, { "label": "New Jersey", "value": "NJ", "type": "City" }, { "label": "New Mexico", "value": "NM", "type": "City" }, { "label": "New York", "value": "NY", "type": "City" }, { "label": "North Carolina", "value": "NC", "type": "City" }, { "label": "North Dakota", "value": "ND", "type": "City" }, { "label": "Northern Mariana Islands", "value": "MP", "type": "City" }, { "label": "Ohio", "value": "OH", "type": "City" }, { "label": "Oklahoma", "value": "OK", "type": "City" }, { "label": "Oregon", "value": "OR", "type": "City" }, { "label": "Palau", "value": "PW", "type": "City" }, { "label": "Pennsylvania", "value": "PA", "type": "City" }, { "label": "Puerto Rico", "value": "PR", "type": "City" }, { "label": "Rhode Island", "value": "RI", "type": "City" }, { "label": "South Carolina", "value": "SC", "type": "City" }, { "label": "South Dakota", "value": "SD", "type": "City" }, { "label": "Tennessee", "value": "TN", "type": "City" }, { "label": "Texas", "value": "TX", "type": "City" }, { "label": "Utah", "value": "UT", "type": "City" }, { "label": "Vermont", "value": "VT", "type": "City" }, { "label": "Virgin Islands", "value": "VI", "type": "City" }, { "label": "Virginia", "value": "VA", "type": "City" }, { "label": "Washington", "value": "WA", "type": "City" }, { "label": "West Virginia", "value": "WV", "type": "City" }, { "label": "Wisconsin", "value": "WI", "type": "City" }, { "label": "Wyoming", "value": "WY", "type": "City" }],
    selectedCities: [],
    zipcodes: [{ "label": "12345", "value": "12345", "type": "ZIP" }, { "label": "23456", "value": "23456", "type": "ZIP" }],
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
        return this.selectedBrands.concat(this.selectedStates, this.selectedCities, this.selectedZipcodes, this.selectedIndustries);
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