const app = {
    data() {
        return {
            countryCode: '', // Default to empty string
            phoneWithoutCode: '',
            name: '',
            email: '',
            day: '',
            month: '',
            year: '',
            noEmail: false,
            currentPage: 1,
            countries: [], // To store the fetched country data
        };
    },
    computed: {
        phoneInput() {
            return this.countryCode + this.phoneWithoutCode;
        },
        birthday() {
            return `${this.day}/${this.month}/${this.year}`;
        }
    },
    methods: {
        fetchCountryData() {
            // Fetch country data from the API
            fetch('https://restcountries.com/v3.1/all')
                .then(response => response.json())
                .then(countries => {
                    // Store the fetched countries in the data property
                    this.countries = countries;
                });
        },
        checkLoyalty() {
            // You can expand on this condition or fetch from the server to verify
            if (this.phoneInput === '+60173527250') {
                this.currentPage = 2;
            } else {
                alert('Invalid phone number!');
            }
        },
        showPage(pageNum) {
            // Ensure all fields on Page 2 are filled before transitioning to Page 3
            if (pageNum === 3 && (this.name && (this.email || this.noEmail) && this.day && this.month && this.year)) {
                this.currentPage = pageNum;
            } else if (pageNum !== 3) {
                this.currentPage = pageNum;
            } else {
                alert('Please fill in all required fields!');
            }
        }
    },
    mounted() {
        // Fetch country data when the component is mounted
        this.fetchCountryData();
    },
    watch: {
        countries: {
            handler() {
                // When countries data changes, populate the country code dropdown
                this.populateCountryCodeDropdown();
            },
            deep: true,
        },
    },
};

Vue.createApp(app).mount('#app');
