My react app displays a list of 15 quarantine baking recipes and allows users to add and remove recipes from 
their favorite section. In total, there are 3 functional filtering categories based on the diet, type and flavor 
of the dessert, as well as 3 sorting features based on prep time, cook time and number of servings. In the favorite 
section, the total time of the user's favorite recipes, including both prep and cook time, is calculated. 

1) Organization of components
    My react app has a total of 6 components, with the main component being App.js and 5 sub-components which are 
TopBar.js, FilteredList.js, DisplayList.js, PastryCard.js and FavoriteSection.js. The components are organized such 
that App calls FilteredList and FavoriteSection; FilteredList calls TopBar and DisplayList; and DisplayList calls PastryCard. 
    
    App.js holds the data for both the original recipe list and the favorite recipe list as states and renders all the 
sub-components by directly calling FilteredList and FavoriteSection. FilteredList takes care of all the filtering and sorting 
functionalities and renders two other sub-components: TopBar and DisplayList. TopBar creates the navigation bar where users will 
be able to select different filtering categories and sorting features whereas DisplayList calls the sub-component PastryCard to 
create individual pastry cards and formulate a card deck. Lastly, the sub-component FavoriteSection handles the addition and removal
of recipes from the favorite and calculates the total time (including both prep and cook time) of the favorite recipes.


2) How data is passed down through components



3) How the user trigger state changes