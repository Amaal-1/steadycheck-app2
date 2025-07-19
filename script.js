class DrugDatabase {
    constructor() {
        this.drugs = [
            // Antibiotics
            { name: "Amoxicillin", halfLife: 1.3, unit: "hours", category: "Penicillin", tdm: false },
            { name: "Vancomycin", halfLife: 6, unit: "hours", category: "Glycopeptide", tdm: true },
            { name: "Gentamicin", halfLife: 2.5, unit: "hours", category: "Aminoglycoside", tdm: true },
            { name: "Ciprofloxacin", halfLife: 4, unit: "hours", category: "Fluoroquinolone", tdm: false },
            { name: "Levofloxacin", halfLife: 7, unit: "hours", category: "Fluoroquinolone", tdm: false },
            { name: "Moxifloxacin", halfLife: 12, unit: "hours", category: "Fluoroquinolone", tdm: false },
            { name: "Azithromycin", halfLife: 68, unit: "hours", category: "Macrolide", tdm: false },
            { name: "Clarithromycin", halfLife: 5, unit: "hours", category: "Macrolide", tdm: false },
            { name: "Doxycycline", halfLife: 18, unit: "hours", category: "Tetracycline", tdm: false },
            { name: "Clindamycin", halfLife: 3, unit: "hours", category: "Lincosamide", tdm: false },
            { name: "Metronidazole", halfLife: 8, unit: "hours", category: "Nitroimidazole", tdm: false },
            { name: "Linezolid", halfLife: 5.5, unit: "hours", category: "Oxazolidinone", tdm: false },
            { name: "Ceftriaxone", halfLife: 8, unit: "hours", category: "Cephalosporin", tdm: false },
            { name: "Cefepime", halfLife: 2, unit: "hours", category: "Cephalosporin", tdm: false },
            { name: "Piperacillin", halfLife: 1, unit: "hours", category: "Penicillin", tdm: false },
            { name: "Meropenem", halfLife: 1, unit: "hours", category: "Carbapenem", tdm: false },
            
            // Cardiovascular
            { name: "Digoxin", halfLife: 36, unit: "hours", category: "Cardiac Glycoside", tdm: true },
            { name: "Amiodarone", halfLife: 25, unit: "days", category: "Antiarrhythmic", tdm: true },
            { name: "Quinidine", halfLife: 6, unit: "hours", category: "Antiarrhythmic", tdm: true },
            { name: "Procainamide", halfLife: 3, unit: "hours", category: "Antiarrhythmic", tdm: true },
            { name: "Lidocaine", halfLife: 2, unit: "hours", category: "Antiarrhythmic", tdm: true },
            { name: "Metoprolol", halfLife: 4, unit: "hours", category: "Beta-blocker", tdm: false },
            { name: "Propranolol", halfLife: 4, unit: "hours", category: "Beta-blocker", tdm: false },
            { name: "Atenolol", halfLife: 7, unit: "hours", category: "Beta-blocker", tdm: false },
            { name: "Lisinopril", halfLife: 12, unit: "hours", category: "ACE Inhibitor", tdm: false },
            { name: "Losartan", halfLife: 2, unit: "hours", category: "ARB", tdm: false },
            { name: "Amlodipine", halfLife: 35, unit: "hours", category: "Calcium Channel Blocker", tdm: false },
            { name: "Nifedipine", halfLife: 2.5, unit: "hours", category: "Calcium Channel Blocker", tdm: false },
            { name: "Warfarin", halfLife: 40, unit: "hours", category: "Anticoagulant", tdm: true },
            
            // Antiepileptics
            { name: "Phenytoin", halfLife: 24, unit: "hours", category: "Antiepileptic", tdm: true },
            { name: "Carbamazepine", halfLife: 12, unit: "hours", category: "Antiepileptic", tdm: true },
            { name: "Valproic Acid", halfLife: 12, unit: "hours", category: "Antiepileptic", tdm: true },
            { name: "Lamotrigine", halfLife: 25, unit: "hours", category: "Antiepileptic", tdm: true },
            { name: "Levetiracetam", halfLife: 7, unit: "hours", category: "Antiepileptic", tdm: false },
            { name: "Gabapentin", halfLife: 6, unit: "hours", category: "Antiepileptic", tdm: false },
            { name: "Pregabalin", halfLife: 6, unit: "hours", category: "Antiepileptic", tdm: false },
            
            // Immunosuppressants
            { name: "Cyclosporine", halfLife: 8, unit: "hours", category: "Immunosuppressant", tdm: true },
            { name: "Tacrolimus", halfLife: 12, unit: "hours", category: "Immunosuppressant", tdm: true },
            { name: "Sirolimus", halfLife: 62, unit: "hours", category: "Immunosuppressant", tdm: true },
            { name: "Mycophenolate", halfLife: 18, unit: "hours", category: "Immunosuppressant", tdm: true },
            
            // Psychiatrics
            { name: "Lithium", halfLife: 24, unit: "hours", category: "Mood Stabilizer", tdm: true },
            { name: "Sertraline", halfLife: 26, unit: "hours", category: "SSRI", tdm: false },
            { name: "Fluoxetine", halfLife: 4, unit: "days", category: "SSRI", tdm: false },
            { name: "Paroxetine", halfLife: 21, unit: "hours", category: "SSRI", tdm: false },
            { name: "Venlafaxine", halfLife: 5, unit: "hours", category: "SNRI", tdm: false },
            { name: "Amitriptyline", halfLife: 20, unit: "hours", category: "TCA", tdm: true },
            { name: "Nortriptyline", halfLife: 28, unit: "hours", category: "TCA", tdm: true },
            { name: "Haloperidol", halfLife: 20, unit: "hours", category: "Antipsychotic", tdm: false },
            { name: "Risperidone", halfLife: 24, unit: "hours", category: "Antipsychotic", tdm: false },
            { name: "Olanzapine", halfLife: 33, unit: "hours", category: "Antipsychotic", tdm: false },
            
            // Others
            { name: "Theophylline", halfLife: 8, unit: "hours", category: "Bronchodilator", tdm: true },
            { name: "Caffeine", halfLife: 5, unit: "hours", category: "Stimulant", tdm: false },
            { name: "Acetaminophen", halfLife: 2, unit: "hours", category: "Analgesic", tdm: false },
            { name: "Ibuprofen", halfLife: 2.5, unit: "hours", category: "NSAID", tdm: false },
            { name: "Aspirin", halfLife: 0.3, unit: "hours", category: "NSAID", tdm: false },
            { name: "Morphine", halfLife: 3, unit: "hours", category: "Opioid", tdm: false },
            { name: "Fentanyl", halfLife: 4, unit: "hours", category: "Opioid", tdm: false },
            { name: "Methadone", halfLife: 24, unit: "hours", category: "Opioid", tdm: true }
        ];
    }

    searchDrugs(query) {
        if (!query || query.length < 2) return [];
        
        const normalizedQuery = query.toLowerCase().trim();
        return this.drugs
            .filter(drug => drug.name.toLowerCase().includes(normalizedQuery))
            .sort((a, b) => {
                // Prioritize exact matches and starts-with matches
                const aStartsWith = a.name.toLowerCase().startsWith(normalizedQuery);
                const bStartsWith = b.name.toLowerCase().startsWith(normalizedQuery);
                
                if (aStartsWith && !bStartsWith) return -1;
                if (!aStartsWith && bStartsWith) return 1;
                
                return a.name.localeCompare(b.name);
            })
            .slice(0, 8); // Limit to 8 suggestions
    }

    getDrug(name) {
        return this.drugs.find(drug => drug.name.toLowerCase() === name.toLowerCase());
    }
}

