const app = {
    data() {
        return {
            countryCode: '+60',
            phoneWithoutCode: '',
            name: '',
            email: '',
            day: '', 
            month: '', 
            year: '',
            noEmail: false,
            currentPage: 1
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
        checkLoyalty() {
            // You can expand on this condition or fetch from server to verify
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
    }
};

Vue.createApp(app).mount('#app');
