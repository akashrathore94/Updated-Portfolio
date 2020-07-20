//BUDGET CONTROLLER
var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    
    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome)*100);
        } else{
            this.percentage = -1;
        }
    };
    
    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };
    
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum += cur.value;
        });
        data.total[type] = sum;
    }
    
    
    var data = {
        allItems: { 
            inc: [],
            exp: []
        },
        total: {
            inc: 0,
            exp: 0
        },
        budget: 0,
        percentage: -1
    };
    
    
    return {
        addItem: function(type, des, val){
            var newItem,ID;
            
            //CREATE ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            //CREATE NEWITEM on 'inc' and 'exp' type
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if(type === 'inc'){
                newItem = new Income(ID, des, val)
            }
            
            //Push it into our data structure
            data.allItems[type].push(newItem);
            
            //Return the newItem
            return newItem;
        },
        
        
        deleteItem: function(type, id){
            var ids, index;
            
            //id = 6
            //data.allItems[type][id]; won't work here
            //ids = [1 2 4 6 8];
            //index = 3;
            
            ids = data.allItems[type].map(function(current){
                return current.id;
            });
            
            index = ids.indexOf(id);
            
            if(index !== -1){
                data.allItems[type].splice(index, 1);
            }
        },
        
        
        calulateBudget: function(){
            // calculate total income and expense
            calculateTotal('exp');
            calculateTotal('inc');
            
            //calculate total budget
            data.budget = data.total.inc - data.total.exp;
            
            //calculate the percetage
            if(data.total.inc > 0){
                data.percentage = Math.round((data.total.exp/data.total.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },
        
        
        calculatePercentages: function() {
            
            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.total.inc);
            });
        },
        
        
        getPercentages: function(){
            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            });
            return allPerc;
        },
        
        
        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.total.inc,
                totalExp: data.total.exp,
                percentage: data.percentage
            };
        },
        
    }
    
})();


//UI CONTROLLER
var UIController = (function(){
    
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };
    
    
    var formatNumber = function(num, type){
        var numSplit, int, dec;
        
        num = Math.abs(num);
        num = num.toFixed(2); // gives a string made of number with 2 decimal points
        
        numSplit = num.split('.');
        
        int = numSplit[0];
        dec = numSplit[1];
        
        if(int.length > 3 && int.length < 6){
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        } else if(int.length > 5 && int.length < 8){
            int = int.substr(0, int.length - 5) + ',' + int.substr(int.length - 5, 2) + ',' + int.substr(int.length - 3, 3);
        }
        
        return (type === 'inc' ? '+' : '-') + ' ' + int + '.' + dec;
    };
    
    var nodeListForEach = function(list, callback){
        for(var i = 0; i < list.length; i++){
            callback(list[i], i);
        }
    };
    

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMStrings.inputType).value,       //inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },
        
        
        addListItem: function(obj, type){
            var html, newHtml, element;
            
            //create html string with placeholders text
            if(type === 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp'){
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            
            //replace placeholders with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            
            //update in UI
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);        
            
        },
        
        
        deleteListItems: function(selectorID){
            var el =  document.getElementById(selectorID);           
            el.parentNode.removeChild(el);            
        },
        
        
        clearFields: function(){
            var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue); //Creates a list
            fieldsArr = Array.prototype.slice.call(fields);                                                 //Changes that list to an Array
            fieldsArr.forEach( function(current, index, array){
                current.value = '';                                                                         //Clear both the inputs
            });
            fieldsArr[0].focus();                                                                           //Focus on the description 
        },
        
        
        displayBudget: function(obj) {
            var type;
            
            type = obj.budget > 0 ? 'inc' : 'exp';
                
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget,type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            
            if(obj.percentage > 0){
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = "---";
            }            
        },
        
        
        displayPercentages: function(percentages) {
            
            var fields = document.querySelectorAll(DOMStrings.expensesPercLabel);
            
            nodeListForEach(fields, function(current, index){
                
                if(percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                }else {
                    current.textContent = '---';
                }            
            });
        },
        
        
        displayDate: function(){
            
            var now, month, months, year;
            
            now = new Date();
            
            year = now.getFullYear();
            month = now.getMonth();
            months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            
            document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ' ' + year;
        },
        
        
        changedType: function(){
            
            var fields = document.querySelectorAll(
                DOMStrings.inputType + ',' +
                DOMStrings.inputDescription + ',' +
                DOMStrings.inputValue);
            
            nodeListForEach(fields, function(cur){
                cur.classList.toggle('red-focus');
            });
            
            document.querySelector(DOMStrings.inputBtn).classList.toggle('red'); 
        },
        
        
        getDOMstrings: function() {
            return DOMStrings;
        }
        
    };
    
})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    
    var setupEventListeners =  function(){
        var DOM =UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }   
        });
        
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    }; 
    
    
    var updateBudget = function(){
        //1. CALCULATE THE BUDGET
        budgetCtrl.calulateBudget();
        
        //2. RETURN THE BUDGET
        var budget = budgetCtrl.getBudget();
        
        //3. DISPLAY THE BUDGET IN UI
        UICtrl.displayBudget(budget);        
    }
    
    
    var updatePercentages = function() {
        //1. Calculate the percentages
        budgetCtrl.calculatePercentages();
        
        //2. Read percentages from budget controller
        var percentages = budgetCtrl.getPercentages();
        
        //3. Update the UI with new percentages
        UICtrl.displayPercentages(percentages);
    }
    
    
    var ctrlAddItem = function(){
        var input, newItem;
        //1. Get the field input data
        input = UICtrl.getInput();
        
        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
            //2. ADD THE ITEM FOR BUDGET CONTROLLER
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3. ADD THE ITEM IN UI
            UICtrl.addListItem(newItem, input.type);

            //4. Clear the fields
            UICtrl.clearFields();

            //5. CALCULATE AND UPDATE THE BUDGET
            updateBudget();
            
            //6. Calculate and update the percentages
            updatePercentages();
        }
    }; 
    
    
    var ctrlDeleteItem = function(event){           
        var itemId, type, ID;
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if(itemId) {
            //inc-1
            splitID = itemId.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            
            //1. Delete the item from the data structure
            budgetCtrl.deleteItem(type, ID); 
            
            //2. Delete the item from UI
            UICtrl.deleteListItems(itemId);
            
            //3. Update and show the new budget
            updateBudget();
            
            //4. Calculate and update the percentages
            updatePercentages();
        } 
    };
    
    
    return {
        init: function() {
            console.log('APP STARTED');
            UICtrl.displayDate();
            UICtrl.displayBudget( {
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            });
            setupEventListeners();
        }
    };
    
})(budgetController, UIController);


controller.init();