class SteadyStateCalculator {
    constructor() {
        this.drugDatabase = new DrugDatabase();
        this.selectedDrug = null;
        this.currentSuggestionIndex = -1;
        this.initializeEventListeners();
        this.hideResults();
    }

    initializeEventListeners() {
        const calculateBtn = document.getElementById('calculateBtn');
        const halfLifeInput = document.getElementById('halfLife');
        const drugNameInput = document.getElementById('drugName');
        
        calculateBtn.addEventListener('click', () => this.calculateSteadyState());
        
        // Allow Enter key to trigger calculation
        halfLifeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.calculateSteadyState();
            }
        });

        // Drug name autocomplete
        drugNameInput.addEventListener('input', (e) => this.handleDrugSearch(e.target.value));
        drugNameInput.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));
        drugNameInput.addEventListener('blur', () => {
            // Delay hiding suggestions to allow for click events
            setTimeout(() => this.hideSuggestions(), 150);
        });
        drugNameInput.addEventListener('focus', (e) => {
            if (e.target.value.length >= 2) {
                this.handleDrugSearch(e.target.value);
            }
        });

        // Clear drug selection when half-life is manually changed
        halfLifeInput.addEventListener('input', () => {
            if (this.selectedDrug) {
                this.clearDrugSelection();
            }
        });
    }

    handleDrugSearch(query) {
        const suggestions = this.drugDatabase.searchDrugs(query);
        this.showSuggestions(suggestions);
        this.currentSuggestionIndex = -1;
    }

    handleKeyboardNavigation(e) {
        const suggestionItems = document.querySelectorAll('.suggestion-item');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.currentSuggestionIndex = Math.min(this.currentSuggestionIndex + 1, suggestionItems.length - 1);
            this.highlightSuggestion();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.currentSuggestionIndex = Math.max(this.currentSuggestionIndex - 1, -1);
            this.highlightSuggestion();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (this.currentSuggestionIndex >= 0 && suggestionItems[this.currentSuggestionIndex]) {
                const drugName = suggestionItems[this.currentSuggestionIndex].querySelector('.drug-name').textContent;
                this.selectDrug(drugName);
            } else {
                this.calculateSteadyState();
            }
        } else if (e.key === 'Escape') {
            this.hideSuggestions();
            this.currentSuggestionIndex = -1;
        }
    }

    highlightSuggestion() {
        const suggestionItems = document.querySelectorAll('.suggestion-item');
        suggestionItems.forEach((item, index) => {
            item.classList.toggle('highlighted', index === this.currentSuggestionIndex);
        });
    }

    showSuggestions(suggestions) {
        const dropdown = document.getElementById('drugSuggestions');
        
        if (suggestions.length === 0) {
            this.hideSuggestions();
            return;
        }

        dropdown.innerHTML = suggestions.map(drug => `
            <div class="suggestion-item" onclick="calculator.selectDrug('${drug.name}')">
                <span class="drug-name">${drug.name}</span>
                <div class="drug-info">
                    <span>${drug.category}${drug.tdm ? ' • TDM Required' : ''}</span>
                    <span class="half-life-info">${drug.halfLife} ${drug.unit}</span>
                </div>
            </div>
        `).join('');

        dropdown.style.display = 'block';
    }

    hideSuggestions() {
        const dropdown = document.getElementById('drugSuggestions');
        dropdown.style.display = 'none';
        this.currentSuggestionIndex = -1;
    }

    selectDrug(drugName) {
        const drug = this.drugDatabase.getDrug(drugName);
        if (!drug) return;

        this.selectedDrug = drug;
        
        // Update input fields
        document.getElementById('drugName').value = drug.name;
        document.getElementById('halfLife').value = drug.halfLife;
        document.getElementById('timeUnit').value = drug.unit;
        
        // Show source information
        this.showHalfLifeSource(drug);
        
        // Hide suggestions
        this.hideSuggestions();
        
        // Remove any existing errors
        this.removeError();
    }

    showHalfLifeSource(drug) {
        const sourceDiv = document.getElementById('halfLifeSource');
        sourceDiv.innerHTML = `
            <strong>📊 Database Value:</strong> ${drug.name} (${drug.category})
            ${drug.tdm ? '<br><strong>Note:</strong> Therapeutic Drug Monitoring recommended' : ''}
        `;
        sourceDiv.classList.add('show');
    }

    clearDrugSelection() {
        this.selectedDrug = null;
        const sourceDiv = document.getElementById('halfLifeSource');
        sourceDiv.classList.remove('show');
    }

    hideResults() {
        const resultsSection = document.getElementById('resultsSection');
        resultsSection.style.display = 'none';
    }

    showResults() {
        const resultsSection = document.getElementById('resultsSection');
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    validateInput() {
        const halfLife = parseFloat(document.getElementById('halfLife').value);
        
        if (!halfLife || halfLife <= 0) {
            this.showError('Please enter a valid half-life value greater than 0');
            return false;
        }
        
        if (halfLife > 1000) {
            this.showError('Half-life value seems unusually high. Please verify.');
            return false;
        }
        
        return true;
    }

    showError(message) {
        let errorDiv = document.getElementById('errorMessage');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = 'errorMessage';
            errorDiv.style.cssText = `
                background: #fed7d7;
                color: #c53030;
                padding: 12px;
                border-radius: 8px;
                margin: 10px 0;
                border-left: 4px solid #e53e3e;
                font-weight: 500;
            `;
            document.querySelector('.calculator-section').appendChild(errorDiv);
        }
        
        errorDiv.textContent = message;
        errorDiv.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
            if (errorDiv) {
                errorDiv.remove();
            }
        }, 5000);
    }

    removeError() {
        const errorDiv = document.getElementById('errorMessage');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    convertToHours(value, unit) {
        switch (unit) {
            case 'minutes':
                return value / 60;
            case 'hours':
                return value;
            case 'days':
                return value * 24;
            default:
                return value;
        }
    }

    formatTime(hours) {
        if (hours < 1) {
            const minutes = Math.round(hours * 60);
            return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
        } else if (hours < 24) {
            const roundedHours = Math.round(hours * 10) / 10;
            return `${roundedHours} hour${roundedHours !== 1 ? 's' : ''}`;
        } else {
            const days = Math.round(hours / 24 * 10) / 10;
            const remainingHours = Math.round(hours % 24);
            if (remainingHours === 0) {
                return `${days} day${days !== 1 ? 's' : ''}`;
            } else {
                return `${Math.floor(days)} day${Math.floor(days) !== 1 ? 's' : ''} ${remainingHours} hour${remainingHours !== 1 ? 's' : ''}`;
            }
        }
    }

    getHalfLivesForSteadyState(percentage) {
        const multipliers = {
            90: 3.3,
            95: 4.3,
            97: 5.0,
            99: 6.6
        };
        return multipliers[percentage] || 5.0;
    }

    getClinicalInfo(drugName, steadyStateHours, percentage, selectedDrug) {
        let info = `At ${percentage}% steady state, the drug concentration will be relatively stable. `;
        
        if (steadyStateHours < 24) {
            info += "Steady state will be reached within the first day of therapy. ";
        } else if (steadyStateHours < 72) {
            info += "Steady state will be reached within 2-3 days of therapy. ";
        } else if (steadyStateHours < 168) {
            info += "Steady state will be reached within the first week of therapy. ";
        } else {
            info += "Steady state will take more than a week to achieve. Consider loading dose if appropriate. ";
        }
        
        if (selectedDrug && selectedDrug.tdm) {
            info += "This drug requires therapeutic drug monitoring (TDM). ";
        }
        
        info += "This is the optimal time for therapeutic drug monitoring and dosage adjustments.";
        
        if (drugName) {
            info = `For ${drugName}: ` + info;
        }
        
        return info;
    }

    calculateSteadyState() {
        this.removeError();
        
        if (!this.validateInput()) {
            return;
        }

        const drugName = document.getElementById('drugName').value.trim();
        const halfLifeValue = parseFloat(document.getElementById('halfLife').value);
        const timeUnit = document.getElementById('timeUnit').value;
        const steadyStateLevel = parseInt(document.getElementById('steadyStateLevel').value);

        const halfLifeHours = this.convertToHours(halfLifeValue, timeUnit);
        const halfLivesMultiplier = this.getHalfLivesForSteadyState(steadyStateLevel);
        const steadyStateHours = halfLifeHours * halfLivesMultiplier;

        // Update results
        document.getElementById('steadyStateTime').textContent = this.formatTime(steadyStateHours);
        document.getElementById('halfLivesCount').textContent = `${halfLivesMultiplier} half-lives`;
        document.getElementById('steadyStatePercent').textContent = `${steadyStateLevel}%`;
        
        // Show selected drug info if available
        const selectedDrugInfo = document.getElementById('selectedDrugInfo');
        const selectedDrugName = document.getElementById('selectedDrugName');
        if (this.selectedDrug) {
            selectedDrugName.textContent = `${this.selectedDrug.name} (${this.selectedDrug.category})`;
            selectedDrugInfo.style.display = 'flex';
        } else {
            selectedDrugInfo.style.display = 'none';
        }
        
        // Update clinical information
        const clinicalInfo = this.getClinicalInfo(drugName, steadyStateHours, steadyStateLevel, this.selectedDrug);
        document.getElementById('clinicalInfo').textContent = clinicalInfo;

        this.showResults();
        
        // Add animation effect
        const resultCard = document.querySelector('.result-card');
        resultCard.style.transform = 'scale(0.95)';
        resultCard.style.opacity = '0.7';
        
        setTimeout(() => {
            resultCard.style.transform = 'scale(1)';
            resultCard.style.opacity = '1';
            resultCard.style.transition = 'all 0.3s ease';
        }, 100);
    }
}

// Initialize the calculator when the page loads
let calculator;
document.addEventListener('DOMContentLoaded', () => {
    calculator = new SteadyStateCalculator();
    
    // Add some additional interactivity
    const inputs = document.querySelectorAll('.input-field');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});

// Service Worker Registration for PWA functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        console.log('SteadyCheck Enhanced loaded successfully with drug database');
    });
}